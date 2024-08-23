import type { Meta, StoryObj } from "@storybook/react/*";
import type { ComponentProps } from "react";
import { AiplFormConfigProvider } from "../provider/AiplFormConfigProvider";
import type { AiplComponentContextConfig } from "../type/AiplComponentContextConfig";
import { PizzaDemo } from "./PizzaDemo";
import { AiplSelect } from "../component/AiplSelect";
import { mockConfig } from "../component/mockConfig";

type StoryProps = ComponentProps<typeof PizzaDemo> & {
  papId: string;
  aiplHomeUrl: string;
};

const meta: Meta<StoryProps> = {
  component: PizzaDemo,
  tags: ["autodocs"],
  argTypes: {
    papId: { control: { type: "text" } },
    aiplHomeUrl: { control: { type: "text" } },
  },
};

export default meta;

export const Demo: StoryObj<StoryProps> = {
  render: ({ papId, aiplHomeUrl, ...args }) => (
    <AiplFormConfigProvider
      config={{ ...mockConfig, papId, homeUrl: aiplHomeUrl }}
    >
      <PizzaDemo {...args} />
    </AiplFormConfigProvider>
  ),
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    // aiplName: "exampleButton",
    // children: "click me",
  },
};
