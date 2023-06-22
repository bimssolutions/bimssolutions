/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bimss-db.pockethost.io",
      },
    ],
  },
  distDir: "build",
}

module.exports = nextConfig
