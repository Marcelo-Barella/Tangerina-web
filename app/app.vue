<template>
  <div class="min-h-screen bg-surface text-text-primary">
    <!-- Page Transition Wrapper -->
    <Transition
      name="page"
      mode="out-in"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
    >
      <div key="main" class="page-content">
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
    </Transition>

    <!-- Scroll to Top Button -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-tangerine-500 text-white shadow-lg shadow-tangerine-500/30 flex items-center justify-center hover:bg-tangerine-600 hover:scale-110 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <Icon name="lucide:arrow-up" class="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </Transition>

    <!-- Loading Indicator (optional) -->
    <div v-if="isLoading" class="fixed inset-0 z-[100] bg-surface flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <div class="w-12 h-12 rounded-full border-2 border-tangerine-500/20 border-t-tangerine-500 animate-spin"></div>
        <span class="text-sm text-text-tertiary">Carregando...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'pt-BR',
    class: 'dark'
  },
  title: 'Tangerina — O Bot de Discord que seu servidor merece',
  meta: [
    {
      name: 'description',
      content: 'Tangerina é o bot de Discord completo para moderação, entretenimento e economia. Mais de 10.000 servidores confiam em nós.'
    },
    {
      name: 'theme-color',
      content: '#0A0A0B'
    },
    {
      property: 'og:title',
      content: 'Tangerina — O Bot de Discord que seu servidor merece'
    },
    {
      property: 'og:description',
      content: 'Moderação inteligente, economia dinâmica e entretenimento em um único lugar.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
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

const showScrollTop = ref(false)
const isLoading = ref(true)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const onBeforeEnter = (el: Element) => {
  (el as HTMLElement).style.opacity = '0'
}

const onEnter = (el: Element) => {
  (el as HTMLElement).style.opacity = '1'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  
  // Simulate loading complete
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Page Transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Custom cursor for interactive elements */
@media (hover: hover) {
  a, button {
    cursor: pointer;
  }
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Hide scrollbar but keep functionality */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
