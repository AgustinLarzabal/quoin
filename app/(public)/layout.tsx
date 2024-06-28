import { ModeToggle } from "@/components";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="w-full h-screen flex flex-col">
          <header className="sticky top-0 z-10 flex h-[53px] items-center justify-end gap-1 border-b bg-background px-4">
            <ModeToggle />
          </header>
          <div className="flex-1 flex items-center justify-center px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
