"use client";

import { usePathname } from "next/navigation";
import { DashboardAuthGuard } from "@/components/dashboard/DashboardAuthGuard";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/dashboard/login";

  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <DashboardAuthGuard>
      <div className="flex min-h-screen bg-brand-mist">
        <DashboardSidebar />
        <div className="flex min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </DashboardAuthGuard>
  );
}
