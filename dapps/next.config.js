const basePath = "";
const envAssetPrefix = ".";
const assetPrefix = envAssetPrefix + "/";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    assetPrefix: isProd ? envAssetPrefix : "",
  },
  assetPrefix: isProd ? assetPrefix : "",
  basePath: isProd ? basePath : "",
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
