<template>
  <footer class="relative bg-surface pt-24 pb-8 overflow-hidden border-t border-border">
    <!-- Subtle gradient -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-tangerine-500/10 rounded-full blur-[120px] -translate-y-1/2"></div>
    
    <div class="container-default relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
        <!-- Brand Section -->
        <div class="lg:col-span-5">
          <div class="flex items-center gap-3 mb-6 group cursor-default">
            <span class="text-3xl transition-transform group-hover:scale-110 group-hover:rotate-12 duration-500">🍊</span>
            <span class="text-2xl font-bold text-text-primary tracking-tight">Tangerina</span>
          </div>
          <p class="text-body text-sm leading-relaxed max-w-sm mb-8">
            Seu assistente musical e bot de entretenimento para Discord. 
            Reproduza músicas, use comandos de voz e converse naturalmente.
          </p>
          
          <!-- Social Links -->
          <div class="flex items-center gap-3">
            <a 
              v-for="social in socials" 
              :key="social.label"
              :href="social.href" 
              class="social-link"
              :aria-label="social.label"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>

          <!-- Newsletter -->
          <div class="mt-8 p-4 rounded-2xl bg-surface-elevated border border-border">
            <p class="text-sm font-semibold text-text-primary mb-3">Fique por dentro das novidades</p>
            <div class="flex gap-2">
              <input 
                type="email" 
                placeholder="seu@email.com" 
                class="flex-1 px-4 py-2.5 rounded-full bg-surface border border-border text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-tangerine-500/50 focus:ring-2 focus:ring-tangerine-500/20 transition-all"
              >
              <button class="btn btn-primary !px-5 !py-2.5">
                <Icon name="lucide:send" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <!-- Links Sections -->
        <div class="lg:col-span-2 lg:col-start-7">
          <h4 class="text-sm font-bold text-text-primary mb-6 flex items-center gap-2">
            <div class="w-1 h-4 bg-tangerine-500 rounded-full"></div>
            Produto
          </h4>
          <ul class="space-y-3">
            <li v-for="link in productLinks" :key="link.text">
              <a :href="link.href" class="footer-link">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h4 class="text-sm font-bold text-text-primary mb-6 flex items-center gap-2">
            <div class="w-1 h-4 bg-blue-500 rounded-full"></div>
            Suporte
          </h4>
          <ul class="space-y-3">
            <li v-for="link in supportLinks" :key="link.text">
              <a :href="link.href" class="footer-link">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h4 class="text-sm font-bold text-text-primary mb-6 flex items-center gap-2">
            <div class="w-1 h-4 bg-purple-500 rounded-full"></div>
            Legal
          </h4>
          <ul class="space-y-3">
            <li v-for="link in legalLinks" :key="link.text">
              <a :href="link.href" class="footer-link">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="py-8 border-y border-border mb-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <p class="text-2xl font-bold text-text-primary mb-1">{{ stat.value }}</p>
            <p class="text-xs text-text-tertiary">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-xs text-text-tertiary">
          © {{ currentYear }} Tangerina. Todos os direitos reservados.
        </p>
        
        <div class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-elevated border border-border">
          <span class="text-xs text-text-tertiary flex items-center gap-2">
            Feito com 
            <span class="relative">
              <Icon name="lucide:heart" class="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            </span>
            no Brasil 🇧🇷
          </span>
        </div>
        
        <div class="flex items-center gap-4">
          <a href="#" class="text-xs text-text-tertiary hover:text-text-primary transition-colors">
            Status
          </a>
          <span class="text-text-tertiary">•</span>
          <a href="#" class="text-xs text-text-tertiary hover:text-text-primary transition-colors">
            Changelog
          </a>
          <span class="text-text-tertiary">•</span>
          <div class="flex items-center gap-1.5">
            <span class="flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-xs text-green-400 font-medium">Online</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
  { icon: 'simple-icons:discord', label: 'Discord', href: '#' },
  { icon: 'simple-icons:x', label: 'X (Twitter)', href: '#' },
  { icon: 'simple-icons:github', label: 'GitHub', href: '#' },
  { icon: 'simple-icons:instagram', label: 'Instagram', href: '#' }
]

const productLinks = [
  { text: 'Funcionalidades', href: '#features' },
  { text: 'Dashboard', href: '#' },
  { text: 'API', href: '#' },
  { text: 'Status', href: '#' }
]

const supportLinks = [
  { text: 'Documentação', href: '#' },
  { text: 'Servidor de Suporte', href: '#' },
  { text: 'Contato', href: '#' },
  { text: 'FAQ', href: '#' },
  { text: 'Reportar Bug', href: '#' }
]

const legalLinks = [
  { text: 'Termos de Uso', href: '#' },
  { text: 'Privacidade', href: '#' },
  { text: 'Cookies', href: '#' }
]

const stats = [
  { value: '10k+', label: 'Servidores' },
  { value: '500k+', label: 'Usuários' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Suporte' }
]
</script>

<style scoped>
.social-link {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  color: var(--color-text-tertiary);
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.social-link:hover {
  background: var(--color-tangerine-500);
  border-color: var(--color-tangerine-500);
  color: white;
  transform: translateY(-4px) rotate(-5deg);
  box-shadow: 0 10px 20px -10px var(--color-glow-orange);
}

.footer-link {
  display: block;
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
  transition: all 200ms ease;
}

.footer-link:hover {
  color: var(--color-tangerine-400);
  transform: translateX(4px);
}
</style>
