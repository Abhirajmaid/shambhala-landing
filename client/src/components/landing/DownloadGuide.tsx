import Image from "next/image";
import { Download } from "lucide-react";

export function DownloadGuide() {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-8 md:py-14">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-brand-cream md:grid-cols-2">
          <div className="relative h-44 w-full sm:h-56 md:h-72">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
              alt="Bright kitchen interior with orange cabinets"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-5 md:p-10">
            <h2 className="font-display text-xl font-bold text-brand-navy md:text-3xl">
              Download home interior guide
            </h2>
            <p className="mt-2 text-xs text-brand-navy/75 md:mt-3 md:text-sm">
              Don&apos;t forget to consider these fundamental design guidelines
              to know before you start interior designing!
            </p>
            <a
              href="#"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-coral px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-pop transition hover:bg-brand-coral-600 md:mt-6 md:text-sm"
            >
              <Download className="h-4 w-4" /> Download Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
