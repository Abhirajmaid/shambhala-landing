"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  LayoutDashboard,
  LogOut,
  MessageCircle,
  RefreshCw,
  Users,
} from "lucide-react";
import { fetchLeads, type LeadRecord } from "@/lib/api";
import {
  clearAdminSession,
  getAdminToken,
  getAdminUser,
} from "@/lib/admin-auth";
import { requirementOptions } from "@/content/shambhala-site";

function interestLabel(value: string) {
  return (
    requirementOptions.find((o) => o.value === value)?.label ?? value
  );
}

function formatDate(iso: string | null) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function DashboardPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const user = getAdminUser();

  const loadLeads = useCallback(async () => {
    const token = getAdminToken();
    if (!token) {
      router.replace("/dashboard/login");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const { leads: data } = await fetchLeads(token);
      setLeads(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
      if (err instanceof Error && err.message === "Unauthorized") {
        clearAdminSession();
        router.replace("/dashboard/login");
      }
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  function handleLogout() {
    clearAdminSession();
    router.replace("/dashboard/login");
  }

  const whatsappYes = leads.filter((l) => l.whatsappUpdates).length;

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-[4.5rem] shrink-0 flex-col border-r border-brand-border bg-brand-navy md:w-56">
        <div className="flex items-center justify-center border-b border-white/10 px-3 py-5 md:justify-start md:px-5">
          <Link href="/dashboard" className="inline-flex shrink-0">
            <Image
              src="/Shambhala-Logo-2024.png"
              alt="Shambhala"
              width={200}
              height={56}
              className="h-9 w-auto origin-left scale-[1.6] brightness-0 invert md:h-10 md:scale-[1.75]"
            />
          </Link>
        </div>

        <nav className="flex-1 px-2 py-4 md:px-3">
          <a
            href="/dashboard"
            title="Dashboard"
            className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-2 py-2.5 text-sm font-medium text-white md:justify-start md:px-3"
          >
            <LayoutDashboard className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden md:inline">Dashboard</span>
          </a>
        </nav>

        <div className="border-t border-white/10 p-3 md:p-4">
          <p className="mb-3 hidden truncate text-xs text-white/55 md:block">
            {user?.email}
          </p>
          <button
            type="button"
            onClick={handleLogout}
            title="Log out"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-2 py-2 text-xs font-semibold text-white transition hover:bg-white/10 md:px-3"
          >
            <LogOut className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="hidden md:inline">Log out</span>
          </button>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col bg-brand-mist">
        <header className="border-b border-brand-border bg-white px-4 py-5 md:px-8 md:py-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-coral">
                Shambhala
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold text-brand-navy md:text-3xl">
                Callback requests
              </h1>
              <p className="mt-1 text-sm text-brand-navy/65">
                Leads from the landing page quote form
              </p>
            </div>
            <button
              type="button"
              onClick={loadLeads}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-brand-coral px-5 py-2.5 text-sm font-semibold text-white shadow-pop transition hover:bg-brand-coral-600 disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                aria-hidden
              />
              Refresh
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:max-w-xl md:gap-4">
            <div className="rounded-xl border border-brand-border bg-brand-mist/60 px-4 py-3">
              <div className="flex items-center gap-2 text-brand-coral">
                <Users className="h-4 w-4" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Total
                </span>
              </div>
              <p className="mt-1 font-display text-2xl font-bold text-brand-navy">
                {leads.length}
              </p>
            </div>
            <div className="rounded-xl border border-brand-border bg-brand-mist/60 px-4 py-3">
              <div className="flex items-center gap-2 text-brand-coral">
                <MessageCircle className="h-4 w-4" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  WhatsApp
                </span>
              </div>
              <p className="mt-1 font-display text-2xl font-bold text-brand-navy">
                {whatsappYes}
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8">
          {error ? (
            <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          {loading && leads.length === 0 ? (
            <div className="rounded-2xl border border-brand-border bg-white px-6 py-16 text-center shadow-soft">
              <RefreshCw
                className="mx-auto h-8 w-8 animate-spin text-brand-coral"
                aria-hidden
              />
              <p className="mt-3 text-sm text-brand-navy/60">
                Loading requests…
              </p>
            </div>
          ) : leads.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-brand-border bg-white px-6 py-14 text-center shadow-soft">
              <p className="font-display text-lg font-bold text-brand-navy">
                No requests yet
              </p>
              <p className="mt-2 text-sm text-brand-navy/60">
                Submissions from the hero form will appear here.
              </p>
              <Link
                href="/"
                className="mt-5 inline-flex rounded-full bg-brand-coral px-5 py-2.5 text-sm font-semibold text-white shadow-pop hover:bg-brand-coral-600"
              >
                View landing page
              </Link>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card">
              <div className="overflow-x-auto">
                <table className="w-max min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-brand-coral/30 bg-brand-navy text-xs uppercase tracking-wide text-white">
                      <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                        Date
                      </th>
                      <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                        Phone
                      </th>
                      <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                        City
                      </th>
                      <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                        Email
                      </th>
                      <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                        Interest
                      </th>
                      <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                        WhatsApp
                      </th>
                      <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead, i) => (
                      <tr
                        key={lead.id}
                        className={`border-b border-brand-border/70 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-brand-mist/35"
                        } hover:bg-brand-coral/5`}
                      >
                        <td className="whitespace-nowrap px-4 py-3.5 text-brand-navy/75">
                          {formatDate(lead.createdAt)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5 font-semibold text-brand-navy">
                          {lead.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5">
                          <a
                            href={`tel:${lead.phone.replace(/\s/g, "")}`}
                            className="whitespace-nowrap text-brand-coral hover:underline"
                          >
                            {lead.phone}
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5 text-brand-navy/85">
                          {lead.city}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5">
                          <a
                            href={`mailto:${lead.email}`}
                            className="whitespace-nowrap text-brand-coral hover:underline"
                          >
                            {lead.email}
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5 text-brand-navy/85">
                          {interestLabel(lead.interest)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5">
                          <span
                            className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              lead.whatsappUpdates
                                ? "bg-green-100 text-green-800"
                                : "bg-brand-mist text-brand-navy/60"
                            }`}
                          >
                            {lead.whatsappUpdates ? "Yes" : "No"}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5 text-brand-navy/70">
                          {lead.notes || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="border-t border-brand-border bg-brand-mist/50 px-4 py-3 text-xs font-medium text-brand-navy/55">
                {leads.length} request{leads.length === 1 ? "" : "s"} total
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
