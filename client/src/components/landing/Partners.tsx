import { trustedBrands } from "@/content/shambhala-site";

export function Partners() {
  const loop = [...trustedBrands, ...trustedBrands];

  return (
    <section className="bg-[#f4f2ee]">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Trusted by
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-brand-navy/75 md:text-base">
          We are associated with the leading suppliers of the industry that help
          turn our blueprint to a perceptible masterpiece.
        </p>

        <div className="relative mt-6 overflow-hidden py-2 md:mt-8 md:py-3">
          <ul className="animate-marquee flex w-max gap-6 md:gap-10">
            {loop.map((b, idx) => (
              <li
                key={`${b.key}-${idx}`}
                className="flex h-16 w-44 shrink-0 items-center justify-center px-3 md:h-20 md:w-52"
                aria-hidden={idx >= trustedBrands.length ? true : undefined}
              >
                <img
                  src={b.src}
                  alt={b.name}
                  className="h-10 max-h-10 w-full max-w-[11rem] object-contain object-center opacity-90 transition-opacity hover:opacity-100 md:h-12 md:max-h-12"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
