// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    baseURL: '/sera-hp/',
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/sera-hp/facivon.svg"
        }
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/about/**': { prerender: true },
    '/news/**': { prerender: true },
    '/projects/**': { prerender: true }
  },
  imports: {
    dirs: ["utils/types"],
  },
  devtools: { enabled: true },
  image: {
    inject: true
  },
  site: {
    url: "https://sera-nit-gifu-college.github.io/sera-hp/",
    name: "SERA Home Page"
  },
  modules: [
    '@nuxt/image',
    'nuxt-svgo',
    '@nuxtjs/sitemap',
    '@nuxt/icon'
  ]
})
