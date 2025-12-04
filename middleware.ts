import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Set headers for layout.tsx to use
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', url.pathname)
  
  // Set x-forwarded-proto header (use https for production domain, http for localhost)
  const isProductionDomain = url.hostname === 'cowboysafari.buzz' || url.hostname.includes('cowboysafari.buzz')
  const proto = isProductionDomain ? 'https' : (url.protocol === 'https:' ? 'https' : 'http')
  requestHeaders.set('x-forwarded-proto', proto)
  
  // Skip HTTPS redirect in development environment
  const isDevelopment = process.env.NODE_ENV === 'development' || url.hostname === 'localhost'
  
  // Optimize redirects: Handle www → non-www + HTTPS in one redirect to avoid redirect chains
  // This handles cases like: http://www.cowboysafari.buzz → https://cowboysafari.buzz (single redirect)
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '')
    if (!isDevelopment) {
      url.protocol = 'https:'
    }
    return NextResponse.redirect(url, 301)
  }
  
  // HTTP → HTTPS redirect (301 Permanent) - Only in production
  // This handles cases like: http://cowboysafari.buzz → https://cowboysafari.buzz
  if (!isDevelopment && url.protocol === 'http:') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

