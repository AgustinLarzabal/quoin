import { z } from "zod";

export const AddCountrySchema = z.object({
  isoCode: z.string(),
  name: z.string(),
});
