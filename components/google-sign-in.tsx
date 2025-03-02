"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function GoogleSignIn() {
  const [isLoading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {};

  return (
    <Button onClick={handleGoogleSignIn} className="bg-primary w-full">
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
