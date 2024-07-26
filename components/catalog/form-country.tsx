"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { addCountry } from "@/actions/catalog/country";
import { FormError, FormSuccess } from "@/components/auth";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Icons,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { AddCountrySchema } from "@/schemas/catalog";
import { capitalizeFirstLetter } from "@/utils";
import { Continent } from "@prisma/client";

export function FormAddCountry() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof AddCountrySchema>>({
    resolver: zodResolver(AddCountrySchema),
    defaultValues: {
      isoCode: undefined,
      continent: undefined,
      name: undefined,
      slug: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof AddCountrySchema>) {
    startTransition(() => {
      addCountry(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
        .catch(() => setError("Something went wrong!"));
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Spain" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isoCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>isoCode</FormLabel>
              <FormControl>
                <Input placeholder="ES" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>slug</FormLabel>
              <FormControl>
                <Input placeholder="spain" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="continent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Continent</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a continent" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.keys(Continent).map((cont) => (
                    <SelectItem key={cont} value={cont}>
                      {capitalizeFirstLetter(cont)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />
        <FormSuccess message={success} />

        <Button disabled={isPending} type="submit">
          {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Add country
        </Button>
      </form>
    </Form>
  );
}
