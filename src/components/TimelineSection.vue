<template>
  <div class="timeline-bar">
    <div class="track" ref="trackRef" @click="onTrackClick">
      <div class="track-line"></div>

      <!-- Tick marks -->
      <div
        v-for="tick in tickMarks"
        :key="tick.id"
        class="tick"
        :style="{ left: tick.percent + '%' }"
      >
        <div class="tick-pip" :class="{ hot: tick.active }"></div>
      </div>

      <!-- Cursor -->
      <div class="cursor" :style="{ left: cursorPct + '%' }">
        <div class="cursor-ring"></div>
        <div class="cursor-dot"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { levels } from '../data/levels.js'

const props = defineProps({
  scrollOffset: { type: Number, default: 0 },
})
const emit = defineEmits(['seek'])

const trackRef = ref(null)
const maxId = levels.length - 1
const cycleLength = maxId * 2

const cursorPct = computed(() => {
  const pos = ((props.scrollOffset % cycleLength) + cycleLength) % cycleLength
  return (pos / cycleLength) * 100
})

const tickMarks = computed(() => {
  const ticks = []
  for (let i = 0; i <= maxId; i++) {
    ticks.push({
      id: `f${i}`,
      percent: (i / cycleLength) * 100,
      active: Math.abs(cursorPct.value - (i / cycleLength) * 100) < 1.3,
    })
  }
  for (let i = 0; i < maxId; i++) {
    const rev = maxId - 1 - i
    if (rev >= 1) {
      const pos = maxId + (maxId - rev)
      ticks.push({
        id: `r${rev}`,
        percent: (pos / cycleLength) * 100,
        active: Math.abs(cursorPct.value - (pos / cycleLength) * 100) < 1.3,
      })
    }
  }
  return ticks
})

function onTrackClick(e) {
  const rect = trackRef.value?.getBoundingClientRect()
  if (!rect) return
  const pct = ((e.clientX - rect.left) / rect.width) * 100
  emit('seek', (pct / 100) * cycleLength)
}

onMounted(() => {
  const el = trackRef.value?.querySelector('.cursor')
  if (el) gsap.fromTo(el, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out', delay: 0.7 })
})
</script>

<style scoped>
.timeline-bar {
  height: 32px;
  flex-shrink: 0;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: var(--bg-deep);
  z-index: 10;
}

.track {
  width: 100%;
  height: 16px;
  position: relative;
  cursor: pointer;
}

.track-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: linear-gradient(90deg,
    rgba(255,255,255,0.02),
    rgba(255,255,255,0.1) 35%,
    rgba(255,255,255,0.14) 50%,
    rgba(255,255,255,0.1) 65%,
    rgba(255,255,255,0.02)
  );
  transform: translateY(-50%);
}

.tick {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.tick-pip {
  width: 2.5px;
  height: 2.5px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  transition: all 0.3s;
}

.tick-pip.hot {
  background: var(--accent-orange);
  box-shadow: 0 0 5px rgba(247,127,62,0.5);
  width: 3.5px;
  height: 3.5px;
}

.cursor {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
}

.cursor-ring {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid rgba(247,127,62,0.35);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring-pulse 2.8s ease-in-out infinite;
}

.cursor-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent-orange);
  box-shadow: 0 0 6px rgba(247,127,62,0.6);
  position: relative;
  z-index: 1;
}

@keyframes ring-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
  50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.8; }
}
</style>
