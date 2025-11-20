import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/api-demo", request.url));
//     // return NextResponse.rewrite(new URL("/api-demo", request.url));
//   }
//   return NextResponse.next();
// }
export function middleware(request: NextRequest) {
  const theme = request.cookies.get("theme")?.value || "light";
  if (!theme) {
    NextResponse.next().cookies.set("theme", "light");
  }
  return NextResponse.next();
}

// run on specific routes
export const config = {
  matcher: "/profile", // only apply middleware to /profile
};
