<template>
  <footer class="border-t border-border bg-neutral-50/50">
    <div class="container-default py-12 md:py-16">
      <div class="grid md:grid-cols-4 gap-8 md:gap-12">
        <div class="md:col-span-2">
          <a href="#" class="inline-flex items-center gap-2 mb-4 group">
            <span class="text-2xl transition-transform group-hover:scale-110">🍊</span>
            <span class="text-xl font-bold text-text-primary">Tangerina</span>
          </a>
          <p class="text-body max-w-sm mb-6 leading-relaxed">
            O bot de Discord completo para moderação, entretenimento e economia. Feito com 🧡 no Brasil.
          </p>
          <div class="flex items-center gap-4">
            <a 
              href="#" 
              class="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-neutral-600 hover:bg-tangerine-50 hover:text-tangerine-600 hover:border-tangerine-200 transition-all shadow-sm"
              aria-label="Discord"
            >
              <Icon name="simple-icons:discord" class="w-4 h-4" />
            </a>
            <a 
              href="#" 
              class="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-neutral-600 hover:bg-tangerine-50 hover:text-tangerine-600 hover:border-tangerine-200 transition-all shadow-sm"
              aria-label="Twitter"
            >
              <Icon name="lucide:twitter" class="w-4 h-4" />
            </a>
            <a 
              href="#" 
              class="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-neutral-600 hover:bg-tangerine-50 hover:text-tangerine-600 hover:border-tangerine-200 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <Icon name="lucide:github" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold text-text-primary uppercase tracking-wider mb-5">Produto</h4>
          <ul class="space-y-3">
            <li>
              <a href="#features" class="text-sm text-text-secondary hover:text-tangerine-600 transition-colors flex items-center gap-2 group">
                <span class="w-1 h-1 bg-border rounded-full group-hover:bg-tangerine-500 transition-colors"></span>
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-text-secondary hover:text-tangerine-600 transition-colors flex items-center gap-2 group">
                <span class="w-1 h-1 bg-border rounded-full group-hover:bg-tangerine-500 transition-colors"></span>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-text-secondary hover:text-tangerine-600 transition-colors flex items-center gap-2 group">
                <span class="w-1 h-1 bg-border rounded-full group-hover:bg-tangerine-500 transition-colors"></span>
                Status
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold text-text-primary uppercase tracking-wider mb-5">Suporte</h4>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-sm text-text-secondary hover:text-tangerine-600 transition-colors flex items-center gap-2 group">
                <span class="w-1 h-1 bg-border rounded-full group-hover:bg-tangerine-500 transition-colors"></span>
                Documentação
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-text-secondary hover:text-tangerine-600 transition-colors flex items-center gap-2 group">
                <span class="w-1 h-1 bg-border rounded-full group-hover:bg-tangerine-500 transition-colors"></span>
                Servidor de Suporte
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-text-secondary hover:text-tangerine-600 transition-colors flex items-center gap-2 group">
                <span class="w-1 h-1 bg-border rounded-full group-hover:bg-tangerine-500 transition-colors"></span>
                Contato
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-text-secondary hover:text-tangerine-600 transition-colors flex items-center gap-2 group">
                <span class="w-1 h-1 bg-border rounded-full group-hover:bg-tangerine-500 transition-colors"></span>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="h-px bg-gradient-to-r from-transparent via-border to-transparent my-10"></div>

      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-xs font-medium text-text-tertiary">
          © {{ currentYear }} Tangerina. Todos os direitos reservados.
        </p>
        <div class="flex items-center gap-8">
          <a href="#" class="text-xs font-medium text-text-tertiary hover:text-text-primary transition-colors underline-offset-4 hover:underline">
            Termos de Uso
          </a>
          <a href="#" class="text-xs font-medium text-text-tertiary hover:text-text-primary transition-colors underline-offset-4 hover:underline">
            Privacidade
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
