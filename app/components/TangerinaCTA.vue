<template>
  <section class="section-lg relative overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-tangerine-500/20 rounded-full blur-[120px]"></div>
    </div>
    
    <!-- Grid Pattern -->
    <div class="absolute inset-0 bg-dots opacity-20"></div>
    
    <div class="container-narrow relative z-10 text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 badge badge-primary badge-glow mb-8 animate-fade-in">
        <Icon name="lucide:sparkles" class="w-3.5 h-3.5" />
        <span>Evoluindo seu servidor todos os dias</span>
      </div>

      <!-- Main Headline -->
      <h2 class="text-display mb-6 text-balance tracking-tight animate-fade-in">
        Dê o próximo passo com
        <span class="text-gradient-shine"> sua comunidade</span>
      </h2>
      
      <!-- Description -->
      <p class="text-body-lg max-w-xl mx-auto mb-10 animate-fade-in">
        Junte-se a milhares de comunidades que escolheram o Tangerina para animar seus servidores. 
        Comece a tocar suas músicas favoritas hoje mesmo.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
        <a
          :href="inviteUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary w-full sm:w-auto px-10 py-4 text-base group"
        >
          <Icon name="lucide:plus" class="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
          <span>Adicionar ao Servidor</span>
        </a>
        <a
          href="#"
          class="btn btn-secondary w-full sm:w-auto px-8 py-4 group"
        >
          <span>Central de Ajuda</span>
          <Icon name="lucide:external-link" class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <!-- Trust Badges -->
      <div class="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 animate-fade-in">
        <div class="flex items-center gap-2 text-caption">
          <div class="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
            <Icon name="lucide:check" class="w-3 h-3 text-green-400" />
          </div>
          <span>Fácil integração</span>
        </div>
        <div class="flex items-center gap-2 text-caption">
          <div class="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
            <Icon name="lucide:check" class="w-3 h-3 text-green-400" />
          </div>
          <span>Privacidade garantida</span>
        </div>
        <div class="flex items-center gap-2 text-caption">
          <div class="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
            <Icon name="lucide:check" class="w-3 h-3 text-green-400" />
          </div>
          <span>Comunidade ativa</span>
        </div>
      </div>

      <!-- Live Counter -->
      <div class="mt-16 animate-fade-in">
        <div class="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-border backdrop-blur-sm">
          <div class="flex -space-x-2">
            <div class="w-8 h-8 rounded-full bg-[#5865f2] flex items-center justify-center text-white text-xs font-bold border-2 border-surface">M</div>
            <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold border-2 border-surface">P</div>
            <div class="w-8 h-8 rounded-full bg-tangerine-500 flex items-center justify-center text-white text-xs font-bold border-2 border-surface">J</div>
          </div>
          <div class="text-left">
            <p class="text-sm font-bold text-text-primary">
              <span class="text-tangerine-400">347</span> pessoas adicionaram hoje
            </p>
            <p class="text-xs text-text-tertiary">Junte-se a eles!</p>
          </div>
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { inviteUrl } = useDiscordInvite()
</script>
