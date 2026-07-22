<template>
  <aside class="main-sidebar" :class="{ collapsed: sidebarCollapsed }">
    <button
      class="sidebar-toggle"
      @click="sidebarCollapsed = !sidebarCollapsed"
    >
      <template v-if="isMobile">
        <span v-if="sidebarCollapsed">&#9660;</span>
        <span v-else>&#9650;</span>
      </template>
      <template v-else>
        <span v-if="sidebarCollapsed">&#9654;</span>
        <span v-else>&#9664;</span>
      </template>
    </button>

    <div class="sidebar-inner" v-show="!sidebarCollapsed">
      <p class="section-label">导航</p>

      <button class="nav-btn" @click="goToSideStory">
        <span class="nav-btn-icon">&#9670;</span>
        <span class="nav-btn-text">前往层群之外</span>
      </button>

      <div class="divider"></div>

      <p class="nav-hint">
        探索其他不为人知的故事。
      </p>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['navigate'])

const sidebarCollapsed = ref(true)
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth <= 767
  if (isMobile.value) sidebarCollapsed.value = true
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

function goToSideStory() {
  emit('navigate')
}

function collapse() {
  sidebarCollapsed.value = true
}

defineExpose({ collapse })
</script>

<style scoped>
.main-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  min-width: 260px;
  height: 100vh;
  max-height: 100vh;
  background: rgba(0, 0, 0, 0.92);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  color: #ccc;
  font-family: var(--font-family, 'Inter', sans-serif);
  padding: 32px 20px 40px;
  z-index: 10;
  transition: width 0.3s ease, min-width 0.3s ease, padding 0.3s ease;
  overflow-y: auto;
}

.main-sidebar.collapsed {
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

.sidebar-inner {
  margin-top: 12px;
}

/* ── Section label ── */
.section-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px 0;
}

/* ── Navigation button ── */
.nav-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.nav-btn:active {
  transform: translateY(0);
}

.nav-btn-icon {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.35);
  flex-shrink: 0;
}

.nav-btn-text {
  white-space: nowrap;
}

/* ── Divider ── */
.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 24px 0;
}

/* ── Hint text ── */
.nav-hint {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.2);
  line-height: 1.6;
  margin: 0;
  letter-spacing: 0.02em;
}

/* ── Mobile ── */
@media (max-width: 767px) {
  .main-sidebar {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-width: unset;
    min-height: 44px;
    max-height: 50vh;
    height: auto;
    padding: 0;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    overflow-y: auto;
    z-index: 200;
    transition: max-height 0.35s ease;
  }

  .main-sidebar.collapsed {
    width: 100%;
    min-width: unset;
    min-height: unset;
    height: auto;
    max-height: 44px;
    padding: 0;
    overflow: hidden;
  }

  .main-sidebar.collapsed .sidebar-inner {
    display: none;
  }

  .sidebar-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px 16px;
    font-size: 0.85rem;
    background: rgba(0, 0, 0, 0.92);
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    position: sticky;
    top: 0;
    right: auto;
    z-index: 2;
  }

  .sidebar-inner {
    margin-top: 0;
    padding: 12px 16px;
  }

  .divider { margin: 16px 0; }

  .section-label { font-size: 0.65rem; }
  .nav-btn { padding: 10px 14px; font-size: 0.85rem; }
  .nav-hint { font-size: 0.7rem; }
}
</style>
