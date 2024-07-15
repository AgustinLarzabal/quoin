import { RoleGate } from "@/components/auth";
import { UserRole } from "@prisma/client";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RoleGate allowedRole={UserRole.ADMIN}>{children}</RoleGate>;
}
