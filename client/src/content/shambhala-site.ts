/** Public assets (URL-encoded paths for filenames with spaces) */
export const siteImages = {
  hero: "/image.png",
  grid1: "/image%20copy.png",
  grid2: "/image%20copy%202.png",
  grid3: "/image%20copy%203.png",
} as const;

/** Premium products gallery — add entries when new photos are in /public */
export const productGallery = [
  { src: siteImages.grid1, alt: "Shambhala modular kitchen interior" },
  { src: siteImages.grid2, alt: "Modular kitchen island and backsplash" },
  { src: siteImages.grid3, alt: "Modular kitchen with ambient lighting" },
  { src: siteImages.hero, alt: "Premium modular kitchen finish" },
  { src: siteImages.grid2, alt: "Kitchen cabinetry detail" },
  { src: siteImages.grid3, alt: "Wardrobe and storage detail" },
] as const;

export const offerings = [
  {
    title: "Modular Kitchen",
    tag: "₹4 lakhs onwards",
    image: siteImages.grid1,
  },
  {
    title: "Modular Wardrobe",
    tag: "From ₹1 Lakh",
    image: siteImages.grid3,
  },
  {
    title: "Modular Bed",
    tag: "From ₹50,000",
    image: siteImages.hero,
  },
  {
    title: "Modular Storage Units",
    tag: "Custom pricing",
    image: siteImages.grid2,
  },
] as const;

export const siteStats = [
  { value: "300+", label: "kitchens delivered" },
  { value: "400+", label: "wardrobes delivered" },
  { value: "500+", label: "modular pieces" },
  { value: "4.6+", label: "customer satisfaction" },
] as const;

export const siteContact = {
  email: "mail@shambhalahome.com",
  phoneDisplay: "+91 84461 08304",
  phoneTel: "+918446108304",
  copyright: "© 2026 by Shambhala.",
} as const;

export const requirementOptions = [
  { value: "modular_kitchen", label: "Modular kitchen (₹4 lakhs onwards)" },
  { value: "semi_modular_kitchen", label: "Semi-modular kitchen (₹2 lakhs onwards)" },
  { value: "beds", label: "Beds (starting from ₹50,000)" },
  { value: "wardrobes", label: "Modular wardrobes (starting from ₹1 Lakh)" },
] as const;

/** Partner marks: replace files in `/public/partners/` with press-kit assets when available. */
export const trustedBrands = [
  { key: "merino", name: "Merino", src: "/partners/merino.svg" },
  { key: "greenlam", name: "Greenlam", src: "/partners/greenlam.svg" },
  { key: "hafele", name: "Häfele", src: "/partners/hafele.svg" },
  { key: "rehau", name: "REHAU", src: "/partners/rehau.svg" },
  { key: "grass", name: "GRASS", src: "/partners/grass.svg" },
  { key: "blum", name: "blum", src: "/partners/blum.svg" },
  { key: "hettich", name: "Hettich", src: "/partners/hettich.svg" },
  { key: "kessebohmer", name: "Kesseböhmer", src: "/partners/kessebohmer.svg" },
  { key: "higold", name: "HIGOLD", src: "/partners/higold.svg" },
] as const;

export const projectStories = [
  {
    quote: `I'm immensely grateful to Shambhala for creating a kitchen that's both functional and gorgeous. It's where I find solace while preparing meals for my family.`,
    author: "Mrs. Sapna Kushwah",
    meta: "3 BHK at Lodha Belmondo, Ravet, Pune",
    caption:
      "Organized kitchens ensure seamless workflow, saving time in food preparation.",
    video:
      "https://res.cloudinary.com/dzisvrjak/video/upload/v1779706846/Sapna_Kushwah_s_Testimonial_iqlrvw.mp4",
    mime: "video/mp4" as const,
  },
  {
    quote: `Shambhala listened to every detail I had in mind and worked collaboratively to turn my kitchen into a stunning reality.`,
    author: "Mrs. Mittal",
    meta: "4 BHK at EON Waterfront, Kharadi, Pune",
    caption:
      "Discover the art of cooking in a kitchen that's designed for maximum convenience.",
    video:
      "https://res.cloudinary.com/dzisvrjak/video/upload/v1779706376/Mittal_Family_Testimonial_xkxtai.mp4",
    mime: "video/mp4" as const,
  },
  {
    quote: `Shambhala embodies integrity, transparency, and a strong commitment to excellence – qualities that every interior designer values.`,
    author: "Ar. Payal Daga",
    meta: "4.5 BHK, Panchshil Towers, Pune",
    caption:
      "Joint efforts ensure client needs are thoroughly understood and met, enhancing project success and satisfaction.",
    video:
      "https://res.cloudinary.com/dzisvrjak/video/upload/v1779706819/Prachi_Testimonial_xim4eq.mp4",
    mime: "video/mp4" as const,
  },
] as const;

