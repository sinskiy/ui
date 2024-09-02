import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: (Story) => (
    <div style={{ maxWidth: 1280, margin: "auto", paddingTop: "2rem" }}>
      <Story />
    </div>
  ),
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    logo: "coolWebsite",
    navItems: [
      <a href="/link">nav item 1</a>,
      <a href="/link">nav item 2</a>,
      <a href="/link">active nav item</a>,
    ],
    activeItemIndex: 2,
  },
};
