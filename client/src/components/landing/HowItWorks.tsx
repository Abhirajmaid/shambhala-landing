const ORANGE = "#E25827";
const DARK = "#372C21";
const MIST = "#F3EADA";

function IconResearch() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" aria-hidden>
      <circle cx="32" cy="32" r="28" fill={MIST} stroke={DARK} strokeWidth="1.5" />
      <rect x="16" y="36" width="32" height="14" rx="1" fill="#fff" stroke={DARK} strokeWidth="1.2" />
      <path d="M20 40 H44 M20 44 H36" stroke={DARK} strokeWidth="1" opacity="0.5" />
      <circle cx="40" cy="24" r="10" fill="none" stroke={ORANGE} strokeWidth="2.5" />
      <path d="M47 31 L52 36" stroke={DARK} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IconMaterials() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" aria-hidden>
      <circle cx="32" cy="32" r="28" fill={MIST} stroke={DARK} strokeWidth="1.5" />
      <rect x="14" y="22" width="36" height="8" rx="1" fill={ORANGE} opacity="0.9" />
      <rect x="18" y="32" width="28" height="8" rx="1" fill="#c2481c" />
      <rect x="22" y="42" width="20" height="8" rx="1" fill={DARK} opacity="0.85" />
    </svg>
  );
}

function IconFabrication() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" aria-hidden>
      <circle cx="32" cy="32" r="28" fill={MIST} stroke={DARK} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="10" fill="none" stroke={ORANGE} strokeWidth="2.5" />
      <circle cx="32" cy="32" r="4" fill={ORANGE} />
      <path d="M12 44 L22 34 M44 34 L54 44" stroke={DARK} strokeWidth="2" strokeLinecap="round" />
      <rect x="26" y="14" width="12" height="6" rx="1" fill="#fff" stroke={DARK} strokeWidth="1.2" />
    </svg>
  );
}

function IconAssembly() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" aria-hidden>
      <circle cx="32" cy="32" r="28" fill={MIST} stroke={DARK} strokeWidth="1.5" />
      <rect x="12" y="28" width="22" height="12" fill="#fff" stroke={DARK} strokeWidth="1.3" rx="1" />
      <path
        d="M34 30 H46 L50 34 V40 H34 Z"
        fill={ORANGE}
        stroke={DARK}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="42" r="3" fill={DARK} />
      <circle cx="44" cy="42" r="3" fill={DARK} />
      <path d="M24 22 L28 26 L24 30 Z" fill={ORANGE} />
    </svg>
  );
}

const steps = [
  {
    n: "01",
    title: "Research and design",
    body: "The first step involves thorough research and design, where the space's dimensions and user needs are analyzed. This ensures the modular furniture fits perfectly in both style and function.",
    icon: <IconResearch />,
  },
  {
    n: "02",
    title: "Material selection",
    body: "Once the design is finalized, the next step is selecting materials, hardware, finishes, and colors that align with the style, durability, and desired look of the furniture.",
    icon: <IconMaterials />,
  },
  {
    n: "03",
    title: "Fabrication",
    body: "Materials are then cut, shaped, and prepared using precision tools like CNC routers, panel saws, edge banding machines, and presses. Each component is crafted to meet the exact design specifications.",
    icon: <IconFabrication />,
  },
  {
    n: "04",
    title: "Assembly and installation",
    body: "In the final step, the modular pieces are assembled and installed on-site. The components are fitted together seamlessly, with attention to both functionality and the final appearance.",
    icon: <IconAssembly />,
  },
] as const;

export function HowItWorks() {
  return (
    <section id="process" className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <h2 className="text-center font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Our process
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-brand-navy/70 md:text-base">
          From blueprint to installation — a system-driven approach at every
          stage.
        </p>

        {/* Mobile: vertical spine + dashed segments between steps */}
        <div className="relative mt-10 lg:hidden">
          <span
            aria-hidden
            className="absolute left-[26px] top-6 bottom-6 w-0 border-l-2 border-dashed border-brand-coral/40"
          />
          <ol className="relative flex flex-col gap-0">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="relative flex gap-4 pb-8 pl-0 last:pb-0"
              >
                <div className="relative z-10 flex shrink-0 flex-col items-center">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-brand-coral/35 bg-white shadow-sm ring-4 ring-white">
                    {s.icon}
                  </span>
                  {i < steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="mt-2 text-xs font-bold text-brand-coral/80"
                    >
                      ↓
                    </span>
                  ) : null}
                </div>
                <div className="min-w-0 flex-1 rounded-xl border border-brand-border/80 bg-brand-mist/40 px-4 py-4 shadow-sm">
                  <span className="text-xs font-bold text-brand-coral">
                    {s.n}
                  </span>
                  <h3 className="mt-0.5 text-base font-bold leading-tight text-brand-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-brand-navy/80">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop: one connected strip with dividers + arrows */}
        <ol className="relative mt-10 hidden rounded-2xl border border-brand-border bg-gradient-to-br from-white via-brand-mist/30 to-brand-mist/50 shadow-card lg:flex lg:flex-row lg:divide-x lg:divide-dashed lg:divide-brand-coral/35">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="group relative flex flex-1 flex-col p-6 xl:p-7"
            >
              {i < steps.length - 1 ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 top-[4.25rem] z-20 hidden h-9 w-9 items-center justify-center rounded-full border border-brand-coral/30 bg-white text-sm font-bold text-brand-coral shadow-md lg:flex"
                >
                  →
                </span>
              ) : null}
              <div className="flex items-start gap-3">
                <span className="shrink-0 rounded-full border border-brand-coral/25 bg-white p-1.5 shadow-sm ring-2 ring-brand-mist">
                  {s.icon}
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-brand-coral">
                    {s.n}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-brand-navy xl:text-lg">
                    {s.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-brand-navy/80 xl:text-sm">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-brand-coral px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 md:text-sm"
          >
            Book free consultation
          </a>
        </div>
      </div>
    </section>
  );
}
