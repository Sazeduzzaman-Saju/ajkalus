// app/middleware.js

import { NextResponse } from "next/server";

export function middleware(req) {
  // TODO : check the login info or jwt and another checking info
  // then opne the private route security
  // const token = req.cookies.get('authToken');
  const token = false;

  const url = req.nextUrl.clone();
  console.log(url.pathname);

  // const protectedRoutes = ['/dashboard'];

  // if (protectedRoutes.includes(url.pathname) && !token) {
  //   url.pathname = 'login'; // Redirect to login page
  //   return NextResponse.redirect(url);
  // }
  // Define protected routes
  const protectedRoutes = ["/dashboard"];

  
  if (
    protectedRoutes.some((route) => url.pathname.startsWith(route)) &&
    !token
  ) {
    url.pathname = "/login"; // Redirect to login page
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Protect these routes path
export const config = {
  matcher: ["/dashboard/:path*"],
};
