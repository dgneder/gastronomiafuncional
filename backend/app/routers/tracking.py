# app/routers/tracking.py
from fastapi import APIRouter, Request
from pydantic import BaseModel
from app.services.meta_capi import meta_capi

router = APIRouter(prefix="/api/tracking")

class PageViewEvent(BaseModel):
    event_id: str
    page_url: str
    fbc: str | None = None
    fbp: str | None = None

@router.post("/pageview")
async def track_pageview(request: Request, data: PageViewEvent):
    
    # Pega IP real (considerando proxy/load balancer)
    client_ip = request.headers.get("x-forwarded-for", request.client.host)
    if "," in client_ip:
        client_ip = client_ip.split(",")[0].strip()
    
    result = await meta_capi.send_event(
        event_name="PageView",
        event_id=data.event_id,
        client_ip=client_ip,
        user_agent=request.headers.get("user-agent", ""),
        event_url=data.page_url,
        fbc=data.fbc,
        fbp=data.fbp,
    )
    
    return {"status": "sent", "meta_response": result}