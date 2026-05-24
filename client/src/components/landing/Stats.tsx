const stats = [
  { value: "100000+", label: "#ShambhalaHomes" },
  { value: "3500+", label: "designers" },
  { value: "100+", label: "cities" },
  { value: "4.6+", label: "CSAT" },
];

export function Stats() {
  return (
    <section className="bg-brand-brown text-brand-cream">
      <div className="container-px mx-auto max-w-7xl py-8 md:py-14">
        <h2 className="text-center font-display text-lg font-bold md:text-2xl">
          Let our{" "}
          <span className="font-script text-2xl font-normal italic text-brand-orange md:text-4xl">
            numbers
          </span>{" "}
          do the talking!
        </h2>
        <ul className="mt-5 grid grid-cols-4 gap-x-2 md:mt-8 md:gap-6">
          {stats.map((s) => (
            <li
              key={s.label}
              className="flex min-w-0 flex-col items-center text-center"
            >
              <div className="font-display text-lg font-bold leading-none text-white sm:text-xl md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 w-full break-words px-0.5 text-[10px] leading-tight text-brand-cream/90 sm:text-xs md:mt-2 md:text-sm">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
