"use client";

import { useEffect } from "react";
import { captureUtmFromUrl, getStoredUtm } from "@/lib/utm";
import { trackPageView } from "@/lib/analytics";

export default function Analytics() {
  useEffect(() => {
    captureUtmFromUrl();
    const utm = getStoredUtm();
    if (utm.source) {
      // Stored UTMs will be picked up by trackEvent payloads
    }
    trackPageView();
  }, []);

  return null;
}
