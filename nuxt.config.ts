import {resolve} from "path"

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/main.css",
  ],
  modules: [
    '@vueuse/nuxt',
    "nuxt-bootstrap-icons",
    ['@nuxtjs/google-fonts', {
      families: {
        'Montserrat': [400]
      }
    }]
  ],
  devtools: { enabled: true }
})
