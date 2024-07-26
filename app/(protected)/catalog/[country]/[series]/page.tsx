import { Coin } from "@/components/coin";
import { getCoinsBySeriesName } from "@/data/catalog";

export default async function CatalogCountrySeriesPage({
  params,
}: {
  params: { country: string; series: string };
}) {
  const coins = await getCoinsBySeriesName(params.series);

  return (
    <div className="flex gap-6">
      {coins?.coins.map(({ id, name }) => (
        <Coin key={id} name={name} country={params.country} />
      ))}
    </div>
  );
}
