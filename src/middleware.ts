import createMiddleware from "next-intl/middleware";

import { localePrefix, locales } from "./navigation";

export default createMiddleware({
  localePrefix,
  locales,
  defaultLocale: "fr",
});

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};
