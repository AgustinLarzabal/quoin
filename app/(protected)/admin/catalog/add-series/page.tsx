import { FormAddSeries } from "@/components/catalog/form-series";
import { Main } from "@/components/layout";
import { getCountries } from "@/data/catalog";

export default async function AddSeriesPage() {
  const countries = await getCountries();

  return (
    <Main
      title="Add Series"
      subtitle="Add, edit or delete a series from our world coin catalog"
    >
      <FormAddSeries countries={countries} />
    </Main>
  );
}
