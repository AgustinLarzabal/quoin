import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, {
    message: "Invalid password",
  }),
});

export const signUpSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string({ message: "Invalid password" }).min(6),
});
