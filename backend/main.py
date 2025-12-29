"""
================================================================================
BACKEND API - GASTRONOMIA FUNCIONAL
================================================================================
"""

import sys
import os

# Adiciona o diretório atual ao caminho de busca do Python
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from db import get_session, init_db
from models import LeadDB
from services.meta_capi import meta_capi


# ============================================================================
# LIFESPAN - Inicializa o banco ao subir
# ============================================================================
@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield


# ============================================================================
# APP
# ============================================================================
app = FastAPI(
    title="Gastronomia Funcional API",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS - permite requests do frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://gastronomia-funcional.com.br",
        "https://www.gastronomia-funcional.com.br",
        "https://gastronomiafuncional.com.br",
        "https://www.gastronomiafuncional.com.br",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================================
# SCHEMAS
# ============================================================================
class LeadCreate(BaseModel):
    name: Optional[str] = None
    email: EmailStr
    source: Optional[str] = None
    product: Optional[str] = None


class LeadResponse(BaseModel):
    id: int
    name: Optional[str]
    email: str
    source: Optional[str]
    product: Optional[str]

    class Config:
        from_attributes = True


# --- Tracking Schemas ---
class PageViewEvent(BaseModel):
    event_id: str
    page_url: str
    fbc: Optional[str] = None
    fbp: Optional[str] = None


class ViewContentEvent(BaseModel):
    event_id: str
    page_url: str
    content_name: str
    content_id: Optional[str] = None
    value: Optional[float] = None
    fbc: Optional[str] = None
    fbp: Optional[str] = None


class AddToCartEvent(BaseModel):
    event_id: str
    page_url: str
    content_name: str
    content_id: Optional[str] = None
    value: Optional[float] = None
    fbc: Optional[str] = None
    fbp: Optional[str] = None


class LeadEvent(BaseModel):
    event_id: str
    page_url: str
    email: Optional[str] = None
    phone: Optional[str] = None
    fbc: Optional[str] = None
    fbp: Optional[str] = None


class InitiateCheckoutEvent(BaseModel):
    event_id: str
    page_url: str
    content_name: Optional[str] = None
    content_id: Optional[str] = None
    value: Optional[float] = None
    fbc: Optional[str] = None
    fbp: Optional[str] = None


class PurchaseEvent(BaseModel):
    event_id: str
    page_url: str
    content_id: str
    value: float
    fbc: Optional[str] = None
    fbp: Optional[str] = None


# ============================================================================
# HELPERS
# ============================================================================
def get_client_ip(request: Request) -> str:
    """Extrai IP real do cliente (considera proxy)"""
    client_ip = request.headers.get("x-forwarded-for", request.client.host)
    if "," in client_ip:
        client_ip = client_ip.split(",")[0].strip()
    return client_ip


# ============================================================================
# ROUTES - HEALTH CHECK
# ============================================================================
@app.get("/")
async def root():
    return {"status": "ok", "message": "Gastronomia Funcional API"}


@app.get("/health")
async def health():
    return {"status": "healthy"}


# ============================================================================
# ROUTES - LEADS
# ============================================================================
@app.post("/api/leads", response_model=LeadResponse)
async def create_lead(
    lead: LeadCreate,
    session: AsyncSession = Depends(get_session),
):
    """Cria um novo lead no banco de dados"""
    db_lead = LeadDB(
        name=lead.name,
        email=lead.email,
        source=lead.source,
        product=lead.product,
    )
    session.add(db_lead)
    await session.commit()
    await session.refresh(db_lead)
    return db_lead


@app.get("/api/leads", response_model=list[LeadResponse])
async def list_leads(
    session: AsyncSession = Depends(get_session),
    skip: int = 0,
    limit: int = 100,
):
    """Lista todos os leads"""
    result = await session.execute(
        select(LeadDB).offset(skip).limit(limit).order_by(LeadDB.created_at.desc())
    )
    return result.scalars().all()


# ============================================================================
# ROUTES - TRACKING (Meta CAPI)
# ============================================================================
@app.post("/api/tracking/pageview")
async def track_pageview(request: Request, data: PageViewEvent):
    result = await meta_capi.send_event(
        event_name="PageView",
        event_id=data.event_id,
        client_ip=get_client_ip(request),
        user_agent=request.headers.get("user-agent", ""),
        event_url=data.page_url,
        fbc=data.fbc,
        fbp=data.fbp,
    )
    return {"status": "sent", "meta_response": result}


@app.post("/api/tracking/viewcontent")
async def track_viewcontent(request: Request, data: ViewContentEvent):
    result = await meta_capi.send_event(
        event_name="ViewContent",
        event_id=data.event_id,
        client_ip=get_client_ip(request),
        user_agent=request.headers.get("user-agent", ""),
        event_url=data.page_url,
        fbc=data.fbc,
        fbp=data.fbp,
        custom_data={
            "content_name": data.content_name,
            "content_ids": [data.content_id] if data.content_id else [],
            "content_type": "product",
            "value": data.value,
            "currency": "BRL"
        }
    )
    return {"status": "sent", "meta_response": result}


@app.post("/api/tracking/addtocart")
async def track_addtocart(request: Request, data: AddToCartEvent):
    result = await meta_capi.send_event(
        event_name="AddToCart",
        event_id=data.event_id,
        client_ip=get_client_ip(request),
        user_agent=request.headers.get("user-agent", ""),
        event_url=data.page_url,
        fbc=data.fbc,
        fbp=data.fbp,
        custom_data={
            "content_name": data.content_name,
            "content_ids": [data.content_id] if data.content_id else [],
            "content_type": "product",
            "value": data.value,
            "currency": "BRL"
        }
    )
    return {"status": "sent", "meta_response": result}


@app.post("/api/tracking/lead")
async def track_lead(request: Request, data: LeadEvent):
    result = await meta_capi.send_event(
        event_name="Lead",
        event_id=data.event_id,
        client_ip=get_client_ip(request),
        user_agent=request.headers.get("user-agent", ""),
        event_url=data.page_url,
        fbc=data.fbc,
        fbp=data.fbp,
        email=data.email,
        phone=data.phone,
    )
    return {"status": "sent", "meta_response": result}


@app.post("/api/tracking/initiatecheckout")
async def track_initiate_checkout(request: Request, data: InitiateCheckoutEvent):
    result = await meta_capi.send_event(
        event_name="InitiateCheckout",
        event_id=data.event_id,
        client_ip=get_client_ip(request),
        user_agent=request.headers.get("user-agent", ""),
        event_url=data.page_url,
        fbc=data.fbc,
        fbp=data.fbp,
        custom_data={
            "content_name": data.content_name,
            "content_ids": [data.content_id] if data.content_id else [],
            "content_type": "product",
            "value": data.value,
            "currency": "BRL"
        }
    )
    return {"status": "sent", "meta_response": result}


@app.post("/api/tracking/purchase")
async def track_purchase(request: Request, data: PurchaseEvent):
    result = await meta_capi.send_event(
        event_name="Purchase",
        event_id=data.event_id,
        client_ip=get_client_ip(request),
        user_agent=request.headers.get("user-agent", ""),
        event_url=data.page_url,
        fbc=data.fbc,
        fbp=data.fbp,
        custom_data={
            "content_ids": [data.content_id],
            "content_type": "product",
            "value": data.value,
            "currency": "BRL"
        }
    )
    return {"status": "sent", "meta_response": result}