import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Used by Astro.site to generate absolute URLs for og:image, sitemap, etc.
  site: 'https://aritiadesign.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
