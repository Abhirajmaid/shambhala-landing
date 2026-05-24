"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialVideos } from "@/content/shambhala-site";

export function VideoTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const dist = card ? card.offsetWidth + 16 : 300;
    el.scrollBy({ left: dir === "next" ? dist : -dist, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-coral md:text-xs">
              Testimonials
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-brand-navy md:text-4xl">
              Customer first, always!
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/75 md:text-base">
              Our unwavering focus on customers has been the driving force
              behind building Shambhala.{" "}
              <span className="mt-2 block text-brand-navy/70">
                Hear from our clients — swipe to explore, or use the arrows on
                larger screens.
              </span>
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex shrink-0 items-center justify-center self-center rounded-full bg-brand-coral px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 lg:self-end md:px-6 md:text-xs"
          >
            Get quote
          </a>
        </div>

        <div className="relative mt-8 md:mt-10">
          <button
            type="button"
            aria-label="Previous videos"
            onClick={() => scroll("prev")}
            className="absolute -left-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-card md:inline-flex"
          >
            <ChevronLeft className="h-5 w-5 text-brand-navy" />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:gap-5"
          >
            {testimonialVideos.map((v) => (
              <article
                key={v.file}
                data-card
                className="w-[85%] shrink-0 snap-start sm:w-[55%] md:w-[38%] lg:w-[32%]"
              >
                <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-navy shadow-card">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full object-cover"
                  >
                    <source
                      src={encodeURI(`/testimonial/${v.file}`)}
                      type={v.mime}
                    />
                  </video>
                </div>
                <p className="mt-2 text-center text-xs font-medium text-brand-navy/80">
                  {v.label}
                </p>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next videos"
            onClick={() => scroll("next")}
            className="absolute -right-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-card md:inline-flex"
          >
            <ChevronRight className="h-5 w-5 text-brand-navy" />
          </button>
        </div>
      </div>
    </section>
  );
}
