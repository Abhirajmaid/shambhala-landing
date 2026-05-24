import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border bg-white/95 backdrop-blur">
      <div className="container-px mx-auto flex h-14 max-w-7xl items-center justify-between md:h-16">
        <Logo />
        <a
          href="#quote"
          className="inline-flex items-center justify-center rounded-full bg-brand-coral px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 md:px-6 md:text-xs"
        >
          Get quote
        </a>
      </div>
    </header>
  );
}
