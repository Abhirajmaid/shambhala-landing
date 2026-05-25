"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginAdmin } from "@/lib/api";
import { saveAdminSession } from "@/lib/admin-auth";

export default function DashboardLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@shambhalahome.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { token, user } = await loginAdmin(email.trim(), password);
      saveAdminSession(token, user);
      router.replace("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-brand-border bg-white p-6 shadow-card md:p-8">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Shambhala-Logo-2024.png"
            alt="Shambhala"
            width={280}
            height={80}
            className="h-14 w-auto"
            priority
          />
          <h1 className="mt-4 font-display text-xl font-bold text-brand-navy md:text-2xl">
            Dashboard login
          </h1>
          <p className="mt-1 text-sm text-brand-navy/65">
            Sign in to view callback requests
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-brand-navy/75">
              Email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-brand-border px-3 py-2.5 text-sm outline-none transition focus:border-brand-coral"
              placeholder="admin@shambhalahome.com"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-brand-navy/75">
              Password
            </span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-brand-border px-3 py-2.5 text-sm outline-none transition focus:border-brand-coral"
              placeholder="••••••••"
            />
          </label>

          {error ? (
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-brand-coral py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-brand-navy/55">
          <Link href="/" className="text-brand-coral hover:underline">
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
