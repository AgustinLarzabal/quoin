import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Triangle } from "lucide-react";

export function MainSidebar() {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <TooltipProvider>
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-4 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2"></nav>
        <nav className="mt-auto grid gap-1 p-2">
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
