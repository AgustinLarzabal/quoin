import { Main } from "@/components/layout";
import { Serie } from "@/components/series";
import { getSeriesByCountryName } from "@/data/catalog";

export default async function CatalogCountryPage({
  params,
}: {
  params: { country: string };
}) {
  const series = await getSeriesByCountryName(params.country);

  return (
    <Main title="Catalog" subtitle="Our entire world coins catalog">
      <div className="flex gap-6">
        {series?.map(({ id, _count, name, slug }) => (
          <Serie
            key={id}
            count={_count.coins}
            country={params.country}
            name={name}
            slug={slug}
          />
        ))}
      </div>
    </Main>
  );
}
