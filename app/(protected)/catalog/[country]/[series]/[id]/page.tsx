import { Main } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui";
import { getCoinById } from "@/data/catalog";

export default async function CoinPage({
  params,
}: {
  params: { country: string; series: string; id: string };
}) {
  const coin = await getCoinById(params.id);
  console.log("coin", coin);

  const { code, country, name, series } = coin || {};

  return (
    <Main title="Catalog" subtitle="Our entire world coins catalog">
      <Card>
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              {name}
            </CardTitle>
            <CardDescription>
              {country?.name} - {series?.name}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3 w-1/2">
            <div className="font-semibold">Coin Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Code</span>
                <span>{code}</span>
              </li>
            </ul>
            <Separator className="my-2" />
          </div>
        </CardContent>
      </Card>
    </Main>
  );
}
