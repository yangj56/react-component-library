import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from '.';
import { Size } from '../../utils/typings';

export default {
  title: 'Components/Label',
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
NormalLabel.args = { bold: false, label: 'normal', size: Size.NORMAL };

export const LargeBoldLabel = Template.bind({});
LargeBoldLabel.args = { bold: true, label: 'large', size: Size.LARGE };
