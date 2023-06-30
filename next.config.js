/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  images: {
    domains: ["bimss-db.pockethost.io"],
  },
  output: "standalone",
}

module.exports = nextConfig
