import { AiplButton } from "./AiplButton";
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import type { AiplFormConfig } from "../types/AiplFormConfig";
import { AiplFormConfigProvider } from "../providers/AiplFormConfigProvider";

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

const mockConfig: AiplFormConfig = {
  // papId: "access-point-1723587253991-ff3eef0f-6a7f-415f-943a-a5fc81d0d3b4",
  papId: "access-point-1723591970176-b702a779-664d-47e1-9282-59ac12cbad73",
  fields: {
    exampleButton: { description: "This is an example button description" },
  },
  // homeUrl: "http://localhost:8787",
  homeUrl: "https://ai-worker.intelligage.workers.dev",
};

export const ExampleAiplButton: StoryObj<StoryProps> = {
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
