/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images : {
    unoptimized : true,
    remotePatterns : [ {
      protocol : 'http',
      hostname : '127.0.0.1',
      port : '1337',
      pathname : '/uploads/**',
    } ]
  }
}

                   module.exports = nextConfig
