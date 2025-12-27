<template>
  <section id="how-it-works" class="section-lg relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-tangerine-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute inset-0 bg-dots opacity-20"></div>
    
    <div class="container-default relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-20">
        <div class="inline-flex items-center gap-2 badge badge-primary badge-glow mb-6 animate-fade-in">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-tangerine-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-tangerine-500"></span>
          </span>
          <span>Simplicidade</span>
        </div>
        <h2 class="text-headline mb-6 animate-fade-in">
          Configuração em
          <span class="text-gradient"> 3 passos simples</span>
        </h2>
        <p class="text-body-lg animate-fade-in">
          Do clique ao funcionamento em menos de 2 minutos. Sem complicação.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <!-- Step 1 -->
        <div class="step-card">
          <div class="relative z-10">
            <div class="step-number">
              <span class="step-number-text">1</span>
            </div>
            
            <div class="step-icon">
              <Icon name="lucide:mouse-pointer-click" class="w-6 h-6" />
            </div>
            
            <h3 class="text-title mb-3">Adicione ao servidor</h3>
            <p class="text-body text-sm leading-relaxed mb-6">
              Clique no botão "Adicionar" e selecione o servidor Discord onde deseja instalar o Tangerina.
            </p>
            
            <!-- Visual Demo -->
            <div class="step-demo">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-[#5865f2] flex items-center justify-center">
                  <Icon name="simple-icons:discord" class="w-4 h-4 text-white" />
                </div>
                <div class="flex-1">
                  <p class="text-xs font-semibold text-text-primary">Meu Servidor</p>
                  <p class="text-[10px] text-text-tertiary">1,234 membros</p>
                </div>
                <Icon name="lucide:check-circle" class="w-5 h-5 text-green-400" />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="step-card">
          <div class="relative z-10">
            <div class="step-number">
              <span class="step-number-text">2</span>
            </div>
            
            <div class="step-icon">
              <Icon name="lucide:shield-check" class="w-6 h-6" />
            </div>
            
            <h3 class="text-title mb-3">Autorize as permissões</h3>
            <p class="text-body text-sm leading-relaxed mb-6">
              Confirme as permissões necessárias. Pedimos apenas o essencial para o bot funcionar.
            </p>
            
            <!-- Visual Demo -->
            <div class="step-demo">
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-3 h-3 text-green-400" />
                  <span class="text-xs text-text-secondary">Ler mensagens</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-3 h-3 text-green-400" />
                  <span class="text-xs text-text-secondary">Enviar mensagens</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-3 h-3 text-green-400" />
                  <span class="text-xs text-text-secondary">Gerenciar cargos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="step-card">
          <div class="relative z-10">
            <div class="step-number">
              <span class="step-number-text">3</span>
            </div>
            
            <div class="step-icon">
              <Icon name="lucide:party-popper" class="w-6 h-6" />
            </div>
            
            <h3 class="text-title mb-3">Pronto para usar!</h3>
            <p class="text-body text-sm leading-relaxed mb-6">
              Use <code class="text-tangerine-400 font-mono bg-tangerine-500/10 px-2 py-0.5 rounded">/help</code> para ver todos os comandos e começar.
            </p>
            
            <!-- Visual Demo -->
            <div class="step-demo">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-tangerine-400 to-tangerine-600 flex items-center justify-center text-white text-sm">
                  🍊
                </div>
                <div class="flex-1">
                  <p class="text-xs font-semibold text-tangerine-400">Tangerina</p>
                  <p class="text-[10px] text-text-tertiary">Online e pronto!</p>
                </div>
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-20 text-center animate-fade-in">
        <a
          href="https://discord.com/oauth2/authorize"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary px-10 py-4 text-base group"
        >
          <Icon name="lucide:zap" class="w-5 h-5 transition-transform group-hover:rotate-12" />
          <span>Começar agora</span>
          <Icon name="lucide:arrow-right" class="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
        <p class="mt-4 text-caption">
          Leva menos de 30 segundos • Sem cartão de crédito
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.step-card {
  position: relative;
  padding: 2rem;
  border-radius: 24px;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  transition: all 300ms ease;
}

.step-card:hover {
  border-color: rgba(249, 115, 22, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -20px rgba(249, 115, 22, 0.2);
}

.step-number {
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-tangerine-500), var(--color-tangerine-600));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px -4px rgba(249, 115, 22, 0.5);
}

.step-number-text {
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
}

.step-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 16px;
  background: rgba(249, 115, 22, 0.1);
  border: 1px solid rgba(249, 115, 22, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-tangerine-400);
  margin-bottom: 1.5rem;
  margin-top: 1rem;
}

.step-demo {
  padding: 1rem;
  border-radius: 12px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}
</style>
