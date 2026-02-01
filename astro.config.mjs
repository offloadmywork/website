import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://offloadmy.work',
  output: 'static',
  adapter: cloudflare(),
  trailingSlash: 'always',
  security: {
    checkOrigin: true,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
