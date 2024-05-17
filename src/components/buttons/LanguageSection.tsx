"use client";

import { useState } from "react";
import { Icons } from "@/src/icons/icons";
import { useLocale, useTranslations } from "next-intl";

import { useRouter } from "../../navigation";

function LanguageSection() {
  const locale = useLocale();
  const [language, setLanguage] = useState(locale);
  const t = useTranslations("ThemeSwitcher");
  const router = useRouter();

  const handleLanguage = (newLanguage: string) => {
    router.replace(`/`, { locale: newLanguage });
    setLanguage(newLanguage);
  };

  return (
    <section className="flex">
      <div className="flex gap-1 border border-current">
        <button
          onClick={() => handleLanguage("fr")}
          aria-label={t("ariaFrench")}
          className={`${
            language === "fr" ? "bg-foreground text-foreground" : ""
          } flex cursor-pointer items-center justify-center gap-1 hover:bg-foreground/70`}
        >
          <Icons.frenchFlag className="size-5" />
        </button>
        <button
          onClick={() => handleLanguage("en")}
          aria-label={t("ariaEnglish")}
          className={`${
            language === "en" ? "bg-foreground" : ""
          } flex cursor-pointer items-center justify-center gap-1 rounded-2xl p-2 hover:bg-foreground/70`}
        >
          <Icons.britishFlag className="size-5" />
        </button>
      </div>
    </section>
  );
}

export default LanguageSection;
