import { db } from "@/lib/db";

export const getCoins = async () => {
  try {
    const coins = await db.coin.findMany();

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
