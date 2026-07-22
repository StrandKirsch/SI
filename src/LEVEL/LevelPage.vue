<template>
  <div class="level-page">
    <div class="level-content" v-if="level">
      <button class="back-btn" @click="goBack">&larr; Back to Index</button>
      <h1 class="level-title">SI-{{ level.id }}</h1>
      <p class="level-name">{{ level.name }}</p>
      <p class="level-subtitle">{{ level.subtitle }}</p>

      <!-- Survival Difficulty -->
      <div class="section">
        <h2>Survival Difficulty</h2>
        <div class="difficulty">
          <template v-if="typeof level.danger === 'number'">
            <span class="class-label">Class {{ level.danger }}</span>
            <div class="danger-stars">
              <span v-for="s in 5" :key="s" :class="{ on: s <= (level.danger || 0) }">&#9670;</span>
            </div>
          </template>
          <template v-else>
            <span class="class-label">Difficulty: {{ level.danger }}</span>
          </template>
        </div>
      </div>

      <!-- Description -->
      <div class="section" v-if="level.description">
        <h2>Description</h2>
        <p>{{ level.description }}</p>
        <p v-if="level.extendedDescription">{{ level.extendedDescription }}</p>
      </div>

      <!-- Entities -->
      <div class="section" v-if="level.entities && level.entities.length">
        <h2>Entities</h2>
        <ul class="entity-list">
          <li v-for="entity in level.entities" :key="entity">{{ entity }}</li>
        </ul>
      </div>

      <!-- Entrances & Exits -->
      <div class="entry-exit" v-if="(level.entrances && level.entrances.length) || (level.exits && level.exits.length)">
        <div class="entry" v-if="level.entrances && level.entrances.length">
          <h3>Entrances</h3>
          <ul>
            <li v-for="e in level.entrances" :key="e">{{ e }}</li>
          </ul>
        </div>
        <div class="exit" v-if="level.exits && level.exits.length">
          <h3>Exits</h3>
          <ul>
            <li v-for="e in level.exits" :key="e">{{ e }}</li>
          </ul>
        </div>
      </div>

      <div class="level-footer">
        <button class="top-btn" @click="scrollToTop">&#9650; 回到顶部</button>
      </div>
    </div>

    <!-- Loading -->
    <div class="loading" v-else>
      <p>Loading dossier...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { levels } from '../data/levels.js'

const router = useRouter()
const route = useRoute()
const level = ref(null)

function loadLevel() {
  const id = parseInt(route.params.id)
  if (isNaN(id)) {
    sessionStorage.setItem('skipIntro', '1')
    router.push('/')
    return
  }
  const found = levels.find(l => l.id === id)
  if (!found) {
    sessionStorage.setItem('skipIntro', '1')
    router.push('/')
    return
  }
  level.value = found
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function goBack() {
  sessionStorage.setItem('skipIntro', '1')
  router.push('/')
}

onMounted(() => {
  loadLevel()
})
</script>

<style scoped>
.level-page {
  min-height: 100vh;
  background: var(--color-off-white, #f7f7f7);
  padding: 40px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--color-black, #000);
  color: var(--color-white, #fff);
  border: none;
  border-radius: var(--radius-sm, 8px);
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity var(--transition-fast, 0.2s ease);
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
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  color: var(--color-black, #000);
  letter-spacing: -0.04em;
  margin-bottom: 8px;
}

.level-name {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1.25rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 4px;
}

.level-subtitle {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.35);
  letter-spacing: 0.02em;
  margin-bottom: 40px;
}

/* Sections */
.section {
  margin-bottom: 40px;
}

.section h2 {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-black, #000);
  margin-bottom: 12px;
}

.section p {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.7);
}

/* Difficulty */
.difficulty {
  background: rgba(0, 0, 0, 0.03);
  padding: 20px;
  border-radius: var(--radius-md, 12px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  gap: 16px;
}

.class-label {
  font-weight: 700;
  font-size: 1.2rem;
  display: block;
}

.danger-stars {
  display: flex;
  gap: 4px;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.12);
}

.danger-stars .on {
  color: #e63946;
}

/* Entity list */
.entity-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.entity-list li {
  background: rgba(0, 0, 0, 0.03);
  padding: 6px 16px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-sm, 8px);
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
}

/* Entrances & Exits */
.entry-exit {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.entry-exit h3 {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-black, #000);
  margin-bottom: 8px;
}

.entry-exit ul {
  list-style: none;
  padding: 0;
}

.entry-exit li {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
  padding: 4px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}

/* ── 底部回到顶部 ── */
.level-footer {
  max-width: 800px;
  margin: 40px auto 0;
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

/* Loading */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.4);
}

@media (max-width: 767px) {
  .level-page {
    padding: 24px;
  }

  .entry-exit {
    grid-template-columns: 1fr;
  }
}
</style>
