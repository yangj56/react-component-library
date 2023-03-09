import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { Themes } from '../src/styles/theme';
import { WithStyles } from '../src/utils/withStyles';
import { addDecorator } from '@storybook/react';

addDecorator(withThemesProvider(Themes), ThemeProvider);

export const decorators = [(Story) => WithStyles(Story)];

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: ['Base', 'Label', 'Arrow', 'Checkbox', 'Radio'],
    },
  },
};
