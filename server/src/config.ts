import "dotenv/config";

function env(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(
      `Missing environment variable: ${name}. Copy server/.env.example to server/.env and fill in values.`,
    );
  }
  return value;
}

function envOptional(name: string, fallback: string): string {
  return process.env[name]?.trim() || fallback;
}

const measurementId = envOptional("FIREBASE_MEASUREMENT_ID", "");

export const firebaseConfig = {
  apiKey: env("FIREBASE_API_KEY"),
  authDomain: env("FIREBASE_AUTH_DOMAIN"),
  projectId: env("FIREBASE_PROJECT_ID"),
  storageBucket: env("FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: env("FIREBASE_MESSAGING_SENDER_ID"),
  appId: env("FIREBASE_APP_ID"),
  ...(measurementId ? { measurementId } : {}),
};

export const port = Number(envOptional("PORT", "4000"));
export const clientOrigin = envOptional("CLIENT_ORIGIN", "http://localhost:3000");
export const adminEmail = env("ADMIN_EMAIL");
export const adminPassword = env("ADMIN_PASSWORD");
export const adminSessionToken = env("ADMIN_SESSION_TOKEN");

export const leadsCollection = "callback_requests";
