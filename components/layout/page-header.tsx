import { Separator } from "@/components/ui";

interface PageHeaderProps {
  subtitle: string;
  title: string;
}

export function PageHeader({ subtitle, title }: PageHeaderProps) {
  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      <Separator className="my-6" />
    </>
  );
}
