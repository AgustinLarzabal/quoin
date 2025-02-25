"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export function SignOutButton() {
  const supabase = createClient();

  return <Button onClick={() => supabase.auth.signOut()}>Sign out</Button>;
}
