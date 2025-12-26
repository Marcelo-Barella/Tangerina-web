<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light">
    <div class="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000 translate-x-1/3"></div>
    <div class="absolute -bottom-32 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2 text-center lg:text-left">
          <div class="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-bold mb-4 border-2 border-orange-300">
            ✨ O bot 100% Tangerina 🍊
          </div>
          <h1 class="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
            Fala, meu consagrado! 🍊
            <br>
            <span class="text-3xl lg:text-5xl font-medium text-gray-600">Eu sou o Tangerina e vim.rulear seu Discord!</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Chega de server sem graça. Eu sou O BOT que traz entretenimento, moderação e utilidades com uma pitada de Tangerina na veia.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://discord.com/oauth2/authorize"
              class="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-800 hover:scale-105 transition transform flex items-center justify-center gap-2"
            >
              <i data-feather="link"></i>
              Me adiciona no Discord
            </a>
            <a
              href="#features"
              class="bg-white text-brand-orange border-2 border-orange-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition flex items-center justify-center gap-2"
            >
              <i data-feather="play-circle"></i>
              Ver o que eu faço
            </a>
          </div>
        </div>
        
        <div class="lg:w-1/2 flex justify-center relative">
          <div class="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-b from-orange-300 to-orange-500 rounded-full flex items-center justify-center border-8 border-white shadow-2xl animate-float">
            <img
              src="https://huggingface.co/spaces/KKaah/tangerina-bot-landing-page/resolve/main/images/60ef79f54d5da45612cfc3dc93d1b2f8.png"
              alt="Tangerina Mascot"
              class="w-full h-full object-contain select-none drop-shadow-xl animate-bounce-slow"
            >
            <div class="absolute -top-4 -right-4 bg-yellow-400 text-white font-bold px-3 py-1 rounded-lg transform rotate-12 shadow-md text-sm bounce-slow">
              Eai!
            </div>
            <div class="absolute bottom-4 -left-6 bg-pink-500 text-white font-bold px-3 py-1 rounded-lg transform -rotate-6 shadow-md text-sm wiggle">
              Let's Go!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
