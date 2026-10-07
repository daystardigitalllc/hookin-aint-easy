// @ts-check
import { defineConfig } from 'astro/config';

// Root by default (Cloudflare Pages). The GitHub Pages workflow sets BASE_PATH=/hookin-aint-easy.
export default defineConfig({
  site: process.env.SITE_URL || 'https://hookin-aint-easy.pages.dev',
  base: process.env.BASE_PATH || '/',
});
