"""
================================================================================
GERADOR DE RECEITAS FUNCIONAIS - SCRIPT PRINCIPAL (MODO CLÁSSICO)
================================================================================

Padrão:
- Modelo de imagem: o REPLICATE_MODEL_DEFAULT do config.py (ex: flux-pro)
- Prompt de imagem: clássico ("Ultra realistic food photography of ...")
  com um reforço mínimo para garantir que TRUFAS/BITES saiam como TRUFAS/BITES.

Pipeline:
1) Gera e parseia receita (gerador_receitas.gerar_receita_parseada)
2) Salva TXT (gerador_receitas.salvar_receita_txt)
3) Gera imagem (gerador_imagens.gerar_imagem)
4) Cria DOCX (diagramador.criar_documento_receita)
5) Converte PDF (diagramador.converter_para_pdf)

Uso:
    python3 main.py
    python3 main.py --briefs meu_arquivo_briefs.py
    python3 main.py --modelo flux-pro
    python3 main.py --sem-imagem
================================================================================
"""

import argparse
from pathlib import Path

from config import (
    exibir_configuracoes,
    validar_configuracoes,
    RECEITAS_TXT_DIR,
    IMAGENS_DIR,
    DOCX_DIR,
    PDF_DIR,
    REPLICATE_MODELS,
    REPLICATE_MODEL_DEFAULT,
)
from utils import (
    log_info,
    log_sucesso,
    log_erro,
    log_aviso,
)
from gerador_receitas import (
    gerar_receita_parseada,
    salvar_receita_txt,
)
from gerador_imagens import (
    gerar_imagem,
    criar_prompt_imagem_classico,
)
from diagramador import (
    criar_documento_receita,
    converter_para_pdf,
    criar_ebook_completo,
)


# ------------------------------------------------------------------------------
# Briefs exemplo: aceita "briefs" OU "briefs_exemplo" no arquivo briefs_exemplo.py
# ------------------------------------------------------------------------------
def carregar_briefs_exemplo() -> list[str]:
    try:
        from briefs_exemplo import briefs  # padrão recomendado: briefs = [...]
        if isinstance(briefs, list) and briefs:
            return briefs
    except Exception:
        pass

    try:
        from briefs_exemplo import briefs_exemplo  # compatibilidade
        if isinstance(briefs_exemplo, list) and briefs_exemplo:
            return briefs_exemplo
    except Exception:
        pass

    return []


def carregar_briefs_de_arquivo(caminho: str) -> list[str]:
    """
    Carrega lista de briefs de um arquivo .py com variável 'briefs' (lista de strings).
    """
    caminho_path = Path(caminho).resolve()
    if not caminho_path.exists():
        raise FileNotFoundError(f"Arquivo não encontrado: {caminho_path}")

    ns = {}
    code = caminho_path.read_text(encoding="utf-8")
    exec(code, ns)

    briefs = ns.get("briefs")
    if not isinstance(briefs, list):
        raise ValueError("O arquivo deve conter uma variável 'briefs' do tipo list.")
    if not all(isinstance(b, str) for b in briefs):
        raise ValueError("Todos os itens em 'briefs' devem ser strings (brief textual).")

    return briefs


