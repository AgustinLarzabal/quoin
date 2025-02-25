import { Menu } from "lucide-react";

export function Header() {
  return (
    <div className="w-full h-[70px] flex items-center sticky top-0 border-b">
      <div className="size-[70px] h-full flex justify-center items-center border-r border-border md:hidden">
        (Q)
      </div>

      <div className="flex flex-1 justify-center">Agustín Larzábal</div>

      <div className="size-[70px] h-full flex justify-center items-center border-l border-border md:hidden">
        <Menu />
      </div>
    </div>
  );
}
