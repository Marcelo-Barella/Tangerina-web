<template>
  <div 
    class="marquee-container"
    :class="{ 'pause-on-hover': pauseOnHover }"
    :style="{ '--gap': `${gap}px` }"
  >
    <div 
      class="marquee-content"
      :class="[
        reverse ? 'animate-marquee-reverse' : 'animate-marquee',
        { 'vertical': vertical }
      ]"
      :style="{ '--duration': `${duration}s` }"
    >
      <slot />
    </div>
    <div 
      class="marquee-content"
      :class="[
        reverse ? 'animate-marquee-reverse' : 'animate-marquee',
        { 'vertical': vertical }
      ]"
      :style="{ '--duration': `${duration}s` }"
      aria-hidden="true"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  duration?: number
  gap?: number
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
}

withDefaults(defineProps<Props>(), {
  duration: 30,
  gap: 48,
  reverse: false,
  pauseOnHover: true,
  vertical: false
})
</script>

<style scoped>
.marquee-container {
  display: flex;
  overflow: hidden;
  gap: var(--gap);
  position: relative;
  width: 100%;
}

.marquee-container::before,
.marquee-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 10;
  pointer-events: none;
}

.marquee-container::before {
  left: 0;
  background: linear-gradient(to right, var(--color-surface, #0A0A0B), transparent);
}

.marquee-container::after {
  right: 0;
  background: linear-gradient(to left, var(--color-surface, #0A0A0B), transparent);
}

.marquee-content {
  display: flex;
  flex-shrink: 0;
  gap: var(--gap);
  min-width: 100%;
}

.marquee-content.vertical {
  flex-direction: column;
}

.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse var(--duration) linear infinite;
}

.pause-on-hover:hover .marquee-content {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(calc(-100% - var(--gap)));
  }
  100% {
    transform: translateX(0);
  }
}

.vertical .animate-marquee {
  animation: marquee-vertical var(--duration) linear infinite;
}

.vertical .animate-marquee-reverse {
  animation: marquee-vertical-reverse var(--duration) linear infinite;
}

@keyframes marquee-vertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical-reverse {
  0% {
    transform: translateY(calc(-100% - var(--gap)));
  }
  100% {
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-content {
    animation: none !important;
  }
}
</style>
