const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    port: 4200,
    host: "localhost",
    proxy: {
      "/api": "http://localhost:3333",
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
