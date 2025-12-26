<template>
  <nav
    id="navbar"
    class="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b-4 border-orange-500 transition-all duration-300"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" class="text-3xl font-bold text-orange-600 flex items-center gap-2 select-none">
        <span class="text-4xl">🍊</span> Tangerina
      </a>
      <div class="hidden md:flex space-x-8 items-center font-semibold text-gray-700">
        <a href="#features" class="hover:text-orange-500 transition">O que eu faço</a>
        <a href="#why-me" class="hover:text-orange-500 transition">Por que me querer?</a>
        <a href="#reviews" class="hover:text-orange-500 transition">A galera Approved</a>
      </div>
      <a
        href="https://discord.com/oauth2/authorize"
        target="_blank"
        class="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-orange-500/50 transition transform hover:scale-105 flex items-center gap-2"
      >
        <i data-feather="user-plus"></i>
        Me adiciona!
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
onMounted(() => {
  const handleScroll = () => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-md')
        navbar.classList.replace('py-4', 'py-3')
      } else {
        navbar.classList.remove('shadow-md')
        navbar.classList.replace('py-3', 'py-4')
      }
    }
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
