"use server";

import { z } from "zod";

import { getCoinByName } from "@/data/catalog";
import { db } from "@/lib/db";
import { AddCoinSchema } from "@/schemas/catalog";

export const addCoin = async (values: z.infer<typeof AddCoinSchema>) => {
  const validatedFields = AddCoinSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    code,
    country: countryID,
    name,
    series: seriesID,
  } = validatedFields.data;

  const existingCoin = await getCoinByName(name);

  if (existingCoin) {
    return { error: "Coin already exist!" };
  }

  await db.coin.create({
    data: {
      code,
      name,
      countryID,
      seriesID,
    },
  });

  return { success: "Coin created!" };
};
