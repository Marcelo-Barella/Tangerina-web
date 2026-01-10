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
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
        class: 'dark'
      },
      title: 'Tangerina — O Bot de Discord que seu servidor merece',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0A0A0B' },
        { name: 'msapplication-TileColor', content: '#0A0A0B' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Geist+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
    css: {
      devSourcemap: true
    },
    server: {
      allowedHosts: ['bergamota.dev'],
    },
  },
  
  runtimeConfig: {
    public: {
      discordClientId: '1389316439193944275'
    }
  }
})
