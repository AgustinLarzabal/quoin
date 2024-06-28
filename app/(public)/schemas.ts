import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, {
    message: "Invalid password",
  }),
});

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  firstname: z.string(),
  lastname: z.string(),
  password: z.string({ message: "Invalid password" }).min(6),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const NewPasswordSchema = z.object({
  password: z.string({ message: "Minimun 6 characters required" }).min(6),
});
