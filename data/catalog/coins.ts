import { db } from "@/lib/db";

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

export const getCoinsBySeriesName = async (country: string, series: string) => {
  try {
    const data = await db.coin.findMany({
      where: {
        country: {
          slug: country,
        },
        series: {
          slug: series,
        },
      },
    });
    return data;
  } catch {
    return null;
  }
};
