"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Cpu, Handshake, Scale, Trophy, UserRound } from "lucide-react";
import {
  blogPosts,
  offerings,
  productGallery,
  projectStories,
} from "@/content/shambhala-site";

export function PremiumProducts() {
  const [hero, ...rest] = productGallery;

  return (
    <section id="about" className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-coral md:text-xs">
            From our own factories
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-brand-navy md:text-4xl">
            Premium modular kitchens &amp; furniture, fairly priced
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <div className="relative col-span-2 aspect-[21/9] overflow-hidden rounded-2xl md:col-span-3 md:aspect-[2.6/1]">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          {rest.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 aspect-[2/1] md:col-span-1 md:aspect-[4/3]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width:768px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferingsSection() {
  return (
    <section id="offerings" className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Our offerings for you…
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {offerings.map((o) => (
            <li key={o.title}>
              <article className="relative h-52 overflow-hidden rounded-2xl text-white shadow-card sm:h-56 md:h-64">
                <Image
                  src={o.image}
                  alt={o.title}
                  fill
                  sizes="(min-width:640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-brand-navy/90 px-3 py-1.5 text-[10px] font-semibold tracking-wide md:text-xs">
                  {o.tag}
                </span>
                <h3 className="absolute bottom-3 left-3 font-display text-lg font-bold md:text-xl">
                  {o.title}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-brand-navy/70">
          Client stories from homes we&apos;ve delivered — watch more in the{" "}
          <a href="#testimonials" className="font-semibold text-brand-coral hover:underline">
            testimonials
          </a>{" "}
          carousel below.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {projectStories.map((p) => (
            <article
              key={p.author}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card"
            >
              <div className="h-1.5 bg-gradient-to-r from-brand-coral via-brand-orange to-brand-coral" />
              <div className="flex flex-1 flex-col p-5">
                <blockquote className="text-sm italic leading-relaxed text-brand-navy/85">
                  &ldquo;{p.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-brand-navy">
                  — {p.author}
                </p>
                <p className="text-xs text-brand-navy/60">{p.meta}</p>
                <p className="mt-3 border-t border-brand-border pt-3 text-xs leading-relaxed text-brand-navy/70">
                  {p.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons: { title: string; Icon: LucideIcon }[] = [
  { title: "Experience", Icon: Trophy },
  { title: "Goodwill", Icon: Handshake },
  { title: "Customer-first", Icon: UserRound },
  { title: "System-driven", Icon: Cpu },
  { title: "Value-driven", Icon: Scale },
];

export function FiveReasons() {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-14">
        <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          5 reasons to choose Shambhala
        </h2>

        <ul className="mt-6 max-w-2xl divide-y divide-brand-border rounded-2xl border border-brand-border bg-brand-mist/50 md:mt-8">
          {reasons.map((r) => {
            const Icon = r.Icon;
            return (
              <li
                key={r.title}
                className="flex items-center justify-between gap-4 px-4 py-3.5 md:px-5 md:py-4"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden
                    className="h-2 w-2 shrink-0 rounded-full bg-brand-coral"
                  />
                  <span className="font-semibold text-brand-navy md:text-lg">
                    {r.title}
                  </span>
                </span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-coral/10 text-brand-coral">
                  <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function BlogsSection() {
  return (
    <section id="blogs" className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Blogs
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((b) => (
            <li key={b.detailId}>
              <a
                href={`#${b.detailId}`}
                className="group flex h-full flex-col rounded-2xl border border-brand-border bg-white p-5 shadow-soft transition hover:border-brand-coral/40"
              >
                <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-coral md:text-lg">
                  {b.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-navy/75">
                  {b.excerpt}
                </p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-coral">
                  Read on this page →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-12 border-t border-brand-border pt-12">
          {blogPosts.map((b) => (
            <article
              key={b.detailId}
              id={b.detailId}
              className="scroll-mt-28 rounded-2xl border border-brand-border bg-white p-6 shadow-soft md:p-8"
            >
              <h3 className="text-lg font-bold text-brand-navy md:text-xl">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/80 md:text-base">
                {b.excerpt}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-navy/75 md:text-base">
                {b.body}
              </p>
              <a
                href="#quote"
                className="mt-6 inline-flex rounded-full bg-brand-coral px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-pop hover:bg-brand-coral-600"
              >
                Request a consultation
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
