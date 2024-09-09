import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 界面的中间件
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("page middleware", request.nextUrl.toString());
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
