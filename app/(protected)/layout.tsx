import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";
import { MainHeader, MainSidebar } from "@/components/layout";

import "@/styles/globals.css";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="h-screen w-full pl-[53px]">
        <MainSidebar />
        <div className="flex flex-col">
          <MainHeader />
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}
