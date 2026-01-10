<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
    :class="scrolled ? 'bg-surface-elevated/95 backdrop-blur-md border-b border-border' : 'bg-transparent'"
  >
    <div class="container-default">
      <nav class="flex items-center justify-between h-16 md:h-20">
        <a href="#" class="flex items-center gap-2 group">
          <span class="text-2xl">🍊</span>
          <span class="text-xl font-bold text-text-primary">Tangerina</span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            class="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Funcionalidades
          </a>
          <a 
            href="#how-it-works" 
            class="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Como funciona
          </a>
          <a 
            href="#testimonials" 
            class="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Depoimentos
          </a>
        </div>

        <div class="flex items-center gap-3">
          <a
            :href="inviteUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary !px-6 !py-2 !text-sm"
          >
            <Icon name="lucide:user-plus" class="w-4 h-4" />
            <span>Adicionar</span>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const { inviteUrl } = useDiscordInvite()
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
