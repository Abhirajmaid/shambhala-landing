/**
 * Creates dashboard admin in Firebase Auth (emulator or cloud).
 *
 *   npm run admin:create
 *
 * Defaults: admin@shambhalahome.com / shambhala@123
 * Emulator: run while `npm run emulators` or `npm run dev:local` is up.
 * Cloud: uses NEXT_PUBLIC_FIREBASE_API_KEY from .env.local or built-in project key.
 */

import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnvLocal() {
  const path = resolve(__dirname, "../.env.local");
  if (!existsSync(path)) return {};
  const vars = {};
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) vars[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
  }
  return vars;
}

const env = { ...loadEnvLocal(), ...process.env };

const email = env.ADMIN_EMAIL ?? env.NEXT_PUBLIC_DASHBOARD_LOGIN_EMAIL ?? "admin@shambhalahome.com";
const password = env.ADMIN_PASSWORD ?? "shambhala@123";
const apiKey =
  env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "AIzaSyAnUu4tQxX4l2RFjK_dQRmiMPyd2RL28H0";
const useEmulator = env.NEXT_PUBLIC_USE_FIRESTORE_EMULATOR === "true";
const authHost = env.FIREBASE_AUTH_EMULATOR_HOST ?? "127.0.0.1:9099";

const base = useEmulator
  ? `http://${authHost}`
  : "https://identitytoolkit.googleapis.com";

const url = `${base}/v1/accounts:signUp?key=${useEmulator ? "fake-api-key" : apiKey}`;

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password, returnSecureToken: true }),
});

const data = await res.json();

if (!res.ok) {
  const msg = data?.error?.message ?? JSON.stringify(data);
  if (String(msg).includes("EMAIL_EXISTS")) {
    console.log(`User already exists: ${email}`);
    console.log(`Sign in at /dashboard/login with password: ${password}`);
    process.exit(0);
  }
  console.error("Failed:", msg);
  if (!useEmulator) {
    console.error(
      "\nEnable Email/Password in Firebase Console → Authentication, then run again.",
    );
  }
  process.exit(1);
}

console.log(
  `Admin user ready (${useEmulator ? "emulator" : "cloud"}):\n  Email: ${email}\n  Password: ${password}`,
);
