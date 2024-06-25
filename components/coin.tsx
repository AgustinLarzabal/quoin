import Image from "next/image";

interface CoinProps {
  name: string;
  country: string;
  year: string;
  cover: string;
}

export function Coin({ name, country, year, cover }: CoinProps) {
  return (
    <div className="w-[250px] border rounded-md">
      <div className="overflow-hidden rounded-t-md p-2">
        <Image
          src={cover}
          alt={name}
          width="250"
          height="250"
          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
        />
      </div>
      <div className="space-y-1 text-sm p-2">
        <h3 className="font-medium leading-none">{name}</h3>
        <p className="text-xs text-muted-foreground">{country}</p>
        <p className="text-xs text-muted-foreground">{year}</p>
      </div>
    </div>
  );
}
