import Link from "next/link";
import LanguageSection from "@/src/components/buttons/languageSelect";
import { ThemeToggle } from "@/src/components/buttons/themeToggle";
import { MainNav } from "@/src/components/header/MainNav";
import { buttonVariants } from "@/src/components/ui/button";
import { Icons } from "@/src/icons/icons";

import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.github className="size-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
            <LanguageSection />
          </nav>
        </div>
      </div>
    </header>
  );
}
