import createMiddleware from "next-intl/middleware";
const locales = ["en", "urd"];
export default createMiddleware({
  locales,
  defaultLocale: "urd",
  // localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(de|en)/:path*'],
  matcher: ["/((?!api|_next|(?:[.-]*)\\..*).*)"],
};
