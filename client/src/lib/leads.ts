import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  type Timestamp,
  type Unsubscribe,
} from "firebase/firestore";
import { FIRESTORE_CONSOLE_URL, getDb, usingFirestoreEmulator } from "@/lib/firebase";

export const LEADS_COLLECTION = "callback_requests";

export type LeadPayload = {
  name: string;
  phone: string;
  city: string;
  whatsappUpdates: boolean;
  email: string;
  interest: string;
  notes?: string;
};

export type LeadRecord = LeadPayload & {
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

function isAbortError(err: unknown): boolean {
  return (
    (err instanceof Error && err.name === "AbortError") ||
    (typeof err === "object" &&
      err !== null &&
      "name" in err &&
      (err as { name: string }).name === "AbortError")
  );
}

export function mapFirebaseError(err: unknown, fallback: string): Error {
  if (isAbortError(err)) {
    return new Error("Request cancelled");
  }

  const code =
    err && typeof err === "object" && "code" in err
      ? String((err as { code: string }).code)
      : "";
  const message = err instanceof Error ? err.message : String(err ?? "");
  const combined = `${code} ${message}`.toLowerCase();

  if (
    combined.includes("not found") ||
    (combined.includes("database") && combined.includes("default"))
  ) {
    if (usingFirestoreEmulator) {
      return new Error(
        "Firestore emulator is not running. In a second terminal run: npm run emulators (from the client folder), then refresh.",
      );
    }
    return new Error(
      `Cloud Firestore is not created yet. Open Firebase Console → Firestore → Create database, then publish firestore.rules. ${FIRESTORE_CONSOLE_URL}`,
    );
  }

  if (code === "permission-denied") {
    return new Error(
      `Permission denied. Publish firestore.rules in Firebase Console (or restart the emulator). ${FIRESTORE_CONSOLE_URL}/rules`,
    );
  }

  if (code === "unavailable" || combined.includes("blocked")) {
    return new Error(
      "Cannot reach Firestore. Disable ad blockers for localhost and firestore.googleapis.com.",
    );
  }

  if (err instanceof Error && err.message) return err;
  return new Error(fallback);
}

function sortLeadsNewestFirst(leads: LeadRecord[]): LeadRecord[] {
  return [...leads].sort((a, b) => {
    const ta = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const tb = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return tb - ta;
  });
}

function snapshotToLeads(
  docs: { id: string; data: () => Record<string, unknown> }[],
): LeadRecord[] {
  return docs.map((doc) => {
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

export async function submitLead(payload: LeadPayload) {
  const db = getDb();
  try {
    const docRef = await addDoc(collection(db, LEADS_COLLECTION), {
      ...payload,
      notes: payload.notes ?? "",
      createdAt: new Date().toISOString(),
    });
    return { id: docRef.id, message: "Request submitted successfully" };
  } catch (err) {
    throw mapFirebaseError(err, "Failed to submit request");
  }
}

export async function fetchLeads(): Promise<LeadRecord[]> {
  const db = getDb();
  try {
    const snapshot = await getDocs(collection(db, LEADS_COLLECTION));
    return sortLeadsNewestFirst(snapshotToLeads(snapshot.docs));
  } catch (err) {
    throw mapFirebaseError(err, "Failed to load requests");
  }
}

export function subscribeLeads(
  onData: (leads: LeadRecord[]) => void,
  onError: (error: Error) => void,
): Unsubscribe {
  const db = getDb();
  return onSnapshot(
    collection(db, LEADS_COLLECTION),
    (snapshot) => {
      onData(sortLeadsNewestFirst(snapshotToLeads(snapshot.docs)));
    },
    (err) => onError(mapFirebaseError(err, "Failed to load requests")),
  );
}
