const path = require("path");
module.exports = {
  plugins: {
    "postcss-import": {
      resolve(id, basedir) {
        // resolve node_modules, @import '~normalize.css/normalize.css'
        // similar to how css-loader's handling of node_modules
        if (id.startsWith("~")) {
          return path.resolve("./node_modules", id.slice(1));
        }

        // resolve relative path, @import './components/style.css'
        return path.resolve(basedir, id);
      },
    },
    "postcss-simple-vars": {},
    "postcss-nested": {},
    "postcss-url": {},
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: "> 1%, IE 6, Explorer >= 10, Safari >= 7",
    },
  },
};
