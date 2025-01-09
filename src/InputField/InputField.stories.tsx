import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta = {
  title: "InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  args: {
    id: "id",
    label: "label",
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { error: undefined, type: "string" },
};
export const Required: Story = {
  args: {
    required: true,
    type: "string",
    error: undefined,
  },
};
export const WithError: Story = {
  args: {
    type: "number",
    error: "Must be a number",
  },
};
