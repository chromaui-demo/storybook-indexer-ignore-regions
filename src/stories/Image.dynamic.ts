import fs from 'fs/promises';
import { join } from 'path';
import { dedent } from 'ts-dedent';
import type { StoryConfigs } from './dynamic';
import { defineStories } from './dynamic';

export default defineStories({
  baseCsf: dedent`
    import { Image } from './Image';
    const meta = { 
      component: Image, 
      parameters: {
        layout: 'fullscreen',
      }, 
    };
    export default meta;
  `,
  stories: async () => {
    const result = {} as StoryConfigs;
    const fixtureDir = join(
      new URL('.', import.meta.url).pathname,
      './fixtures'
    );
    const fixtures: string[] = (await fs.readdir(fixtureDir)).filter(
      (file: string) => file.endsWith('.json')
    );
    await Promise.all(
      fixtures.map(async (file) => {
        try {
          const fixture = JSON.parse(
            await fs.readFile(join(fixtureDir, file), 'utf-8')
          );
          fixture.states.map(
            (entry: {
              name: string;
              filePath: string;
              // ignoreRegions: Array<{
              //   top: number;
              //   width: number;
              //   height: number;
              //   left?: number;
              // }>;
            }) => {
              result[entry.name] = { args: entry };
            }
          );
        } catch (err) {
          console.warn({ file, err });
        }
      })
    );
    return result;
  },
});
