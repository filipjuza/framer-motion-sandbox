/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/keyframes',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
