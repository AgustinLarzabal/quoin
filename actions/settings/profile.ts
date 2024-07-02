"use server";

import { z } from "zod";

import { SettingsProfileSchema } from "@/app/(public)/schemas";
import { getUserById } from "@/data";
import { db } from "@/lib";
import { currentUser } from "@/lib/auth";

export const settingsProfile = async (
  values: z.infer<typeof SettingsProfileSchema>
) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: { ...values },
  });

  return { success: "Settings updated!" };
};
