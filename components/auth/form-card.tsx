import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Link from "next/link";

interface FormProps {
  children: React.ReactNode;
  cta?: string;
  ctaHref?: string;
  ctaLabel?: string;
  description?: string;
  title: string;
}

export const FormCard = ({
  children,
  cta,
  ctaHref,
  ctaLabel,
  description,
  title,
}: FormProps) => {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
        {cta && ctaHref && ctaLabel && (
          <div className="mt-4 text-center text-sm">
            {cta}{" "}
            <Link href={ctaHref} className="underline">
              {ctaLabel}
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