/** In-page anchors only — full landing on a single URL */
export const blogPosts = [
  {
    title: "Why Shambhala is the Preferred Choice for Modular Interiors",
    excerpt:
      "When it comes to modular kitchens, wardrobes, and furniture, the market is vast, but Shambhala stands out as a brand that truly…",
    detailId: "blog-detail-why-shambhala",
    body: "From factory-finished modules to transparent timelines, we focus on kitchens and wardrobes that age well. Talk to our team to see layouts, finishes, and pricing for your home — all on one visit.",
  },
  {
    title:
      "Unleashing the Power of Pre-Drilled Kitchens: Your Secret Weapon for Effortless Home Renovations",
    excerpt:
      "Ready to transform your kitchen? A renovation can breathe new life into your home, enhancing its beauty and increasing its value…",
    detailId: "blog-detail-pre-drilled",
    body: "Pre-drilled systems reduce on-site errors and speed up installation. We combine precision manufacturing with skilled installers so your kitchen is ready faster, with fewer surprises.",
  },
  {
    title:
      "Uncovering the Advantages of Incorporating Biesse Machinery into Your Modular Furniture Company",
    excerpt:
      "The modular furniture industry is booming, with a growth rate of around 10% expected annually over the next five years…",
    detailId: "blog-detail-biesse",
    body: "Investment in advanced machinery means tighter tolerances and repeatable quality across every carcass, shutter, and drawer. That is the backbone of how Shambhala delivers consistent output at scale.",
  },
] as const;

/** Client testimonial videos — hosted on Cloudinary */
export const testimonialVideos = [
  {
    id: "shubh",
    src: "https://res.cloudinary.com/dzisvrjak/video/upload/v1779707029/Shubh_Testimonial_huq70m.mp4",
    label: "Shubh",
    mime: "video/mp4" as const,
  },
  {
    id: "sapna",
    src: "https://res.cloudinary.com/dzisvrjak/video/upload/v1779706846/Sapna_Kushwah_s_Testimonial_iqlrvw.mp4",
    label: "Sapna Kushwah",
    mime: "video/mp4" as const,
  },
  {
    id: "mrs-sable",
    src: "https://res.cloudinary.com/dzisvrjak/video/upload/v1779706835/Mrs_Sable_Testimonial_byu33c.mp4",
    label: "Mrs Sable",
    mime: "video/mp4" as const,
  },
  {
    id: "prachi",
    src: "https://res.cloudinary.com/dzisvrjak/video/upload/v1779706819/Prachi_Testimonial_xim4eq.mp4",
    label: "Prachi",
    mime: "video/mp4" as const,
  },
  {
    id: "prasad-ujwala",
    src: "https://res.cloudinary.com/dzisvrjak/video/upload/v1779706548/Prasad_Ujwala_Testimonial_2_acghxs.mp4",
    label: "Prasad & Ujwala",
    mime: "video/mp4" as const,
  },
  {
    id: "mittal",
    src: "https://res.cloudinary.com/dzisvrjak/video/upload/v1779706376/Mittal_Family_Testimonial_xkxtai.mp4",
    label: "Mittal family",
    mime: "video/mp4" as const,
  },
] as const;

export const showroomLocations = [
  {
    title: "Pune (Swargate – Mukund Nagar)",
    lines: [
      "Sr.No 706 A & B, SWAYAMBHU, SUJAY GARDEN, Mukund Nagar, Pune - 411037",
    ],
    maps: null as string | null,
  },
  { title: "PCMC", lines: [], maps: "https://maps.google.com/?q=PCMC+Pune" },
  { title: "Baner", lines: [], maps: "https://maps.google.com/?q=Baner+Pune" },
  {
    title: "Kolhapur",
    lines: [
      "2804/B/12/ Plot No.4, 'B' Ward, beside Lifeline Hospital, Mangalwar Peth, Kolhapur - 416012",
    ],
    maps: null,
  },
  {
    title: "Nashik",
    lines: [
      "4 to 6, Devi Zone, College Rd, opposite Big Bazaar, Nashik - 422005",
    ],
    maps: null,
  },
  {
    title: "Vijayapura",
    lines: [],
    maps: "https://maps.google.com/?q=Vijayapura",
  },
  {
    title: "Pandharpur",
    lines: [],
    maps: "https://maps.google.com/?q=Pandharpur",
  },
  { title: "Jalgaon", lines: [], maps: "https://maps.google.com/?q=Jalgaon" },
  { title: "Surat", lines: [], maps: "https://maps.google.com/?q=Surat" },
] as const;

export const footerNav = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#offerings" },
  { label: "Careers", href: "#quote" },
  { label: "Life at Shambhala", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#privacy" },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/shambhalahome",
  },
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/shambhalahome/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ShambhalaHomeModularKitchen",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/shambhalahomesolution",
  },
] as const;
