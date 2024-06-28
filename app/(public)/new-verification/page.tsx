"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { newVerification } from "@/actions/auth";
import { FormError, FormSuccess } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Icons,
} from "@/components/ui";

export default function NewVerification() {
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
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Account confirmation</CardTitle>
        <CardDescription>Confirming your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {!success && !error && (
            <div className="flex justify-center">
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            </div>
          )}
          <FormSuccess message={success} />
          <FormError message={error} />
          <div className="mt-4 text-center text-sm">
            Back to{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
