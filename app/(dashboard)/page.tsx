import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      {JSON.stringify(session)}
      <SignOut />
    </div>
  );
}
