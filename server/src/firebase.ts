import { initializeApp, getApps } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  initializeFirestore,
  memoryLocalCache,
  orderBy,
  query,
  type Timestamp,
} from "firebase/firestore";
import { firebaseConfig, leadsCollection } from "./config.js";

const app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  localCache: memoryLocalCache(),
});

const WRITE_TIMEOUT_MS = 12_000;

export type LeadInput = {
  name: string;
  phone: string;
  city: string;
  whatsappUpdates: boolean;
  email: string;
  interest: string;
  notes?: string;
};

export type LeadRecord = LeadInput & {
  id: string;
  createdAt: string | null;
};

function parseCreatedAt(value: unknown): string | null {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (typeof value === "object" && value !== null && "toDate" in value) {
    return (value as Timestamp).toDate().toISOString();
  }
  return null;
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Firestore request timed out")), ms),
    ),
  ]);
}

export async function createLead(data: LeadInput) {
  const createdAt = new Date().toISOString();
  const docRef = await withTimeout(
    addDoc(collection(db, leadsCollection), {
      ...data,
      createdAt,
    }),
    WRITE_TIMEOUT_MS,
  );
  return docRef.id;
}

export async function listLeads(): Promise<LeadRecord[]> {
  const q = query(collection(db, leadsCollection), orderBy("createdAt", "desc"));
  const snapshot = await withTimeout(getDocs(q), WRITE_TIMEOUT_MS);
  return snapshot.docs.map((doc) => {
    const d = doc.data();
    return {
      id: doc.id,
      name: String(d.name ?? ""),
      phone: String(d.phone ?? ""),
      city: String(d.city ?? ""),
      whatsappUpdates: Boolean(d.whatsappUpdates),
      email: String(d.email ?? ""),
      interest: String(d.interest ?? ""),
      notes: d.notes ? String(d.notes) : "",
      createdAt: parseCreatedAt(d.createdAt),
    };
  });
}
