<template>
  <div class="horizontal-scroll-wrapper" ref="wrapperRef">
    <div class="cards-track" ref="trackRef">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="box"
        :class="[
          `color-${(index % 4) + 1}`,
          { 'is-pinned': pinnedIndex === index || closingIndex === index }
        ]"
        @click.stop="onPullClick(index)"
      >
        <!-- 拉出栏包裹层：统一控制宽度过渡，实现 drawer 与按钮同步动画 -->
        <div
          v-if="card.sections && card.sections.length"
          class="drawer-wrapper"
          :class="{ 'is-open': pinnedIndex === index }"
        >
          <div class="drawer-panel">
            <div
              class="drawer-track"
              :data-drawer-index="index"
              @wheel.stop.prevent="onDrawerWheel($event, index)"
            >
              <div
                v-for="(section, si) in card.sections"
                :key="si"
                class="chapter-card"
                @click.stop="onChapterClick(card, si)"
              >
                <span class="chapter-heading">{{ section.heading }}</span>
              </div>
            </div>
          </div>
          <button
            class="pull-btn"
            @click.stop="onPullClick(index)"
          >
            <Transition name="icon-fade" mode="out-in">
              <span class="btn-icon" :key="pinnedIndex === index ? 'close' : 'open'">
                {{ pinnedIndex === index ? '《' : '》' }}
              </span>
            </Transition>
          </button>
        </div>

        <span></span>

        <div class="content">
          <h2 class="card-id">{{ card.title }}</h2>
          <h3 class="card-name">{{ card.author }}</h3>
          <p class="card-subtitle">{{ card.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  cards: { type: Array, default: () => [] },
  fullStories: { type: Array, default: () => [] },
})

const emit = defineEmits(['card-click', 'scroll-x', 'chapter-click'])

function onCardClick(card) { emit('card-click', card) }
function onChapterClick(card, chapterIndex) {
  const section = card.sections?.[chapterIndex]
  emit('chapter-click', { cardId: card.id, chapterIndex, heading: section?.heading || '' })
}

// ── 拉出栏状态 ──
const pinnedIndex = ref(null)   // drawer 完全展开
const closingIndex = ref(null)  // drawer 收回中（卡片保持悬浮样式）

async function onPullClick(index) {
  const card = props.cards[index]
  if (!card?.sections?.length) return

  const wasOpen = pinnedIndex.value === index

  if (wasOpen) {
    startClosing(index)
  } else if (closingIndex.value === index) {
    closingIndex.value = null
    pinnedIndex.value = index
  } else {
    closingIndex.value = null
    pinnedIndex.value = index
  }
  // 等待 CSS transition 完成后再重算边界
  setTimeout(() => {
    calculateLimits()
    if (!wasOpen) {
      // 展开时：确保面板完全可见，必要时向右滚动
      const cardEl = trackRef.value?.children[index]
      if (cardEl) {
        const cardStyle = window.getComputedStyle(cardEl)
      const marginRight = parseFloat(cardStyle.marginRight) || 0
      const cardRight = cardEl.offsetLeft + cardEl.offsetWidth + marginRight
      const viewRight = currentX + wrapperRef.value.offsetWidth
      if (cardRight > viewRight) {
        targetX = Math.min(maxScroll, cardRight - wrapperRef.value.offsetWidth + 20)
      }
      }
    }
    if (currentX > maxScroll) {
      targetX = maxScroll
    }
    currentX = targetX
    if (trackRef.value) trackRef.value.style.transform = `translateX(-${currentX}px)`
  }, 400)
}

function startClosing(index) {
  closingIndex.value = index
  pinnedIndex.value = null
  setTimeout(() => {
    if (closingIndex.value === index) {
      closingIndex.value = null
      calculateLimits()
      if (currentX > maxScroll) {
        targetX = maxScroll; currentX = maxScroll
        if (trackRef.value) trackRef.value.style.transform = `translateX(-${maxScroll}px)`
      }
    }
  }, 520)
}

function closeDrawer() {
  if (pinnedIndex.value !== null) {
    startClosing(pinnedIndex.value)
  }
}

