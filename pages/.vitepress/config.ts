import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-GB',
  title: 'IGCSE Physics Final',
  head: [['script', {}, 'document.documentElement.classList.add("dark")']],
  vue:{
    reactivityTransform: true,
  } ,
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/HarryAllen1/igcse-physics-final',
      },
    ],
  },
  appearance: false,
});
