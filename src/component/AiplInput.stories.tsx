import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { AiplFormConfigProvider } from "../provider/AiplFormConfigProvider";
import { mockConfig } from "./mockConfig";
import { AiplInput } from "./AiplInput";

type StoryProps = ComponentProps<typeof AiplInput> & {
  papId: string;
  aiplHomeUrl: string;
};

const meta: Meta<StoryProps> = {
  component: AiplInput,
  tags: ["autodocs"],
  argTypes: {
    papId: { control: { type: "text" } },
    aiplHomeUrl: { control: { type: "text" } },
  },
};

export default meta;

export const Example: StoryObj<StoryProps> = {
  render: ({ papId, aiplHomeUrl, ...args }) => (
    <AiplFormConfigProvider
      config={{ ...mockConfig, papId, homeUrl: aiplHomeUrl }}
    >
      <AiplInput {...args} />
    </AiplFormConfigProvider>
  ),
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "specialInstructions",
  },
};
