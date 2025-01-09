import type { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";
import InputField from "../InputField/InputField";

const meta = {
  title: "Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: undefined,
    loading: false,
    children: (
      <>
        <>
          <InputField id="username" type="text" required error={undefined} />
          <InputField
            id="password"
            type="password"
            required
            error={undefined}
          />
        </>
      </>
    ),
  },
};
export const WithoutReset: Story = {
  args: {
    error: undefined,
    loading: false,
    showReset: false,
    children: (
      <>
        <>
          <InputField id="username" type="text" required error={undefined} />
          <InputField
            id="password"
            type="password"
            required
            error={undefined}
          />
        </>
      </>
    ),
  },
};
export const Loading: Story = {
  args: {
    error: undefined,
    loading: true,
    children: (
      <>
        <>
          <InputField id="username" type="text" required error={undefined} />
          <InputField
            id="password"
            type="password"
            required
            error={undefined}
          />
        </>
      </>
    ),
  },
};
export const WithError: Story = {
  args: {
    error: "Oh no!",
    loading: false,
    children: (
      <>
        <>
          <InputField
            id="username"
            type="text"
            required
            error="Inputs can have errors too"
          />
          <InputField id="password" type="password" required error="Yeah" />
        </>
      </>
    ),
  },
};
export const TitleAndDescription: Story = {
  args: {
    formTitle: "Hello!",
    formDescription:
      "I hate people I hate people I hate people I hate people I hate people I hate people I hate people I hate people I hate people",
    error: undefined,
    loading: false,
    children: (
      <>
        <>
          <InputField id="username" type="text" required error={undefined} />
          <InputField
            id="password"
            type="password"
            required
            error={undefined}
          />
        </>
      </>
    ),
  },
};
