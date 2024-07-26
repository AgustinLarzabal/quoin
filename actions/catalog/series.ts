"use server";

import {
  getCountryByIsoCode,
  getSeriesByCountry,
  getSeriesByName,
} from "@/data/catalog";
import { db } from "@/lib/db";
import { AddSeriesSchema } from "@/schemas/catalog";
import { capitalizeAllFirstLetters } from "@/utils";
import { z } from "zod";

export const addSeries = async (values: z.infer<typeof AddSeriesSchema>) => {
  const validatedFields = AddSeriesSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { country, name } = validatedFields.data;

  const existingSeries = await getSeriesByName(name);

  if (existingSeries) {
    return { error: "Series already exist!" };
  }

  const existingCountry = await getCountryByIsoCode(country);

  if (!existingCountry) {
    return { error: "Country does not exist!" };
  }

  await db.serie.create({
    data: {
      name: capitalizeAllFirstLetters(name),
      countryID: existingCountry.id,
    },
  });

  return { success: "Series created!" };
};

export const getSeriesByCountryID = async (countryID: string) =>
  getSeriesByCountry(countryID);
