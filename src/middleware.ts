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
  // response.headers.set('default-src', "'self'")
  // response.headers.set('script-src', "'self' 'unsafe-inline' 'unsafe-eval' *.vahryiskandar.my.id")
  // response.headers.set('style-src', "'self' 'unsafe-inline' *.vahryiskandar.my.id")
  // const ContentSecurityPolicy = `
  //       default-src 'self';
  //       script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vahryiskandar.my.id giscus.app;
  //       child-src  *.youtube.com *.google.com *.twitter.com giscus.app;
  //       style-src 'self' 'unsafe-inline' 'unsafe-eval';
  //       font-src 'self';
  //       img-src 'self' data: *.vahryiskandar.my.id *.google.com *.githubusercontent.com *.github.com *.giscus.app;
  //       worker-src 'self' *.youtube.com *.google.com *.twitter.com;
  //       connect-src *;
  //   `
  // response.headers.set('Content-Security-Policy', ContentSecurityPolicy.replace(/\n/g, ''))
  // response.headers.set('X-Content-Type-Options', 'nosniff')

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
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
    },
  ],
}
