import { Settings2, Triangle } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

export function MainSidebar() {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <TooltipProvider delayDuration={0}>
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-4 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2"></nav>
        <nav className="mt-auto grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Settings"
              >
                <Settings2 className="size-5" />
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
