/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  images: {
    domains: ["127.0.0.1", "bimss-db.pockethost.io"],
  },
  distDir: "/build",
}

module.exports = nextConfig
