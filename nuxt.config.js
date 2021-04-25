export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Daniel Villalobos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Daniel Villalobos's personal website" },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    jit: true
  },
  modules: ['@nuxtjs/toast', '@nuxt/content'],
  toast: {
    position: 'bottom-center',
    duration: 1500,
  },
  build: {},
}
