"use client";

import { Book } from "lucide-react";

import { NavItem } from "@/components/layout";
import { Button, Icons, TooltipProvider } from "@/components/ui";
import { useCurrentRole } from "@/hooks";
import { UserRole } from "@prisma/client";
import Link from "next/link";

const USER_LINKS = [
  {
    icon: <Book className="size-5" />,
    name: "Catalog",
    pathStart: "/catalog",
  },
];

const ADMIN_LINKS = [
  {
    icon: <Book className="size-5" />,
    name: "Catalog",
    pathStart: "/admin/catalog",
  },
];

export function MainSidebar() {
  const role = useCurrentRole();

  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <TooltipProvider delayDuration={0}>
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home" asChild>
            <Link href="/">
              <Icons.quoin />
            </Link>
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          {USER_LINKS.map(({ icon, name, pathStart }) => (
            <NavItem key={name} icon={icon} name={name} pathStart={pathStart} />
          ))}
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          {role === UserRole.ADMIN &&
            ADMIN_LINKS.map(({ icon, name, pathStart }) => (
              <NavItem
                key={name}
                icon={icon}
                name={name}
                pathStart={pathStart}
              />
            ))}
        </nav>
      </TooltipProvider>
    </aside>
  );
}
