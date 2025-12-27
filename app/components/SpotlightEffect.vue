<template>
  <div 
    ref="containerRef"
    class="spotlight-wrapper"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div 
      class="spotlight"
      :style="{
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
        '--opacity': isHovering ? '1' : '0'
      }"
    ></div>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  color?: string
  intensity?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 400,
  color: 'rgba(249, 115, 22, 0.15)',
  intensity: 1
})

const containerRef = ref<HTMLElement | null>(null)
const position = ref({ x: 0, y: 0 })
const isHovering = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  position.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}
</script>

<style scoped>
.spotlight-wrapper {
  position: relative;
  overflow: hidden;
}

.spotlight {
  position: absolute;
  width: v-bind('`${props.size}px`');
  height: v-bind('`${props.size}px`');
  border-radius: 50%;
  background: radial-gradient(
    circle,
    v-bind('props.color') 0%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  left: var(--x);
  top: var(--y);
  pointer-events: none;
  opacity: var(--opacity);
  transition: opacity 300ms ease;
  z-index: 1;
}
</style>
