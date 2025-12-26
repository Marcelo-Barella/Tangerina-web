<template>
  <section class="section-lg relative overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-tangerine-100 rounded-full blur-3xl opacity-40"></div>
    
    <div class="container-narrow relative z-10 text-center">
      <div class="inline-flex items-center gap-2 badge badge-primary mb-6">
        <Icon name="lucide:sparkles" class="w-3.5 h-3.5" />
        <span>Evoluindo seu servidor todos os dias</span>
      </div>

      <h2 class="text-display mb-6 text-balance tracking-tight">
        Dê o próximo passo com sua comunidade
      </h2>
      
      <p class="text-body-lg max-w-xl mx-auto mb-10">
        Junte-se a milhares de administradores que escolheram a excelência. Comece a usar o Tangerina hoje mesmo.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://discord.com/oauth2/authorize"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary w-full sm:w-auto px-10"
        >
          <Icon name="lucide:plus" class="w-4 h-4" />
          Adicionar ao Servidor
        </a>
        <a
          href="#"
          class="btn btn-ghost w-full sm:w-auto"
        >
          Central de Ajuda
          <Icon name="lucide:external-link" class="w-4 h-4" />
        </a>
      </div>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-6 text-caption text-text-tertiary">
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle" class="w-4 h-4 text-green-600" />
          <span>Fácil integração</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle" class="w-4 h-4 text-green-600" />
          <span>Privacidade garantida</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle" class="w-4 h-4 text-green-600" />
          <span>Comunidade ativa</span>
        </div>
      </div>
    </div>
  </section>
</template>
