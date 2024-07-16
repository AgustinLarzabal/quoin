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

export const getCountries = async () => {
  try {
    const countries = await db.country.findMany();

    return countries;
  } catch {
    return null;
  }
};

export const getCountryByIsoCode = async (isoCode: string) => {
  try {
    const country = await db.country.findUnique({
      where: { isoCode },
    });

    return country;
  } catch {
    return null;
  }
};
