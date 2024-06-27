import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, {
    message: "Invalid password",
  }),
});

export const signUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  firstname: z.string(),
  lastname: z.string(),
  password: z.string({ message: "Invalid password" }).min(6),
});

export const resetSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const newPasswordSchema = z.object({
  password: z.string({ message: "Minimun 6 characters required" }).min(6),
});
