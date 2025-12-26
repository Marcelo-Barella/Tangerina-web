<template>
  <div class="bg-brand-light text-brand-dark antialiased">
    <Navbar />
    <Hero />
    <About />
    <Features />
    <WhyMe />
    <Reviews />
    <CTA />
    <Footer />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/feather-icons'
  script.onload = () => {
    if ((window as any).feather) {
      ;(window as any).feather.replace()
    }
  }
  document.head.appendChild(script)
})

onUpdated(() => {
  if ((window as any).feather) {
    ;(window as any).feather.replace()
  }
})
</script>