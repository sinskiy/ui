import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    themeColor: "primary",
  },
};
export const Loading: Story = {
  args: {
    themeColor: "primary",
    loading: true,
  },
};
export const Secondary: Story = {
  args: {
    themeColor: "secondary",
  },
};
export const Tertiary: Story = {
  args: {
    themeColor: "tertiary",
  },
};
export const Error: Story = {
  args: {
    themeColor: "error",
  },
};
export const PrimaryContainer: Story = {
  args: { themeColor: "primary-container" },
};
export const SecondaryContainer: Story = {
  args: { themeColor: "secondary-container" },
};
export const TertiaryContainer: Story = {
  args: { themeColor: "tertiary-container" },
};
export const ErrorContainer: Story = {
  args: { themeColor: "error-container" },
};
export const SurfaceContainer: Story = {
  args: { themeColor: "surface", containerModifier: "surface-container" },
};
export const SurfaceContainerHigh: Story = {
  args: { themeColor: "surface", containerModifier: "surface-container-high" },
};
