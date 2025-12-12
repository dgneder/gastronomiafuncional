# app/services/meta_capi.py
import hashlib
import time
import httpx
from typing import Optional
import os


class MetaCAPI:
    def __init__(self):
        self.pixel_id = os.getenv("META_PIXEL_ID")
        self.access_token = os.getenv("META_ACCESS_TOKEN")
        self.api_version = "v18.0"
        self.base_url = f"https://graph.facebook.com/{self.api_version}/{self.pixel_id}/events"
    
    def _hash(self, value: str | None) -> str | None:
        """SHA256 hash para dados do usuário (email, telefone)"""
        if not value:
            return None
        return hashlib.sha256(value.lower().strip().encode()).hexdigest()
    
    async def send_event(
        self,
        event_name: str,
        event_id: str,
        client_ip: str,
        user_agent: str,
        event_url: str,
        fbc: Optional[str] = None,
        fbp: Optional[str] = None,
        email: Optional[str] = None,
        phone: Optional[str] = None,
        custom_data: Optional[dict] = None,
    ):
        user_data = {
            "client_ip_address": client_ip,
            "client_user_agent": user_agent,
        }
        
        if fbc:
            user_data["fbc"] = fbc
        if fbp:
            user_data["fbp"] = fbp
        if email:
            user_data["em"] = [self._hash(email)]
        if phone:
            user_data["ph"] = [self._hash(phone)]
        
        event_data = {
            "event_name": event_name,
            "event_time": int(time.time()),
            "event_id": event_id,
            "event_source_url": event_url,
            "action_source": "website",
            "user_data": user_data,
        }
        
        if custom_data:
            event_data["custom_data"] = {k: v for k, v in custom_data.items() if v is not None}
        
        payload = {
            "data": [event_data],
            "access_token": self.access_token,
        }
        
        async with httpx.AsyncClient() as client:
            response = await client.post(self.base_url, json=payload)
            return response.json()


meta_capi = MetaCAPI()