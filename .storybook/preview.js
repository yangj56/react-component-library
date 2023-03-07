import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { FileSGThemes } from '../src/styles/theme';
import { WithStyles } from '../src/utils/withStyles';
import { addDecorator } from '@storybook/react';

addDecorator(withThemesProvider(FileSGThemes), ThemeProvider);

export const decorators = [(Story) => WithStyles(Story)];

export const parameters = {
  controls: { expanded: true },
  options: {
    storySort: {
      order: ["Components", ["Layout", "Data Display", "Inputs", "Navigation"] , "Systems", ["Typography" , "Color Palette"]],
    },
  },
};
