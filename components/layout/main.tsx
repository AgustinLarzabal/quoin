import { PageHeader } from "@/components/layout";

interface MainProps {
  children: React.ReactNode;
  subtitle: string;
  title: string;
}

export function Main({ children, subtitle, title }: MainProps) {
  return (
    <main className="p-10">
      <PageHeader subtitle={subtitle} title={title} />
      {children}
    </main>
  );
}
