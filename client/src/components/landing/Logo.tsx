export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Shambhala — back to top"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <span className="relative inline-flex h-6 w-6 items-center justify-center md:h-7 md:w-7">
        <svg
          viewBox="0 0 32 32"
          className="h-full w-full text-brand-coral"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          aria-hidden
        >
          <polygon points="16,3 28,9.5 28,22.5 16,29 4,22.5 4,9.5" />
        </svg>
      </span>
      <span className="font-display text-[15px] font-bold tracking-[0.22em] text-brand-navy md:text-base">
        SHAMBHALA
      </span>
    </a>
  );
}
