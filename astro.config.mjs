import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://leedom.me',
  integrations: [mdx(), sitemap(), vue()],
  markdown: {
    shikiConfig: {
      // https://shiki.style/themes
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      // 启用自动换行，以防止水平滚动
      wrap: true,
    },
  },
})