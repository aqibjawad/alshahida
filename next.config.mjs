/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // distDir: "oust",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add port configuration
  serverRuntimeConfig: {
    port: 4000, // or whatever port number you want
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (config.optimization && config.optimization.splitChunks) {
        config.optimization.splitChunks.maxInitialRequests = 25;
        config.optimization.splitChunks.maxAsyncRequests = 25;
      } else if (config.optimization) {
        config.optimization.splitChunks = {
          maxInitialRequests: 25,
          maxAsyncRequests: 25,
        };
      } else {
        config.optimization = {
          splitChunks: {
            maxInitialRequests: 25,
            maxAsyncRequests: 25,
          },
        };
      }
    }
    return config;
  },
};

export default nextConfig;
