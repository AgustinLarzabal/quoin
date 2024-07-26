import { Serie } from "@/components/series";
import { getSeriesByCountrySlug } from "@/data/catalog";

export default async function CatalogCountryPage({
  params,
}: {
  params: { country: string };
}) {
  const series = await getSeriesByCountrySlug(params.country);

  return (
    <div className="flex gap-6">
      {series?.map(({ id, _count, name }) => (
        <Serie
          key={id}
          count={_count.coins}
          country={params.country}
          name={name}
        />
      ))}
    </div>
  );
}
