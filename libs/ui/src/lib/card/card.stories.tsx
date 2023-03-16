import type { ComponentStory, Meta } from '@storybook/react';
import { Card } from './card';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default Story;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  children: <div className='border border-dashed h-5 border-green-600 rounded-sm'></div>
}

export const ExplicitSize = Template.bind({});
ExplicitSize.args = {
  children: <div className='border border-dashed h-full border-green-600 rounded-sm'></div>,
  className: 'w-[200px] h-[200px]'
}

export const Clickable = Template.bind({});
Clickable.args = {
  children: <div className='border border-dashed h-full border-green-600 rounded-sm'></div>,
  className: 'w-[200px] h-[200px]',
  clickable: true
}
