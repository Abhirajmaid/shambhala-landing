import { siteContact } from "@/content/shambhala-site";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border bg-white/95 backdrop-blur">
      <div className="container-px mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 md:h-[4.5rem]">
        <Logo />
        <a
          href={`tel:${siteContact.phoneTel}`}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-coral px-4 py-2 text-[11px] font-semibold tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 md:px-5 md:py-2.5 md:text-sm"
        >
          {siteContact.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
