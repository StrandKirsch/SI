<template>
  <aside class="story-sidebar" :class="{ collapsed: sidebarCollapsed }">
    <button
      class="sidebar-toggle"
      @click="sidebarCollapsed = !sidebarCollapsed"
    >
      <span v-if="sidebarCollapsed">&#9654;</span>
      <span v-else>&#9664;</span>
    </button>

    <div class="sidebar-inner" v-show="!sidebarCollapsed">
      <!-- 返回主页面按钮 -->
      <button class="nav-btn back-btn" @click="goToMain">
        <span class="nav-btn-icon">&#9664;</span>
        <span class="nav-btn-text">归于层群之内</span>
      </button>

      <div class="divider"></div>

      <!-- 文章目录 -->
      <p class="section-label">文章目录</p>

      <div class="directory">
        <div
          v-for="group in authorGroups"
          :key="group.author"
          class="author-group"
        >
          <h3 class="author-name">{{ group.author }}</h3>
          <ul class="story-list">
            <li
              v-for="story in group.stories"
              :key="story.id"
              class="story-item"
              :class="{ active: story.id === currentStoryId }"
            >
              <div class="story-row">
                <a
                  class="story-link"
                  @click.prevent="goToStory(story.id)"
                >
                  {{ story.title }}
                </a>
                <button
                  v-if="story.sections && story.sections.length > 1"
                  class="expand-toggle"
                  :class="{ open: expandedStory === story.id }"
                  @click.stop="toggleExpand(story.id)"
                >&#9662;</button>
              </div>
              <!-- 章节列表 -->
              <ul class="chapter-sublist" v-if="expandedStory === story.id">
                <li
                  v-for="(section, ci) in story.sections"
                  :key="ci"
                  class="chapter-subitem"
                >
                  <a
                    class="chapter-sublink"
                    @click.prevent="goToChapter(story.id, ci)"
                  >
                    {{ section.heading || `第${ci + 1}章` }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { stories } from './stories/index.js'

const props = defineProps({
  currentStoryId: { type: String, default: '' },
})

const router = useRouter()
const sidebarCollapsed = ref(true)
const isMobile = ref(false)
const expandedStory = ref(null)

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

// 按作者首字母排序分组
const authorGroups = computed(() => {
  const map = {}
  for (const story of stories) {
    const author = story.author || '未知'
    if (!map[author]) map[author] = []
    map[author].push(story)
  }
  // 按作者名排序
  const sorted = Object.keys(map).sort((a, b) => {
    return a.localeCompare(b, 'zh-Hans-CN', { sensitivity: 'base' })
  })
  return sorted.map(author => ({
    author,
    stories: map[author].sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN', { sensitivity: 'base' })),
  }))
})

function goToMain() {
  sessionStorage.setItem('skipIntro', '1')
  router.push('/')
}

function toggleExpand(id) {
  expandedStory.value = expandedStory.value === id ? null : id
}

function goToStory(id) {
  sessionStorage.setItem('skipSideStoryIntro', '1')
  const story = stories.find(s => s.id === id)
  if (story && story.sections && story.sections.length > 1) {
    router.push(`/sidestory/${id}/0`)
  } else {
    router.push(`/sidestory/${id}`)
  }
}

function goToChapter(storyId, chapterIndex) {
  sessionStorage.setItem('skipSideStoryIntro', '1')
  router.push(`/sidestory/${storyId}/${chapterIndex}`)
}
</script>

<style scoped>
.story-sidebar {
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

.story-sidebar.collapsed {
  width: 44px;
  min-width: 44px;
  padding: 32px 8px 40px;
}

/* ── Toggle ── */
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

/* ── Back button ── */
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
  transition: background 0.2s ease, border-color 0.2s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
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

/* ── Directory ── */
.directory {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author-group {
  margin-bottom: 20px;
}

.author-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 8px 0;
  letter-spacing: 0.03em;
}

.story-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.story-item {
  padding: 0;
}

.story-link {
  display: block;
  padding: 6px 10px 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.82rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  border-left: 2px solid transparent;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  cursor: pointer;
}

.story-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
}

.story-item.active .story-link {
  color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.06);
}

/* ── 标题行（标题 + 展开按钮）── */
.story-row {
  display: flex;
  align-items: center;
}
.story-row .story-link {
  flex: 1;
  min-width: 0;
}

/* ── 展开/收起按钮 ── */
.expand-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
  cursor: pointer;
  transition: color 0.2s, transform 0.25s, background 0.2s;
  flex-shrink: 0;
}
.expand-toggle:hover { color: rgba(255, 255, 255, 0.8); background: rgba(255, 255, 255, 0.1); }
.expand-toggle.open { transform: rotate(180deg); }

/* ── 章节子列表 ── */
.chapter-sublist {
  list-style: none;
  padding: 2px 0 2px 20px;
  margin: 0;
}
.chapter-subitem {
  padding: 0;
}
.chapter-sublink {
  display: block;
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;
}
.chapter-sublink:hover {
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.04);
}

/* ── Mobile ── */
@media (max-width: 767px) {
  .story-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 200;
  }

  .story-sidebar.collapsed {
    width: 36px;
    min-width: 36px;
    padding: 32px 6px 40px;
  }
}
</style>
