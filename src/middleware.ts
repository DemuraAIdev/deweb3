// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const headers = { 'accept-language': 'en-US,en,id;q=0.5' }
const languages = new Negotiator({ headers }).languages()
const locales = ['en', 'id']
const defaultLocale = 'en'

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  const locale = match(languages, locales, defaultLocale)
  return locale
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
