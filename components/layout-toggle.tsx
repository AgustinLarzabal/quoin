"use client";

import { UserRole } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui";
import { useCurrentRole } from "@/hooks";

export function LayoutToggle() {
  const pathname = usePathname();
  const role = useCurrentRole();

  return (
    <div className="ml-4">
      {role === UserRole.ADMIN && (
        <Button variant="secondary" size="sm" asChild>
          <Link href={pathname === "/admin" ? "/" : "/admin"}>
            Switch to {pathname === "/admin" ? "User" : "Admin"}
          </Link>
        </Button>
      )}
    </div>
  );
}
