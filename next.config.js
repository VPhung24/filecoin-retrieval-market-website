/**
 * Module dependencies.
 */

const {
  WebpackBundleSizeAnalyzerPlugin,
} = require("webpack-bundle-size-analyzer");

/**
 * Export next configuration.
 */

module.exports = {
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    vercelBaseUrl: process.env.VERCEL_URL,
  },
  trailingSlash: true,
};
