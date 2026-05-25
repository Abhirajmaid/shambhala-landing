"use client";

import { useEffect } from "react";

/** Suppress noisy Firestore AbortError logs when navigating away mid-request. */
export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function onUnhandledRejection(event: PromiseRejectionEvent) {
      const reason = event.reason;
      if (
        reason &&
        typeof reason === "object" &&
        "name" in reason &&
        (reason as { name: string }).name === "AbortError"
      ) {
        event.preventDefault();
      }
    }
    window.addEventListener("unhandledrejection", onUnhandledRejection);
    return () =>
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
  }, []);

  return children;
}
