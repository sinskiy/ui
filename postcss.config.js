import theme from "postcss-material-colors";
import postcssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";

export default {
  plugins: [theme({ primary: "#ff0000" }), postcssPresetEnv(), autoprefixer()],
};
