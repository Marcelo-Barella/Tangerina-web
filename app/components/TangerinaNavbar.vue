<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      scrolled 
        ? 'py-3' 
        : 'py-5',
      scrolled ? 'navbar-scrolled' : 'navbar-transparent'
    ]"
  >
    <div class="container-default">
      <nav 
        class="flex items-center justify-between h-12 px-4 rounded-full transition-all duration-500"
        :class="scrolled ? 'navbar-pill' : ''"
      >
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2.5 group relative z-10">
          <span class="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">🍊</span>
          <span class="text-xl font-bold tracking-tight text-text-primary">Tangerina</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <a 
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href" 
            class="nav-link"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA Button -->
        <div class="flex items-center gap-3 relative z-10">
          <a
            href="https://discord.com/oauth2/authorize"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-shine !px-5 !py-2.5 !text-xs !font-bold uppercase tracking-wider"
          >
            <Icon name="lucide:plus" class="w-3.5 h-3.5" />
            <span class="hidden sm:inline">Adicionar</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-5 h-5" />
        </button>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 mt-2 mx-4"
      >
        <div class="bg-surface-elevated/95 backdrop-blur-xl rounded-2xl border border-border p-4 shadow-2xl">
          <div class="flex flex-col gap-1">
            <a 
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href" 
              class="nav-link-mobile"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Recursos', href: '#features' },
  { label: 'Guia rápido', href: '#how-it-works' },
  { label: 'Avaliações', href: '#testimonials' }
]

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

<style scoped>
.navbar-transparent {
  background: transparent;
}

.navbar-scrolled {
  background: transparent;
}

.navbar-pill {
  background: rgba(17, 17, 19, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 4px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  transition: color 200ms ease;
  border-radius: 9999px;
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 200ms ease;
}

.nav-link:hover::before {
  opacity: 1;
}

.nav-link-mobile {
  display: block;
  padding: 0.875rem 1rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  border-radius: 12px;
  transition: all 200ms ease;
}

.nav-link-mobile:hover {
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.05);
}
</style>
