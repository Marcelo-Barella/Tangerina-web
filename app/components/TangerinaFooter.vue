<template>
  <footer class="relative bg-white pt-24 pb-12 overflow-hidden border-t border-neutral-100">
    <!-- Clean background without heavy patterns -->
    <div class="container-default relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        <!-- Brand Section -->
        <div class="lg:col-span-4">
          <div class="flex items-center gap-3 mb-6 group cursor-default">
            <span class="text-3xl transition-transform group-hover:scale-110 duration-500">🍊</span>
            <span class="text-2xl font-bold text-neutral-900 tracking-tight">Tangerina</span>
          </div>
          <p class="text-body text-neutral-500 mb-8 leading-relaxed max-w-sm">
            O assistente definitivo para o seu servidor Discord. 
            A solução completa para levar sua comunidade ao próximo nível.
          </p>
          <div class="flex items-center gap-3">
            <a 
              v-for="social in socials" 
              :key="social.label"
              :href="social.href" 
              class="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-400 hover:bg-tangerine-500 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-neutral-200/50"
              :aria-label="social.label"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Links Sections -->
        <div class="lg:col-span-2 lg:col-start-7">
          <h4 class="text-sm font-bold text-neutral-900 mb-6">Produto</h4>
          <ul class="space-y-4">
            <li v-for="link in productLinks" :key="link.text">
              <a :href="link.href" class="text-sm text-neutral-500 hover:text-tangerine-600 transition-colors">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2 lg:col-start-9">
          <h4 class="text-sm font-bold text-neutral-900 mb-6">Suporte</h4>
          <ul class="space-y-4">
            <li v-for="link in supportLinks" :key="link.text">
              <a :href="link.href" class="text-sm text-neutral-500 hover:text-tangerine-600 transition-colors">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2 lg:col-start-11">
          <h4 class="text-sm font-bold text-neutral-900 mb-6">Legal</h4>
          <ul class="space-y-4">
            <li>
              <a href="#" class="text-sm text-neutral-500 hover:text-tangerine-600 transition-colors">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-neutral-500 hover:text-tangerine-600 transition-colors">
                Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-xs font-medium text-neutral-400">
          © {{ currentYear }} Tangerina. Todos os direitos reservados.
        </p>
        <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100">
          <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
            Feito com <Icon name="lucide:heart" class="w-3 h-3 text-red-500 fill-red-500" /> no Brasil
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
  { icon: 'simple-icons:discord', label: 'Discord', href: '#' },
  { icon: 'lucide:twitter', label: 'Twitter', href: '#' },
  { icon: 'lucide:github', label: 'GitHub', href: '#' }
]

const productLinks = [
  { text: 'Funcionalidades', href: '#features' },
  { text: 'Comandos', href: '#' },
  { text: 'Dashboard', href: '#' },
  { text: 'Status', href: '#' }
]

const supportLinks = [
  { text: 'Documentação', href: '#' },
  { text: 'Servidor de Suporte', href: '#' },
  { text: 'Contato', href: '#' },
  { text: 'FAQ', href: '#' }
]
</script>
