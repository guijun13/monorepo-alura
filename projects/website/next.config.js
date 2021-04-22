const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@guijun13/ui']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
