const BRAND = {
  cream: "#E6D6B9",
  creamSoft: "#F3EADA",
  dark: "#372C21",
  brown: "#4B3A34",
  orange: "#E25827",
  orangeSoft: "#FDE7D6",
};

function Calendar45Icon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 md:h-14 md:w-14" aria-hidden>
      <rect
        x="8"
        y="14"
        width="44"
        height="38"
        rx="4"
        fill={BRAND.creamSoft}
        stroke={BRAND.dark}
        strokeWidth="2"
      />
      <path
        d="M8 24 H52"
        stroke={BRAND.dark}
        strokeWidth="2"
        fill="none"
      />
      <path d="M18 10 V18 M42 10 V18" stroke={BRAND.dark} strokeWidth="2.5" strokeLinecap="round" />
      <text
        x="30"
        y="42"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={BRAND.dark}
        fontFamily="Poppins, sans-serif"
      >
        45
      </text>
      <circle cx="48" cy="46" r="8" fill={BRAND.orange} />
      <text
        x="48"
        y="49"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill="#fff"
        fontFamily="Poppins, sans-serif"
      >
        ₹
      </text>
    </svg>
  );
}

function WarrantyBadgeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 md:h-14 md:w-14" aria-hidden>
      <circle cx="32" cy="26" r="16" fill={BRAND.creamSoft} stroke={BRAND.dark} strokeWidth="2" />
      <path
        d="M22 38 L18 56 L26 50 L32 56 L38 50 L46 56 L42 38"
        fill={BRAND.orange}
        stroke={BRAND.dark}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M32 16 l3.2 6.4 7 1-5 4.9 1.2 7-6.4-3.4-6.4 3.4 1.2-7-5-4.9 7-1z"
        fill={BRAND.orange}
        stroke={BRAND.dark}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PriceTagIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 md:h-14 md:w-14" aria-hidden>
      <path
        d="M32 6 L54 14 V32 C54 44 44 54 32 58 C20 54 10 44 10 32 V14 Z"
        fill={BRAND.creamSoft}
        stroke={BRAND.dark}
        strokeWidth="2"
      />
      <path
        d="M40 22 L24 22 L24 38 L34 48 L46 36 Z"
        fill={BRAND.orange}
        stroke={BRAND.dark}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="29" cy="27" r="2" fill="#fff" />
      <text
        x="34"
        y="42"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#fff"
        fontFamily="Poppins, sans-serif"
      >
        ₹
      </text>
    </svg>
  );
}

const items = [
  { icon: <Calendar45Icon />, label: "45 days move-in guarantee²" },
  { icon: <WarrantyBadgeIcon />, label: "Lifetime warranty¹" },
  { icon: <PriceTagIcon />, label: "No Hidden Cost" },
];

export function TrustBadges() {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-8 md:py-12">
        <ul className="grid grid-cols-3 items-start gap-3 md:gap-10">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              {item.icon}
              <span className="text-[11px] font-medium leading-snug text-brand-navy md:text-sm">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
