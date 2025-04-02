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
export const Splash: Story = {
  args: {
    filePath: './baseline_image.png',
    ignoreRegions: [{ top: 0, width: 240, height: 15 }],
  },
};

export const MessagesIgnoreTitleAndTime: Story = {
  args: {
    filePath: './message_test_run_failure_2.png',
    ignoreRegions: [
      { top: 0, width: 240, height: 15 },
      { top: 30, width: 240, height: 30 },
      { top: 105, width: 240, height: 30 },
      { top: 175, width: 240, height: 30 },
      { top: 250, width: 240, height: 30 },
    ],
  },
};

export const MessagesIgnoreCompleteMessage: Story = {
  args: {
    filePath: './message_test_run_failure_1.png',
    ignoreRegions: [
      { top: 0, width: 240, height: 15 },
      { top: 20, width: 240, height: 60 },
      { top: 95, width: 240, height: 60 },
      { top: 170, width: 240, height: 60 },
      { top: 245, width: 240, height: 60 },
    ],
  },
};

export const MessagesIgnoreOnlyTime: Story = {
  args: {
    filePath: './message_event_baseline.png',
    ignoreRegions: [
      { top: 0, width: 240, height: 15 },
      { top: 20, width: 50, height: 30, left: 190 },
      { top: 95, width: 50, height: 30, left: 190 },
      { top: 165, width: 50, height: 30, left: 190 },
      { top: 240, width: 50, height: 30, left: 190 },
    ],
  },
};
