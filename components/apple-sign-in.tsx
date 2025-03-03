"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function AppleSignIn() {
  const [isLoading, setLoading] = useState(false);

  const handleAppleSignIn = async () => {
    setLoading(true);

    await authClient.signIn.social({
      provider: "apple",
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
      onClick={handleAppleSignIn}
      disabled={isLoading}
      className="bg-primary w-full"
    >
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <Icons.Apple />
          <span>Continue with Apple</span>
        </>
      )}
    </Button>
  );
}
