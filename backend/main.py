from typing import Optional

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from db import get_session, init_db
from models import LeadDB

app = FastAPI(title="API Gastronomia Funcional")

# CORS para falar com o Next.js
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://gastronomiafuncional.com",
    "https://www.gastronomiafuncional.com",
    "https://frontend-app-whcg8.ondigitalocean.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Lead(BaseModel):
    name: Optional[str] = None
    email: str
    source: Optional[str] = None
    product: Optional[str] = None

@app.on_event("startup")
async def on_startup():
    # cria as tabelas no banco se ainda não existirem
    await init_db()

@app.get("/")
async def root():
    return {"status": "ok", "message": "API de Gastronomia Funcional ativa"}

@app.post("/leads")
async def create_lead(
    lead: Lead,
    session: AsyncSession = Depends(get_session),
):
    lead_db = LeadDB(
        name=lead.name,
        email=lead.email,
        source=lead.source,
        product=lead.product,
    )

    session.add(lead_db)
    await session.commit()
    await session.refresh(lead_db)

    return {
        "ok": True,
        "lead": {
            "id": lead_db.id,
            "name": lead_db.name,
            "email": lead_db.email,
            "source": lead_db.source,
            "product": lead_db.product,
            "created_at": lead_db.created_at,
        },
    }
