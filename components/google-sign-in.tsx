"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function GoogleSignIn() {
  const [isLoading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
      fetchOptions: {
        onSuccess: () => {
          setLoading(false);
        },
        onError: (error) => {
          console.error(error);
          setLoading(false);
        },
      },
    });
  };

  return (
    <Button
      onClick={handleGoogleSignIn}
      disabled={isLoading}
      className="bg-primary w-full"
    >
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <Icons.Google />
          <span>Continue with Google</span>
        </>
      )}
    </Button>
  );
}
