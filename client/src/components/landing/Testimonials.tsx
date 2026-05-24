"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=900&q=80",
    quote:
      "We wanted our new home to look contemporary and modern since we picked up tastes from across travelling the world.",
    by: "Priyanka and Tarun",
  },
  {
    img: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=900&q=80",
    quote:
      "The designer's dedication made the place look beautiful and it gets better everyday I enter my home.",
    by: "Kanchan and Sumit",
  },
  {
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80",
    quote:
      "Shambhala was the best collaboration for the modern and contemporary home we wanted.",
    by: "Nidhi and Vikas",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const dist = card ? card.offsetWidth + 16 : 280;
    el.scrollBy({ left: dir === "next" ? dist : -dist, behavior: "smooth" });
  };

  return (
    <section className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <div className="flex items-start justify-between gap-3 md:items-center">
          <div className="max-w-lg">
            <h2 className="font-display text-xl font-bold text-brand-navy md:text-3xl">
              See Why{" "}
              <span className="font-script font-normal italic text-brand-orange">
                1 Lakh+
              </span>{" "}
              Homeowners Choose Shambhala
            </h2>
            <p className="mt-1.5 text-xs text-brand-navy/70 md:mt-2 md:text-sm">
              Hear It from Our Clients
            </p>
          </div>
          <a
            href="#quote"
            className="shrink-0 self-start whitespace-nowrap rounded-full bg-brand-coral px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 md:px-5 md:py-2.5 md:text-xs"
          >
            <span className="block leading-tight md:inline">Book a Free</span>
            <span className="block leading-tight md:ml-1 md:inline">
              Consultation
            </span>
          </a>
        </div>

        <div className="relative mt-5 md:mt-8">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scroll("prev")}
            className="absolute -left-1 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 shadow-card md:inline-flex"
          >
            <ChevronLeft className="h-5 w-5 text-brand-navy" />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:gap-5"
          >
            {testimonials.map((t) => (
              <article
                key={t.by}
                data-card
                className="flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-card md:w-[calc((100%-2.5rem)/3)]"
              >
                <div className="relative h-44 w-full md:h-56">
                  <Image
                    src={t.img}
                    alt={`Happy customers ${t.by}`}
                    fill
                    sizes="(min-width:768px) 33vw, 80vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 shadow-card">
                      <Play className="h-5 w-5 fill-brand-navy text-brand-navy" />
                    </span>
                  </div>
                </div>
                <div className="px-4 py-4 text-center md:px-6 md:py-5">
                  <p className="text-xs italic text-brand-navy/85 md:text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-semibold text-brand-navy md:text-sm">
                    {t.by}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next"
            onClick={() => scroll("next")}
            className="absolute -right-1 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 shadow-card md:inline-flex"
          >
            <ChevronRight className="h-5 w-5 text-brand-navy" />
          </button>
        </div>
      </div>
    </section>
  );
}
