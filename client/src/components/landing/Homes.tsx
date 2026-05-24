"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const homes = [
  {
    type: "2BHK",
    price: "Starting at 3.57L*",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "3BHK",
    price: "Starting at 4.23L*",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "4BHK",
    price: "Starting at 4.81L*",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
];

export function Homes() {
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
          <div className="max-w-md">
            <h2 className="font-display text-xl font-bold text-brand-navy md:text-3xl">
              Homes for every budget
            </h2>
            <p className="mt-1.5 text-xs text-brand-navy/70 md:mt-2 md:text-sm">
              Our interior designers work with you keeping in mind your
              requirements and budget
            </p>
          </div>
          <a
            href="#quote"
            className="shrink-0 self-start whitespace-nowrap rounded-full bg-brand-coral px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 md:px-5 md:py-2.5 md:text-xs"
          >
            <span className="block leading-tight md:inline">Get Free</span>
            <span className="block leading-tight md:ml-1 md:inline">Quote</span>
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
            className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 md:gap-5"
          >
            {homes.map((h) => (
              <article
                key={h.type}
                data-card
                className="relative h-56 w-[70%] shrink-0 snap-start overflow-hidden rounded-2xl bg-brand-navy text-white shadow-card md:h-80 md:w-[calc((100%-2.5rem)/3)]"
              >
                <Image
                  src={h.img}
                  alt={`${h.type} interior design`}
                  fill
                  sizes="(min-width:768px) 33vw, 70vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30" />
                <span className="absolute left-3 top-3 rounded-md bg-black/55 px-2.5 py-1 text-[10px] font-medium md:text-xs">
                  {h.price}
                </span>
                <span className="absolute bottom-3 left-3 text-base font-bold md:text-xl">
                  {h.type}
                </span>
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

        <p className="mt-3 text-[11px] text-brand-navy/65 md:mt-4 md:text-sm">
          *The prices include only modular interiors for new homes.
        </p>
      </div>
    </section>
  );
}
