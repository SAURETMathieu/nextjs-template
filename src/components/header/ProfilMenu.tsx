import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import NavigationLink from "@/components/link/NavigationLink";
import profilePlaceholder from '@/public/placeholder-user.jpg'

export default function ProfilMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full dark:border-none"
        >
          <Image
            src={profilePlaceholder}
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
            priority
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <NavigationLink href="/profile" aria-label="Link to profil page">
          <DropdownMenuItem>Profil</DropdownMenuItem>
        </NavigationLink>
        <NavigationLink href="/support" aria-label="Link to support page">
          <DropdownMenuItem>Support</DropdownMenuItem>
        </NavigationLink>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
