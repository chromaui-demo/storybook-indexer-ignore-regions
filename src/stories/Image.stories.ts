import type { Meta, StoryObj } from '@storybook/react';
import { Image, type ImagesProps } from './Image';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ImagesProps> = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FirstOnboard: Story = {
  args: {
    filePath: './first-onboard.png',
    ignoreRegions: [{ top: 0, width: 240, height: 25 }],
  },
};

export const SecondOnboard: Story = {
  args: {
    filePath: './second-onboard.png',
    ignoreRegions: [{ top: 0, width: 240, height: 25 }],
  },
};

export const ThirdOnboard: Story = {
  args: {
    filePath: './third-onboard.png',
    ignoreRegions: [{ top: 0, width: 240, height: 25 }],
  },
};

export const NoPosts: Story = {
  args: {
    filePath: './one-post.png',
    ignoreRegions: [{ top: 0, width: 240, height: 25 }],
  },
};

export const MySites: Story = {
  args: {
    filePath: './my-sites.png',
    ignoreRegions: [{ top: 0, width: 240, height: 25 }],
  },
};

export const SettingsModal: Story = {
  args: {
    filePath: './settings-modal.png',
    ignoreRegions: [{ top: 0, width: 240, height: 25 }],
  },
};

export const ActionModal: Story = {
  args: {
    filePath: './action-modal.png',
    ignoreRegions: [{ top: 0, width: 240, height: 25 }],
  },
};
