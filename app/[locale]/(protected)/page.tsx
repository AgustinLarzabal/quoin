import { SignOutButton } from "@/components/sign-out-button";
import { getI18n } from "@/locales/server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();
  const t = await getI18n();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <p>Protected Page</p>
      <p>{t("hello")}</p>
      <SignOutButton />
    </>
  );
}
