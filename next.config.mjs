/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
  devIndicators: false,
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
