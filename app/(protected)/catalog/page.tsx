import { Coin } from "@/components/coin";
import { Main } from "@/components/layout";
import { getCoins } from "@/data/catalog";

export default async function Catalog() {
  const coins = await getCoins();
  console.log("[PROTECTED Catalog]", coins);

  return (
    <Main title="Catalog" subtitle="Our entire world coins catalog">
      <div className="flex gap-6">
        {coins?.map((coin) => (
          <Coin key={coin.id} name={coin.name} country={coin.country.isoCode} />
        ))}
      </div>
    </Main>
  );
}
