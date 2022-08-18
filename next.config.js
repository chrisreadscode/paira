/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@babel/preset-react",
  "@ericz1803/react-google-calendar",
  "@fullcalendar/list",
  "@fullcalendar/common",
  "@fullcalendar/react",
]);

const envs = {
  API_KEY: process.env.API_KEY,
  DATABASE_URL: process.env.DATABASE_URL
};

module.exports = withTM({
  env: envs,
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ]
  },
  swcMinify: true,
});
