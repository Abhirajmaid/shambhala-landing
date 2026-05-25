"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AUTH_SETUP_URL,
  isAuthNotConfiguredError,
  mapAuthError,
  signIn,
  subscribeAuth,
} from "@/lib/auth";
import { projectId, usingFirestoreEmulator } from "@/lib/firebase";

const defaultEmail =
  process.env.NEXT_PUBLIC_DASHBOARD_LOGIN_EMAIL ?? "admin@shambhalahome.com";

export default function DashboardLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const unsub = subscribeAuth((user) => {
      if (user) {
        router.replace("/dashboard");
        return;
      }
      setCheckingSession(false);
    });
    return () => unsub();
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await signIn(email, password);
      router.replace("/dashboard");
    } catch (err) {
      setError(mapAuthError(err));
      setSubmitting(false);
    }
  }

  if (checkingSession) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-mist">
        <p className="text-sm text-brand-navy/60">Loading…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-mist px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-brand-border bg-white p-6 shadow-card md:p-8">
        <div className="mb-6 flex justify-center">
          <Image
            src="/Shambhala-Logo-2024.png"
            alt="Shambhala"
            width={480}
            height={140}
            className="h-auto w-full max-w-[280px] object-contain sm:max-w-[320px]"
            priority
          />
        </div>

        <h1 className="text-center font-display text-xl font-bold text-brand-navy md:text-2xl">
          Dashboard login
        </h1>
        <p className="mt-1 text-center text-sm text-brand-navy/65">
          Sign in with your Firebase admin account
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-brand-navy/75">
              Email
            </span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-brand-border px-3 py-2.5 text-sm outline-none transition focus:border-brand-coral"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-brand-navy/75">
              Password
            </span>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-brand-border px-3 py-2.5 text-sm outline-none transition focus:border-brand-coral"
            />
          </label>

          {error ? (
            isAuthNotConfiguredError(error) ? (
              <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-3 text-sm text-amber-950">
                <p className="font-semibold">Firebase Authentication is not enabled yet</p>
                <p className="mt-2 text-xs leading-relaxed">
                  Your Firebase project (<code>{projectId}</code>) needs Email/Password
                  sign-in turned on before login works.
                </p>
                <ol className="mt-2 list-inside list-decimal space-y-1 text-xs">
                  <li>
                    Open{" "}
                    <a
                      href={AUTH_SETUP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand-coral underline"
                    >
                      Firebase → Authentication → Sign-in method
                    </a>
                  </li>
                  <li>Enable <strong>Email/Password</strong></li>
                  <li>
                    Add user: <strong>{defaultEmail}</strong> / password{" "}
                    <strong>shambhala@123</strong>
                  </li>
                  <li>Refresh this page and sign in again</li>
                </ol>
                <p className="mt-3 text-xs text-amber-900/80">
                  <strong>Local dev:</strong> run{" "}
                  <code className="rounded bg-white/80 px-1">npm run dev:local</code>{" "}
                  (emulator + auto admin).{" "}
                  {usingFirestoreEmulator
                    ? "Emulator mode is on."
                    : "Restart dev server after enabling emulator in .env.local."}
                </p>
              </div>
            ) : (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </p>
            )
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-brand-coral py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 disabled:opacity-60"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-brand-navy/55">
          <Link href="/" className="text-brand-coral hover:underline">
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
