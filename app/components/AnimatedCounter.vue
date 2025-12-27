<template>
  <span ref="counterRef" class="tabular-nums">
    {{ prefix }}{{ displayValue.toLocaleString('pt-BR') }}{{ suffix }}
  </span>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2000,
  prefix: '',
  suffix: '',
  delay: 0
})

const counterRef = ref<HTMLElement | null>(null)
const displayValue = ref(0)
const hasAnimated = ref(false)

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

const animateCounter = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  const startTime = performance.now()
  const startValue = 0
  const endValue = props.value

  const updateCounter = (currentTime: number) => {
    const elapsed = currentTime - startTime - props.delay
    
    if (elapsed < 0) {
      requestAnimationFrame(updateCounter)
      return
    }

    const progress = Math.min(elapsed / props.duration, 1)
    const easedProgress = easeOutExpo(progress)
    
    displayValue.value = Math.round(startValue + (endValue - startValue) * easedProgress)

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    }
  }

  requestAnimationFrame(updateCounter)
}

const { stop } = useIntersectionObserver(
  counterRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animateCounter()
      stop()
    }
  },
  { threshold: 0.5 }
)
</script>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>
