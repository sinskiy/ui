import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Input placeholder",
  },
};
