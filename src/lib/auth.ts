import { createHash, randomBytes } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const ADMIN_SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

export function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export function adminSessionCookieOptions() {
  return {
    httpOnly: true,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_MAX_AGE_SECONDS,
  };
}

export async function createAdminSession() {
  const token = randomBytes(32).toString("hex");

  await prisma.adminSession.create({
    data: {
      tokenHash: hashToken(token),
      expiresAt: new Date(Date.now() + SESSION_MAX_AGE_SECONDS * 1000),
    },
  });

  return token;
}

export async function destroyAdminSession(token: string) {
  await prisma.adminSession.deleteMany({
    where: { tokenHash: hashToken(token) },
  });
}

export async function getAdminSession() {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return null;

  const session = await prisma.adminSession.findUnique({
    where: { tokenHash: hashToken(token) },
  });
  if (!session) return null;

  if (session.expiresAt <= new Date()) {
    await prisma.adminSession.delete({ where: { id: session.id } });
    return null;
  }

  return session;
}

export async function requireAdminPage() {
  if (!(await getAdminSession())) {
    redirect("/admin/login");
  }
}

export async function requireAdminApi() {
  if (await getAdminSession()) return null;

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
