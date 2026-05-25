"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";
import { requirementOptions } from "@/content/shambhala-site";
import { projectId, usingFirestoreEmulator } from "@/lib/firebase";
import {
  fetchLeads,
  LEADS_COLLECTION,
  subscribeLeads,
  type LeadRecord,
} from "@/lib/leads";

const interestLabels = Object.fromEntries(
  requirementOptions.map((o) => [o.value, o.label]),
) as Record<string, string>;

const LEAD_COLUMNS = [
  { key: "when", label: "When", minWidth: "11rem" },
  { key: "name", label: "Name", minWidth: "9rem" },
  { key: "phone", label: "Phone", minWidth: "10rem" },
  { key: "city", label: "City", minWidth: "8rem" },
  { key: "email", label: "Email", minWidth: "12rem" },
  { key: "interest", label: "Interest", minWidth: "18rem" },
  { key: "whatsapp", label: "WhatsApp", minWidth: "5.5rem" },
  { key: "notes", label: "Notes", minWidth: "14rem" },
] as const;

function formatDate(iso: string | null) {
  if (!iso) return "—";
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function DashboardPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const todayCount = useMemo(
    () =>
      leads.filter((l) => {
        if (!l.createdAt) return false;
        return (
          new Date(l.createdAt).toDateString() === new Date().toDateString()
        );
      }).length,
    [leads],
  );

  async function refresh() {
    setRefreshing(true);
    setError("");
    try {
      setLeads(await fetchLeads());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load requests");
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    const unsub = subscribeLeads(
      (data) => {
        setLeads(data);
        setInitialLoading(false);
        setError("");
      },
      (err) => {
        setError(err.message);
        setInitialLoading(false);
      },
    );
    return () => unsub();
  }, []);

  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-brand-border bg-white px-4 py-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
              Callback requests
            </h1>
            <p className="mt-0.5 text-xs text-brand-navy/55">
              {LEADS_COLLECTION} · {projectId}
              {usingFirestoreEmulator ? " · emulator" : " · cloud"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => refresh()}
            disabled={refreshing}
            aria-label="Refresh leads"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-border bg-white px-4 py-2 text-sm font-medium text-brand-navy transition hover:border-brand-coral/40 disabled:opacity-60"
          >
            <RefreshCw
              className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
              aria-hidden
            />
            Refresh
          </button>
        </div>
      </header>

      <div className="flex-1 space-y-5 p-4 md:space-y-6 md:p-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 gap-3 md:max-w-md md:gap-4">
          <StatCard label="Total" value={String(leads.length)} />
          <StatCard label="Today" value={String(todayCount)} />
        </div>

        {error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            <p className="font-semibold">Could not load requests</p>
            <p className="mt-1">{error}</p>
          </div>
        ) : null}

        {/* Leads — value on top, label below, single horizontal row */}
        <div className="rounded-2xl border border-brand-border bg-white shadow-card">
          {initialLoading && leads.length === 0 ? (
            <p className="px-6 py-12 text-center text-sm text-brand-navy/60">
              Loading requests…
            </p>
          ) : leads.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-brand-navy/70">No callback requests yet.</p>
              <Link
                href="/#quote"
                className="mt-3 inline-block text-sm font-semibold text-brand-coral hover:underline"
              >
                Submit a test lead →
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto overscroll-x-contain">
              <table className="w-full min-w-max border-collapse text-left">
                <colgroup>
                  {LEAD_COLUMNS.map((col) => (
                    <col key={col.key} style={{ minWidth: col.minWidth }} />
                  ))}
                </colgroup>
                <thead>
                  <tr className="border-b border-brand-border bg-brand-mist/70">
                    {LEAD_COLUMNS.map((col) => (
                      <th
                        key={col.key}
                        className="whitespace-nowrap border-r border-brand-border/60 px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-brand-navy/50 last:border-r-0 md:py-3.5"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="[&_tr]:border-b [&_tr]:border-brand-border [&_tr:last-child]:border-b-0">
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="transition hover:bg-brand-mist/30"
                    >
                      <LeadCell value={formatDate(lead.createdAt)} />
                      <LeadCell value={lead.name} bold />
                      <LeadCell
                        value={lead.phone}
                        href={
                          lead.phone
                            ? `tel:${lead.phone.replace(/\s/g, "")}`
                            : undefined
                        }
                      />
                      <LeadCell value={lead.city} />
                      <LeadCell
                        value={lead.email}
                        href={
                          lead.email ? `mailto:${lead.email}` : undefined
                        }
                      />
                      <LeadCell
                        value={
                          (interestLabels[lead.interest] ?? lead.interest) ||
                          "—"
                        }
                      />
                      <LeadCell
                        value={lead.whatsappUpdates ? "Yes" : "No"}
                        highlight={lead.whatsappUpdates}
                      />
                      <LeadCell value={lead.notes || "—"} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-brand-border bg-white px-4 py-3 shadow-soft md:py-4">
      <p className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-brand-navy/50">
        {label}
      </p>
    </div>
  );
}

function LeadCell({
  value,
  href,
  bold,
  highlight,
}: {
  value: string;
  href?: string;
  bold?: boolean;
  highlight?: boolean;
}) {
  const display = value || "—";
  const cellClass =
    "whitespace-nowrap border-r border-brand-border/60 px-4 py-3.5 align-middle last:border-r-0 md:py-4";

  return (
    <td className={cellClass}>
      {href && display !== "—" ? (
        <a
          href={href}
          className={`text-sm text-brand-coral hover:underline md:text-[15px] ${
            bold ? "font-semibold" : "font-medium"
          }`}
        >
          {display}
        </a>
      ) : (
        <span
          className={`text-sm text-brand-navy md:text-[15px] ${
            bold ? "font-semibold" : "font-medium"
          } ${highlight ? "text-green-700" : ""}`}
        >
          {display}
        </span>
      )}
    </td>
  );
}
