/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Serve static files from contents folder
  async rewrites() {
    return [
      {
        source: '/resume.pdf',
        destination: '/contents/Swarnabha_Ghosh_Resume.pdf',
      },
    ];
  },
}

module.exports = nextConfig
