import { FormAddCoin } from "@/components/catalog/form-coin";
import { Main } from "@/components/layout";
import { getCountries } from "@/data/catalog";

export default async function AddCoinPage() {
  const countries = await getCountries();
  console.log("GET Countries:", countries);

  return (
    <Main
      title="Add Coin"
      subtitle="Add, edit or delete any coin from our world coin catalog"
    >
      <FormAddCoin countries={countries} />
    </Main>
  );
}