def processar_receita_completa(
    brief: str,
    gerar_imagem_flag: bool = True,
    gerar_docx_flag: bool = True,
    gerar_pdf_flag: bool = True,
    modelo_imagem: str = None,
) -> dict:
    """
    Processa uma receita completa: texto+parse -> TXT -> imagem -> DOCX -> PDF
    """
    resultado = {
        "brief": brief,
        "nome": None,
        "txt": None,
        "imagem": None,
        "docx": None,
        "pdf": None,
        "erros": [],
    }

    # -------------------------------------------------------------------------
    # ETAPA 1: gerar + parsear receita
    # -------------------------------------------------------------------------
    try:
        log_info("ETAPA 1: Gerando texto da receita...")
        receita = gerar_receita_parseada(brief)
        if not receita:
            raise RuntimeError("gerar_receita_parseada retornou None")

        resultado["nome"] = receita.nome
        log_sucesso("Receita gerada com sucesso!")
    except Exception as e:
        msg = f"Falha na geração/parsing da receita: {e}"
        log_erro(msg)
        resultado["erros"].append(msg)
        return resultado

    # -------------------------------------------------------------------------
    # ETAPA 1.5: salvar TXT
    # -------------------------------------------------------------------------
    try:
        txt_path = salvar_receita_txt(
            texto=receita.texto_completo,
            nome_receita=receita.nome,
            pasta=RECEITAS_TXT_DIR,
        )
        resultado["txt"] = txt_path
        log_sucesso(f"TXT salvo em: {txt_path}")
    except Exception as e:
        msg = f"Falha ao salvar TXT: {e}"
        log_erro(msg)
        resultado["erros"].append(msg)

    # -------------------------------------------------------------------------
    # ETAPA 2: gerar imagem (MODO CLÁSSICO)
    # -------------------------------------------------------------------------
    if gerar_imagem_flag:
        try:
            log_info("ETAPA 2: Gerando imagem da receita...")

            # Preferência:
            # 1) se o parser trouxe prompt_imagem, usa ele
            # 2) senão, monta prompt clássico a partir do nome
            if getattr(receita, "prompt_imagem", None):
                prompt_imagem = receita.prompt_imagem
            else:
                prompt_imagem = criar_prompt_imagem_classico(
                    descricao=receita.nome,
                    nome_receita=receita.nome,
                )

            model_key = (modelo_imagem or REPLICATE_MODEL_DEFAULT).strip()
            log_info(f"Modelo selecionado: {model_key}")
            log_info(f"Prompt: {prompt_imagem[:160]}...")

            imagem_path = gerar_imagem(
                prompt=prompt_imagem,
                nome_arquivo=receita.slug,
                modelo=model_key,
                pasta_saida=IMAGENS_DIR,
                aspect_ratio="16:9",
            )

            if imagem_path:
                resultado["imagem"] = imagem_path
                log_sucesso(f"Imagem gerada: {imagem_path}")
            else:
                log_aviso("Imagem não gerada (retornou None).")

        except Exception as e:
            msg = f"Falha na geração da imagem: {e}"
            log_erro(msg)
            resultado["erros"].append(msg)

    # -------------------------------------------------------------------------
    # ETAPA 3: DOCX (assinatura correta do diagramador.py)
    # criar_documento_receita(receita=ReceitaParseada, imagem_path=?, nome_arquivo=?, pasta_saida=?)
    # -------------------------------------------------------------------------
    if gerar_docx_flag:
        try:
            log_info("ETAPA 3: Criando documento Word...")

            docx_path = criar_documento_receita(
                receita=receita,
                imagem_path=resultado["imagem"],
                nome_arquivo=receita.slug,
                pasta_saida=DOCX_DIR,
            )

            if docx_path:
                resultado["docx"] = docx_path
                log_sucesso(f"DOCX criado: {docx_path}")
            else:
                raise RuntimeError("criar_documento_receita retornou None")

        except Exception as e:
            msg = f"Falha na criação do DOCX: {e}"
            log_erro(msg)
            resultado["erros"].append(msg)

    # -------------------------------------------------------------------------
    # ETAPA 4: PDF
    # -------------------------------------------------------------------------
    if gerar_pdf_flag and resultado["docx"]:
        try:
            log_info("ETAPA 4: Convertendo para PDF...")

            pdf_path = converter_para_pdf(
                resultado["docx"],
                pasta_saida=PDF_DIR,
            )

            if pdf_path:
                resultado["pdf"] = pdf_path
                log_sucesso(f"PDF criado: {pdf_path}")
            else:
                raise RuntimeError("converter_para_pdf retornou None")

        except Exception as e:
            msg = f"Falha na conversão para PDF: {e}"
            log_erro(msg)
            resultado["erros"].append(msg)

    return resultado


def criar_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Gerador de Receitas Funcionais (modo clássico)",
        formatter_class=argparse.RawTextHelpFormatter,
    )

    parser.add_argument(
        "--briefs",
        type=str,
        help="Arquivo .py com variável 'briefs' (lista de strings)",
    )
    parser.add_argument("--sem-imagem", action="store_true", help="Não gera imagens")
    parser.add_argument("--sem-docx", action="store_true", help="Não gera DOCX")
    parser.add_argument("--sem-pdf", action="store_true", help="Não gera PDF")

    parser.add_argument(
        "--modelo",
        type=str,
        default=REPLICATE_MODEL_DEFAULT,
        choices=sorted(REPLICATE_MODELS.keys()),
        help=f"Modelo de imagem (default: {REPLICATE_MODEL_DEFAULT})",
    )

    parser.add_argument("--ebook", action="store_true", help="Cria e-book consolidado ao final")
    parser.add_argument("--config", action="store_true", help="Exibe configurações e sai")

    return parser


def main():
    parser = criar_parser()
    args = parser.parse_args()

    if args.config:
        exibir_configuracoes()
        return

    if not validar_configuracoes():
        log_aviso("Configurações essenciais não estão OK.")
        if not args.sem_imagem:
            return

    # Carregar briefs
    if args.briefs:
        try:
            briefs = carregar_briefs_de_arquivo(args.briefs)
            log_info(f"Usando {len(briefs)} briefs do arquivo: {args.briefs}")
        except Exception as e:
            log_erro(f"Erro ao carregar briefs: {e}")
            return
    else:
        briefs = carregar_briefs_exemplo()
        log_info(f"Usando {len(briefs)} briefs de exemplo")

    if not briefs:
        log_erro("Nenhum brief encontrado.")
        return

    gerar_imagem_flag = not args.sem_imagem
    gerar_docx_flag = not args.sem_docx
    gerar_pdf_flag = not args.sem_pdf

    resultados = []
    total = len(briefs)

    log_info("\n" + "=" * 70)
    log_info(f"PROCESSAMENTO EM LOTE - {total} RECEITAS")
    log_info("=" * 70)

    for i, brief in enumerate(briefs, start=1):
        log_info(f"\n[{i}/{total}]")
        log_info("\n" + "=" * 60)
        log_info(f"PROCESSANDO BRIEF: {brief.splitlines()[0].strip() if brief else 'Brief sem título'}")
        log_info("=" * 60)

        res = processar_receita_completa(
            brief=brief,
            gerar_imagem_flag=gerar_imagem_flag,
            gerar_docx_flag=gerar_docx_flag,
            gerar_pdf_flag=gerar_pdf_flag,
            modelo_imagem=args.modelo,
        )
        resultados.append(res)

    # Ebook final
    if args.ebook:
        try:
            criar_ebook_completo(resultados)
            log_sucesso("E-book completo criado com sucesso!")
        except Exception as e:
            log_erro(f"Falha ao criar e-book: {e}")


if __name__ == "__main__":
    main()
