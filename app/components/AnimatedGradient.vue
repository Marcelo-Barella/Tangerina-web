<template>
  <div class="animated-gradient" :class="variant">
    <div class="gradient-layer gradient-1"></div>
    <div class="gradient-layer gradient-2"></div>
    <div class="gradient-layer gradient-3"></div>
    <div class="gradient-layer gradient-4"></div>
    <div v-if="showNoise" class="noise-layer"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'hero' | 'cta' | 'subtle'
  showNoise?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'hero',
  showNoise: true
})
</script>

<style scoped>
.animated-gradient {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.gradient-layer {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0;
  animation: gradient-appear 1s ease-out forwards;
}

/* Hero variant - vibrant */
.hero .gradient-1 {
  width: 80%;
  height: 60%;
  top: -20%;
  left: 10%;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%);
  animation: float-1 15s ease-in-out infinite, gradient-appear 1s ease-out forwards;
  animation-delay: 0s, 0s;
}

.hero .gradient-2 {
  width: 60%;
  height: 50%;
  top: 20%;
  right: -10%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%);
  animation: float-2 18s ease-in-out infinite, gradient-appear 1s ease-out forwards;
  animation-delay: 0.2s, 0.2s;
}

.hero .gradient-3 {
  width: 50%;
  height: 40%;
  bottom: 0%;
  left: -5%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  animation: float-3 20s ease-in-out infinite, gradient-appear 1s ease-out forwards;
  animation-delay: 0.4s, 0.4s;
}

.hero .gradient-4 {
  width: 40%;
  height: 30%;
  bottom: 20%;
  right: 20%;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%);
  animation: float-4 22s ease-in-out infinite, gradient-appear 1s ease-out forwards;
  animation-delay: 0.6s, 0.6s;
}

/* CTA variant - intense */
.cta .gradient-1 {
  width: 100%;
  height: 80%;
  top: -30%;
  left: 0%;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, transparent 60%);
  animation: float-1 12s ease-in-out infinite, gradient-appear 1s ease-out forwards;
}

.cta .gradient-2 {
  width: 70%;
  height: 60%;
  top: 30%;
  right: -20%;
  background: radial-gradient(circle, rgba(234, 88, 12, 0.4) 0%, transparent 60%);
  animation: float-2 15s ease-in-out infinite, gradient-appear 1s ease-out forwards;
  animation-delay: 0.3s, 0.3s;
}

.cta .gradient-3 {
  width: 60%;
  height: 50%;
  bottom: -20%;
  left: -10%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 60%);
  animation: float-3 18s ease-in-out infinite, gradient-appear 1s ease-out forwards;
  animation-delay: 0.5s, 0.5s;
}

.cta .gradient-4 {
  width: 40%;
  height: 40%;
  bottom: 10%;
  right: 10%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 60%);
  animation: float-4 20s ease-in-out infinite, gradient-appear 1s ease-out forwards;
  animation-delay: 0.7s, 0.7s;
}

/* Subtle variant */
.subtle .gradient-1 {
  width: 60%;
  height: 40%;
  top: -10%;
  left: 20%;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
  animation: float-1 20s ease-in-out infinite, gradient-appear 1s ease-out forwards;
}

.subtle .gradient-2 {
  width: 40%;
  height: 30%;
  top: 40%;
  right: 0%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
  animation: float-2 25s ease-in-out infinite, gradient-appear 1s ease-out forwards;
  animation-delay: 0.3s, 0.3s;
}

.subtle .gradient-3,
.subtle .gradient-4 {
  display: none;
}

.noise-layer {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
}

@keyframes gradient-appear {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(5%, 10%) scale(1.05);
  }
  50% {
    transform: translate(-5%, 5%) scale(0.95);
  }
  75% {
    transform: translate(8%, -5%) scale(1.02);
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-8%, 5%) scale(0.95);
  }
  50% {
    transform: translate(5%, -8%) scale(1.05);
  }
  75% {
    transform: translate(-3%, 10%) scale(1);
  }
}

@keyframes float-3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(10%, -5%) scale(1.03);
  }
  50% {
    transform: translate(-8%, 8%) scale(0.97);
  }
  75% {
    transform: translate(5%, 5%) scale(1.05);
  }
}

@keyframes float-4 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-5%, -10%) scale(0.98);
  }
  50% {
    transform: translate(10%, 5%) scale(1.02);
  }
  75% {
    transform: translate(-8%, 8%) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .gradient-layer {
    animation: gradient-appear 1s ease-out forwards !important;
  }
}
</style>
