import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Used by Astro.site to generate absolute URLs for og:image, sitemap, etc.
  site: 'https://aritiadesign.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/mentions-legales') && !page.includes('/politique-confidentialite'),
      serialize(item) {
        const url = item.url;
        if (url === 'https://aritiadesign.com/') {
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        }
        if (url.match(/\/portfolio\/.+/)) {
          return { ...item, changefreq: 'yearly', priority: 0.7 };
        }
        if (url.includes('/services') || url.endsWith('/portfolio') || url.endsWith('/portfolio/')) {
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        }
        return { ...item, changefreq: 'monthly', priority: 0.8 };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ['localhost', '127.0.0.1', '192.168.1.80', '.local', '.lan', '.loca.lt', '.trycloudflare.com'],
    },
  },
});
