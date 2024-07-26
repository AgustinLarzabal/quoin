import { Country } from "@/components/country";
import { Main } from "@/components/layout";
import { getCountries } from "@/data/catalog";
import { createSlug } from "@/utils";

export default async function Catalog() {
  const countries = await getCountries();

  return (
    <Main title="Catalog" subtitle="Our entire world coins catalog">
      <div className="flex gap-6">
        {countries?.map(({ id, _count, isoCode, name }) => (
          <Country
            key={id}
            count={_count.coins}
            isoCode={isoCode}
            name={name}
            slug={createSlug(name)}
          />
        ))}
      </div>
    </Main>
  );
}
