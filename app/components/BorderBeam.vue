<template>
  <div class="border-beam-container" :style="{ '--duration': `${duration}s`, '--delay': `${delay}s` }">
    <div class="border-beam-inner">
      <slot />
    </div>
    <div class="beam"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  duration?: number
  delay?: number
}

withDefaults(defineProps<Props>(), {
  duration: 3,
  delay: 0
})
</script>

<style scoped>
.border-beam-container {
  position: relative;
  overflow: hidden;
  border-radius: inherit;
}

.border-beam-inner {
  position: relative;
  z-index: 1;
  height: 100%;
  background: inherit;
  border-radius: inherit;
}

.beam {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  overflow: hidden;
}

.beam::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 80deg,
    var(--color-tangerine-400, #FB923C) 90deg,
    var(--color-tangerine-500, #F97316) 100deg,
    transparent 110deg,
    transparent 360deg
  );
  animation: beam-spin var(--duration) linear infinite;
  animation-delay: var(--delay);
}

.beam::after {
  content: '';
  position: absolute;
  inset: 2px;
  background: var(--color-surface-elevated, #111113);
  border-radius: inherit;
}

@keyframes beam-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .beam::before {
    animation: none;
  }
}
</style>
