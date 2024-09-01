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
        <InputField
          label="username"
          type="text"
          required
          minLength={1}
          maxLength={30}
        />
        <InputField
          label="password"
          type="password"
          required
          minLength={1}
          maxLength={30}
        />
      </>
    ),
  },
};

export const WithChildrenAndTitle: Story = {
  args: {
    formTitle: "Form title",
    children: <>{WithChildren.args.children}</>,
  },
};

export const WithChildrenAndTitleAndDescription: Story = {
  args: {
    formTitle: "Form title",
    formDescription:
      "Very long form description for a user. With a description that long they will definitelly understand everything about your form.",
    children: <>{WithChildren.args.children}</>,
  },
};

export const WithChildrenAndLoading: Story = {
  args: {
    children: <>{WithChildren.args.children}</>,
    loading: true,
  },
};
