"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ExternalLink, LayoutDashboard, LogOut } from "lucide-react";
import { logOut } from "@/lib/auth";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
] as const;

export function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await logOut();
    router.replace("/dashboard/login");
  }

  return (
    <aside className="flex w-[17rem] shrink-0 flex-col bg-brand-navy text-white lg:w-72">
      <nav className="flex flex-1 flex-col gap-1.5 px-3 py-5 pt-6">
        <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
          Menu
        </p>
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                active
                  ? "bg-brand-coral text-white shadow-pop"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  active ? "bg-white/20" : "bg-white/5"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
              </span>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-1 border-t border-white/10 px-3 py-4">
        <button
          type="button"
          onClick={() => handleLogout()}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-4 w-4 shrink-0" aria-hidden />
          Log out
        </button>
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
          Back to site
        </Link>
      </div>
    </aside>
  );
}
