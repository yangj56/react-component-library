import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from '.';
import { Size } from '../../utils/typings';

export default {
  title: 'Checkbox',
  component: Checkbox,
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
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const NormalCheckbox = Template.bind({});
NormalCheckbox.args = {
  checked: false,
  value: 'normal',
  displaySize: Size.NORMAL,
  label: 'Hello World',
};

export const LargeBoldCheckbox = Template.bind({});
LargeBoldCheckbox.args = {
  checked: false,
  value: 'sample',
  displaySize: Size.LARGE,
  label: 'Hello World',
  bold: true,
};
