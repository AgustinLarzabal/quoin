"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleSignOut = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-6">
          {session?.user.image ? (
            <AvatarImage
              src={session?.user.image}
              alt={session.user.name ?? ""}
            />
          ) : (
            <AvatarFallback>{session?.user.name.charAt(0)}</AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="text-secondary">
        <div className="flex flex-col gap-1 p-2">
          <span className="text-primary text-sm">{session?.user.name}</span>
          <span className="text-xs">{session?.user.email}</span>
        </div>
        <DropdownMenuSeparator />
        <Link href="/settings">
          <DropdownMenuItem className="text-sm">
            Account Settings
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
