import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { InputField } from "../InputField/InputField";

const meta = {
  title: "Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithChildren: Story = {
  args: {
    children: (
      <>
        <InputField label="username" type="text" />
        <InputField label="password" type="password" />
      </>
    ),
  },
};
