"use server";

import { db } from "@/db";
import { user } from "@/db/schema";
import { authAction } from "@/lib/safe-action";
import { eq } from "drizzle-orm";
import { z } from "zod";

const schema = z.object({
  userId: z.string(),
});

export const deleteUserAction = authAction
  .schema(schema)
  .action(async ({ parsedInput: { userId } }) => {
    await db.delete(user).where(eq(user.id, userId));
  });
