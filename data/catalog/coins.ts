import { db } from "@/lib/db";
import { reverseSlug } from "@/utils";

export const getCoins = async () => {
  try {
    const coins = await db.coin.findMany({
      include: {
        country: true,
        series: true,
      },
    });

    return coins;
  } catch {
    return null;
  }
};

export const getCoinByName = async (name: string) => {
  try {
    const coin = await db.coin.findFirst({
      where: { name },
    });

    return coin;
  } catch {
    return null;
  }
};

export const getCoinsBySeriesName = async (name: string) => {
  try {
    const series = await db.serie.findFirst({
      where: { name: reverseSlug(name) },
      include: {
        coins: true,
      },
    });
    return series;
  } catch {
    return null;
  }
};
