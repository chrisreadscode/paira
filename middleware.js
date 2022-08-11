import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL('/loginalt', request.url));
}

export const config = {
    matcher: ['/', '/index'],
}