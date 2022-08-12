/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@babel/preset-react",
  "@ericz1803/react-google-calendar",
  "@fullcalendar/list",
  "@fullcalendar/common",
  "@fullcalendar/react",
]);

module.exports = withTM({
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API_KEY: process.env.API_KEY,
    NODE_ENV: 'dev',
  }
});

// import { NextResponse } from "next/server";

// export function middleware(request) {
//   return NextResponse.redirect(new URL('/login', request.url));
// }

// export const config = {
//     matcher: ['/', '/index'],
// }