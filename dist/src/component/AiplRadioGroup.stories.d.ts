import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { AiplRadioGroup } from './AiplRadioGroup';
type StoryProps = ComponentProps<typeof AiplRadioGroup> & {
    papId: string;
    aiplHomeUrl: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
export declare const Example: StoryObj<StoryProps>;
//# sourceMappingURL=AiplRadioGroup.stories.d.ts.map