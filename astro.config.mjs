import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // CHANGE THIS to your GitHub Pages URL (user site => served at the root).
  //   user site:    https://USERNAME.github.io
  //   custom domain: https://yourdomain.com
  site: 'https://USERNAME.github.io',
  // No `base` is needed for a user site (it lives at the root).
  integrations: [mdx(), sitemap(), tailwind()]
});
