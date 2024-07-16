import { z } from "zod";

export const AddCountrySchema = z.object({
  isoCode: z.string(),
  name: z.string(),
});

export const AddSeriesSchema = z.object({
  name: z.string(),
  country: z.string(),
});
