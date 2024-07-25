import { db } from "@/lib/db";

export const getSeries = async () => {
  try {
    const series = await db.serie.findMany();

    return series;
  } catch {
    return null;
  }
};

export const getSeriesByName = async (name: string) => {
  try {
    const series = await db.serie.findFirst({
      where: { name },
    });

    return series;
  } catch {
    return null;
  }
};

export const getSeriesByCountry = async (countryID: string) => {
  try {
    const series = await db.serie.findMany({
      where: { countryID },
    });

    return series;
  } catch (error) {
    console.log("getSeriesByCountry error", error);
    return null;
  }
};