// ── 主轨道滚动 ──
const wrapperRef = ref(null), trackRef = ref(null)
let currentX = 0, maxScroll = 0, targetX = 0, animFrame = null

function calculateLimits() {
  const track = trackRef.value
  if (!track) return
  const cardEls = track.querySelectorAll('.box')
  let totalWidth = 0
  cardEls.forEach((card) => {
    const style = window.getComputedStyle(card)
    totalWidth += card.offsetWidth + (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0)
  })
  totalWidth += parseFloat(window.getComputedStyle(track).paddingLeft) || 0
  maxScroll = Math.max(0, totalWidth - wrapperRef.value.offsetWidth)
}

function onWheel(e) {
  e.preventDefault()
  targetX += e.deltaY
  targetX = Math.max(0, Math.min(targetX, maxScroll))
  if (!animFrame) animFrame = requestAnimationFrame(updatePosition)
}

function updatePosition() {
  currentX += (targetX - currentX) * 0.12
  if (Math.abs(targetX - currentX) < 0.05) currentX = targetX
  if (trackRef.value) trackRef.value.style.transform = `translateX(-${currentX}px)`
  emit('scroll-x', currentX)
  if (currentX !== targetX) { animFrame = requestAnimationFrame(updatePosition) } else { animFrame = null }
}

// ── 拉出栏内横向滚动 ──
const drawerScrolls = {}

function onDrawerWheel(e, index) {
  e.preventDefault()
  e.stopPropagation()
  const track = e.currentTarget
  if (!track) return

  const key = String(index)
  if (!drawerScrolls[key]) {
    drawerScrolls[key] = { current: 0, target: 0, max: 0, frame: null }
  }
  const s = drawerScrolls[key]

  s.max = Math.max(0, track.scrollWidth - track.parentElement.clientWidth)

  s.target += e.deltaY
  s.target = Math.max(0, Math.min(s.target, s.max))

  if (!s.frame) {
    s.frame = requestAnimationFrame(() => animateDrawer(track, s))
  }
}

function animateDrawer(track, s) {
  s.current += (s.target - s.current) * 0.12
  if (Math.abs(s.target - s.current) < 0.05) s.current = s.target
  track.style.transform = `translateX(-${s.current}px)`
  if (s.current !== s.target) {
    s.frame = requestAnimationFrame(() => animateDrawer(track, s))
  } else {
    s.frame = null
  }
}

// ── 点击外部关闭拉出栏 ──
function onDocumentClick(e) {
  if (pinnedIndex.value === null) return
  const wrapper = wrapperRef.value
  if (!wrapper) return
  if (!wrapper.contains(e.target)) {
    closeDrawer()
  }
}

// ── Resize ──
let resizeTimer = null, resizeObserver = null

function handleResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    calculateLimits()
    if (currentX > maxScroll) { targetX = maxScroll; currentX = maxScroll; if (trackRef.value) trackRef.value.style.transform = `translateX(-${maxScroll}px)` }
  }, 100)
}

onMounted(async () => {
  await nextTick()
  calculateLimits()
  const el = wrapperRef.value
  if (el) el.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', onDocumentClick)
  if (window.ResizeObserver && trackRef.value) {
    resizeObserver = new ResizeObserver(() => {
      calculateLimits()
      if (currentX > maxScroll) { targetX = maxScroll; currentX = maxScroll; if (trackRef.value) trackRef.value.style.transform = `translateX(-${maxScroll}px)` }
    })
    resizeObserver.observe(trackRef.value)
  }
})

onBeforeUnmount(() => {
  const el = wrapperRef.value
  if (el) el.removeEventListener('wheel', onWheel)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', onDocumentClick)
  clearTimeout(resizeTimer)
  if (resizeObserver) resizeObserver.disconnect()
  if (animFrame) cancelAnimationFrame(animFrame)
  for (const key of Object.keys(drawerScrolls)) {
    if (drawerScrolls[key].frame) cancelAnimationFrame(drawerScrolls[key].frame)
  }
})

