export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} | Tumblr Page Builder`
        : 'Tumblr Page Builder'
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'A page builder for Tumblr. Easily edit the content and colors for the users.' 
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:title',
        content: 'Tumblr Page Builder'
      },
      {
        property: 'og:description',
        content:
          'A page builder for Tumblr. Easily edit the content and colors for the users.'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'preconnect',
        href:'https://fonts.googleapis.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;1,500;1,600&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/color-picker.js', mode: 'client' },
    { src: '~/plugins/overlayscrollbars.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Tailwind
  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
