import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://nutrimpasi.vercel.app',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  image: {
    domains: ['images.unsplash.com', 's3.us-west-2.amazonaws.com', 'prod-files-secure.s3.us-west-2.amazonaws.com'],
  },
});
