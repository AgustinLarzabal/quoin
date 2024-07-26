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
    return null;
  }
};

export const getSeriesByCountrySlug = async (slug: string) => {
  try {
    const country = await db.country.findUnique({
      where: { slug },
    });

    if (!country) return null;

    const series = await db.serie.findMany({
      where: { countryID: country.id },
      include: {
        _count: {
          select: { coins: true },
        },
      },
    });

    return series;
  } catch (error) {
    return null;
  }
};
