import fs from 'node:fs'
import { transformShortVmodel } from '@vue-macros/short-vmodel'

const locales = fs.readdirSync('locales')
  .map(file => ({
    code: file.replace(/\.(yml|yaml|json)$/, ''),
    file,
  }))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nightrunner',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  imports: { dirs: ['stores'] }, // add folders here to auto-import them in your application
  components: [{ path: '~/components', pathPrefix: false }],

  // uncomment to disable SSR. This will basically make the app a SPA, like a normal Vue app, but with all the Nuxt goodies
  // ssr: false,

  // global CSS files
  css: [
    '@unocss/reset/antfu.css',
  ],

  // plugin configurations
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/critters',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    '@pinia/nuxt',
  ],
  vue: {
    compilerOptions: {
      nodeTransforms: [transformShortVmodel({ prefix: '::' })],
    },
  },
  i18n: {
    langDir: 'locales',
    defaultLocale: 'en',
    locales,
  },
  macros: {
    exportProps: true,
    reactivityTransform: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'color-scheme',
  },
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
      'storeToRefs',
    ],
  },
})
