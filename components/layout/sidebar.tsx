"use client";

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
import { Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const navigation = [
    {
      icon: Settings,
      path: "/settings",
      isActive: pathname.endsWith("settings"),
    },
  ];

  return (
    <div className="sticky top-0 h-screen md:flex hidden">
      <SidebarBase
        collapsible="none"
        className="border-r border-border bg-noise overflow-hidden"
      >
        <SidebarHeader className="flex justify-center items-center h-[70px] border-b">
          Q
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="p-0">
              <SidebarMenu className="divide-y divide-border h-full flex flex-col">
                {navigation.map((item, index) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      className={cn("[&>svg]:size-5 size-[70px]", {
                        "opacity-50": !item.isActive,
                        "border-b border-border":
                          index === navigation.length - 1,
                      })}
                    >
                      <Link href="">
                        <Settings />
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
