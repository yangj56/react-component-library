import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Base from '.';
import { BaseShape, Size } from '../../utils/typings';
import Label from '../label';

export default {
  title: 'Base',
  component: Base,
  argTypes: {
    shadow: {
      defaultValue: false,
      type: 'boolean',
    },
    shape: {
      defaultValue: BaseShape.ROUND,
      type: 'string',
      control: {
        type: 'select',
        options: [BaseShape.ROUND, BaseShape.SQUARE],
      },
    },
  },
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />;

export const EmptyBase = Template.bind({});
EmptyBase.args = {
  shadow: true,
  shape: BaseShape.ROUND,
};

export const WithContentBase = Template.bind({});
WithContentBase.args = {
  shadow: true,
  shape: BaseShape.ROUND,
  children: (
    <div style={{ margin: 20 }}>
      {' '}
      <Label label="Some dummy Content" size={Size.NORMAL} />
    </div>
  ),
};
