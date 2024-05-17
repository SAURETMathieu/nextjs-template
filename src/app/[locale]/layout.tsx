import { SiteHeader } from "@/src/components/header/Header";
import { ThemeProvider } from "@/src/context/themeProvider";
import { fontSans } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import { TailwindIndicator } from "@/src/utils/tailwindIndicator";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "@/styles/globals.css";
import { Metadata } from "next";
import Footer from "@/src/components/footer/Footer";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = useMessages();
  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
