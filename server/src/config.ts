import "dotenv/config";

export const firebaseConfig = {
  apiKey: "AIzaSyAnUu4tQxX4l2RFjK_dQRmiMPyd2RL28H0",
  authDomain: "shambhala-59523.firebaseapp.com",
  projectId: "shambhala-59523",
  storageBucket: "shambhala-59523.firebasestorage.app",
  messagingSenderId: "96534527860",
  appId: "1:96534527860:web:024b3319e09fb3b2eff621",
  measurementId: "G-9SV4KJGRD8",
};

export const port = Number(process.env.PORT) || 4000;
export const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:3000";
export const adminEmail = process.env.ADMIN_EMAIL || "admin@shambhalahome.com";
export const adminPassword = process.env.ADMIN_PASSWORD || "Shambhala@2026";
export const adminSessionToken =
  process.env.ADMIN_SESSION_TOKEN || "shambhala-dashboard-token";

export const leadsCollection = "callback_requests";
