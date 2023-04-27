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
  imports: { // add folders here to auto-import them in your application
    dirs: [
      'stores',
      'composables/**',
    ],
  },
  components: [{ path: '~/components', pathPrefix: false }],

  // uncomment to disable SSR. This will basically make the app a SPA, like a normal Vue app, but with all the Nuxt goodies
  // ssr: false,

  // global CSS files
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/reset.css',
  ],

  // plugin configurations
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/critters',
    '@nuxtjs/color-mode',
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
    betterDefine: true,
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
