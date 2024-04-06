const path = require("path");

const nextConfig = {
  webpack: (config, { isServer }) => {

    if (!isServer) {
      if (!config.optimization.splitChunks) {
        config.optimization.splitChunks = {};
      }
      if (!config.optimization.splitChunks.cacheGroups) {
        config.optimization.splitChunks.cacheGroups = {};
      }
      config.optimization.splitChunks.cacheGroups.vendors = {
        test: /[\\/]node_modules[\\/]/,
        name: "vendors",
        chunks: "async",
        enforce: true,
        type: 'async',
      };
      config.module.rules.push({
        test: /\/fonts\/[^\/]+\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/fonts",
              name: "[name].[ext]",
            },
          },
        ],
      });

      config.optimization.minimize = true;
      config.optimization.sideEffects = true;
    }

    return config;
  },
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,
  optimizeFonts: true,
  experimental: {
    optimizePackageImports: [
      "bootstrap",
      "next",
      "react-bootstrap",
      "sharp",
      "@fullhuman/postcss-purgecss",
      "@types/node",
      "autoprefixer",
      "eslint",
      "eslint-config-next",
      "postcss",
      "postcss-flexbugs-fixes",
      "postcss-preset-env",
      "sass",
      "typescript",
    ],
  },
  swcMinify: true,
};
module.exports = nextConfig;
