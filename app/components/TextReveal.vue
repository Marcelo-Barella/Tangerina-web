<template>
  <span ref="textRef" class="text-reveal">
    <span 
      v-for="(word, index) in words" 
      :key="index"
      class="word"
      :style="{ '--word-delay': `${index * 0.1 + delay}s` }"
      :class="{ 'is-visible': isVisible }"
    >
      {{ word }}&nbsp;
    </span>
  </span>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  text: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0
})

const words = computed(() => props.text.split(' '))
const textRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const { stop } = useIntersectionObserver(
  textRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
      stop()
    }
  },
  { threshold: 0.3 }
)
</script>

<style scoped>
.text-reveal {
  display: inline;
}

.word {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: var(--word-delay);
}

.word.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .word {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
