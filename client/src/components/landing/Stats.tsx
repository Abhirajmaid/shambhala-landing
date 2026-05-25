import { siteStats } from "@/content/shambhala-site";

export function Stats() {
  return (
    <section className="bg-brand-coral text-white">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-14">
        <h2 className="font-display text-xl font-bold md:text-2xl">
          Let our numbers do the talking!
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-8 md:mt-10 md:gap-12">
          {siteStats.map((s) => (
            <li key={s.label} className="flex flex-col">
              <span className="font-display text-3xl font-bold leading-none md:text-5xl">
                {s.value}
              </span>
              <span className="mt-2 text-sm text-white/90 md:text-base">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
