"use client";

import { useCallback } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function useTracking() {
  const getCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
  };

  const trackViewContent = useCallback(
    async (contentName: string, contentId?: string, value?: number) => {
      const eventId = crypto.randomUUID();

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq(
          "track",
          "ViewContent",
          {
            content_name: contentName,
            content_ids: contentId ? [contentId] : undefined,
            content_type: "product",
            value: value,
            currency: "BRL",
          },
          { eventID: eventId }
        );
      }

      try {
        await fetch(`${API_URL}/api/tracking/viewcontent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event_id: eventId,
            page_url: window.location.href,
            content_name: contentName,
            content_id: contentId,
            value: value,
            fbc: getCookie("_fbc"),
            fbp: getCookie("_fbp"),
          }),
        });
      } catch (error) {
        console.error("CAPI ViewContent error:", error);
      }
    },
    []
  );

  const trackAddToCart = useCallback(
    async (contentName: string, contentId?: string, value?: number) => {
      const eventId = crypto.randomUUID();

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq(
          "track",
          "AddToCart",
          {
            content_name: contentName,
            content_ids: contentId ? [contentId] : undefined,
            content_type: "product",
            value: value,
            currency: "BRL",
          },
          { eventID: eventId }
        );
      }

      try {
        await fetch(`${API_URL}/api/tracking/addtocart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event_id: eventId,
            page_url: window.location.href,
            content_name: contentName,
            content_id: contentId,
            value: value,
            fbc: getCookie("_fbc"),
            fbp: getCookie("_fbp"),
          }),
        });
      } catch (error) {
        console.error("CAPI AddToCart error:", error);
      }
    },
    []
  );

  const trackLead = useCallback(async (email?: string, phone?: string) => {
    const eventId = crypto.randomUUID();

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {}, { eventID: eventId });
    }

    try {
      await fetch(`${API_URL}/api/tracking/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_id: eventId,
          page_url: window.location.href,
          email: email,
          phone: phone,
          fbc: getCookie("_fbc"),
          fbp: getCookie("_fbp"),
        }),
      });
    } catch (error) {
      console.error("CAPI Lead error:", error);
    }
  }, []);

  const trackPurchase = useCallback(async (contentId: string, value: number) => {
    const eventId = crypto.randomUUID();

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq(
        "track",
        "Purchase",
        {
          content_ids: [contentId],
          content_type: "product",
          value: value,
          currency: "BRL",
        },
        { eventID: eventId }
      );
    }

    try {
      await fetch(`${API_URL}/api/tracking/purchase`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_id: eventId,
          page_url: window.location.href,
          content_id: contentId,
          value: value,
          fbc: getCookie("_fbc"),
          fbp: getCookie("_fbp"),
        }),
      });
    } catch (error) {
      console.error("CAPI Purchase error:", error);
    }
  }, []);

  return { trackViewContent, trackAddToCart, trackLead, trackPurchase };
}