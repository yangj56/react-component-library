import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from '.';
import { Size } from '../../utils/typings';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    checked: {
      defaultValue: false,
      type: 'boolean',
    },
    value: {
      defaultValue: 'default',
      type: 'string',
    },
    label: {
      type: 'string',
    },
    bold: {
      defaultValue: false,
      type: 'boolean',
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
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const NormalRadio = Template.bind({});
NormalRadio.args = {
  checked: false,
  value: 'normal',
  displaySize: Size.NORMAL,
  label: 'Hello World',
};

export const LargeBoldRadio = Template.bind({});
LargeBoldRadio.args = {
  checked: false,
  value: 'sample',
  displaySize: Size.LARGE,
  label: 'Hello World',
  bold: true,
};
