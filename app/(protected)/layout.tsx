import { MainHeader, MainSidebar } from "@/components";

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="grid h-screen w-full pl-[53px]">
          <MainSidebar />
          <div className="flex flex-col">
            <MainHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
