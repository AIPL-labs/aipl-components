import { Foo } from "./Foo";

import { ComponentProps } from "react";
import { Meta, type StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Foo>;

const meta: Meta<StoryProps> = {
  component: Foo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const PrimaryFoo: Story = {
  args: {
    bar: true,
    list: ["one", "two", "three"],
  },
};
