import { ChevronRight } from "lucide-react";

const BRAND = {
  creamSoft: "#F3EADA",
  dark: "#372C21",
  orange: "#E25827",
  orangeSoft: "#FDE7D6",
};

function HouseCalcIcon() {
  return (
    <svg viewBox="0 0 80 64" className="h-12 w-20 md:h-16 md:w-28" aria-hidden>
      {/* House */}
      <path
        d="M6 36 L26 18 L46 36 V58 H6 Z"
        fill={BRAND.creamSoft}
        stroke={BRAND.dark}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect x="14" y="40" width="10" height="14" fill="#fff" stroke={BRAND.dark} strokeWidth="1.4" />
      <rect x="30" y="40" width="10" height="8" fill={BRAND.orange} />
      {/* Calculator */}
      <rect
        x="48"
        y="24"
        width="28"
        height="34"
        rx="3"
        fill="#fff"
        stroke={BRAND.dark}
        strokeWidth="1.6"
      />
      <rect x="51" y="27" width="22" height="7" rx="1.5" fill={BRAND.orangeSoft} />
      <g fill={BRAND.dark}>
        <circle cx="55" cy="40" r="1.6" />
        <circle cx="62" cy="40" r="1.6" />
        <circle cx="69" cy="40" r="1.6" />
        <circle cx="55" cy="46" r="1.6" />
        <circle cx="62" cy="46" r="1.6" />
        <circle cx="69" cy="46" r="1.6" />
        <circle cx="55" cy="52" r="1.6" />
        <circle cx="62" cy="52" r="1.6" />
      </g>
      <rect x="67" y="50" width="4" height="6" rx="0.8" fill={BRAND.orange} />
    </svg>
  );
}

const items = [
 
  {
    title: "Kitchen",
    desc: "Get an approximate costing for your kitchen interior.",
  },
  
];

export function PriceEstimator() {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <div className="text-center">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-3xl">
            Interior Price Estimator
          </h2>
          <p className="mx-auto mt-1.5 max-w-md text-xs text-brand-navy/70 md:mt-2 md:text-sm">
            Calculate the approximate cost of doing up your interiors
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl bg-white p-5 text-center shadow-card md:p-6"
            >
              <div className="flex justify-center">
                <HouseCalcIcon />
              </div>
              <h3 className="mt-3 text-base font-bold text-brand-navy md:text-lg">
                {it.title}
              </h3>
              <p className="mt-1.5 text-xs text-brand-navy/70 md:text-sm">
                {it.desc}
              </p>
              <button
                type="button"
                className="mt-4 inline-flex w-full items-center justify-center gap-1 rounded-full bg-brand-coral py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 md:text-sm"
              >
                Calculate <ChevronRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
