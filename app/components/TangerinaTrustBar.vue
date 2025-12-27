<template>
  <section class="py-16 relative overflow-hidden border-y border-border bg-surface-elevated/50">
    <div class="container-default">
      <div class="text-center mb-10">
        <p class="text-sm text-text-tertiary font-medium tracking-wide uppercase">
          Confiado por comunidades incríveis
        </p>
      </div>
      
      <!-- Logos Grid -->
      <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        <div 
          v-for="(partner, index) in partners" 
          :key="index"
          class="trust-logo"
        >
          <span class="text-2xl mr-2">{{ partner.icon }}</span>
          <span class="text-sm font-bold text-text-secondary">{{ partner.name }}</span>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="text-2xl font-bold text-text-primary">{{ stat.value }}</p>
          <p class="text-xs text-text-tertiary">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = [
  { name: 'Gaming Brasil', icon: '🎮' },
  { name: 'Anime Society', icon: '🌸' },
  { name: 'Dev Community', icon: '💻' },
  { name: 'Music Hub', icon: '🎵' },
  { name: 'Art Studio', icon: '🎨' },
  { name: 'RP Universe', icon: '🌍' }
]

const stats = [
  { value: '10k+', label: 'Servidores' },
  { value: '500k+', label: 'Usuários' },
  { value: '1M+', label: 'Comandos/dia' }
]
</script>

<style scoped>
.trust-logo {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  transition: all 300ms ease;
}

.trust-logo:hover {
  border-color: rgba(249, 115, 22, 0.3);
  transform: translateY(-2px);
}
</style>
