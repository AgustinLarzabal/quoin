import Link from "next/link";

import { Flag } from "@/components/flags";

type CountryProps = {
  count: number;
  isoCode: string;
  name: string;
  slug: string;
};

export function Country({ count, isoCode, name, slug }: CountryProps) {
  return (
    <Link
      href={`/catalog/${slug}`}
      className="border inline-flex items-center gap-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground px-3 py-1 transition-colors"
    >
      <Flag code={isoCode} />
      {name}
      <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-zinc-800 shadow ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        {count}
      </div>
    </Link>
  );
}
