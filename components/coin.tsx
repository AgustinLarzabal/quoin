import Image from "next/image";

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="overflow-hidden rounded-t-md p-2">{children}</div>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-1 text-sm p-2">{children}</div>;
};

const Cover = ({ name }: { name: string }) => {
  return (
    <Image
      src="/Espana-2014-Park-Guell.webp"
      alt={name}
      width="250"
      height="250"
      className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
    />
  );
};

const Name = ({ name }: { name: string }) => {
  return <h3 className="font-medium leading-none">{name}</h3>;
};

const Country = ({ country }: { country: string }) => {
  return <p className="text-xs text-muted-foreground">{country}</p>;
};

export function Coin({ children }: { children: React.ReactNode }) {
  return <div className="w-[250px] border rounded-md">{children}</div>;
}

Coin.Header = Header;
Coin.Footer = Footer;
Coin.Cover = Cover;
Coin.Name = Name;
Coin.Country = Country;