defineExpose({ getCurrentX: () => currentX, getMaxScroll: () => maxScroll })
</script>

<style scoped>
.horizontal-scroll-wrapper { position: relative; width: 100%; height: 100%; overflow: hidden; cursor: grab; }
.horizontal-scroll-wrapper:active { cursor: grabbing; }
.cards-track { display: flex; flex-wrap: nowrap; align-items: center; height: 100%; gap: 0; padding-left: 6vw; will-change: transform; user-select: none; -webkit-user-select: none; }

.box { position: relative; display: flex; width: 340px; height: 420px; justify-content: center; align-items: center; margin: 0 40px; flex-shrink: 0; transition: margin-right 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s; cursor: pointer; }

/* ── 拉出栏包裹层：统一控制宽度过渡，drawer 与按钮完美同步 ── */
.drawer-wrapper {
  position: absolute;
  top: 0;
  height: 100%;
  left: 210px;
  z-index: -2;
  width: 0;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 悬浮时露出一小段，让按钮可见 */
.box:hover .drawer-wrapper {
  width: 70px;
}

/* 展开时完整拉出，需同时满足 is-pinned + is-open，关闭时 is-open 先移除触发收回动画 */
.box.is-pinned .drawer-wrapper.is-open {
  width: 560px;
}

/* ── 深灰色拉出面板 ── */
.drawer-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2a2a2e;
  border: 1px solid rgba(200, 200, 210, 0.25);
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.box.is-pinned .drawer-panel {
  opacity: 1;
}

.drawer-track {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 20px;
  padding: 0 56px 0 100px;
  will-change: transform;
  user-select: none;
  -webkit-user-select: none;
}

/* ── 章节卡片（浅灰色斜平行四边形）── */
.chapter-card {
  position: relative;
  width: 170px;
  height: 100px;
  flex-shrink: 0;
  transform: skewX(12deg);
  background: #c8c8cc;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  padding: 8px 16px;
}
.chapter-card:hover {
  background: #e0e0e5;
  transform: skewX(12deg) scale(1.08);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.chapter-card:active {
  transform: skewX(12deg) scale(0.95);
}

.chapter-heading {
  display: block;
  transform: skewX(-12deg);
  white-space: pre-line;
  line-height: 1.3;
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(0,0,0,0.55);
  letter-spacing: 0.03em;
  text-align: center;
  line-height: 1.3;
  pointer-events: none;
  word-break: keep-all;
}

/* ── 外拉按钮（跟随 wrapper 右边缘，无需单独动画）── */
.pull-btn {
  position: absolute;
  top: 50%;
  left: 70%;
  z-index: -2;
  transform: translateY(-50%);
  opacity: 0;
  padding: 14px 16px;
  background: rgba(40,40,42,0.92);
  color: #bbb;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0 6px 6px 0;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  pointer-events: auto;
  transition: opacity 0.35s ease, left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1;
  letter-spacing: 0;
  white-space: nowrap;
}
.pull-btn:hover {
  background: rgba(60,60,64,0.95);
  color: #fff;
  border-color: rgba(255,255,255,0.25);
}

.box:hover .pull-btn {
  opacity: 1;
}
.box.is-pinned .pull-btn {
  opacity: 1;
  left: calc(98% - 0px);
}

/* ── 渐变伪元素 ── */
.box::before { content: ""; position: absolute; top: 0; left: 50px; width: 50%; height: 100%; border-radius: 12px; transform: skewX(12deg); transition: 0.5s; z-index: 0; }
.box::after { content: ""; position: absolute; top: 0; left: 50px; width: 50%; height: 100%; border-radius: 12px; transform: skewX(12deg); filter: blur(30px); transition: 0.5s; z-index: -1; }
.box:hover::before,
.box:hover::after { transform: skewX(0deg); left: 20px; width: calc(100% - 90px); }

/* ── 锁定悬浮样式 ── */
.box.is-pinned::before,
.box.is-pinned::after { transform: skewX(0deg); left: 20px; width: calc(100% - 90px); }

.box.is-pinned { margin-right: 500px; }

/* 渐变色 */
.box.color-1::before, .box.color-1::after { background: linear-gradient(315deg, #d4ff90, #00e2dc, #002059); }
.box.color-2::before, .box.color-2::after { background: linear-gradient(315deg, #e5ff94, #e52edc, #0a0047); }
.box.color-3::before, .box.color-3::after { background: linear-gradient(315deg, #ffff97, #a0db0e, #003149); }
.box.color-4::before, .box.color-4::after { background: linear-gradient(315deg, #f0ff99, #ff8e39, #070066); }

/* 浮动方块 */
.box > span { display: block; position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 5; pointer-events: none; }
.box > span::before { content: ""; position: absolute; background: rgba(0,0,0,0.08); top: 0; left: 0; width: 0; height: 0; opacity: 0; transition: 0.3s; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.06); animation: floatA 2s ease-in-out infinite; }
.box:hover > span::before,
.box.is-pinned > span::before { opacity: 1; top: -50px; left: 50px; width: 100px; height: 100px; }
.box > span::after { content: ""; position: absolute; bottom: 0; right: 0; width: 0; height: 0; background: rgba(0,0,0,0.08); opacity: 0; transition: 0.5s; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.06); animation: floatB 2s ease-in-out infinite; animation-delay: -1s; }
.box:hover > span::after,
.box.is-pinned > span::after { bottom: -50px; right: 50px; width: 100px; height: 100px; opacity: 1; }
@keyframes floatA { 0%, 100% { transform: translateY(10px); } 50% { transform: translateY(-10px); } }
@keyframes floatB { 0%, 100% { transform: translateY(-10px); } 50% { transform: translateY(10px); } }

/* 内容面板 */
.content { position: relative; padding: 32px 36px; color: #fff; background: rgba(20,20,20,0.75); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 8px 32px rgba(0,0,0,0.15); border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); z-index: 1; transition: 0.5s; width: 82%; margin-right: auto; }
.box:hover .content { transform: translateX(-45px); padding: 48px 36px; width: calc(100% - 60px); }
.box.is-pinned .content { transform: translateX(-85px); padding: 48px 36px; width: calc(100% - 60px); }

/* 文字 */
.card-id { font-family: var(--font-family, 'Inter', sans-serif); font-size: 2.4rem; font-weight: 900; color: #fff; margin: 0 0 8px 0; letter-spacing: -0.04em; }
.card-name { font-family: var(--font-family, 'Inter', sans-serif); font-size: 1rem; font-weight: 500; color: rgba(255,255,255,0.6); margin: 0 0 6px 0; letter-spacing: 0.03em; }
.card-subtitle { font-family: var(--font-family, 'Inter', sans-serif); font-size: 0.8rem; font-weight: 400; color: rgba(255,255,255,0.35); margin: 0; letter-spacing: 0.05em; line-height: 1.5; white-space: pre-line; }

@media (max-width: 767px) {
  .box { width: 260px; height: 340px; margin: 0 28px; }
  .cards-track { padding-left: 4vw; }
  .card-id { font-size: 1.8rem; }
  .card-name { font-size: 0.85rem; }
  .content { padding: 24px 28px; }
  .box:hover .content { transform: translateX(-28px); width: calc(100% - 50px); padding: 36px 28px; }
  .box.is-pinned .content { transform: translateX(-60px); width: calc(100% - 50px); padding: 36px 28px; }

  .drawer-wrapper { left: 160px; }
  .box:hover .drawer-wrapper { width: 50px; }
  .box.is-pinned .drawer-wrapper.is-open { width: 380px; }

  .drawer-track { padding: 0 44px 0 16px; gap: 14px; }
  .chapter-card { width: 130px; height: 80px; }
  .chapter-heading { font-size: 0.78rem; }

  .pull-btn { padding: 12px 12px; font-size: 1.1rem; }
  .box.is-pinned .pull-btn { left: calc(100% + 4px); }
  .box.is-pinned { margin-right: 320px; }
}
</style>
