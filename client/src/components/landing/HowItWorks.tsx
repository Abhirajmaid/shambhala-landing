import type { ReactNode } from "react";

const MIST = "#F3EADA";
const ORANGE = "#E25827";
const DARK = "#372C21";

function IconResearch() {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
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
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
      <circle cx="32" cy="32" r="28" fill={MIST} stroke={DARK} strokeWidth="1.5" />
      <rect x="14" y="22" width="36" height="8" rx="1" fill={ORANGE} opacity="0.9" />
      <rect x="18" y="32" width="28" height="8" rx="1" fill="#c2481c" />
      <rect x="22" y="42" width="20" height="8" rx="1" fill={DARK} opacity="0.85" />
    </svg>
  );
}

function IconFabrication() {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
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
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
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

const steps: { title: string; icon: ReactNode }[] = [
  { title: "Research and design", icon: <IconResearch /> },
  { title: "Material selection", icon: <IconMaterials /> },
  { title: "Fabrication", icon: <IconFabrication /> },
  { title: "Assembly and installation", icon: <IconAssembly /> },
];

export function HowItWorks() {
  return (
    <section id="process" className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Our process
        </h2>

        <ol className="mt-8 max-w-xl md:mt-10">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex items-start gap-5 md:gap-6"
            >
              <div className="flex w-12 shrink-0 flex-col items-center md:w-14">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white shadow-sm ring-2 ring-brand-mist md:h-14 md:w-14">
                  {step.icon}
                </span>
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="my-1 flex flex-col items-center justify-center gap-1 py-0.5"
                  >
                    {Array.from({ length: 2 }).map((_, dash) => (
                      <span
                        key={dash}
                        className="block h-1.5 w-px rounded-full bg-brand-navy/30 md:h-2"
                      />
                    ))}
                  </span>
                ) : null}
              </div>
              <p className="pt-2.5 text-base font-medium text-brand-navy md:pt-3 md:text-lg">
                {step.title}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
