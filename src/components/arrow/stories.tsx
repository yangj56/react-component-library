import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Arrow from '.';
import { Direction, Size } from '../../utils/typings';

export default {
  title: 'Arrow',
  component: Arrow,
  argTypes: {
    direction: {
      defaultValue: Direction.UP,
      type: 'string',
      control: {
        type: 'select',
        options: [Direction.UP, Direction.DOWN, Direction.UNI],
      },
    },
    displaySize: {
      defaultValue: Size.SMALL,
      type: 'string',
      control: {
        type: 'select',
        options: [Size.LARGE, Size.NORMAL, Size.SMALL],
      },
    },
  },
} as ComponentMeta<typeof Arrow>;

const Template: ComponentStory<typeof Arrow> = (args) => <Arrow {...args} />;

export const DownArrow = Template.bind({});
DownArrow.args = {
  direction: Direction.DOWN,
  displaySize: Size.NORMAL,
};

export const UpArrow = Template.bind({});
UpArrow.args = {
  direction: Direction.UP,
  displaySize: Size.NORMAL,
};
export const DownUpArrow = Template.bind({});
DownUpArrow.args = {
  direction: Direction.UNI,
  displaySize: Size.NORMAL,
};
