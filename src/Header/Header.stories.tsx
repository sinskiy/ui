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
      {
        href: "/link2",
        itemLabel: "link 1",
      },
      {
        href: "/link2",
        itemLabel: "link 2",
      },
      {
        href: "/link2",
        itemLabel: "link 2",
      },
    ],
  },
};
