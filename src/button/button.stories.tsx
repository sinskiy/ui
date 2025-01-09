import type { Meta, StoryObj } from "@storybook/react";
import { ButtonHTMLAttributes } from "react";
import classes from "../components.module.css";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props}>{children ?? "Button"}</button>
);

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: classes.button,
  },
};
export const WithIcon: Story = {
  args: {
    className: `${classes.button} ${classes.withIcon}`,
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </svg>
        Button
      </>
    ),
  },
};
export const NoClass: Story = {};
