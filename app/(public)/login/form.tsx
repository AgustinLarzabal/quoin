"use client";

import { login } from "@/actions/auth";
import { loginSchema } from "@/app/(public)/schemas";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function LoginForm() {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        // TODO Add when we add 2FA
        // setSuccess(data?.success);
      });
    });
    // const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });
    // const { token } = await user.json();
    // if (token) {
    //   localStorage.setItem("token", token);
    //   router.push("/");
    // }
  }

  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="grid gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    type="email"
                    placeholder="m@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input disabled={isPending} type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit" className="w-full">
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isPending}
        onClick={() => onClick("google")}
      >
        {isPending ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
