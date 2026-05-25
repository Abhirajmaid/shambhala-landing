import type { Metadata } from "next";
import { Poppins, Montserrat, Yellowtail } from "next/font/google";
import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";
import { FirebaseProvider } from "@/components/FirebaseProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Shambhala — Premium modular kitchens & wardrobes for modern homes",
  description:
    "Shambhala is a premium brand specialising in modular kitchens and wardrobes, designed for modern lifestyles with an emphasis on functionality, durability and refined aesthetics.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${yellowtail.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-navy">
        <FirebaseProvider>
          <FirebaseAnalytics />
          {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
