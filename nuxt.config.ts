// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/i18n'
  ],
  devtools: {
    enabled: true
  },

  nitro: {
    preset: 'vercel'
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-01-15',

  build: {
    transpile: ['@nuxt/ui']
  },

  ssr: true,

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
        quotes: 'single'
      }
    }
  },

  i18n: {
    strategy: 'prefix',
    langDir: 'locales/',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ms',
        name: 'Melayu',
        file: 'ms.json'
      },
      {
        code: 'id',
        name: 'Bahasa Indonesia',
        file: 'id.json'
      }
    ],
    defaultLocale: 'en'
  },

  image: { quality: 50, format: ['webp'] }
})
