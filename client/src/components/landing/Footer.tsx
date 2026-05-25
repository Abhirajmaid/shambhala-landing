import Link from "next/link";
import {
  footerNav,
  siteContact,
  socialLinks,
} from "@/content/shambhala-site";

export function Footer() {
  return (
    <footer id="privacy" className="bg-brand-navy text-white">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-12">
        <p className="text-center text-sm md:text-base">{siteContact.copyright}</p>

        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-brand-cream/90 md:flex-row md:gap-6">
          <a
            href={`mailto:${siteContact.email}`}
            className="hover:text-white hover:underline"
          >
            {siteContact.email}
          </a>
          <span className="hidden text-white/30 md:inline">|</span>
          <a
            href={`tel:${siteContact.phoneTel}`}
            className="hover:text-white hover:underline"
          >
            {siteContact.phoneDisplay}
          </a>
        </div>

          
        
        

        <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-brand-cream/65 md:text-sm">
          Interior designers &amp; full-home interiors in Pune · Bangalore ·
          Mumbai · Hyderabad · Chennai · Noida · Kolkata · Gurgaon.
        </p>

        <details className="group mx-auto mt-8 max-w-4xl border-t border-white/10 pt-6 text-left">
          <summary className="cursor-pointer list-none text-center text-xs text-brand-cream/70 hover:text-brand-cream md:text-sm [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2">
              <span className="text-[10px] transition group-open:rotate-90">
                ▸
              </span>
              More locations &amp; search terms
            </span>
          </summary>
          <ul className="mt-4 space-y-2 text-[11px] leading-relaxed text-brand-cream/55 md:text-xs">
            <li>
              <sup className="mr-1">1</sup>
              For full scope, please visit www.shambhala.com/in/service
            </li>
            <li>
              <sup className="mr-1">2</sup>
              For kitchen, wardrobes and storage: booking amount is 5% of the
              final quote or ₹35,000, whichever is higher
            </li>
          </ul>
        </details>
      </div>
    </footer>
  );
}
