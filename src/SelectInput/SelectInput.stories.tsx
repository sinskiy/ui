import type { Meta, StoryObj } from "@storybook/react";
import { SelectInput } from "./SelectInput";

const meta = {
  title: "SelectInput",
  component: SelectInput,
  parameters: {
    layout: "centered",
  },
  args: {
    id: "id",
    label: "label",
  },
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: undefined,
    type: "text",
    values: ["hello", "world"],
    isSelected: false,
    setIsSelected: () => {},
  },
};
export const Selected: Story = {
  args: {
    error: undefined,
    type: "text",
    values: ["hello", "world"],
    isSelected: true,
    setIsSelected: () => {},
  },
};
export const WithError: Story = {
  args: {
    error: "hello, world!",
    type: "text",
    values: ["hello", "world"],
    isSelected: false,
    setIsSelected: () => {},
  },
};
