export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'verify-runtime-configs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  publicRuntimeConfig: {
    VAR_1: process.env.VAR_1,
    VAR_2: process.env.VAR_2,
    VAR_3: 'var_3_nuxt_config_set',
    VAR_4: 'var_4_nuxt_config_set',
    VAR_MACHINE_1: process.env.VAR_MACHINE_1,
    VAR_MACHINE_2: undefined,
    VAR_MACHINE_3: 'var_machine_3_nuxt_config_set',
    VAR_UNDEFINED: undefined,
  },

  privateRuntimeConfig: {
    VAR_SECRET_1: process.env.VAR_SECRET_1,
    VAR_SECRET_2: process.env.VAR_SECRET_2,
    VAR_SECRET_3: 'var_secret_3_nuxt_config_set',
    VAR_SECRET_4: 'var_secret_4_nuxt_config_set',
    VAR_SECRET_MACHINE_1: process.env.VAR_MACHINE_1,
    VAR_SECRET_MACHINE_2: undefined,
    VAR_SECRET_MACHINE_3: 'var_secret_machine_3_nuxt_config_set',
    VAR_SECRET_UNDEFINED: undefined,
  },
}
