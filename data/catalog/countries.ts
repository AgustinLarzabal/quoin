import { db } from "@/lib/db";

export const getCountries = async () => {
  try {
    const countries = await db.country.findMany({
      include: {
        _count: {
          select: { coins: true },
        },
      },
    });

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

export const getCountryById = async (id: string) => {
  try {
    const country = await db.country.findUnique({
      where: { id },
    });

    return country;
  } catch {
    return null;
  }
};
