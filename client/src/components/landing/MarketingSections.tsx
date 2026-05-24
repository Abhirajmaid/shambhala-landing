"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Cpu, Handshake, Scale, Trophy, UserRound } from "lucide-react";
import {
  blogPosts,
  projectStories,
  siteImages,
} from "@/content/shambhala-site";

export function PremiumProducts() {
  return (
    <section id="about" className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="max-w-xl shrink-0 lg:w-[42%]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-coral md:text-xs">
              From our own factories
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-brand-navy md:text-4xl">
              Premium modular kitchens &amp; furniture, fairly priced
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-navy/80 md:text-base">
              We design and manufacture modular kitchens and wardrobes
              end-to-end — so quality, delivery, and costing stay with one team
              you can trust. Every layout is tailored to how you actually live,
              not just how a brochure looks.
            </p>
            <a
              href="#offerings"
              className="mt-5 inline-flex rounded-full border border-brand-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-brand-navy transition hover:bg-brand-navy hover:text-white md:text-sm"
            >
              See what we offer
            </a>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-2">
            <div className="relative col-span-2 aspect-[21/9] overflow-hidden rounded-2xl sm:aspect-[2.4/1]">
              <Image
                src={siteImages.grid1}
                alt="Shambhala modular interior"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 55vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={siteImages.grid2}
                alt="Modular kitchen detail"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 28vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={siteImages.grid3}
                alt="Modular wardrobe detail"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 28vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const offerings = [
  {
    n: "01",
    title: "Modular Kitchen",
    body: "Elevate your kitchen with sleek designs, custom storage, and premium finishes, tailored for style and functionality.",
  },
  {
    n: "02",
    title: "Modular Wardrobe",
    body: "Achieve a clutter-free space with customizable, elegant wardrobes designed for optimal storage and a perfect fit.",
  },
  {
    n: "03",
    title: "Modular Bed",
    body: "Experience comfort and style with modular beds, crafted for convenience and to enhance any bedroom design.",
  },
  {
    n: "04",
    title: "Modular Storage Units",
    body: "Maximize space with modular storage solutions like shoe racks, side tables, and crockery units, all designed for smart, stylish organization.",
  },
] as const;

export function OfferingsSection() {
  return (
    <section id="offerings" className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Our offerings for you…
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {offerings.map((o) => (
            <li
              key={o.n}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-soft"
            >
              <span className="text-sm font-bold text-brand-coral">{o.n}</span>
              <h3 className="mt-2 text-lg font-bold text-brand-navy md:text-xl">
                — {o.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/80">
                {o.body}
              </p>
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

export function WhyShambhala() {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Why Shambhala?
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-brand-navy/80 md:text-base">
          <p>
            At Shambhala, we believe in open communication and trust. We Share,
            You Ask – it&apos;s as simple as that. Our expert team is here to
            answer all your questions about modular solutions, offering
            transparent advice and innovative designs tailored to your needs.
            With premium products, justified prices, and a legacy of excellence,
            we ensure every experience is delightful, fulfilling, and uniquely
            yours.
          </p>
          <p className="font-medium text-brand-navy">
            Experience modular furnishings that combine quality, style, and
            trust – because at Shambhala, it&apos;s all about you.
          </p>
        </div>
        <a
          href="#offerings"
          className="mt-6 inline-flex rounded-full bg-brand-coral px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-pop hover:bg-brand-coral-600 md:text-sm"
        >
          Read more
        </a>
      </div>
    </section>
  );
}

const reasons: {
  n: string;
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    n: "01",
    title: "Experience",
    body: "300+ kitchens · 400+ wardrobes · 500+ modular pieces delivered",
    Icon: Trophy,
  },
  {
    n: "02",
    title: "Goodwill",
    body: "Trusted and recommended by leading architects across the city",
    Icon: Handshake,
  },
  {
    n: "03",
    title: "Customer-first",
    body: "Zero project cancellations — we finish what we start",
    Icon: UserRound,
  },
  {
    n: "04",
    title: "System-driven",
    body: "99.99% error-free process with checks at every milestone",
    Icon: Cpu,
  },
  {
    n: "05",
    title: "Value-driven",
    body: "100% transparency on scope, materials, and billing",
    Icon: Scale,
  },
];

export function FiveReasons() {
  return (
    <section className="bg-brand-mist">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            5 reasons to choose Shambhala
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-navy/70 md:text-base">
            Five pillars we never compromise on — so your modular home journey
            stays predictable, premium, and stress-free.
          </p>
        </div>

        <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 xl:gap-5">
          {reasons.map((r) => {
            const Icon = r.Icon;
            return (
            <li
              key={r.n}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-brand-coral/35 hover:shadow-card"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 font-display text-6xl font-bold text-brand-coral/[0.08] transition group-hover:text-brand-coral/[0.12] md:text-7xl"
              >
                {r.n}
              </span>
              <span className="relative mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral ring-1 ring-brand-coral/20">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="relative flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-base font-bold leading-snug text-brand-navy md:text-lg">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-coral">
                  Reason {r.n}
                </span>
                <span
                  aria-hidden
                  className="select-none text-sm font-light text-brand-navy/35"
                >
                  |
                </span>
                <span>{r.title}</span>
              </h3>
              <p className="relative mt-2 flex-1 text-xs leading-relaxed text-brand-navy/75 md:text-sm">
                {r.body}
              </p>
              <span
                aria-hidden
                className="relative mt-4 h-0.5 w-8 rounded-full bg-brand-coral/40 transition group-hover:w-12 group-hover:bg-brand-coral"
              />
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function MentorsSection() {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-16">
        <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Guided by industry leaders
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-navy/75 md:text-base">
          At Shambhala, we are guided by the wisdom and expertise of industry
          leaders who bring a wealth of knowledge and a commitment to excellence.
          Each of our mentors plays a vital role in shaping our vision and
          guiding our approach, ensuring we remain at the forefront of
          innovation in modular design.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-brand-border bg-brand-mist/60 p-6">
            <h3 className="text-lg font-bold text-brand-navy">Rahul Mehta</h3>
            <p className="text-sm font-medium text-brand-coral">
              Skilling Culture Specialist
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/80">
              Cultivating a robust skill-building culture at Shambhala, ensuring
              a steady supply of skilled manpower to meet industry demands.
            </p>
          </article>
          <article className="rounded-2xl border border-brand-border bg-brand-mist/60 p-6">
            <h3 className="text-lg font-bold text-brand-navy">Nitin Kabra</h3>
            <p className="text-sm font-medium text-brand-coral">Polaad Steel</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/80">
              Providing mentorship on effective business management, sharing
              insights crucial for Shambhala&apos;s operational excellence.
            </p>
          </article>
        </div>
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
