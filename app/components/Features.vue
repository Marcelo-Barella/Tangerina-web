<template>
  <section id="features" class="py-20 bg-[#1E1F22]">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white">O que eu faço no seu server?</h2>
        <p class="text-xl text-gray-400 mt-4">De tudo um pouco, menos ficar parado! ⚡</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-[#2B2D31] p-8 rounded-3xl border-b-8 border-[#5865F2] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#5865F2]/20 transition duration-300 group">
          <div class="w-16 h-16 bg-[#5865F2]/20 text-[#5865F2] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <i data-feather="smile" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-white">🎉 Diversão</h3>
          <p class="text-gray-400">Gifs, memes, comandos aleatórios, caça ao tesouro e muito mais. Nunca mais terá aquela conversa morta.</p>
        </div>

        <div class="bg-[#2B2D31] p-8 rounded-3xl border-b-8 border-red-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 transition duration-300 group">
          <div class="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <i data-feather="shield" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-white">👮 Moderação</h3>
          <p class="text-gray-400">Sou o PP (Polícia do Popup). Silencio quem fala demais, bano quem zoar demais e mantenho a ordem.</p>
        </div>

        <div class="bg-[#2B2D31] p-8 rounded-3xl border-b-8 border-green-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 transition duration-300 group">
          <div class="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <i data-feather="tool" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-white">🔧 Utilidades</h3>
          <p class="text-gray-400">Tradutor, buscas, wikipedia e comandos úteis pra você nem precisar sair do Discord.</p>
        </div>

        <div class="bg-[#2B2D31] p-8 rounded-3xl border-b-8 border-orange-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 transition duration-300 group">
          <div class="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <i data-feather="dollar-sign" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-white">💰 Economia Tangerina</h3>
          <p class="text-gray-400">Saldo, daily, transferências e shop. A economia do seu server começa aqui, hein!</p>
        </div>

        <div class="bg-[#2B2D31] p-8 rounded-3xl border-b-8 border-[#5865F2] md:col-span-2 lg:col-span-1 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#5865F2]/20 transition duration-300 group">
          <div class="w-16 h-16 bg-[#5865F2]/20 text-[#5865F2] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <i data-feather="star" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-white">🚀 Extras</h3>
          <p class="text-gray-400">Sistema de XP, níveis, papéis automáticos e integração com jogos. Tô sempre evoluindo!</p>
        </div>
      </div>
    </div>
  </section>
</template>
