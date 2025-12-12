class LeadEvent(BaseModel):
    event_id: str
    page_url: str
    email: str | None = None
    phone: str | None = None
    fbc: str | None = None
    fbp: str | None = None


@router.post("/lead")
async def track_lead(request: Request, data: LeadEvent):
    client_ip = request.headers.get("x-forwarded-for", request.client.host)
    if "," in client_ip:
        client_ip = client_ip.split(",")[0].strip()
    
    result = await meta_capi.send_event(
        event_name="Lead",
        event_id=data.event_id,
        client_ip=client_ip,
        user_agent=request.headers.get("user-agent", ""),
        event_url=data.page_url,
        fbc=data.fbc,
        fbp=data.fbp,
        email=data.email,
        phone=data.phone,
    )
    
    return {"status": "sent", "meta_response": result}