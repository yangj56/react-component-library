const path = require('path');

module.exports = {
  stories: ['../src/**/**/*.stories.tsx', '../src/**/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  core: {
    builder: 'webpack5',
  },
};
