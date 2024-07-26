"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";

type NavItemProps = {
  icon: React.ReactNode;
  name: string;
  pathStart: string;
};

export function NavItem({ icon, name, pathStart }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={cn(
            pathname.startsWith(pathStart)
              ? "bg-accent text-accent-foreground"
              : "",
            "rounded-lg"
          )}
          variant="ghost"
          size="icon"
          aria-label={name}
          asChild
        >
          <Link href={pathStart}>{icon}</Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {name}
      </TooltipContent>
    </Tooltip>
  );
}
