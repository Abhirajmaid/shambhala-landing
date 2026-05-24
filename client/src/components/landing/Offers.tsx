"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Offer = {
  title: string;
  iconBg: string;
  icon: React.ReactNode;
  bullets: { strong: string; rest: string }[];
};

const BRAND = {
  cream: "#E6D6B9",
  creamSoft: "#F3EADA",
  dark: "#372C21",
  brown: "#4B3A34",
  orange: "#E25827",
  orangeSoft: "#FDE7D6",
};

function ServiceIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden>
      <circle cx="20" cy="20" r="18" fill={BRAND.orangeSoft} />
      <path
        d="M14 24 L26 12 L29 15 L17 27 Z"
        fill={BRAND.orange}
        stroke={BRAND.dark}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="28" r="2.6" fill={BRAND.dark} />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden>
      <circle cx="20" cy="20" r="18" fill={BRAND.orangeSoft} />
      <path
        d="M20 9 L29 12 V21 C29 26 24.5 30 20 31 C15.5 30 11 26 11 21 V12 Z"
        fill="#fff"
        stroke={BRAND.dark}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 20 L19 23 L25 17"
        stroke={BRAND.orange}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden>
      <circle cx="20" cy="20" r="18" fill={BRAND.orangeSoft} />
      <path
        d="M20 9 C15 9 12 12 12 16 C12 19 14 21 15.5 22.5 V26 H24.5 V22.5 C26 21 28 19 28 16 C28 12 25 9 20 9 Z"
        fill={BRAND.orange}
        stroke={BRAND.dark}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <rect x="16" y="27" width="8" height="2.4" rx="0.6" fill={BRAND.dark} />
      <rect x="17" y="30" width="6" height="2.2" rx="0.6" fill={BRAND.dark} />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden>
      <circle cx="20" cy="20" r="18" fill={BRAND.orangeSoft} />
      <circle cx="20" cy="20" r="9" fill="#fff" stroke={BRAND.dark} strokeWidth="1.5" />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fill={BRAND.orange}
        fontFamily="Poppins, sans-serif"
      >
        ₹
      </text>
    </svg>
  );
}

const offers: Offer[] = [
  {
    title: "Our services",
    iconBg: "bg-brand-coral-100",
    icon: <ServiceIcon />,
    bullets: [
      { strong: "Modular kitchens", rest: "" },
      { strong: "Modular wardrobes", rest: "" },
      { strong: "Lighting", rest: "" },
      { strong: "Flooring", rest: "" },
      { strong: "Electrical work", rest: "" },
      { strong: "Civil work", rest: "" },
      { strong: "False ceiling", rest: "" },
      { strong: "Wall design & painting", rest: "" },
    ],
  },
  {
    title: "Warranty",
    iconBg: "bg-brand-coral-100",
    icon: <ShieldIcon />,
    bullets: [
      {
        strong: "Lifetime warranty¹",
        rest: " - Stay worry-free with our warranty policy on modular products.",
      },
      {
        strong: "Up to 1-year on-site service warranty¹",
        rest: " - Warranty on on-site services such as painting, electrical, plumbing and more.",
      },
    ],
  },
  {
    title: "Technology & science",
    iconBg: "bg-brand-coral-100",
    icon: <BulbIcon />,
    bullets: [
      {
        strong: "AquaBloc® Technology",
        rest: " - Hermetically sealed edges that ensure no moisture enters the panels of your modular cabinets.",
      },
      {
        strong: "AntiBubble® Technology",
        rest: " - Super seamless panels without air bubbles for your modular cabinets.",
      },
      {
        strong: "DuraBuild™ Technology",
        rest: " - Robust structure for modular cabinets, making them strong and long-lasting.",
      },
      {
        strong: "Design Science",
        rest: " - Modular kitchens with improved accessibility that makes daily tasks more efficient and reduces stress on the body.",
      },
    ],
  },
  {
    title: "Price benefits",
    iconBg: "bg-brand-coral-100",
    icon: <CoinIcon />,
    bullets: [
      {
        strong: "Price-match guarantee³",
        rest: " - Price match to a valid quote in comparison with a branded player and for exact scope.",
      },
      {
        strong: "Flexible payment options",
        rest: " - EMI solutions and payment schemes from leading financial partners.",
      },
      {
        strong: "No hidden costs",
        rest: " - Transparent costing without last-minute additions.",
      },
    ],
  },
];

export function Offers() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const dist = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir === "next" ? dist : -dist, behavior: "smooth" });
  };

  return (
    <section className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <div className="flex items-start justify-between gap-3 md:items-center">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-3xl">
            What we offer
          </h2>
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
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:gap-5"
          >
            {offers.map((o) => (
              <article
                key={o.title}
                data-card
                className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl bg-white p-5 shadow-card md:w-[calc((100%-3.75rem)/3)] md:p-7"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full md:h-14 md:w-14 ${o.iconBg}`}
                  >
                    <span className="scale-125 md:scale-150">{o.icon}</span>
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy md:text-xl">
                    {o.title}
                  </h3>
                </div>
                <ul className="mt-5 list-disc space-y-4 pl-5 text-sm leading-relaxed text-brand-navy/85 md:mt-6 md:space-y-5 md:text-base">
                  {o.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="font-semibold text-brand-navy">
                        {b.strong}
                      </span>
                      {b.rest}
                    </li>
                  ))}
                </ul>
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
