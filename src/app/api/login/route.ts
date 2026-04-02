import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const response = NextResponse.json({ success: true }); // we store the response first because we need to modify it (add the cookie) before returning it 

    response.cookies.set("isAdmin", "true", { // cookies are delivered through the HTTP response headers, so we must attach them to the response before sending it
      httpOnly: true, // JS cannot access this cookie -> protects against XSS attacks
      path: "/", // cookie is available on all routes
    });

    return response; // the server will send the response, browser will receive it and store the cookie then send it again in every HTTP request
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}