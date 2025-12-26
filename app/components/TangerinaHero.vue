<template>
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-50"></div>
    
    <div class="absolute top-20 right-0 w-96 h-96 bg-tangerine-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-tangerine-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2"></div>
    
    <div class="container-default relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 badge badge-primary mb-6 animate-fade-in">
          <span class="w-1.5 h-1.5 bg-tangerine-500 rounded-full"></span>
          <span>Confiado por 10.000+ comunidades</span>
        </div>

        <h1 class="text-display text-balance mb-6 animate-fade-in delay-100 tracking-tight">
          O assistente definitivo para o seu
          <span class="text-gradient"> servidor Discord</span>
        </h1>

        <p class="text-body-lg max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
          Moderação inteligente, economia e entretenimento em um único lugar. Leve seu servidor ao próximo nível com o Tangerina.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
          <a
            href="https://discord.com/oauth2/authorize"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary w-full sm:w-auto"
          >
            <Icon name="lucide:user-plus" class="w-4 h-4" />
            Adicionar agora
          </a>
          <a
            href="#features"
            class="btn btn-secondary w-full sm:w-auto"
          >
            Explorar recursos
          </a>
        </div>

        <div class="mt-10 flex items-center justify-center gap-6 text-caption animate-fade-in delay-400">
          <div class="flex items-center gap-2">
            <Icon name="lucide:check" class="w-4 h-4 text-tangerine-500" />
            <span>Configuração rápida</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:check" class="w-4 h-4 text-tangerine-500" />
            <span>100% Gratuito</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:check" class="w-4 h-4 text-tangerine-500" />
            <span>Suporte 24/7</span>
          </div>
        </div>
      </div>

      <div class="mt-16 relative">
        <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 pointer-events-none"></div>
        <div class="relative mx-auto max-w-4xl animate-fade-in delay-400">
          <div class="bg-neutral-900 rounded-t-2xl p-3 flex items-center gap-2 border-x border-t border-white/5">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
            <div class="flex-1 text-center">
              <span class="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Preview — Tangerina</span>
            </div>
          </div>
          <div class="bg-[#36393f] p-6 md:p-10 shadow-2xl border-x border-b border-white/5">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-tangerine-500 flex items-center justify-center text-white text-lg flex-shrink-0 shadow-lg shadow-tangerine-500/20">
                  🍊
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="font-bold text-tangerine-400">Tangerina</span>
                    <span class="text-[10px] font-bold bg-[#5865f2] text-white px-1.5 py-0.5 rounded-sm">BOT</span>
                    <span class="text-[10px] text-neutral-500 font-medium">Hoje às 14:32</span>
                  </div>
                  <div class="bg-[#2f3136] rounded-xl p-5 border-l-4 border-tangerine-500 shadow-sm">
                    <p class="text-white font-bold mb-2 text-base">👋 Olá, sou o Tangerina!</p>
                    <p class="text-neutral-300 text-sm leading-relaxed">Meu objetivo é facilitar a gestão do seu servidor. Use <span class="text-tangerine-400 font-mono">/help</span> para conhecer todos os meus comandos.</p>
                  </div>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-[#5865f2] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  U
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="font-bold text-white">Usuário</span>
                    <span class="text-[10px] text-neutral-500 font-medium">Hoje às 14:33</span>
                  </div>
                  <p class="text-neutral-300 text-sm bg-white/5 py-1 px-2 rounded inline-block">/daily</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-tangerine-500 flex items-center justify-center text-white text-lg flex-shrink-0 shadow-lg shadow-tangerine-500/20">
                  🍊
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="font-bold text-tangerine-400">Tangerina</span>
                    <span class="text-[10px] font-bold bg-[#5865f2] text-white px-1.5 py-0.5 rounded-sm">BOT</span>
                    <span class="text-[10px] text-neutral-500 font-medium">Hoje às 14:33</span>
                  </div>
                  <div class="bg-[#2f3136] rounded-xl p-5 border-l-4 border-green-500 shadow-sm">
                    <p class="text-white font-bold mb-1 text-base">💰 Recompensa Diária</p>
                    <p class="text-neutral-300 text-sm leading-relaxed">Parabéns! Você acaba de coletar <span class="text-green-400 font-bold">500 🍊 moedas</span>. Volte amanhã para mais!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
