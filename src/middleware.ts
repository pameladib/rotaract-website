import type { NextRequest } from "next/server"; // incoming request
import { NextResponse } from "next/server"; // response we send back

export function middleware(req: NextRequest) { // this function runs on every request
  const isAdmin = req.cookies.get("isAdmin"); // reads the cookie from the request header

  if (req.nextUrl.pathname.startsWith("/admin")) { // checks if route includes /admin to protect it (other routes are public)
    if (!isAdmin && req.nextUrl.pathname !== "/admin/login") { // if admin not logged in and not on login page
      return NextResponse.redirect(new URL("/admin/login", req.url)); // block access by redirecting to login page
    }
  }

  return NextResponse.next(); // else, allow
}