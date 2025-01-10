import type { Meta, StoryObj } from "@storybook/react";
const Select = ({ className }: { className: string }) => (
  <select name="pets" id="pet-select" className={className}>
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </select>
);

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  args: {
    className: "input",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
