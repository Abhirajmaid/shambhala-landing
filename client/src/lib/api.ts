const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:4000";

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

async function fetchJson(
  url: string,
  init?: RequestInit,
  timeoutMs = 15_000,
) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: controller.signal });
    const data = await res.json().catch(() => ({}));
    return { res, data };
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("Request timed out. Please try again.");
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

export async function submitLead(payload: LeadPayload) {
  const { res, data } = await fetchJson(`${API_BASE}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(
      typeof data.error === "string" ? data.error : "Failed to submit request",
    );
  }
  return data as { id: string; message: string };
}

export async function loginAdmin(email: string, password: string) {
  const { res, data } = await fetchJson(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error(
      typeof data.error === "string" ? data.error : "Login failed",
    );
  }
  return data as { token: string; user: { email: string; name: string } };
}

export async function fetchLeads(token: string) {
  const { res, data } = await fetchJson(`${API_BASE}/api/leads`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      typeof data.error === "string" ? data.error : "Failed to load leads",
    );
  }
  return data as { leads: LeadRecord[] };
}
