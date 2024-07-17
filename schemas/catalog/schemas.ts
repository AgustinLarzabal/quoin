import { z } from "zod";

export const AddCountrySchema = z.object({
  isoCode: z.string(),
  name: z.string(),
});

export const AddSeriesSchema = z.object({
  country: z.string(),
  name: z.string(),
});

export const AddCoinSchema = z.object({
  code: z.string(),
  country: z.string(),
  name: z.string(),
  series: z.string(),
});
