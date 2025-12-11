import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, DeclarativeBase

# Pega URL do ambiente, ou usa padrão
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql+asyncpg://gastronomia_user:senha_bem_forte_aqui@localhost:5432/gastronomia_db",
)

class Base(DeclarativeBase):
    pass

engine = create_async_engine(
    DATABASE_URL,
    echo=True,  # pode pôr False depois pra não poluir o log
)

AsyncSessionLocal = sessionmaker(
    bind=engine,
    expire_on_commit=False,
    class_=AsyncSession,
)

async def get_session() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session

async def init_db():
    """Cria as tabelas no banco se ainda não existirem."""
    async with engine.begin() as conn:
        import models  # importa para registrar os modelos
        await conn.run_sync(Base.metadata.create_all)
