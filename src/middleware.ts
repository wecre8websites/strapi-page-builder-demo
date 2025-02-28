import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from "./i18n.config"

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    const searchParams = request.nextUrl.searchParams

    if (locale === i18n.defaultLocale) {
      return NextResponse.rewrite(
        new URL(
          `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
          request.url,

        ) + (searchParams?.size ? `?${searchParams.toString()}` : '')
      )

    } else {
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
          request.url,

        ) + (searchParams?.size ? `?${searchParams.toString()}` : '')
      )
    }
  }
  let cleanPathName = pathname;
  const locale = getLocale(request)
  if (pathnameIsMissingLocale && locale === i18n.defaultLocale) {

    // we want to REMOVE the default locale from the pathname,
    // and later use a rewrite so that Next will still match
    // the correct code file as if there was a locale in the pathname
    cleanPathName = pathname.replace(`/${i18n.defaultLocale}`, "");
    const redirectUrl = new URL(request.url.replace(pathname, cleanPathName))

    return NextResponse.redirect(redirectUrl);
  }

}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sw.js|editor).*)']
}