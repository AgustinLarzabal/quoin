import { TableCoins, TableCountries, TableSeries } from "@/components/catalog";
import { Main } from "@/components/layout";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { getCoins, getCountries, getSeries } from "@/data/catalog";
import { Coin } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default async function AdminCatalog() {
  const coins = await getCoins();
  const series = await getSeries();
  const countries = await getCountries();

  const mappedCoins = ({ id, code, name, countryID, seriesID }: Coin) => {
    return {
      id,
      code,
      name,
      country:
        countries?.find((country) => country.id === countryID)?.name ?? "",
      series: series?.find((series) => series.id === seriesID)?.name ?? "",
    };
  };

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
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="h-7 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuItem>
                  <Link href="/admin/catalog/add-coin">Add Coin</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/admin/catalog/add-series">Add Series</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/catalog/add-country">Add Country</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
              <TableCoins data={coins?.map(mappedCoins)} />
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
