import { UserRole } from "@prisma/client";
import { z } from "zod";

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
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "password is required!",
      path: ["password"],
    }
  );

export const SettingsAccountSchema = z.object({
  name: z.optional(
    z
      .string()
      .min(2, {
        message: "Name must be at least 2 characters.",
      })
      .max(30, {
        message: "Name must not be longer than 30 characters.",
      })
  ),

  dob: z.optional(
    z.date({
      message: "A date of birth is required.",
    })
  ),
  language: z.optional(
    z.string({
      message: "Please select a language.",
    })
  ),
});

export const SettingsAppearanceSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
});
