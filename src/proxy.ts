import type { NextRequest } from "next/server"; // incoming request
import { NextResponse } from "next/server"; // response we send back

export function proxy(req: NextRequest) { // this function runs on every request
  const session = req.cookies.get("admin_session");

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!session && req.nextUrl.pathname !== "/admin/login") {
      return NextResponse.redirect(new URL("/admin/login", req.url)); // block access by redirecting to login page
    }
  }

  return NextResponse.next(); // else, allow
}