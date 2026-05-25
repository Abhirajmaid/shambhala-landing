import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shambhala Dashboard",
  description: "Dashboard for callback requests",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-mist font-sans text-brand-navy">
      {children}
    </div>
  );
}
