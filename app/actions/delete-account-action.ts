"use server";

import { db } from "@/db";
import { user } from "@/db/users";
import { authClient } from "@/lib/auth-client";
import { authActionClient } from "@/lib/safe-action";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const deleteAccountAction = authActionClient
  .metadata({ actionName: "deleteAccountAction" })
  .action(async ({ ctx: { userId } }) => {
    await db.delete(user).where(eq(user.id, userId));

    await authClient.signOut();

    redirect("/login");
  });
