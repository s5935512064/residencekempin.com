const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fancyapps/ui", "vanilla-cookieconsent"]);
const webpack = require("webpack");


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
}

module.exports = withPlugins([nextConfig, withTM]);