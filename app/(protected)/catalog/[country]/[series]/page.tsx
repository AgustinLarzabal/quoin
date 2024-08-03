import Link from "next/link";

import { Coin } from "@/components/coin";
import { Main } from "@/components/layout";
import { getCoinsBySeriesName } from "@/data/catalog";
import { capitalizeAllFirstLetters } from "@/utils";

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
        {coins?.map(({ id, country, name }) => (
          <Link href={`${series}/${id}`} key={id}>
            <Coin>
              <Coin.Header>
                <Coin.Cover name={name} />
              </Coin.Header>
              <Coin.Footer>
                <Coin.Name name={name} />
                <Coin.Country
                  country={capitalizeAllFirstLetters(country.name)}
                  isoCode={country.isoCode}
                />
              </Coin.Footer>
            </Coin>
          </Link>
        ))}
      </div>
    </Main>
  );
}
