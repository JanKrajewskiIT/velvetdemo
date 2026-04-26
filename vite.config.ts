import { createSolidAppViteConfig } from '@jankrajewskiit/configs/vite';
import { defineConfig } from 'vite';

export default defineConfig(
  createSolidAppViteConfig(
    {
      base: './',
    },
    {
      includeSolidMarkdownDeps: true,
      solidPluginOptions: { extensions: ['.jsx', '.tsx'] },
    },
  ),
);
