import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/reset.css";
import "../src/index.css";
import "../src/components.css";
import "./theme.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
