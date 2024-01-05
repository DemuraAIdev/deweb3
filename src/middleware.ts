import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers)

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  // Set the Access-Control-Allow-Origin header
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('default-src', "'self'")
  response.headers.set('script-src', "'self' 'unsafe-inline' 'unsafe-eval' *.vahryiskandar.my.id")
  response.headers.set('style-src', "'self' 'unsafe-inline' *.vahryiskandar.my.id")
  response.headers.set(
    'img-src',
    "'self' data: *.vahryiskandar.my.id *.githubusercontent.com a.ppy.sh *.github.com"
  )

  return response
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
