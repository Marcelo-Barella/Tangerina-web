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
          Moderação robusta, economia dinâmica e entretenimento garantido. 
          O Tangerina é a solução completa para servidores Discord de todos os tamanhos.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Moderation Card -->
        <div class="feature-card lg:col-span-2 lg:row-span-2">
          <div class="feature-card-inner h-full flex flex-col p-8">
            <div class="icon-box icon-box-lg mb-6 rounded-2xl bg-tangerine-500/15 border-tangerine-500/20 text-tangerine-400">
              <Icon name="lucide:shield-check" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">Moderação Inteligente</h3>
            <p class="text-body mb-6 flex-1">
              Mantenha seu servidor seguro com auto-moderação avançada, filtros de spam 
              e logs detalhados de todas as ações. Configuração granular para qualquer situação.
            </p>
            
            <!-- Feature Demo -->
            <div class="bg-surface rounded-xl p-4 border border-border mb-6">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Icon name="lucide:ban" class="w-4 h-4 text-red-400" />
                </div>
                <div class="flex-1">
                  <p class="text-xs font-bold text-red-400">Auto-Moderação</p>
                  <p class="text-[10px] text-text-tertiary">Spam detectado e removido</p>
                </div>
                <span class="text-[10px] text-text-tertiary">agora</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Icon name="lucide:alert-triangle" class="w-4 h-4 text-yellow-400" />
                </div>
                <div class="flex-1">
                  <p class="text-xs font-bold text-yellow-400">Aviso Aplicado</p>
                  <p class="text-[10px] text-text-tertiary">Usuário notificado (2/3)</p>
                </div>
                <span class="text-[10px] text-text-tertiary">2min</span>
              </div>
            </div>
            
            <ul class="grid grid-cols-2 gap-3">
              <li v-for="feature in moderationFeatures" :key="feature" class="flex items-center gap-2 text-sm text-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-tangerine-500"></div>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Economy Card -->
        <div class="feature-card">
          <div class="feature-card-inner h-full flex flex-col p-6">
            <div class="icon-box mb-5 rounded-xl bg-green-500/15 border-green-500/20 text-green-400">
              <Icon name="lucide:coins" class="w-5 h-5" />
            </div>
            <h3 class="text-lg font-bold text-text-primary mb-2">Economia Integrada</h3>
            <p class="text-body text-sm mb-4 flex-1">
              Sistema de moedas dinâmico com loja personalizada e recompensas diárias.
            </p>
            <div class="space-y-2">
              <div v-for="item in economyItems" :key="item.label" class="flex items-center justify-between text-xs">
                <span class="text-text-tertiary">{{ item.label }}</span>
                <span class="font-bold text-tangerine-400">{{ item.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Fun & Social Card -->
        <div class="feature-card">
          <div class="feature-card-inner h-full flex flex-col p-6">
            <div class="icon-box mb-5 rounded-xl bg-pink-500/15 border-pink-500/20 text-pink-400">
              <Icon name="lucide:sparkles" class="w-5 h-5" />
            </div>
            <h3 class="text-lg font-bold text-text-primary mb-2">Diversão & Social</h3>
            <p class="text-body text-sm mb-4 flex-1">
              Mini-games, sistemas de interação social e comandos divertidos.
            </p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in funTags" :key="tag" class="px-2 py-1 text-[10px] font-bold rounded-full bg-white/5 border border-border text-text-secondary">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Levels Card -->
        <div class="feature-card lg:col-span-2">
          <div class="feature-card-inner h-full flex flex-col md:flex-row gap-6 p-6">
            <div class="flex-1">
              <div class="icon-box mb-5 rounded-xl bg-blue-500/15 border-blue-500/20 text-blue-400">
                <Icon name="lucide:trophy" class="w-5 h-5" />
              </div>
              <h3 class="text-lg font-bold text-text-primary mb-2">Níveis & Rankings</h3>
              <p class="text-body text-sm mb-4">
                Recompense a atividade dos membros com XP, níveis e cargos automáticos.
              </p>
              <ul class="space-y-2">
                <li v-for="feature in levelFeatures" :key="feature" class="flex items-center gap-2 text-sm text-text-secondary">
                  <Icon name="lucide:check" class="w-4 h-4 text-blue-400" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- Level Progress Demo -->
            <div class="flex-1 bg-surface rounded-xl p-4 border border-border">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  15
                </div>
                <div class="flex-1">
                  <p class="text-sm font-bold text-text-primary">Nível 15</p>
                  <p class="text-xs text-text-tertiary">2,450 / 3,000 XP</p>
                </div>
              </div>
              <div class="w-full h-2 bg-surface-elevated rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" style="width: 82%"></div>
              </div>
              <p class="text-[10px] text-text-tertiary mt-2 text-center">550 XP para o próximo nível</p>
            </div>
          </div>
        </div>

        <!-- Utilities Card -->
        <div class="feature-card">
          <div class="feature-card-inner h-full flex flex-col p-6">
            <div class="icon-box mb-5 rounded-xl bg-cyan-500/15 border-cyan-500/20 text-cyan-400">
              <Icon name="lucide:settings" class="w-5 h-5" />
            </div>
            <h3 class="text-lg font-bold text-text-primary mb-2">Utilidades</h3>
            <p class="text-body text-sm mb-4 flex-1">
              Ferramentas úteis como tradutor, clima e pesquisas.
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border">
                <Icon name="lucide:languages" class="w-4 h-4 text-cyan-400" />
                <span class="text-xs text-text-secondary">Tradutor multi-linguagem</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border">
                <Icon name="lucide:search" class="w-4 h-4 text-cyan-400" />
                <span class="text-xs text-text-secondary">Buscas inteligentes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const moderationFeatures = [
  'Auto-moderação',
  'Logs detalhados',
  'Filtros de spam',
  'Punições automáticas',
  'Alertas em tempo real',
  'Quarentena'
]

const economyItems = [
  { label: 'Saldo', value: '2,500 🍊' },
  { label: 'Recompensa Diária', value: '+500' },
  { label: 'Streak', value: '7 dias 🔥' }
]

const funTags = ['🎮 Games', '💬 Social', '🎲 Apostas', '🏆 Rankings', '🎁 Sorteios']

const levelFeatures = [
  'Sistema de XP customizável',
  'Cargos automáticos por nível',
  'Leaderboards em tempo real'
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
