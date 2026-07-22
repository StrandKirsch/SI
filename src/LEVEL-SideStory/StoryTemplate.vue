<template>
  <div class="story-layout">
    <StorySidebar :currentStoryId="story?.id || ''" />

    <div class="story-main">
      <div class="story-page">
        <WavesBackground />

        <div class="story-content">
          <button class="back-btn" @click="goBack">&larr; 返回</button>

          <article class="story-article" v-if="story">
            <!-- 章节导航栏（单章模式） -->
            <nav class="chapter-nav" v-if="currentChapter !== null">
              <button
                class="chapter-nav-btn"
                :disabled="currentChapter <= 0"
                @click="goToChapter(currentChapter - 1)"
              >&#9664; 上一章</button>
              <span class="chapter-nav-info">
                第 {{ currentChapter + 1 }} / {{ story.sections.length }} 章
              </span>
              <button
                class="chapter-nav-btn"
                :disabled="currentChapter >= story.sections.length - 1"
                @click="goToChapter(currentChapter + 1)"
              >下一章 &#9654;</button>
            </nav>

            <div class="story-card">
              <header class="story-header">
                <h1 class="story-title">{{ story.title }}</h1>
                <p class="story-author">{{ story.author }}</p>
                <div class="story-divider"></div>
                <p class="story-subtitle">{{ story.subtitle }}</p>
              </header>

              <!-- 单章模式 -->
              <div class="story-body" v-if="currentChapter !== null">
                <section class="story-section">
                  <h2 class="section-heading">{{ activeSection.heading }}</h2>
                  <p class="section-body">{{ activeSection.body }}</p>
                </section>
              </div>

              <!-- 全章模式 -->
              <div class="story-body" v-else>
                <section
                  v-for="(section, i) in story.sections"
                  :key="i"
                  class="story-section"
                >
                  <h2 class="section-heading">{{ section.heading }}</h2>
                  <p class="section-body">{{ section.body }}</p>
                </section>
              </div>

              <div class="story-footer">
                <button class="top-btn" @click="scrollToTop">&#9650; 回到顶部</button>
                <button
                  v-if="currentChapter !== null"
                  class="top-btn view-all-btn"
                  @click="viewAllChapters"
                >&#9776; 查看全部章节</button>
              </div>
            </div>

            <!-- 底部章节导航（单章模式） -->
            <nav class="chapter-nav bottom-nav" v-if="currentChapter !== null">
              <button
                class="chapter-nav-btn"
                :disabled="currentChapter <= 0"
                @click="goToChapter(currentChapter - 1)"
              >&#9664; 上一章</button>
              <span class="chapter-nav-info">
                第 {{ currentChapter + 1 }} / {{ story.sections.length }} 章
              </span>
              <button
                class="chapter-nav-btn"
                :disabled="currentChapter >= story.sections.length - 1"
                @click="goToChapter(currentChapter + 1)"
              >下一章 &#9654;</button>
            </nav>
          </article>

          <div class="story-not-found" v-else>
            <p>故事未找到</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import WavesBackground from '../components/WavesBackground.vue'
import StorySidebar from './StorySidebar.vue'
import { getStoryById } from './stories/index.js'

const router = useRouter()
const route = useRoute()
const story = ref(null)
const currentChapter = ref(null)

const activeSection = computed(() => {
  if (currentChapter.value === null || !story.value) return null
  return story.value.sections[currentChapter.value] || null
})

function loadStory() {
  const id = route.params.storyId
  story.value = getStoryById(id)
  const ci = route.params.chapterIndex
  if (ci !== undefined && ci !== null) {
    currentChapter.value = parseInt(ci, 10)
  } else {
    currentChapter.value = null
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function goBack() {
  sessionStorage.setItem('skipSideStoryIntro', '1')
  router.push('/sidestory')
}

function goToChapter(index) {
  if (!story.value) return
  if (index < 0 || index >= story.value.sections.length) return
  router.push(`/sidestory/${route.params.storyId}/${index}`)
}

function viewAllChapters() {
  router.push(`/sidestory/${route.params.storyId}`)
}

onMounted(() => {
  loadStory()
})
watch(() => route.params.storyId, () => {
  loadStory()
  window.scrollTo({ top: 0, behavior: 'instant' })
})
watch(() => route.params.chapterIndex, (newVal) => {
  if (newVal !== undefined && newVal !== null) {
    currentChapter.value = parseInt(newVal, 10)
    window.scrollTo({ top: 0, behavior: 'instant' })
  } else {
    currentChapter.value = null
  }
})
</script>

<style scoped>
/* ── 布局：侧边栏 + 内容 ── */
.story-layout {
  display: flex;
  min-height: 100vh;
  background: var(--color-off-white, #f7f7f7);
}

.story-main {
  flex: 1;
  min-width: 0;
}

.story-page {
  position: relative;
  min-height: 100vh;
  background: var(--color-off-white, #f7f7f7);
}

.story-content {
  position: relative;
  z-index: 10;
  max-width: 780px;
  margin: 0 auto;
  padding: 40px 32px 80px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm, 8px);
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  margin-bottom: 48px;
}

.back-btn:hover {
  background: rgba(0, 0, 0, 0.95);
}

/* ── 文章卡片（整页实色背景）── */
.story-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 56px 56px 64px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.04);
}

/* ── 文章头部 ── */
.story-header {
  margin-bottom: 48px;
}

.story-title {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: var(--color-black, #000);
  letter-spacing: -0.04em;
  margin: 0 0 8px 0;
}

.story-author {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.35);
  letter-spacing: 0.04em;
  margin: 0 0 24px 0;
}

.story-divider {
  width: 48px;
  height: 1px;
  background: rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
}

.story-subtitle {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  line-height: 1.7;
  font-style: italic;
  margin: 0;
}

/* ── 正文段落 ── */
.story-body {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.story-section {
  padding: 0 0 32px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.story-section:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

/* ── 章节导航 ── */
.chapter-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 12px 0;
}
.chapter-nav.bottom-nav {
  margin-top: 40px;
  margin-bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding-top: 24px;
}
.chapter-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 20px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm, 8px);
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;
}
.chapter-nav-btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.95);
}
.chapter-nav-btn:disabled {
  opacity: 0.25;
  cursor: default;
}
.chapter-nav-info {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 500;
}

/* ── 文章底部 ── */
.story-footer {
  margin-top: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
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
.view-all-btn {
  color: rgba(0, 0, 0, 0.35);
}

.section-heading {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.25);
  letter-spacing: 0.06em;
  margin: 0 0 16px 0;
  text-transform: uppercase;
}

.section-body {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1.05rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.9;
  margin: 0;
  letter-spacing: 0.01em;
  white-space: pre-line;
}

/* ── Not Found ── */
.story-not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 767px) {
  .story-layout {
    flex-direction: column;
  }

  .story-main {
    padding-top: 44px;
  }

  .story-content {
    padding: 24px 16px 60px;
  }

  .story-card {
    padding: 32px 24px 40px;
  }

  .section-body {
    font-size: 0.95rem;
  }
}
</style>
