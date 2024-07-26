import { Serie } from "@/components/series";
import { getSeriesByCountryName } from "@/data/catalog";
import { createSlug } from "@/utils";

export default async function CatalogCountryPage({
  params,
}: {
  params: { country: string };
}) {
  const series = await getSeriesByCountryName(params.country);

  return (
    <div className="flex gap-6">
      {series?.map(({ id, _count, name }) => (
        <Serie
          key={id}
          count={_count.coins}
          country={params.country}
          name={name}
          slug={createSlug(name)}
        />
      ))}
    </div>
  );
}
