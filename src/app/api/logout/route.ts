import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  adminSessionCookieOptions,
  destroyAdminSession,
} from "@/lib/auth";

export async function POST() {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (token) {
    await destroyAdminSession(token);
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    ...adminSessionCookieOptions(),
    maxAge: 0,
  });

  return response;
}
