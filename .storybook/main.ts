import type { StorybookConfig } from '@storybook/react-vite';
// import type { Indexer } from '@storybook/types';

// import fs from 'fs/promises';

// const jsonStoriesIndexer: Indexer = {
//   test: /stories\.json$/,
//   createIndex: async (fileName) => {
//     const content = JSON.parse(fs.readFileSync(fileName));

//     const stories = generateStoryIndexesFromJson(content);

//     return stories.map((story) => {
//       type: 'story',
//       importPath: `virtual:jsonstories--${fileName}--${story.componentName}`,
//       exportName: story.name
//     });
//   },
// };

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