require('dotenv').config()

export default {
  dir: {
    store: 'store'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ffportfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css', '~/assets/formulate.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/firebase.js',
    '~/plugins/vue-formulate',
    '~/plugins/vue-zoomer',
    { src: '~/plugins/masonry', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    // '@braid/vue-formulate/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID, 
          storageBucket: process.env.STORAGE_BUCKET, 
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChanged',
              subscribeManually: false
            },
            ssr: false,
          },
          firestore: true,
          storage: true,
      }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]      
      ]
    },
    extend(config, {}) {
      config.node = {
          fs: 'empty'
      }
  }
  },
  storage: true,
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  formulate: {
    configPath: '~/formulate.config.js'
  },
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
  }
  // TO SEE ON MOBILE LIVE
  // server: {     
  //   port: 8000, // default: 3000     
  //   host: '0.0.0.0', // default: localhost   
  // }, 
}
