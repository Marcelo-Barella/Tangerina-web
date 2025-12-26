import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2024-12-26',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
})
