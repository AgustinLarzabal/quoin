export default function CatalogCountryPage({
  params,
}: {
  params: { country: string };
}) {
  return <div>{params.country}</div>;
}
