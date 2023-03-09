import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from '.';
import { Size } from '../../utils/typings';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    isChecked: {
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
    size: {
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
  isChecked: false,
  value: 'normal',
  size: Size.NORMAL,
  label: 'Normal',
};

export const LargeBoldRadio = Template.bind({});
LargeBoldRadio.args = {
  isChecked: false,
  value: 'large',
  size: Size.LARGE,
  label: 'Large',
  bold: true,
};
