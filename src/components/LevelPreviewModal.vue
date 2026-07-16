<template>
  <transition name="preview">
    <div class="preview-overlay" v-if="level" @click.self="$emit('close')">
      <div class="preview-card" ref="cardRef">
        <!-- Close button -->
        <button class="close-btn" @click="$emit('close')">✕</button>

        <!-- Difficulty badge -->
        <div class="difficulty-badge">
          <span class="badge-label">SURVIVAL DIFFICULTY</span>
          <div class="badge-stars">
            <span
              v-for="i in 5"
              :key="i"
              class="star"
              :class="{ active: i <= level.danger }"
            >◆</span>
            <span class="badge-class">{{ dangerLabel }}</span>
          </div>
        </div>

        <!-- Title -->
        <h2 class="preview-title" ref="titleRef">{{ level.subtitle }}</h2>
        <h3 class="preview-name">{{ level.name }}</h3>
        <p class="preview-tagline">"{{ level.tagline }}"</p>

        <div class="divider"></div>

        <!-- Preview excerpt -->
        <p class="preview-excerpt">{{ level.description.slice(0, 200) }}...</p>

        <!-- Quick stats -->
        <div class="quick-stats">
          <div class="stat">
            <span class="stat-label">DANGER</span>
            <span class="stat-value">{{ level.danger }}/5</span>
          </div>
          <div class="stat">
            <span class="stat-label">STABILITY</span>
            <span class="stat-value">{{ level.stability }}/5</span>
          </div>
          <div class="stat">
            <span class="stat-label">ENTITIES</span>
            <span class="stat-value">{{ level.entityCount }}</span>
          </div>
        </div>

        <!-- CTA -->
        <a
          class="view-full-btn"
          :href="`/level.html?id=${level.id}`"
          @click.prevent="onViewFull"
        >
          <span class="btn-icon">▸</span>
          <span class="btn-text" ref="btnRef">VIEW FULL DOSSIER</span>
          <span class="btn-icon">◂</span>
        </a>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import gsap from 'gsap'
import { useGlitchText } from '../composables/useGlitchText.js'

const props = defineProps({
  level: { type: Object, default: null },
})

defineEmits(['close'])

const cardRef = ref(null)
const titleRef = ref(null)
const btnRef = ref(null)

useGlitchText(titleRef, { intervalMin: 120, intervalMax: 250, maxOffset: 1 })
useGlitchText(btnRef, { intervalMin: 150, intervalMax: 300, maxOffset: 1 })

const dangerLabel = computed(() => {
  if (!props.level) return ''
  const d = props.level.danger
  if (d === 0) return 'SAFE'
  if (d <= 1) return 'LOW'
  if (d <= 3) return 'MODERATE'
  if (d <= 4) return 'HIGH'
  return 'EXTREME'
})

// Animate in on level change
watch(
  () => props.level?.id,
  async (newId) => {
    if (newId === undefined || !cardRef.value) return
    await nextTick()
    gsap.fromTo(
      cardRef.value,
      { scale: 0.9, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    )
  }
)

function onViewFull(e) {
  e.preventDefault()
  const card = cardRef.value
  if (!card) {
    window.location.href = `/level.html?id=${props.level.id}`
    return
  }
  // Glitch-out transition then navigate
  gsap.to(card, {
    scale: 1.05,
    opacity: 0,
    filter: 'blur(6px) hue-rotate(90deg)',
    duration: 0.25,
    ease: 'power2.in',
    onComplete: () => {
      window.location.href = `/level.html?id=${props.level.id}`
    },
  })
}
</script>

<style scoped>
.preview-overlay {
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

.preview-card {
  position: relative;
  width: 90%;
  max-width: 520px;
  max-height: 85%;
  overflow-y: auto;
  background: rgba(10, 10, 10, 0.95);
  border: 1px solid rgba(0, 255, 255, 0.25);
  padding: 28px 32px;
  box-shadow:
    0 0 40px rgba(0, 0, 0, 0.8),
    -3px 0 0 rgba(255, 0, 255, 0.3),
    3px 0 0 rgba(0, 255, 255, 0.3),
    inset 0 0 80px rgba(0, 255, 255, 0.02);
}

.preview-card::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 1px dashed rgba(0, 255, 255, 0.1);
  pointer-events: none;
}

/* Close button */
.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 1;
}

.close-btn:hover {
  color: #ff00ff;
}

/* Difficulty Badge */
.difficulty-badge {
  display: inline-block;
  border: 1px dashed rgba(0, 255, 255, 0.35);
  padding: 8px 16px;
  margin-bottom: 18px;
  background: rgba(0, 255, 255, 0.03);
}

.badge-label {
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 3px;
  display: block;
  margin-bottom: 4px;
}

.badge-stars {
  display: flex;
  align-items: center;
  gap: 3px;
}

.star {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.12);
}

.star.active {
  color: #ff0044;
  text-shadow: 0 0 6px rgba(255, 0, 68, 0.7);
}

.badge-class {
  font-family: 'Impact', 'Arial Black', sans-serif;
  font-size: 0.85rem;
  color: #ff00ff;
  margin-left: 8px;
}

/* Title */
.preview-title {
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: #00ffff;
  letter-spacing: 3px;
  margin-bottom: 2px;
}

.preview-name {
  font-family: 'Impact', 'Arial Black', sans-serif;
  font-size: 1.4rem;
  color: #ffffff;
  letter-spacing: 2px;
  margin-bottom: 6px;
}

.preview-tagline {
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: rgba(0, 255, 255, 0.5);
  font-style: italic;
  margin-bottom: 16px;
}

.divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 255, 0.35),
    rgba(255, 0, 255, 0.35),
    transparent
  );
  margin-bottom: 16px;
}

.preview-excerpt {
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 18px;
}

/* Quick stats */
.quick-stats {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-label {
  font-family: 'Courier New', monospace;
  font-size: 0.58rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 2px;
}

.stat-value {
  font-family: 'Impact', 'Arial Black', sans-serif;
  font-size: 1.1rem;
  color: #ff00ff;
  text-shadow: 0 0 8px rgba(255, 0, 255, 0.3);
}

/* CTA Button */
.view-full-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 14px 24px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid rgba(0, 255, 255, 0.4);
  background: rgba(0, 255, 255, 0.05);
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}

.view-full-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.08),
    rgba(255, 0, 255, 0.08)
  );
  opacity: 0;
  transition: opacity 0.25s;
}

.view-full-btn:hover::before {
  opacity: 1;
}

.view-full-btn:hover {
  border-color: rgba(0, 255, 255, 0.8);
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.2),
    -2px 0 0 rgba(255, 0, 255, 0.5),
    2px 0 0 rgba(0, 255, 255, 0.5);
}

.btn-icon {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #00ffff;
}

.btn-text {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: #00ffff;
  letter-spacing: 3px;
}

/* Transition */
.preview-enter-active {
  transition: opacity 0.2s ease;
}

.preview-leave-active {
  transition: opacity 0.15s ease;
}

.preview-enter-from,
.preview-leave-to {
  opacity: 0;
}

/* Card scrollbar */
.preview-card::-webkit-scrollbar {
  width: 3px;
}

.preview-card::-webkit-scrollbar-track {
  background: transparent;
}

.preview-card::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 255, 0.15);
  border-radius: 2px;
}
</style>
