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
  console.log("getSeriesByCountry with countryID", countryID);
  try {
    const series = await db.serie.findMany({
      where: { countryID },
    });

    console.log("series", series);

    return series;
  } catch (error) {
    console.log("getSeriesByCountry error", error);
    return null;
  }
};
