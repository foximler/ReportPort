module.exports = {
  publicPath: "/",
  outputDir: "../server/public/",
  lintOnSave: false,
  pages: {
    index: {
      entry: "src/main.js",
      filename: "../public/index.html",
    },
  },
};
