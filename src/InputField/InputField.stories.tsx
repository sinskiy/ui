import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta = {
  title: "InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Input label",
    id: "input-id",
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Input label",
    id: "input-with-placeholder-id",
    placeholder: "Input placeholder",
  },
};
