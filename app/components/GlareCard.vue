<template>
  <div 
    ref="cardRef"
    class="glare-card"
    :class="{ 'is-hovering': isHovering }"
    :style="{
      '--mouse-x': `${mousePosition.x}%`,
      '--mouse-y': `${mousePosition.y}%`,
      '--rotate-x': `${rotation.x}deg`,
      '--rotate-y': `${rotation.y}deg`
    }"
    @mouseenter="handleMouseEnter"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="glare-card-content">
      <slot />
    </div>
    <div class="glare-effect"></div>
    <div class="border-glow"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  intensity?: number
  glareOpacity?: number
}

const props = withDefaults(defineProps<Props>(), {
  intensity: 10,
  glareOpacity: 0.15
})

const cardRef = ref<HTMLElement | null>(null)
const isHovering = ref(false)
const mousePosition = ref({ x: 50, y: 50 })
const rotation = ref({ x: 0, y: 0 })

const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  
  const rect = cardRef.value.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  
  mousePosition.value = { x, y }
  
  // Calculate rotation based on mouse position
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  
  rotation.value = {
    x: ((mouseY - centerY) / centerY) * -props.intensity,
    y: ((mouseX - centerX) / centerX) * props.intensity
  }
}

const handleMouseLeave = () => {
  isHovering.value = false
  mousePosition.value = { x: 50, y: 50 }
  rotation.value = { x: 0, y: 0 }
}
</script>

<style scoped>
.glare-card {
  position: relative;
  border-radius: 24px;
  background: var(--color-surface-elevated, #111113);
  border: 1px solid var(--color-border, rgba(255, 255, 255, 0.08));
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 300ms ease, box-shadow 300ms ease;
  will-change: transform;
}

.glare-card.is-hovering {
  transform: perspective(1000px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) scale(1.02);
  box-shadow: 
    0 20px 40px -20px rgba(0, 0, 0, 0.5),
    0 0 60px -30px var(--color-glow-orange, rgba(249, 115, 22, 0.3));
}

.glare-card-content {
  position: relative;
  z-index: 2;
  height: 100%;
}

.glare-effect {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(249, 115, 22, v-bind('props.glareOpacity')),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 300ms ease;
  pointer-events: none;
  z-index: 1;
}

.glare-card.is-hovering .glare-effect {
  opacity: 1;
}

.border-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    400px circle at var(--mouse-x) var(--mouse-y),
    rgba(249, 115, 22, 0.3),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 300ms ease;
  pointer-events: none;
  z-index: 0;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  padding: 1px;
}

.glare-card.is-hovering .border-glow {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .glare-card {
    transition: none;
  }
  
  .glare-card.is-hovering {
    transform: none;
  }
}
</style>
