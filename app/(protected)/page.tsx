import { Flag } from "@/components/flags";
import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";
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
  const user = await currentUser();
  // const session = await auth();
  // const data = await getData();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Coin Catalog</h1>
      </div>
      <div className="flex flex-col flex-wrap gap-4">
        <div>
          <UserInfo user={user} label="test" />
          {/* {JSON.stringify(session)} */}
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
      </div>
    </main>
  );
}
