"use server";

import { z } from "zod";

import { getCountryByIsoCode } from "@/data/catalog";
import { db } from "@/lib/db";
import { AddCountrySchema } from "@/schemas/catalog";
import { capitalizeAllFirstLetters, capitalizeFirstLetter } from "@/utils";

export const addCountry = async (values: z.infer<typeof AddCountrySchema>) => {
  const validatedFields = AddCountrySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { isoCode, name } = validatedFields.data;

  const existingCountry = await getCountryByIsoCode(isoCode);

  if (existingCountry) {
    return { error: "Country already exist!" };
  }

  await db.country.create({
    data: {
      isoCode: capitalizeFirstLetter(isoCode),
      name: capitalizeAllFirstLetters(name),
    },
  });

  return { success: "Country created!" };
};
