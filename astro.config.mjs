import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Your GitHub Pages URL (user site => served at the root). Always lowercase.
  site: 'https://donji-zzz.github.io',
  // No `base` is needed for a user site (it lives at the root).
  integrations: [mdx(), tailwind()]
});
