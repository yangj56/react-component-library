import { WithStyles } from '../src/utils/withStyles';

export const decorators = [(Story) => WithStyles(Story)];

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: ['Base', 'Label', 'Arrow', 'Checkbox', 'Radio'],
    },
  },
};
