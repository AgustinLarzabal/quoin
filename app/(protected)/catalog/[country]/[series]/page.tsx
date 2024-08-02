import { Coin } from "@/components/coin";
import { Main } from "@/components/layout";
import { getCoinsBySeriesName } from "@/data/catalog";

export default async function CatalogCountrySeriesPage({
  params,
}: {
  params: { country: string; series: string };
}) {
  const { country, series } = params;
  const coins = await getCoinsBySeriesName(country, series);

  return (
    <Main title="Catalog" subtitle="Our entire world coins catalog">
      <div className="flex gap-6">
        {coins?.map(({ id, name }) => (
          <Coin key={id} name={name} country={params.country} />
        ))}
      </div>
    </Main>
  );
}
