// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/seo',
    '@nuxt/content'
  ],

  ssr: true,

  pages: true,

  devtools: { enabled: true },

  compatibilityDate: '2025-01-15',

  app: {
    pageTransition: {
      name: 'page',
      mode: 'default'
    }
  },

  typescript: {
    strict: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://www.wanderer.my.id',
    name: 'Wanderer'
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  colorMode: {
    classSuffix: '',
    fallback: 'light'
  },

  content: {
    experimental: {
      nativeSqlite: true
    }
  },

  icon: {
    serverBundle: false
  },

  image: { quality: 50, format: ['webp'] },

  seo: {
    automaticDefaults: true
  }
})
