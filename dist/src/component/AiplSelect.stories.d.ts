import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AiplSelect } from './AiplSelect';
type StoryProps = ComponentProps<typeof AiplSelect> & {
    papId: string;
    aiplHomeUrl: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
export declare const Example: StoryObj<StoryProps>;
export declare const Play: StoryObj<StoryProps>;
//# sourceMappingURL=AiplSelect.stories.d.ts.map