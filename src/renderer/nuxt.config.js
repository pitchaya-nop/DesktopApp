/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'chatapp',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [
    { src: '~/plugins/plugin.js', ssr:false },
    { src: "@/plugins/vue-lightbox.js",  ssr: false },
    '~/plugins/axios.js',
    '~/plugins/mixins.js',
  ],
  css: [
    '@/assets/scss/app.scss',
    'swiper/css/swiper.css'
  ],

  buildModules: [

  ],

  axios:{
    baseURL: 'https://dev.apigochat.com/gochat/v1',
  },

  components: true,

  router: {
    middleware: ['auth'],
  },

  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
  ],
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: { compact: true }
  }
};
