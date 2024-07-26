import Link from "next/link";

type CountryProps = {
  count: number;
  country: string;
  name: string;
  slug: string;
};

export function Serie({ count, country, name, slug }: CountryProps) {
  return (
    <Link
      href={`/catalog/${country}/${slug}`}
      className="border inline-flex items-center gap-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground px-3 py-1 transition-colors"
    >
      {name}
      <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-zinc-800 shadow ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        {count}
      </div>
    </Link>
  );
}
