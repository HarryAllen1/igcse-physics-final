import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-GB',
  title: 'IGCSE Physics Final',
  description:
    'A short paper on the relationship between celestial object magnitude and their redshifts',
  head: [
    ['link', { rel: 'icon', type: 'image/png' }, '/logo.png'],
    ['link', { rel: 'apple-touch-icon' }, '/logo.png'],
    [
      'script',
      { type: 'module' },
      `if (location.hostname=== "igcse-physics-final.vercel.app")
        await import('/_vercel/insights/script.js')`,
    ],
    ['script', {}, 'document.documentElement.classList.add("dark")'],
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/HarryAllen1/igcse-physics-final',
      },
    ],
  },
  appearance: false,
});
