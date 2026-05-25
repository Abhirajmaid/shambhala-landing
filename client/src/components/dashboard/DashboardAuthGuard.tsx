"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { User } from "firebase/auth";
import { subscribeAuth } from "@/lib/auth";

export function DashboardAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsub = subscribeAuth((nextUser) => setUser(nextUser));
    return () => unsub();
  }, []);

  useEffect(() => {
    if (user === undefined) return;
    if (!user && pathname !== "/dashboard/login") {
      router.replace("/dashboard/login");
    }
  }, [user, pathname, router]);

  if (user === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center bg-brand-mist p-8">
        <p className="text-sm text-brand-navy/60">Checking session…</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
