"use client";

import Image from "next/image";
import { useState } from "react";
import { submitLead } from "@/lib/leads";
import {
  requirementOptions,
  siteContact,
  siteImages,
} from "@/content/shambhala-site";

type StepOne = {
  name: string;
  phone: string;
  city: string;
};

export function Hero() {
  const [step, setStep] = useState<1 | 2>(1);
  const [agree, setAgree] = useState(true);
  const [stepOne, setStepOne] = useState<StepOne>({
    name: "",
    phone: "",
    city: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="quote"
      className="relative isolate overflow-hidden bg-brand-navy text-white md:min-h-[calc(100vh-4rem)]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={siteImages.hero}
          alt="Shambhala modular interiors"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/92 via-brand-navy/78 to-brand-navy/35 md:from-brand-navy/88 md:via-brand-navy/65 md:to-transparent" />
      </div>

      <div className="container-px mx-auto flex max-w-7xl md:min-h-[calc(100vh-4rem)] md:items-center">
        <div className="grid w-full grid-cols-1 items-center gap-8 py-10 md:grid-cols-2 md:gap-12 md:py-16">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange md:text-xs">
              Shambhala Home
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.65rem] md:leading-[1.08]">
              Designed by minds,
              <br />
              manufactured by machines…
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/88 md:text-base">
              To explore modern modular solutions with Shambhala.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteContact.email}`}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/10 md:text-sm"
              >
                {siteContact.email}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative rounded-2xl bg-white/95 p-5 text-brand-navy shadow-card backdrop-blur-sm md:p-6">
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-brand-coral text-[11px] font-semibold text-brand-navy">
                {step}/2
              </div>

              <h2 className="pr-12 text-lg font-bold md:text-xl">
                {step === 1 ? "Request call back" : "Almost there"}
              </h2>
              <p className="mt-1 text-xs text-brand-navy/65 md:text-sm">
                {step === 1
                  ? "Tell us how to reach you — we’ll call you back shortly."
                  : "Share your email and what you’re looking for."}
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl bg-brand-mist px-4 py-6 text-center">
                  <p className="font-semibold text-brand-navy">Thank you!</p>
                  <p className="mt-1 text-sm text-brand-navy/70">
                    We&apos;ve received your request and will call you back
                    shortly.
                  </p>
                </div>
              ) : step === 1 ? (
                <form
                  className="mt-4 space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget);
                    setStepOne({
                      name: String(fd.get("name") ?? "").trim(),
                      phone: String(fd.get("phone") ?? "").trim(),
                      city: String(fd.get("city") ?? "").trim(),
                    });
                    setSubmitError("");
                    setStep(2);
                  }}
                >
                  <label className="block">
                    <span className="sr-only">Full name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      defaultValue={stepOne.name}
                      placeholder="Full name*"
                      className="w-full rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-brand-navy/50 focus:border-brand-coral"
                    />
                  </label>

                  <label className="flex items-stretch overflow-hidden rounded-md border border-brand-border focus-within:border-brand-coral">
                    <span className="flex items-center gap-1 border-r border-brand-border bg-white px-2.5 text-sm">
                      <span
                        aria-hidden
                        className="inline-block h-3.5 w-5 overflow-hidden rounded-[2px]"
                        style={{
                          background:
                            "linear-gradient(to bottom,#FF9933 33%,#FFFFFF 33%,#FFFFFF 66%,#138808 66%)",
                        }}
                      />
                      <span className="text-brand-navy/70">+91</span>
                    </span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      defaultValue={stepOne.phone}
                      placeholder="Phone*"
                      className="flex-1 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-brand-navy/50"
                    />
                  </label>

                  <label className="block">
                    <span className="sr-only">City</span>
                    <input
                      required
                      type="text"
                      name="city"
                      defaultValue={stepOne.city}
                      placeholder="City*"
                      className="w-full rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-brand-navy/50 focus:border-brand-coral"
                    />
                  </label>

                  <label className="flex items-center gap-2 text-xs text-brand-navy/80 md:text-sm">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="h-4 w-4 accent-brand-coral"
                    />
                    Send me updates on WhatsApp
                  </label>

                  <button
                    type="submit"
                    className="mt-1 w-full rounded-full bg-brand-coral py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600"
                  >
                    Next
                  </button>

                  <p className="text-center text-[10px] leading-snug text-brand-navy/60 md:text-[11px]">
                    By continuing, you agree to the{" "}
                    <a href="#privacy" className="text-brand-coral hover:underline">
                      privacy policy
                    </a>{" "}
                    &amp;{" "}
                    <a href="#privacy" className="text-brand-coral hover:underline">
                      terms and conditions
                    </a>
                    .
                  </p>
                </form>
              ) : (
                <form
                  className="mt-4 space-y-3"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    setSubmitError("");
                    const fd = new FormData(e.currentTarget);
                    try {
                      await submitLead({
                        name: stepOne.name,
                        phone: stepOne.phone,
                        city: stepOne.city,
                        whatsappUpdates: agree,
                        email: String(fd.get("email") ?? "").trim(),
                        interest: String(fd.get("interest") ?? "").trim(),
                        notes: String(fd.get("notes") ?? "").trim(),
                      });
                      setSubmitting(false);
                      setSubmitted(true);
                      return;
                    } catch (err) {
                      setSubmitError(
                        err instanceof Error
                          ? err.message
                          : "Something went wrong. Please try again.",
                      );
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  <label className="block">
                    <span className="sr-only">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="w-full rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-brand-navy/50 focus:border-brand-coral"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-xs font-medium text-brand-navy/75">
                      What modular solution are you interested in?
                    </span>
                    <select
                      required
                      name="interest"
                      defaultValue=""
                      className="w-full rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-coral"
                    >
                      <option value="" disabled>
                        Choose an option
                      </option>
                      {requirementOptions.map((o) => (
                        <option key={`s2-${o.value}`} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="sr-only">Notes</span>
                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="Tell us about your space (optional)"
                      className="w-full resize-none rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-brand-navy/50 focus:border-brand-coral"
                    />
                  </label>

                  {submitError ? (
                    <p className="rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
                      {submitError}
                    </p>
                  ) : null}

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      disabled={submitting}
                      className="w-1/3 rounded-full border border-brand-border py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist disabled:opacity-60"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-2/3 rounded-full bg-brand-coral py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 disabled:opacity-60"
                    >
                      {submitting ? "Submitting…" : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
