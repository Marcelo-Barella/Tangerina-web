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
          Milhares de comunidades confiam no Tangerina para gerenciar seus servidores.
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
    quote: 'O Tangerina revolucionou a moderação do meu servidor. A auto-moderação é incrível e economiza horas do nosso trabalho diário!',
    name: 'Lucas Silva',
    role: 'Owner, Gaming Community',
    avatar: 'LS',
    color: 'linear-gradient(135deg, #667eea, #764ba2)'
  },
  {
    quote: 'O sistema de economia é perfeito! Meus membros adoram as recompensas diárias e os mini-games. Aumentou muito o engajamento.',
    name: 'Marina Costa',
    role: 'Admin, Anime Brasil',
    avatar: 'MC',
    color: 'linear-gradient(135deg, #f093fb, #f5576c)'
  },
  {
    quote: 'Testei vários bots, mas nenhum se compara ao Tangerina. A interface é intuitiva e o suporte é excepcional!',
    name: 'Pedro Santos',
    role: 'Mod, Tech Hub',
    avatar: 'PS',
    color: 'linear-gradient(135deg, #4facfe, #00f2fe)'
  },
  {
    quote: 'O sistema de níveis motivou muito minha comunidade. Agora todos querem subir no ranking e ganhar os cargos exclusivos.',
    name: 'Ana Rodrigues',
    role: 'Owner, Study Group',
    avatar: 'AR',
    color: 'linear-gradient(135deg, #43e97b, #38f9d7)'
  },
  {
    quote: 'Finalmente um bot brasileiro que entende nossas necessidades. Comandos em português e suporte local fazem toda diferença.',
    name: 'Thiago Mendes',
    role: 'Admin, RP Brasil',
    avatar: 'TM',
    color: 'linear-gradient(135deg, #fa709a, #fee140)'
  },
  {
    quote: 'A configuração é super fácil e o dashboard web é lindo. Em 5 minutos já tinha tudo funcionando perfeitamente!',
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
