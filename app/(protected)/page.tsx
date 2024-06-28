import { auth, signOut } from "@/auth";

import { Flag } from "@/components/flags";
// import { Coin } from "@/components";

// export interface ICoin {
//   id: number;
//   name: string;
//   country: string;
//   year: string;
//   cover: string;
// }

// async function getData() {
//   const res = await fetch("http://localhost:1234/coins");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function Home() {
  const session = await auth();
  // const data = await getData();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Coin Catalog</h1>
      </div>
      <div className="flex flex-col flex-wrap gap-4">
        <div>
          {JSON.stringify(session)}
          {/* {data.map((coin: ICoin) => (
          <Coin key={coin.id} {...coin} />
          ))} */}
        </div>
        <div>
          <Flag code="au" />
          <Flag code="ar" />
          <Flag code="cn" />
          <Flag code="es" />
          <Flag code="us" />
          <Flag code="za" />
        </div>

        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      </div>
    </main>
  );
}
