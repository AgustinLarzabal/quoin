import { MainHeader, MainSidebar } from "@/components/layout";

import "@/styles/globals.css";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen w-full pl-[53px]">
      <MainSidebar />
      <div className="flex flex-col">
        <MainHeader />
        {children}
      </div>
    </div>
  );
}
