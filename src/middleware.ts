import { NextRequest, NextResponse } from 'next/server'
// import { get } from '@vercel/edge-config'
// import { auth as authMiddleware } from '@/auth'
export async function middleware(req: NextRequest) {
  // Check Edge Config to see if the maintenance page should be shown
  const isInMaintenanceMode = false

  // next auth middleware

  // If in maintenance mode, point the url pathname to the maintenance page
  if (isInMaintenanceMode) {
    req.nextUrl.pathname = `/maintenance`

    // Rewrite to the url
    return NextResponse.rewrite(req.nextUrl)
  }
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
