import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import {
  connectFirestoreEmulator,
  getFirestore,
  initializeFirestore,
  memoryLocalCache,
  type Firestore,
} from "firebase/firestore";

/** Shambhala Firebase web app — env vars override these defaults */
export const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ??
    "AIzaSyAnUu4tQxX4l2RFjK_dQRmiMPyd2RL28H0",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ??
    "shambhala-59523.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "shambhala-59523",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ??
    "shambhala-59523.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "96534527860",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ??
    "1:96534527860:web:024b3319e09fb3b2eff621",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "G-9SV4KJGRD8",
};

export const projectId = firebaseConfig.projectId;

let firebaseApp: FirebaseApp | null = null;
let firestoreDb: Firestore | null = null;
let emulatorConnected = false;

export function getFirebaseApp(): FirebaseApp {
  if (!firebaseApp) {
    firebaseApp = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
  }
  return firebaseApp;
}

/** Browser-only Firestore — optional local emulator via env */
export function getDb(): Firestore {
  if (typeof window === "undefined") {
    throw new Error("Firestore is only available in the browser.");
  }

  if (!firestoreDb) {
    firestoreDb = initializeFirestore(getFirebaseApp(), {
      localCache: memoryLocalCache(),
    });

    if (process.env.NEXT_PUBLIC_USE_FIRESTORE_EMULATOR === "true") {
      if (!emulatorConnected) {
        connectFirestoreEmulator(firestoreDb, "127.0.0.1", 8080);
        emulatorConnected = true;
      }
    }
  }

  return firestoreDb;
}

export const FIRESTORE_CONSOLE_URL = `https://console.firebase.google.com/project/${projectId}/firestore`;

export const usingFirestoreEmulator =
  process.env.NEXT_PUBLIC_USE_FIRESTORE_EMULATOR === "true";
