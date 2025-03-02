import { Logo } from "@/components/logo";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <div className="sticky top-0 flex h-[70px] w-full items-center border-b">
      <div className="border-border flex size-[70px] items-center justify-center border-r md:hidden">
        <Logo />
      </div>

      <div className="flex flex-1 justify-center">Header</div>

      <div className="border-border flex size-[70px] items-center justify-center border-l md:hidden">
        <Menu />
      </div>
    </div>
  );
}
