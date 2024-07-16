import { FormAddCountry } from "@/components/catalog/form-country";
import { Main } from "@/components/layout";

export default function AddCountryPage() {
  return (
    <Main
      title="Add Country"
      subtitle="Add, edit or delete a country from our world coin catalog"
    >
      <FormAddCountry />
    </Main>
  );
}
