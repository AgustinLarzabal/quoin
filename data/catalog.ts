import { db } from "@/lib/db";

export const getCoins = async () => {
  try {
    const coins = await db.coin.findMany();

    return coins;
  } catch {
    return null;
  }
};

export const getSeries = async () => {
  try {
    const series = await db.serie.findMany();

    return series;
  } catch {
    return null;
  }
};
