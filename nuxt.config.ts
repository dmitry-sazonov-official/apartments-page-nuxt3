// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-29',
  devtools: { enabled: true },

  css: [
    '~/assets/styles/index.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import'],
          additionalData: `
            @import "~/assets/styles/_colors.scss";
          `,
        },
      },
    },
  },
})
