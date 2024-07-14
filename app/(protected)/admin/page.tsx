import { RoleGate } from "@/components/auth";
import { UserRole } from "@prisma/client";

export default async function AdminPage() {
  return (
    <>
      <RoleGate allowedRole={UserRole.ADMIN}>
        Only admins should see this content
      </RoleGate>
    </>
  );
}
