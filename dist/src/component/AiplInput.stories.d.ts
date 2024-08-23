import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { AiplInput } from './AiplInput';
type StoryProps = ComponentProps<typeof AiplInput> & {
    papId: string;
    aiplHomeUrl: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
export declare const TextExample: StoryObj<StoryProps>;
export declare const CheckboxExample: StoryObj<StoryProps>;
//# sourceMappingURL=AiplInput.stories.d.ts.map