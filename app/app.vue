<template>
  <div class="min-h-screen bg-surface">
    <TangerinaNavbar />
    <main>
      <TangerinaHero />
      <TangerinaTrustBar />
      <TangerinaFeatures />
      <TangerinaHowItWorks />
      <TangerinaTestimonials />
      <TangerinaCTA />
    </main>
    <TangerinaFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  title: 'Tangerina — O Bot de Discord que seu servidor merece',
  meta: [
    {
      name: 'description',
      content: 'Tangerina é o bot de Discord completo para moderação, entretenimento e economia. Mais de 10.000 servidores confiam em nós.'
    }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    }
  ]
})
</script>
