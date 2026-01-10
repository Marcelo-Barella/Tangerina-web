<template>
  <section id="features" class="section-lg relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-tangerine-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    
    <div class="container-default relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 badge badge-primary badge-glow mb-6 animate-fade-in">
          <Icon name="lucide:sparkles" class="w-3.5 h-3.5" />
          <span>Poderoso & Flexível</span>
        </div>
        <h2 class="text-headline mb-6 animate-fade-in">
          Tudo o que sua comunidade precisa
          <span class="text-gradient"> em um só lugar</span>
        </h2>
        <p class="text-body-lg animate-fade-in">
          Reprodução de música com Spotify e YouTube, comandos de voz com TTS e assistente inteligente. 
          Tudo que você precisa para animar seu servidor Discord.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 gap-6">
        <!-- Music Player Card -->
        <div class="feature-card">
          <div class="feature-card-inner h-full flex flex-col p-8">
            <div class="icon-box icon-box-lg mb-6 rounded-2xl bg-tangerine-500/15 border-tangerine-500/20 text-tangerine-400">
              <Icon name="lucide:music" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">Reprodução de Música</h3>
            <p class="text-body mb-6 flex-1">
              Reproduza suas músicas favoritas do Spotify e YouTube diretamente no Discord. 
              Controle playlists, filas e muito mais com comandos simples e naturais.
            </p>
            
            <!-- Feature Demo -->
            <div class="bg-surface rounded-xl p-4 border border-border mb-6">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="lucide:play" class="w-5 h-5 text-white" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <p class="text-xs font-bold text-text-primary">Enter Sandman</p>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#1DB954] text-white">SPOTIFY</span>
                  </div>
                  <p class="text-[10px] text-text-tertiary">Metallica</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                <Icon name="lucide:list" class="w-4 h-4 text-text-tertiary" />
                <span class="text-[10px] text-text-tertiary">3 músicas na fila</span>
                <span class="text-[10px] text-text-tertiary">•</span>
                <span class="text-[10px] text-text-tertiary">Reproduzindo via YouTube</span>
              </div>
            </div>
            
            <ul class="grid grid-cols-2 gap-3">
              <li v-for="feature in musicFeatures" :key="feature" class="flex items-center gap-2 text-sm text-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-tangerine-500"></div>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Voice Commands & TTS Card -->
        <div class="feature-card">
          <div class="feature-card-inner h-full flex flex-col md:flex-row gap-6 p-6">
            <div class="flex-1">
              <div class="icon-box mb-5 rounded-xl bg-purple-500/15 border-purple-500/20 text-purple-400">
                <Icon name="lucide:mic" class="w-5 h-5" />
              </div>
              <h3 class="text-lg font-bold text-text-primary mb-2">Comandos de Voz & TTS</h3>
              <p class="text-body text-sm mb-4">
                Entre em chamadas de voz e controle o Tangerina com sua voz. Ele ouve, entende e responde naturalmente.
              </p>
              <ul class="space-y-2">
                <li v-for="feature in voiceFeatures" :key="feature" class="flex items-center gap-2 text-sm text-text-secondary">
                  <Icon name="lucide:check" class="w-4 h-4 text-purple-400" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- Voice Demo -->
            <div class="flex-1 bg-surface rounded-xl p-4 border border-border">
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Icon name="lucide:mic" class="w-4 h-4 text-purple-400" />
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-bold text-text-primary">Comando de voz</p>
                    <p class="text-[10px] text-text-tertiary">"Tangerina, toca Billie Jean"</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Icon name="lucide:volume-2" class="w-4 h-4 text-green-400" />
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-bold text-text-primary">Resposta TTS</p>
                    <p class="text-[10px] text-text-tertiary">"Tocando agora Billie Jean..."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Assistant Card -->
        <div class="feature-card">
          <div class="feature-card-inner h-full flex flex-col p-6">
            <div class="icon-box mb-5 rounded-xl bg-cyan-500/15 border-cyan-500/20 text-cyan-400">
              <Icon name="lucide:brain" class="w-5 h-5" />
            </div>
            <h3 class="text-lg font-bold text-text-primary mb-2">Assistente Inteligente</h3>
            <p class="text-body text-sm mb-4 flex-1">
              Busque informações na web e obtenha respostas rápidas. O Tangerina entende o que você precisa.
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border">
                <Icon name="lucide:search" class="w-4 h-4 text-cyan-400" />
                <span class="text-xs text-text-secondary">Buscas na web</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border">
                <Icon name="lucide:message-circle" class="w-4 h-4 text-cyan-400" />
                <span class="text-xs text-text-secondary">Linguagem natural</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const musicFeatures = [
  'Integração Spotify',
  'Suporte YouTube',
  'Gerenciamento de playlists',
  'Sistema de fila',
  'Controle de reprodução',
  'Busca inteligente'
]

const voiceFeatures = [
  'Reconhecimento de voz',
  'Respostas com TTS',
  'Integração com canais de voz',
  'Compreensão de linguagem natural'
]
</script>

<style scoped>
.feature-card {
  position: relative;
  border-radius: 20px;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all 300ms ease;
}

.feature-card:hover {
  border-color: rgba(249, 115, 22, 0.3);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.4);
  transform: translateY(-4px);
}

.feature-card-inner {
  position: relative;
  z-index: 1;
  height: 100%;
}

.icon-box {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-tangerine-500-15, rgba(249, 115, 22, 0.15));
  border: 1px solid var(--color-tangerine-500-20, rgba(249, 115, 22, 0.2));
}

.icon-box-lg {
  width: 64px;
  height: 64px;
}
</style>
