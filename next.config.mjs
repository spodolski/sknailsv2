/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "sknails.co.uk",
      "utjfaspanvjuqdpwbwwg.supabase.co",
      "lh3.googleusercontent.com",
    ],
  },
  experimental: { esmExternals: true },
};

export default nextConfig;
