import { createSolidAppViteConfig } from '@jankrajewskiit/configs/vite';
import { defineConfig, mergeConfig } from 'vite';

const solidMarkdownOptimizeDeps = {
  include: [
    'debug',
    'mdast-util-from-markdown',
    'mdast-util-gfm',
    'micromark',
    'micromark-extension-gfm',
    'remark-gfm',
    'remark-parse',
    'remark-rehype',
    'solid-markdown',
    'unified',
  ],
};

export default defineConfig(
  mergeConfig(
    createSolidAppViteConfig(
      {
        base: './',
      },
      {
        solidPluginOptions: { extensions: ['.jsx', '.tsx'] },
      },
    ),
    { optimizeDeps: solidMarkdownOptimizeDeps },
  ),
);
