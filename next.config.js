const { parsed: localEnv } = require("dotenv").config();
const withCSS = require("@zeit/next-css");
const DotEnv = require("dotenv-webpack");
const webpack = require("webpack");
const path = require("path");

module.exports = withCSS({
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.node = {
      fs: "empty",
    };

    config.plugins.push(
      new webpack.DefinePlugin({
        API_KEY: JSON.stringify(process.env.SHOPIFY_API_KEY),
      })
    );
    config.plugins.push(
      new DotEnv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      })
    );

    return config;
  },
});
