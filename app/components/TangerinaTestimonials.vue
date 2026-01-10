<template>
  <section id="testimonials" class="section-lg relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-tangerine-500/5 rounded-full blur-3xl pointer-events-none"></div>
    
    <div class="container-default relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 badge badge-primary badge-glow mb-6">
          <Icon name="lucide:heart" class="w-3.5 h-3.5" />
          <span>Amado pela comunidade</span>
        </div>
        <h2 class="text-headline mb-6">
          O que dizem sobre o
          <span class="text-gradient"> Tangerina</span>
        </h2>
        <p class="text-body-lg">
          Milhares de comunidades confiam no Tangerina para animar seus servidores com música e diversão.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="testimonial-card"
        >
          <div class="p-6">
            <!-- Stars -->
            <div class="flex gap-1 mb-4">
              <Icon 
                v-for="i in 5" 
                :key="i" 
                name="lucide:star" 
                class="w-4 h-4 text-yellow-400 fill-yellow-400" 
              />
            </div>
            
            <!-- Quote -->
            <p class="text-text-secondary text-sm leading-relaxed mb-6">
              "{{ testimonial.quote }}"
            </p>
            
            <!-- Author -->
            <div class="flex items-center gap-3">
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                :style="{ background: testimonial.color }"
              >
                {{ testimonial.avatar }}
              </div>
              <div>
                <p class="text-sm font-bold text-text-primary">{{ testimonial.name }}</p>
                <p class="text-xs text-text-tertiary">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stats Row -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="text-3xl md:text-4xl font-bold text-text-primary mb-2">{{ stat.value }}</p>
          <p class="text-sm text-text-tertiary">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: 'O Tangerina revolucionou as festas no meu servidor! A integração com Spotify e YouTube é perfeita, e os comandos de voz funcionam que é uma beleza.',
    name: 'Lucas Silva',
    role: 'Owner, Gaming Community',
    avatar: 'LS',
    color: 'linear-gradient(135deg, #667eea, #764ba2)'
  },
  {
    quote: 'Os comandos de voz são incríveis! É só falar "Tangerina, toca tal música" e ele já começa. A resposta em TTS é muito natural e divertida!',
    name: 'Marina Costa',
    role: 'Admin, Anime Brasil',
    avatar: 'MC',
    color: 'linear-gradient(135deg, #f093fb, #f5576c)'
  },
  {
    quote: 'Testei vários bots de música, mas nenhum se compara ao Tangerina. A qualidade do áudio e a facilidade de uso são excepcionais!',
    name: 'Pedro Santos',
    role: 'Mod, Tech Hub',
    avatar: 'PS',
    color: 'linear-gradient(135deg, #4facfe, #00f2fe)'
  },
  {
    quote: 'O assistente inteligente é perfeito para buscar informações durante as calls. Ele entende perfeitamente o que preciso e responde rápido!',
    name: 'Ana Rodrigues',
    role: 'Owner, Study Group',
    avatar: 'AR',
    color: 'linear-gradient(135deg, #43e97b, #38f9d7)'
  },
  {
    quote: 'Finalmente um bot brasileiro que entende linguagem natural! Falo com ele normalmente e ele compreende tudo. Os comandos de voz são sensacionais!',
    name: 'Thiago Mendes',
    role: 'Admin, RP Brasil',
    avatar: 'TM',
    color: 'linear-gradient(135deg, #fa709a, #fee140)'
  },
  {
    quote: 'A configuração é super fácil e a qualidade das músicas é incrível. Em 5 minutos já estava tocando minhas playlists do Spotify!',
    name: 'Juliana Ferreira',
    role: 'Owner, Art Community',
    avatar: 'JF',
    color: 'linear-gradient(135deg, #a18cd1, #fbc2eb)'
  }
]

const stats = [
  { value: '10k+', label: 'Servidores Ativos' },
  { value: '500k+', label: 'Usuários' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9/5', label: 'Avaliação Média' }
]
</script>

<style scoped>
.testimonial-card {
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  transition: all 300ms ease;
}

.testimonial-card:hover {
  border-color: rgba(249, 115, 22, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.3);
}
</style>
