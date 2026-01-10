<template>
  <section class="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-radial"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-tangerine-500/20 rounded-full blur-[120px] -translate-y-1/2"></div>
    <div class="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
    
    <!-- Grid Pattern -->
    <div class="absolute inset-0 bg-dots opacity-30"></div>
    
    <div class="container-default relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 badge badge-primary badge-glow mb-7 animate-fade-in">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-tangerine-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-tangerine-500"></span>
          </span>
          <span>Confiado por 10.000+ comunidades</span>
        </div>

        <!-- Main Headline -->
        <h1 class="text-display text-balance mb-5 animate-fade-in-up delay-100">
          Seu assistente musical e
          <span class="text-gradient-shine"> bot de entretenimento</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-body-lg max-w-2xl mx-auto mb-9 animate-fade-in delay-200">
          Reproduza músicas do Spotify e YouTube, use comandos de voz e converse naturalmente. 
          Tangerina está aqui para levantar o astral do seu servidor.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in delay-300">
          <a
            :href="inviteUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary w-full sm:w-auto group"
          >
            <Icon name="lucide:user-plus" class="w-4 h-4" />
            <span>Adicionar agora</span>
            <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#features" class="btn btn-secondary w-full sm:w-auto">
            <span>Explorar recursos</span>
            <Icon name="lucide:chevron-down" class="w-4 h-4" />
          </a>
        </div>

        <!-- Trust Indicators -->
        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 animate-fade-in delay-400">
          <div class="flex items-center gap-2 text-sm text-text-tertiary">
            <Icon name="lucide:check-circle" class="w-4 h-4 text-green-400" />
            <span>Configuração rápida</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-text-tertiary">
            <Icon name="lucide:check-circle" class="w-4 h-4 text-green-400" />
            <span>100% Gratuito</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-text-tertiary">
            <Icon name="lucide:check-circle" class="w-4 h-4 text-green-400" />
            <span>Suporte 24/7</span>
          </div>
        </div>
      </div>

      <!-- Discord Preview -->
      <div class="mt-16 relative animate-fade-in-up delay-500">
        <!-- Glow behind the card -->
        <div class="absolute inset-0 bg-tangerine-500/15 blur-3xl rounded-full scale-75"></div>
        
        <div class="relative mx-auto max-w-4xl rounded-2xl overflow-hidden border-2 border-tangerine-500/30 shadow-2xl shadow-tangerine-500/10">
          <div class="bg-surface-elevated rounded-2xl overflow-hidden">
            <!-- Window Title Bar -->
            <div class="bg-neutral-900 px-4 py-3 flex items-center gap-3 border-b border-white/5">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <div class="flex-1 text-center">
                <span class="text-[11px] text-neutral-500 font-semibold uppercase tracking-widest">Preview — Tangerina</span>
              </div>
              <div class="w-16"></div>
            </div>
            
            <!-- Discord Chat Content -->
            <div class="bg-[#313338] p-5 md:p-6">
              <div class="space-y-4">
                <!-- Bot Welcome Message -->
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-tangerine-400 to-tangerine-600 flex items-center justify-center text-white text-lg flex-shrink-0">
                    🍊
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="font-bold text-tangerine-400">Tangerina</span>
                      <span class="text-[10px] font-bold bg-[#5865f2] text-white px-1.5 py-0.5 rounded">BOT</span>
                      <span class="text-[10px] text-neutral-500">Hoje às 14:32</span>
                    </div>
                    <div class="bg-[#2b2d31] rounded-lg p-3.5 border-l-4 border-tangerine-500">
                      <p class="text-white font-semibold mb-1">Tangerina</p>
                      <p class="text-neutral-300 text-sm">
                        Meu objetivo é levantar o astral do seu servidor. Converse comigo no chat de texto ou de voz e eu entenderei o que você precisa!
                      </p>
                    </div>
                  </div>
                </div>
                
                <!-- User Message -->
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-full bg-[#5865f2] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    U
                  </div>
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <span class="font-bold text-white">Usuário</span>
                      <span class="text-[10px] text-neutral-500">Hoje às 14:33</span>
                    </div>
                    <p class="text-neutral-300 text-sm">
                      Tangerina, toca uma música do Metallica pra nós
                    </p>
                  </div>
                </div>
                
                <!-- Bot Response -->
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-tangerine-400 to-tangerine-600 flex items-center justify-center text-white text-lg flex-shrink-0">
                    🍊
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="font-bold text-tangerine-400">Tangerina</span>
                      <span class="text-[10px] font-bold bg-[#5865f2] text-white px-1.5 py-0.5 rounded">BOT</span>
                      <span class="text-[10px] text-neutral-500">Hoje às 14:33</span>
                    </div>
                    <div class="bg-[#2b2d31] rounded-lg p-3.5 border-l-4 border-green-500">
                      <p class="text-neutral-300 text-sm">
                        Tocando agora: Enter Sandman - Metallica
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Fade out effect at bottom -->
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { inviteUrl } = useDiscordInvite()
</script>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(
    ellipse 80% 50% at 50% -10%,
    rgba(249, 115, 22, 0.12),
    transparent
  );
}
</style>
