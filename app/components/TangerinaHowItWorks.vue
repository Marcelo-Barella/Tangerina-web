<template>
  <section id="how-it-works" class="section-lg bg-white relative overflow-hidden">
    <!-- Background accents -->
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-tangerine-50/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
    
    <div class="container-default relative z-10">
      <div class="text-center max-w-2xl mx-auto mb-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tangerine-50 border border-tangerine-100 mb-4">
          <span class="w-1.5 h-1.5 bg-tangerine-500 rounded-full animate-pulse"></span>
          <span class="text-[11px] font-bold text-tangerine-600 uppercase tracking-wider">Simplicidade</span>
        </div>
        <h2 class="text-headline mb-4">
          Configuração em 3 passos simples
        </h2>
        <p class="text-body-lg text-neutral-500">
          Do clique ao funcionamento em menos de 2 minutos. Sem complicação.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-10">
        <!-- Step 1 -->
        <div class="group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-tangerine-200 hover:shadow-xl hover:shadow-tangerine-500/5 transition-all duration-500">
          <div class="w-12 h-12 rounded-2xl bg-tangerine-500 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg shadow-tangerine-500/20 group-hover:scale-110 transition-transform duration-500">
            1
          </div>
          <h3 class="text-title mb-3">Adicione ao servidor</h3>
          <p class="text-body text-neutral-500 leading-relaxed">
            Clique no botão "Adicionar" e selecione o servidor Discord onde deseja instalar o Tangerina.
          </p>
          <!-- Connecting line for desktop -->
          <div class="hidden md:block absolute top-14 left-[calc(100%+1.25rem)] w-10 lg:w-14 h-px bg-gradient-to-r from-tangerine-200 to-transparent"></div>
        </div>

        <!-- Step 2 -->
        <div class="group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-tangerine-200 hover:shadow-xl hover:shadow-tangerine-500/5 transition-all duration-500">
          <div class="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 text-xl font-bold mb-6 group-hover:bg-tangerine-50 group-hover:border-tangerine-200 group-hover:text-tangerine-500 transition-colors duration-500">
            2
          </div>
          <h3 class="text-title mb-3">Autorize as permissões</h3>
          <p class="text-body text-neutral-500 leading-relaxed">
            Confirme as permissões necessárias. Pedimos apenas o essencial para o bot funcionar perfeitamente.
          </p>
          <!-- Connecting line for desktop -->
          <div class="hidden md:block absolute top-14 left-[calc(100%+1.25rem)] w-10 lg:w-14 h-px bg-gradient-to-r from-tangerine-200 to-transparent"></div>
        </div>

        <!-- Step 3 -->
        <div class="group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-tangerine-200 hover:shadow-xl hover:shadow-tangerine-500/5 transition-all duration-500">
          <div class="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 text-xl font-bold mb-6 group-hover:bg-tangerine-50 group-hover:border-tangerine-200 group-hover:text-tangerine-500 transition-colors duration-500">
            3
          </div>
          <h3 class="text-title mb-3">Pronto para usar</h3>
          <p class="text-body text-neutral-500 leading-relaxed">
            Use <code class="text-tangerine-600 font-bold bg-tangerine-50 px-2 py-0.5 rounded">/help</code> para ver todos os comandos e começar a diversão.
          </p>
        </div>
      </div>

      <div class="mt-20 text-center">
        <a
          href="https://discord.com/oauth2/authorize"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary px-12 py-4 text-base"
        >
          <Icon name="lucide:zap" class="w-5 h-5" />
          Começar agora
        </a>
      </div>
    </div>
  </section>
</template>
