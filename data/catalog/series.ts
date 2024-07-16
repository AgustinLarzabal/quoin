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
    const series = await db.country.findUnique({
      where: { name },
    });

    return series;
  } catch {
    return null;
  }
};
