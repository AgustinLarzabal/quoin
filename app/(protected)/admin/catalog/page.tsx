import { TableCoins, TableCountries, TableSeries } from "@/components/catalog";
import { Main } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { getCoins, getCountries, getSeries } from "@/data/catalog";

export default async function AdminCatalog() {
  const coins = await getCoins();
  const series = await getSeries();
  const countries = await getCountries();

  return (
    <Main
      title="Catalog"
      subtitle="Add, edit or delete everything from our world coin catalog"
    >
      <Tabs defaultValue="coins">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="coins">Coins</TabsTrigger>
            <TabsTrigger value="series">Series</TabsTrigger>
            <TabsTrigger value="countries">Countries</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="coins">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TableCoins data={coins} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="series">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TableSeries data={series} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="countries">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TableCountries data={countries} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Main>
  );
}
