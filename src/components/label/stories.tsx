import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from '.';
import { Size } from '../../utils/typings';

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    bold: {
      defaultValue: false,
      type: 'boolean',
    },
    label: {
      defaultValue: 'default',
      type: 'string',
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
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const NormalLabel = Template.bind({});
NormalLabel.args = { bold: false, label: 'Hello World', size: Size.NORMAL };

export const LargeBoldLabel = Template.bind({});
LargeBoldLabel.args = { bold: true, label: 'Hello World', size: Size.LARGE };
