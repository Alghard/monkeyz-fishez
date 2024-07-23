/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      //Rewrites all API requests to our Express server
      {
        source: "/api/monkeys/:path*",
        destination: "http://localhost:3001/api/monkeys/:path*"
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.giphy.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'tenor.com',
        port: '',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
