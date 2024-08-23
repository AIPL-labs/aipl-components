import { AiplButton } from './AiplButton';
import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
type StoryProps = ComponentProps<typeof AiplButton> & {
    papId: string;
    aiplHomeUrl: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
export declare const Example: StoryObj<StoryProps>;
export declare const Play: StoryObj<StoryProps>;
//# sourceMappingURL=AiplButton.stories.d.ts.map