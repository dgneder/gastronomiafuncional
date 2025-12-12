# app/routers/tracking.py
from fastapi import APIRouter, Request
from pydantic import BaseModel
from app.services.meta_capi import meta_capi

router = APIRouter(prefix="/api/tracking")


# ========== MODELS ==========

class PageViewEvent(BaseModel):
    event_id: str
    page_url: str
    fbc: str | None = None
    fbp: str | None = None


class ViewContentEvent(BaseModel):
    event_id: str
    page_url: str
    content_name: str
    content_id: str | None = None
    value: float | None = None
    fbc: str | None = None
    fbp: str | None = None


class AddToCartEvent(BaseModel):
    event_id: str
    page_url: str
    content_name: str
    content_id: str | None = None
    value: float | None = None
    fbc: str | None = None
    fbp: str | None = None


class LeadEvent(BaseModel):
    event_id: str
    page_url: str
    email: str | None = None
    phone: str | None = None
    fbc: str | None = None
    fbp: str | None = None


class PurchaseEvent(BaseModel):
    event_id: str
    page_url: str
    content_id: str
    value: float
    fbc: str | None = None
    fbp: str | None = None


# ========== HELPER ==========

def get_client_ip(request: Request) -> str:
    client_ip = request.headers.get("x-forwarded-for", request.client.host)
    if "," in client_ip:
        client_ip = client_ip.split(",")[0].strip()
    return client_ip


# ========== ENDPOINTS ==========

@router.post("/pageview")
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


@router.post("/viewcontent")
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


@router.post("/addtocart")
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


@router.post("/lead")
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


@router.post("/purchase")
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