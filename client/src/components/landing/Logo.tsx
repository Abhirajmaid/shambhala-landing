import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Shambhala — back to top"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src="/logoo.png"
        alt="Shambhala — Modular Kitchen, Wardrobe & Furniture"
        width={480}
        height={120}
        className="h-10 w-auto sm:h-11 md:h-13"
        priority
      />
    </a>
  );
}
