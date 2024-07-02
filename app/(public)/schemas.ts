import { UserRole } from "@prisma/client";
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, {
    message: "Invalid password",
  }),
  code: z.optional(z.string()),
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

export const SettingsProfileSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && data.password) {
        return false;
      }

      return true;
    },
    {
      message: "password is required!",
      path: ["password"],
    }
  );
