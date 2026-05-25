import {
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type Auth,
  type User,
} from "firebase/auth";
import { getFirebaseApp, usingFirestoreEmulator } from "@/lib/firebase";

let auth: Auth | null = null;
let authEmulatorConnected = false;

export function getFirebaseAuth(): Auth {
  if (typeof window === "undefined") {
    throw new Error("Firebase Auth is only available in the browser.");
  }

  if (!auth) {
    auth = getAuth(getFirebaseApp());
    if (usingFirestoreEmulator && !authEmulatorConnected) {
      connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
      authEmulatorConnected = true;
    }
  }

  return auth;
}

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(getFirebaseAuth(), email.trim(), password);
}

export function logOut() {
  return signOut(getFirebaseAuth());
}

export function subscribeAuth(
  onUser: (user: User | null) => void,
  onError?: (error: Error) => void,
) {
  return onAuthStateChanged(
    getFirebaseAuth(),
    onUser,
    (err) => onError?.(err instanceof Error ? err : new Error(String(err))),
  );
}

export function mapAuthError(err: unknown): string {
  const code =
    err && typeof err === "object" && "code" in err
      ? String((err as { code: string }).code)
      : "";

  switch (code) {
    case "auth/invalid-email":
      return "Invalid email address.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Incorrect email or password.";
    case "auth/too-many-requests":
      return "Too many attempts. Try again later.";
    case "auth/configuration-not-found":
      return "AUTH_NOT_CONFIGURED";
    default:
      if (
        err instanceof Error &&
        err.message.toLowerCase().includes("configuration-not-found")
      ) {
        return "AUTH_NOT_CONFIGURED";
      }
      return err instanceof Error ? err.message : "Sign in failed.";
  }
}

export const AUTH_SETUP_URL =
  "https://console.firebase.google.com/project/shambhala-59523/authentication/providers";

export function isAuthNotConfiguredError(message: string) {
  return message === "AUTH_NOT_CONFIGURED";
}
