<template>
  <div
    class="timeline-card"
    :class="{ active: isActive }"
    :ref="(el) => cardRef = el"
    @click="$emit('select', level.id)"
    @mouseenter="onHover"
    @mouseleave="onLeave"
  >
    <div class="card-number">{{ level.subtitle }}</div>
    <div class="card-name">{{ level.name }}</div>
    <div class="card-danger">
      <span
        v-for="i in 5"
        :key="i"
        class="mini-star"
        :class="{ filled: i <= level.danger }"
      >◆</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  level: { type: Object, required: true },
  currentId: { type: Number, required: true },
})

defineEmits(['select'])

const isActive = computed(() => props.level.id === props.currentId)

let cardRef = null

function onHover() {
  if (!cardRef) return
  gsap.to(cardRef, {
    scale: 1.05,
    y: -4,
    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), -3px 0 0 rgba(255, 0, 255, 0.6), 3px 0 0 rgba(0, 255, 255, 0.6)',
    duration: 0.25,
    ease: 'power2.out',
  })
}

function onLeave() {
  if (!cardRef) return
  gsap.to(cardRef, {
    scale: 1,
    y: 0,
    boxShadow: isActive
      ? '0 0 12px rgba(0, 255, 255, 0.2), -2px 0 0 rgba(255, 0, 255, 0.4), 2px 0 0 rgba(0, 255, 255, 0.4)'
      : '0 0 0 rgba(0,0,0,0)',
    duration: 0.25,
    ease: 'power2.out',
  })
}
</script>

<style scoped>
.timeline-card {
  min-width: 160px;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(10, 10, 10, 0.9);
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: border-color 0.3s;
  flex-shrink: 0;
}

.timeline-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px dashed rgba(0, 255, 255, 0.15);
  pointer-events: none;
}

.timeline-card.active {
  border-color: rgba(0, 255, 255, 0.5);
  background: rgba(0, 255, 255, 0.06);
  box-shadow:
    0 0 12px rgba(0, 255, 255, 0.2),
    -2px 0 0 rgba(255, 0, 255, 0.4),
    2px 0 0 rgba(0, 255, 255, 0.4);
}

.timeline-card.active::before {
  border-color: rgba(0, 255, 255, 0.5);
}

.card-number {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 2px;
  margin-bottom: 4px;
}

.timeline-card.active .card-number {
  color: #00ffff;
}

.card-name {
  font-family: 'Impact', 'Arial Black', sans-serif;
  font-size: 0.85rem;
  color: #ccc;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.timeline-card.active .card-name {
  color: #fff;
  text-shadow: -1px 0 rgba(255, 0, 255, 0.5), 1px 0 rgba(0, 255, 255, 0.5);
}

.card-danger {
  display: flex;
  gap: 2px;
}

.mini-star {
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.1);
}

.mini-star.filled {
  color: #ff0044;
  text-shadow: 0 0 4px rgba(255, 0, 68, 0.6);
}
</style>
