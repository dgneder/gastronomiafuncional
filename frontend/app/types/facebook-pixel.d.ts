type FacebookPixelEvent =
  | "PageView"
  | "ViewContent"
  | "AddToCart"
  | "InitiateCheckout"
  | "Purchase"
  | "Lead"
  | "CompleteRegistration"
  | "Search"
  | "Contact"
  | "Subscribe";

interface FacebookPixelParams {
  content_name?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

interface FacebookPixelOptions {
  eventID?: string;
}

declare global {
  interface Window {
    fbq: (
      action: "init" | "track" | "trackCustom",
      eventOrPixelId: string | FacebookPixelEvent,
      params?: FacebookPixelParams,
      options?: FacebookPixelOptions
    ) => void;
  }
}

export {};