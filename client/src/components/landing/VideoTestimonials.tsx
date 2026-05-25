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
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-coral md:text-xs">
            Testimonials
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-brand-navy md:text-4xl">
            Customer first, always!
          </h2>
        </div>

        <div className="relative mt-6 md:mt-8">
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
                    className="aspect-[4/5] min-h-[18rem] w-full object-cover sm:min-h-[20rem] md:min-h-[24rem] lg:min-h-[26rem]"
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
