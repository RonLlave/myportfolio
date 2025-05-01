import { NextResponse } from "next/server";

export function middleware(request) {
  // Check if the current path is the root ('/')
  //   if (request.nextUrl.pathname === "/") {
  //     // Redirect to /about
  //     return NextResponse.redirect(new URL("/#about", request.url));
  //   }

  // If not on the root path, just continue with the request
  return NextResponse.next();
}
