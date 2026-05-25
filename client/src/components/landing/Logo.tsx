import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Shambhala — back to top"
      className={`inline-flex shrink-0 items-center overflow-visible ${className}`}
    >
      <Image
        src="/Shambhala-Logo-2024.png"
        alt="Shambhala — Modular Kitchen, Wardrobe & Furniture"
        width={560}
        height={158}
        className="h-10 w-auto origin-left scale-[1.85] sm:scale-[2] md:h-11 md:scale-[2.15]"
        priority
      />
    </a>
  );
}
