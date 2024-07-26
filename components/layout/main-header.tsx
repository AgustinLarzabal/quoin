import { UserNav } from "@/components/user-nav";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold ml-4">Quoin</h1>

      <div className="ml-auto flex items-center space-x-4">
        <UserNav />
      </div>
    </header>
  );
}
