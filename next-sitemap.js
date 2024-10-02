/**
 * Export `sitemap` config.
 */

module.exports = {
  generateRobotsTxt: true,
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'localhost:3000',
};
