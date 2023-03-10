module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@storybook/addon-actions',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  docs: {
    autodocs: true,
  },
};
