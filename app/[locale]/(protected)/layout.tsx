import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="w-full min-h-screen flex">
        <Sidebar />

        <SidebarInset className="flex-1 bg-noise pb-8">
          <Header />

          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
