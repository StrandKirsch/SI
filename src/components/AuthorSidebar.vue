<template>
  <aside class="author-sidebar" :class="{ collapsed: sidebarCollapsed }">
    <button
      class="sidebar-toggle"
      @click="sidebarCollapsed = !sidebarCollapsed"
    >
      <span v-if="sidebarCollapsed">&#9654;</span>
      <span v-else>&#9664;</span>
    </button>

    <div class="sidebar-inner" v-show="!sidebarCollapsed">
      <!-- No author data -->
      <div v-if="!currentLevel || !currentLevel.authors || currentLevel.authors.length === 0" class="author-block">
        <p class="section-label">该层级作者：</p>
        <p class="author-name unknown">作者未知</p>
        <p class="no-data-hint">该层级暂无作者信息</p>
      </div>

      <!-- Authors and their other works -->
      <template v-else>
        <p class="section-label">该层级作者：</p>
        <div v-for="author in currentAuthors" :key="author" class="author-block">
          <h3 class="author-name">{{ author }}</h3>
          <template v-if="authorLevelMap[author] && authorLevelMap[author].length > 0">
            <p class="other-works-label">作者其余作品</p>
            <ul class="other-levels">
              <li v-for="lvl in authorLevelMap[author]" :key="lvl.id">
                <router-link
                  :to="`/level/${lvl.id}`"
                  class="level-link"
                  @click="skipIntro"
                >
                  <span class="level-id">SI-{{ lvl.id }}</span>
                  <span class="level-sub">{{ lvl.subtitle }}</span>
                </router-link>
              </li>
            </ul>
          </template>
          <p v-else class="no-other-hint">暂无其他层级</p>
        </div>
      </template>
    </div>
  </aside>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { levels } from '../data/levels.js'

const props = defineProps({
  currentLevelId: { type: Number, required: true }
})

const sidebarCollapsed = ref(true)
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth <= 767
  if (isMobile.value) sidebarCollapsed.value = false
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const currentLevel = computed(() => {
  return levels.find(l => l.id === props.currentLevelId) || null
})

const currentAuthors = computed(() => {
  return currentLevel.value?.authors || []
})

// Build a map: authorName → array of other levels (excluding current)
const authorLevelMap = computed(() => {
  const map = {}
  if (!currentLevel.value) return map

  for (const author of currentAuthors.value) {
    map[author] = levels.filter(
      l => l.authors && l.authors.includes(author) && l.id !== props.currentLevelId
    )
  }
  return map
})

function skipIntro() {
  sessionStorage.setItem('skipIntro', '1')
}
</script>

<style scoped>
.author-sidebar {
  position: relative;
  width: 260px;
  min-width: 260px;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.92);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  color: #ccc;
  font-family: var(--font-family, 'Inter', sans-serif);
  padding: 32px 20px 40px;
  z-index: 10;
  transition: width 0.3s ease, min-width 0.3s ease, padding 0.3s ease;
}

.sidebar-inner {
  margin-top: 12px;
}

.author-sidebar.collapsed {
  width: 44px;
  min-width: 44px;
  padding: 32px 8px 40px;
}

/* ── Toggle button ── */
.sidebar-toggle {
  position: absolute;
  top: 10px;
  right: 8px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 4px;
  transition: color 0.2s;
  z-index: 2;
}

.sidebar-toggle:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* ── Scrollbar ── */
.author-sidebar::-webkit-scrollbar { width: 3px; }
.author-sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

/* ── Back link ── */
.back-link {
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: color 0.2s;
  letter-spacing: 0.02em;
}
.back-link:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* ── Section label ── */
.section-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 12px 0;
}

/* ── Author block ── */
.author-block {
  margin-bottom: 28px;
}

.author-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 10px;
  letter-spacing: 0.03em;
}

.author-name.unknown {
  color: rgba(255, 255, 255, 0.35);
  font-style: italic;
}

/* ── Other levels list ── */
.other-works-label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.25);
  margin: 0 0 6px 0;
  letter-spacing: 0.04em;
}

.other-levels {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.level-link {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 6px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.2s, border-color 0.2s;
}
.level-link:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
}

.level-id {
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  flex-shrink: 0;
}

.level-sub {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.35);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ── Hints ── */
.no-other-hint,
.no-data-hint {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.2);
  font-style: italic;
  margin: 0;
  padding: 4px 0;
}

/* ── Mobile ── */
@media (max-width: 767px) {
  .author-sidebar {
    position: relative;
    width: 100%;
    min-width: unset;
    min-height: auto;
    padding: 12px 16px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: none;
  }

  .author-sidebar.collapsed {
    width: 100%;
    min-width: unset;
    min-height: auto;
    padding: 8px 16px;
  }

  .sidebar-toggle {
    display: block;
    position: absolute;
    top: 10px;
    right: 12px;
    font-size: 0.85rem;
    padding: 6px 10px;
  }

  .sidebar-inner {
    margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;
    padding-right: 36px;
  }

  .author-block {
    margin-bottom: 0;
    flex: 1;
    min-width: 140px;
  }

  .author-name {
    font-size: 0.8rem;
    margin-bottom: 4px;
  }

  .section-label {
    width: 100%;
    font-size: 0.65rem;
    margin-bottom: 4px;
  }

  .other-works-label {
    display: none;
  }

  .other-levels {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .level-link {
    padding: 3px 8px;
    gap: 4px;
    font-size: 0.7rem;
  }

  .level-id { font-size: 0.72rem; }
  .level-sub { font-size: 0.72rem; }

  .no-other-hint,
  .no-data-hint {
    font-size: 0.7rem;
  }
}
</style>
