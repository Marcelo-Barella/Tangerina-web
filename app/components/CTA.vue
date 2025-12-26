<template>
  <section class="section-lg relative overflow-hidden bg-surface">
    <div class="absolute inset-0 bg-grid opacity-30"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-tangerine-100 rounded-full blur-3xl opacity-40"></div>
    
    <div class="container-narrow relative z-10 text-center">
      <div class="inline-flex items-center gap-2 badge badge-primary mb-6 animate-fade-in">
        <Icon name="lucide:zap" class="w-3.5 h-3.5" />
        <span>Configuração em menos de 2 minutos</span>
      </div>

      <h2 class="text-display mb-6 text-balance tracking-tight animate-fade-in delay-100">
        Pronto para transformar seu servidor?
      </h2>
      
      <p class="text-body-lg max-w-xl mx-auto mb-10 animate-fade-in delay-200">
        Junte-se a mais de 10.000 servidores que já utilizam Tangerina. Comece gratuitamente em segundos.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
        <a
          href="https://discord.com/oauth2/authorize"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary w-full sm:w-auto px-10"
        >
          <Icon name="lucide:user-plus" class="w-4 h-4" />
          Começar agora
        </a>
        <a
          href="#"
          class="btn btn-ghost w-full sm:w-auto"
        >
          Documentação
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </a>
      </div>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-6 text-caption animate-fade-in delay-400">
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle" class="w-4 h-4 text-green-600" />
          <span>100% gratuito</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle" class="w-4 h-4 text-green-600" />
          <span>Sem cartão de crédito</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle" class="w-4 h-4 text-green-600" />
          <span>Cancele quando quiser</span>
        </div>
      </div>
    </div>
  </section>
</template>
