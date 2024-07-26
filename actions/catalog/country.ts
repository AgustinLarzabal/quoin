"use server";

import { z } from "zod";

import { getCountryById, getCountryByIsoCode } from "@/data/catalog";
import { db } from "@/lib/db";
import { AddCountrySchema } from "@/schemas/catalog";
import { capitalizeAllFirstLetters } from "@/utils";

export const addCountry = async (values: z.infer<typeof AddCountrySchema>) => {
  const validatedFields = AddCountrySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { isoCode, continent, name, slug } = validatedFields.data;

  const existingCountry = await getCountryByIsoCode(isoCode.toUpperCase());

  if (existingCountry) {
    return { error: "Country already exist!" };
  }

  await db.country.create({
    data: {
      isoCode: isoCode.toUpperCase(),
      continent,
      name: capitalizeAllFirstLetters(name),
      slug: slug.toLowerCase(),
    },
  });

  return { success: "Country created!" };
};

export const deleteCountry = async (id: string) => {
  const existingCountry = await getCountryById(id);

  if (!existingCountry) {
    return { error: "Country does not exist!" };
  }

  await db.country.delete({
    where: {
      id: existingCountry.id,
    },
  });

  return { success: "Country deleted!" };
};
