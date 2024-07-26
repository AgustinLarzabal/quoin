export default async function CatalogCountrySeriesPage({
  params,
}: {
  params: { series: string };
}) {
  return <>{params.series}</>;
}
