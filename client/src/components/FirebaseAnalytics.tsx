"use client";

import { useEffect } from "react";
import { isSupported, getAnalytics } from "firebase/analytics";
import { getFirebaseApp } from "@/lib/firebase";

export function FirebaseAnalytics() {
  useEffect(() => {
    isSupported().then((supported) => {
      if (supported) getAnalytics(getFirebaseApp());
    });
  }, []);

  return null;
}
