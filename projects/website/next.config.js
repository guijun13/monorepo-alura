const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@guijun13/common-modules']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
