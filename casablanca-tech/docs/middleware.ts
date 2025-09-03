import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n/config';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale,

  // Always use prefix for locale
  localePrefix: 'always'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ja|en)/:path*']
};