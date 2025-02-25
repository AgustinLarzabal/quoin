"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export function GoogleSignIn() {
  const [isLoading, setLoading] = useState(false);
  const supabase = createClient();

  const handleSignIn = async () => {
    setLoading(true);

    const redirectTo = new URL("/api/auth/callback", window.location.origin);

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectTo.toString(),
      },
    });
  };

  return (
    <Button onClick={handleSignIn}>
      {isLoading ? <LoaderCircle /> : <>Continue with Google</>}
    </Button>
  );
}
