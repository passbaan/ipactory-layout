// vue.config.js
import path from "path";

export default {
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      // eslint-disable-next-line no-undef
      patterns: [path.resolve(__dirname, "./src/styles/imports.styl")],
    });
}
