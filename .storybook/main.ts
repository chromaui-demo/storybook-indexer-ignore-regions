import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.json',
    '../src/**/*.dynamic.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    './preset',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // experimental_indexers: async (existingIndexers) => [
  //   ...existingIndexers,
  //   jsonStoriesIndexer,
  // ],
};
export default config;
