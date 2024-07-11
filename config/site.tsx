import { Home, UsersRound, Settings, Info, Dices, LifeBuoy, AlarmClockPlus } from "lucide-react";

export type SiteConfig = typeof siteConfig;

import { NavItem } from "@/types/nav";

export const siteConfig = {
  name: "",
  description:
    "A Next.js template with Radix UI and Tailwind CSS. Includes a custom theme switcher and a Tailwind CSS indicator for development",
  mainNav: [
    {
      title: "Home",
      href: "/",
      icon: <Home className="size-5" />,
    },
    {
      title: "Tables",
      href: "/tables",
      icon: <LifeBuoy className="size-5" />,
    },
    {
      title: "Dealers",
      href: "/dealers",
      icon: <UsersRound className="size-5" />,
    },
    {
      title: "Sessions",
      href: "/sessions",
      icon: <AlarmClockPlus className="size-5" />,
    },
    {
      title: "Draws",
      href: "/draws",
      icon: <Dices className="size-5" />,
    },
  ] as NavItem[],
  secondaryNav: [
    {
      title: "Help",
      href: "/help",
      icon: <Info className="size-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="size-5" />,
    },
  ] as NavItem[],
};
