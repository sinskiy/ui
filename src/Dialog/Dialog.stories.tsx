import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../InputField/InputField";
import Dialog, { Props } from "./Dialog";
import { RefObject, useRef } from "react";

const ButtonDialog = (args: Omit<Props, "ref">) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button onClick={() => dialogRef.current?.showModal()} className="button">
        open
      </button>
      <Dialog ref={dialogRef as RefObject<HTMLDialogElement>} {...args} />
    </>
  );
};

const meta = {
  title: "Dialog",
  component: ButtonDialog,
  parameters: {
    layout: "centered",
  },
  args: {
    onLoad: (e) => e.currentTarget.showModal(),
    dialogTitle: "hello, world!",
    dialogDescription:
      "I hate people I hate people I hate people I hate people I hate people I hate people",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: undefined,
    loading: false,
    children: (
      <>
        <InputField id="username" type="text" required error={undefined} />
        <InputField id="password" type="password" required error={undefined} />
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
