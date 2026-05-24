import { Phone } from "lucide-react";
import { siteContact } from "@/content/shambhala-site";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
      <path
        fill="currentColor"
        d="M20.52 3.48A11.84 11.84 0 0 0 12 0a12 12 0 0 0-10.4 17.88L0 24l6.32-1.65A12 12 0 0 0 12 24a12 12 0 0 0 8.52-20.52ZM12 21.84a9.78 9.78 0 0 1-4.99-1.37l-.36-.21-3.75.98 1-3.65-.23-.37A9.84 9.84 0 1 1 12 21.84Zm5.39-7.36c-.3-.15-1.75-.86-2.02-.96s-.47-.15-.66.15-.76.96-.93 1.15-.34.22-.64.07a8.07 8.07 0 0 1-2.37-1.46 9 9 0 0 1-1.66-2.07c-.17-.3 0-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52s-.66-1.6-.9-2.18c-.24-.58-.49-.5-.66-.51-.17 0-.37-.02-.57-.02a1.1 1.1 0 0 0-.8.37 3.36 3.36 0 0 0-1.05 2.5 5.83 5.83 0 0 0 1.22 3.1c.15.2 2.1 3.2 5.1 4.49 1.78.77 2.48.83 3.36.7.54-.08 1.75-.71 2-1.4.25-.69.25-1.27.17-1.4-.07-.13-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

export function ConnectCTA() {
  return (
    <section id="contact" className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Connect{" "}
            <span className="font-script font-normal italic text-brand-orange">
              with us
            </span>
          </h2>
          <p className="mt-3 text-sm text-brand-navy/75 md:text-base">
            {siteContact.email} · {siteContact.phoneDisplay}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${siteContact.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-brown px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-card transition hover:bg-brand-navy md:text-sm"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" /> Call now
            </a>
            <a
              href={`https://wa.me/${siteContact.phoneTel.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-brown px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-card transition hover:bg-brand-navy md:text-sm"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
