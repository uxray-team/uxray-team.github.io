import { defineConfig } from 'vitepress'
import lightbox from 'vitepress-plugin-lightbox'
import { enLocale } from './locales/en.mts'
import { ruLocale } from './locales/ru.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ultimate X-Ray", // Название в шапке
  description: "Официальная страница проекта Ultimate X-Ray\nhttps://github.com/uxray-team/ultimate-xray",

  base: '/',
  srcDir: "../docs",
  outDir: '../public',
  lastUpdated: true,
  ignoreDeadLinks: true,
  rewrites: {
    'main/ru/:rest*': ':rest*',
    'main/en/:rest*': 'en/:rest*',
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] 
  ],

  locales: {
    root: ruLocale,
    en: enLocale,
  },

  markdown: {
    config: (md) => {
      md.use(lightbox, {})
    },
  },

  themeConfig: {
	 logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {}
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/uxray-team/ultimate-xray' },
      { icon: 'discord', link: 'https://discord.gg/9V3rCeMw7y' },
    ]
  }
})
