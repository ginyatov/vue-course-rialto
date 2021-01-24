const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@css": path.resolve(__dirname, "./src/assets/css"),
        "@img": path.resolve(__dirname, "./src/assets/img"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@ui": path.resolve(__dirname, "./src/components/ui"),
      },
    },
  },
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Фриланс биржа",
    },
  },
};
