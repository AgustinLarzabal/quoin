"use client";

import { Logo } from "@/components/logo";
import {
  Sidebar as SidebarBase,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const items = [
    {
      icon: LayoutDashboard,
      path: "/",
      isActive: pathname.endsWith("/"),
    },
  ];

  return (
    <div className="sticky top-0 hidden h-screen md:flex">
      <SidebarBase collapsible="none" className="border-border border-r">
        <SidebarHeader className="flex h-[70px] items-center justify-center border-b">
          <Link href={`/`}>
            <Logo />
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="divide-border divide-y">
                {items.map((item, index) => (
                  <SidebarMenuItem
                    key={item.path}
                    className={cn({
                      "border-border border-b": index === items.length - 1,
                    })}
                  >
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      className={cn("size-[70px] [&>svg]:size-5", {
                        "opacity-50": !item.isActive,
                      })}
                    >
                      <Link href={item.path} prefetch>
                        <item.icon />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarBase>
    </div>
  );
}
