export default {
  target: 'static',
  head: {
    title: 'Daniel Villalobos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
