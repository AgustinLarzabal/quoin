"use client";

import { Book, Settings2 } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import {
  Button,
  Icons,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { useCurrentRole } from "@/hooks";
import { cn } from "@/lib/utils";
import { UserRole } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainSidebar() {
  const pathname = usePathname();
  const role = useCurrentRole();

  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <TooltipProvider delayDuration={0}>
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home" asChild>
            <Link href="/">
              {/* <Triangle className="size-4 fill-foreground" /> */}
              <Icons.quoin />
            </Link>
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          {role === UserRole.ADMIN && pathname.startsWith("/admin") && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    pathname.startsWith("/admin/catalog")
                      ? "bg-accent text-accent-foreground"
                      : "",
                    "rounded-lg"
                  )}
                  variant="ghost"
                  size="icon"
                  aria-label="Settings"
                  asChild
                >
                  <Link href="/admin/catalog">
                    <Book className="size-5" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Catalog
              </TooltipContent>
            </Tooltip>
          )}
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  pathname === "/settings"
                    ? "bg-accent text-accent-foreground"
                    : "",
                  "rounded-lg"
                )}
                variant="ghost"
                size="icon"
                aria-label="Settings"
                asChild
              >
                <Link href="/settings/profile">
                  <Settings2 className="size-5" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Settings
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle aria-label="test" />
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              No anda el tooltip
            </TooltipContent>
          </Tooltip>
        </nav>
      </TooltipProvider>
    </aside>
  );
}
