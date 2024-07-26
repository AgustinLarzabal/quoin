"use client";

import { addCoin } from "@/actions/catalog/coin";
import { getSeriesByCountryID } from "@/actions/catalog/series";
import { FormError, FormSuccess } from "@/components/auth";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Icons,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { AddCoinSchema } from "@/schemas/catalog";
import { zodResolver } from "@hookform/resolvers/zod";
import { Country, Serie } from "@prisma/client";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SelectOption {
  label: string;
  value: string;
}

interface FormAddCoinProps {
  countries: Country[] | null;
}

export function FormAddCoin({ countries }: FormAddCoinProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [countryOpen, setCountryOpen] = useState(false);
  const [seriesOpen, setSeriesOpen] = useState(false);
  const [series, setSeries] = useState<Serie[] | null>();

  const mappedCountries = countries?.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  const mappedSeries = series?.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  const form = useForm<z.infer<typeof AddCoinSchema>>({
    resolver: zodResolver(AddCoinSchema),
    defaultValues: {
      code: undefined,
      country: undefined,
      name: undefined,
      series: undefined,
    },
  });

  async function getSeries(selectedCountry: string) {
    const data = await getSeriesByCountryID(selectedCountry);
    setSeries(data);
  }

  async function onSubmit(values: z.infer<typeof AddCoinSchema>) {
    startTransition(() => {
      addCoin(values)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
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
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input placeholder="km000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Country</FormLabel>
              <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? mappedCountries?.find(
                            (country) => country.value === field.value
                          )?.label
                        : "Select language"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {mappedCountries?.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("country", language.value);
                              getSeries(language.value);
                              setCountryOpen(false);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="series"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Series</FormLabel>
              <Popover open={seriesOpen} onOpenChange={setSeriesOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? mappedSeries?.find(
                            (series) => series.value === field.value
                          )?.label
                        : "Select serie"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No serie found.</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {mappedSeries?.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("series", language.value);
                              setSeriesOpen(false);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />
        <FormSuccess message={success} />

        <Button disabled={isPending} type="submit">
          {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Add Coin
        </Button>
      </form>
    </Form>
  );
}
