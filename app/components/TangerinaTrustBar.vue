<template>
  <section class="py-16 border-y border-border bg-neutral-50/30 relative">
    <div class="container-default">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p class="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-4">Confiabilidade comprovada</p>
          <div class="flex items-center gap-4">
            <div class="flex -space-x-3">
              <div class="w-12 h-12 rounded-full bg-[#5865f2] flex items-center justify-center text-white text-xs font-bold border-4 border-surface shadow-lg">G</div>
              <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold border-4 border-surface shadow-lg">M</div>
              <div class="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold border-4 border-surface shadow-lg">P</div>
              <div class="w-12 h-12 rounded-full bg-tangerine-500 flex items-center justify-center text-white text-xs font-bold border-4 border-surface shadow-lg">+</div>
            </div>
            <div>
              <p class="text-lg font-bold text-text-primary leading-tight">10.000+</p>
              <p class="text-xs font-semibold text-text-secondary uppercase tracking-tighter">Servidores Ativos</p>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          <div class="flex flex-col items-center gap-2">
            <div class="flex gap-0.5">
              <Icon name="lucide:star" class="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <span class="text-xs font-bold text-text-secondary uppercase tracking-widest">Avaliação 4.9/5</span>
          </div>
          
          <div class="flex flex-col items-center gap-2">
            <Icon name="lucide:shield-check" class="w-6 h-6 text-green-600" />
            <span class="text-xs font-bold text-text-secondary uppercase tracking-widest">99.9% Uptime</span>
          </div>

          <div class="flex flex-col items-center gap-2">
            <Icon name="lucide:globe" class="w-6 h-6 text-tangerine-500" />
            <span class="text-xs font-bold text-text-secondary uppercase tracking-widest">Global Support</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
