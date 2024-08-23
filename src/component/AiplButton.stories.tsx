import { AiplButton } from "./AiplButton";
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import type { AiplComponentContextConfig } from "../type/AiplComponentContextConfig";
import { AiplFormConfigProvider } from "../provider/AiplFormConfigProvider";
import { playAsk, playTypes } from "../play/play";
import { mockConfig } from "./mockConfig";

type StoryProps = ComponentProps<typeof AiplButton> & {
  papId: string;
  aiplHomeUrl: string;
};

const meta: Meta<StoryProps> = {
  component: AiplButton,
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
      <AiplButton {...args} />
    </AiplFormConfigProvider>
  ),
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "exampleButton",
    children: "click me",
  },
};

export const Play: StoryObj<StoryProps> = {
  render: ({ papId, aiplHomeUrl, ...args }) => (
    <AiplFormConfigProvider
      config={{ ...mockConfig, papId, homeUrl: aiplHomeUrl }}
    >
      <AiplButton
        onAction={(context) => {
          playAsk(context);
        }}
        {...args}
      />
    </AiplFormConfigProvider>
  ),
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "exampleButton",
    children: "play",
  },
};
