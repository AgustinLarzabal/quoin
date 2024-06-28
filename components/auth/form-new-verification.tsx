"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { newVerification } from "@/actions/auth";
import { FormError, FormSuccess } from "@/components/auth";
import { Icons } from "@/components/ui";

export function FormNewVerification() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="grid gap-4">
      {!success && !error && (
        <div className="flex justify-center">
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        </div>
      )}
      <FormSuccess message={success} />
      <FormError message={error} />
    </div>
  );
}
