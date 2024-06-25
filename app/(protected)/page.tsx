import { auth, signOut } from "@/auth";
// import { Coin } from "@/components/coin";

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
      <div className="flex flex-wrap gap-4">
        {JSON.stringify(session)}
        {/* {data.map((coin: ICoin) => (
          <Coin key={coin.id} {...coin} />
        ))} */}

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
