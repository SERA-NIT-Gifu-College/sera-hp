// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  routeRules: {
    '/': { prerender: true },
    '/about/**': { prerender: true },
    '/news/**': { prerender: true },
    '/projects/**': { prerender: true }
  },
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false
  },
  modules: [
    '@nuxt/image',
    'nuxt-svgo',
    '@nuxtjs/eslint-module',
    '@nuxtjs/sitemap',
    '@nuxt/icon'
  ]
})