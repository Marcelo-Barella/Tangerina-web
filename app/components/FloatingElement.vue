<template>
  <div 
    class="floating-element"
    :style="{
      '--float-duration': `${duration}s`,
      '--float-delay': `${delay}s`,
      '--float-distance': `${distance}px`,
      '--float-rotation': `${rotation}deg`
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  duration?: number
  delay?: number
  distance?: number
  rotation?: number
}

withDefaults(defineProps<Props>(), {
  duration: 3,
  delay: 0,
  distance: 10,
  rotation: 5
})
</script>

<style scoped>
.floating-element {
  animation: floating var(--float-duration) ease-in-out infinite;
  animation-delay: var(--float-delay);
}

@keyframes floating {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(calc(var(--float-distance) * -0.5)) rotate(calc(var(--float-rotation) * 0.5));
  }
  50% {
    transform: translateY(calc(var(--float-distance) * -1)) rotate(0deg);
  }
  75% {
    transform: translateY(calc(var(--float-distance) * -0.5)) rotate(calc(var(--float-rotation) * -0.5));
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-element {
    animation: none;
  }
}
</style>
