import axios from "axios";
import pkg from './package.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'yandex-verification', content: 'KEY_OR_SPECIAL_FILE_WITH_KEY_IN_HTML_IN_STATIC_DIRECTORY'},
      {name: 'google-site-verification', content: 'KEY_OR_SPECIAL_FILE_WITH_KEY_IN_HTML_IN_STATIC_DIRECTORY'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '~/assets/scss/main.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/app-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-KEY'
    // }],
    // ['@nuxtjs/yandex-metrika', {
    //   id: 'KEY',
    //   webwisor: false, //too many resources
    //   clickmap: true, //for cursor click
    //   trackLinks: true, //track on which links user clicks
    // }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'vue',
      'axios'
    ]
  },
  generate: {
    routes() {
      return axios.get('https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts.json')
        .then(res => {

          //Get ID
          const postsArray = []
          for (let key in res.data) {
            postsArray.push({...res.data[key], id: key})
          }
          //Routes
          return postsArray.map(post => {
            return '/blog/' + post.id
          })
        })
    }
  }
}
