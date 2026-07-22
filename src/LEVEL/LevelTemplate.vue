<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">{{ name }}</p>

      <!-- Survival Difficulty -->
      <div class="section">
        <h2>Survival Difficulty</h2>
        <div class="difficulty">
          <span class="class-label">Class {{ danger }}</span>
          <div class="danger-stars" v-if="typeof danger === 'number'">
            <span v-for="s in 5" :key="s" :class="{ on: s <= (danger || 0) }">&#9670;</span>
          </div>
          <span v-else class="danger-text">Difficulty: {{ danger }}</span>
        </div>
      </div>

      <p class="level-desc">This is a template for Level {{ id }}. Customize this page by adding your own content, images, animations, or any other elements.</p>

      <div class="level-footer">
        <button class="top-btn" @click="scrollToTop">&#9650; 回到顶部</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  id: { type: String, required: true },
  name: { type: String, default: 'Level Name' },
  danger: { type: [Number, String], default: 1 }
})

const router = useRouter()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function goBack() {
  sessionStorage.setItem('skipIntro', '1')
  router.push('/')
}
</script>

<style scoped>
.level-page {
  min-height: 100vh;
  background: var(--color-off-white);
  padding: 40px;
}

.back-btn {
  display: inline-flex;
  position: relative;
  z-index: 20;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--color-black);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity var(--transition-fast);
  margin-bottom: 40px;
}

.back-btn:hover {
  opacity: 0.8;
}

.level-content {
  max-width: 800px;
  margin: 0 auto;
}

.level-title {
  font-family: var(--font-family);
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  color: var(--color-black);
  letter-spacing: -0.04em;
  margin-bottom: 8px;
}

.level-name {
  font-family: var(--font-family);
  font-size: 1.25rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 4px;
}

/* Sections */
.section { margin-bottom: 40px; }
.section h2 {
  font-family: var(--font-family); font-size: 1.5rem; font-weight: 600;
  color: var(--color-black); margin-bottom: 12px;
}

.difficulty {
  background: rgba(0,0,0,0.03); padding: 20px; border-radius: var(--radius-md);
  border: 1px solid rgba(0,0,0,0.06); display: flex; align-items: center; gap: 16px;
}
.class-label { font-weight: 700; font-size: 1.2rem; display: block; }
.danger-stars { display: flex; gap: 4px; font-size: 1.2rem; color: rgba(0,0,0,0.12); }
.danger-stars .on { color: #e63946; }
.danger-text { font-family: var(--font-family); font-weight: 600; font-size: 1rem; color: rgba(0,0,0,0.6); }

.level-desc {
  font-family: var(--font-family);
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 40px;
}

/* ── 底部回到顶部 ── */
.level-footer {
  margin-top: 40px;
  text-align: center;
}

.top-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-sm, 8px);
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.top-btn:hover {
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
}

@media (max-width: 767px) {
  .level-page {
    padding: 24px;
  }

  .level-content {
    padding: 0;
  }
}
</style>
