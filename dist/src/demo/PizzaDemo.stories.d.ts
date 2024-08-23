import { Meta, StoryObj } from '@storybook/react/*';
import { ComponentProps } from 'react';
import { PizzaDemo } from './PizzaDemo';
type StoryProps = ComponentProps<typeof PizzaDemo> & {
    papId: string;
    aiplHomeUrl: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
export declare const Demo: StoryObj<StoryProps>;
//# sourceMappingURL=PizzaDemo.stories.d.ts.map