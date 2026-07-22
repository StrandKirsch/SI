<template>
  <div class="main-root">
    <!-- 拖拽区域 -->
    <div
      class="photos"
      ref="containerRef"
      :class="{ dragging: drag.active }"
      @mousedown="onDragStart"
      @touchstart="onTouchStart"
    >
      <div
        v-for="card in allCards"
        :key="card.uid"
        :ref="el => setRef(card.uid, el)"
        class="card"
        :class="{ placeholder: card.placeholder }"
        @click.stop="goToLevel(card)"
      >
        <div class="card-bg"></div>
        <span class="card-id">{{ card.placeholder ? '???' : 'SI-' + card.level.id }}</span>
        <span class="card-subtitle">{{ card.level.subtitle }}</span>
        <span class="card-name">{{ card.level.name }}</span>
        <span class="card-danger" v-if="!card.placeholder">
          <template v-if="typeof card.level.danger === 'number'">
            <span v-for="n in 5" :key="n" :class="{ on: n <= (card.level.danger || 0) }">&#9670;</span>
          </template>
          <span v-else class="danger-text">{{ card.level.danger }}</span>
        </span>
      </div>
    </div>

    <!-- 范围选择时间轴 -->
    <div
      class="timeline"
      ref="timelineRef"
      :class="{ scrollable: needsScroll }"
      @wheel.stop.prevent="onTimelineWheel"
    >
      <button
        v-for="range in ranges"
        :key="range.start"
        class="range-btn"
        :class="{ active: range.start === selectedStart }"
        @click.stop="selectRange(range.start)"
      >
        <span class="range-label">SI-{{ range.start }} – SI-{{ range.end }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { levels as levelsData } from '../data/levels.js'

const router = useRouter()
const containerRef = ref(null)
const timelineRef = ref(null)
const needsScroll = ref(false)

// ── Range data (dynamically adapts to levels.js) ────
const RANGE_SIZE = 25
const maxLevelId = Math.max(...levelsData.map(l => l.id), 0)
const rangeCount = Math.ceil(maxLevelId / RANGE_SIZE)

const allRanges = Array.from({ length: rangeCount }, (_, i) => ({
  start: i * RANGE_SIZE + 1,
  end: (i + 1) * RANGE_SIZE,
}))
const ranges = allRanges.filter(r => levelsData.some(l => l.id >= r.start && l.id <= r.end))
const selectedStart = ref(ranges[0]?.start ?? 1)

const levelMap = {}
levelsData.forEach(l => { levelMap[l.id] = l })

function getLevel(id) {
  if (levelMap[id]) return { ...levelMap[id], placeholder: false }
  return {
    id,
    name: 'Unknown',
    subtitle: 'Level data not found',
    danger: 0,
    placeholder: true,
  }
}

let transiting = false

async function selectRange(start) {
  if (selectedStart.value === start || transiting) return
  transiting = true

  const el = containerRef.value
  if (!el) return

  el.style.transition = 'opacity 0.2s ease'
  el.style.opacity = '0'
  await new Promise(r => setTimeout(r, 200))

  selectedStart.value = start
  uidCounter = 0; cardRefs = {}; stopInertia()
  buildGrid()
  await nextTick(); initCenter()

  el.style.opacity = '1'
  await new Promise(r => setTimeout(r, 200))
  el.style.transition = ''
  transiting = false
}

function initCenter() {
  const rect = containerRef.value.getBoundingClientRect()
  const cx = -(totalW - rect.width) / 2
  const cy = -(totalH - rect.height) / 2
  for (const card of allCards.value) {
    card.x += cx
    card.y += cy
    wrapCard(card)
  }
  applyPositions()
}

// ── Grid data ──────────────────────────────────────
const COLS = 5
const ROWS = 5
const CARD_RATIO = 3 / 4  // width / height
const MAX_VEL = 25
const VEL_DECAY = 0.94
const VEL_MIN = 0.15

const cardW = ref(480)
const cardH = ref(640)
const gapX = ref(200)
const gapY = ref(234)

function calcCardSizes(containerWidth) {
  const maxW = 800, minW = 260
  const w = Math.max(minW, Math.min(maxW, Math.floor(containerWidth / 5.5)))
  const gx = Math.floor(w * 0.42)
  const h = Math.floor(w / CARD_RATIO)
  const gy = Math.floor(gx * 1.17)
  cardW.value = w; cardH.value = h; gapX.value = gx; gapY.value = gy
}

let uidCounter = 0
const allCards = ref([])
let cardRefs = {}
let totalW = 0
let totalH = 0

function setRef(uid, el) {
  if (el) cardRefs[uid] = el
  else delete cardRefs[uid]
}

function buildGrid() {
  const cards = []
  const stepX = cardW.value + gapX.value
  const stepY = cardH.value + gapY.value
  totalW = COLS * stepX - gapX.value
  totalH = ROWS * stepY - gapY.value

  const start = selectedStart.value
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const id = start + r * COLS + c
      const level = getLevel(id)
      cards.push({
        uid: uidCounter++,
        level,
        placeholder: level.placeholder,
        x: c * stepX,
        y: r * stepY,
      })
    }
  }
  allCards.value = cards
}

function wrapCard(card) {
  if (card.x > totalW - cardW.value) card.x -= totalW + gapX.value
  if (card.x < -cardW.value) card.x += totalW + gapX.value
  if (card.y > totalH - cardH.value) card.y -= totalH + gapY.value
  if (card.y < -cardH.value) card.y += totalH + gapY.value
}

function applyPositions() {
  const w = cardW.value; const h = cardH.value
  const idSize = Math.min(Math.round(w * 0.0097), 5) + 'rem'  // cap at 5rem for large screens
  for (const card of allCards.value) {
    const el = cardRefs[card.uid]
    if (!el) continue
    el.style.width = w + 'px'
    el.style.height = h + 'px'
    el.style.setProperty('--card-id-size', idSize)
    el.style.transform = `translate(${Math.round(card.x)}px, ${Math.round(card.y)}px)`
  }
}

// ── Drag ────────────────────────────────────────────
const drag = reactive({ active: false, mx: 0, my: 0 })
let vx = 0, vy = 0, inertiaId = null
let hasMoved = false              // 是否发生了实际拖动
let dragStart = { x: 0, y: 0 }   // 触摸/鼠标起始位置

function getPos(e) {
  if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY }
  return { x: e.clientX, y: e.clientY }
}

function onDragStart(e) {
  drag.active = true
  hasMoved = false               // 重置拖动标记
  stopInertia()
  const p = getPos(e)
  drag.mx = p.x; drag.my = p.y
  dragStart.x = p.x
  dragStart.y = p.y
  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('mouseup', onDragEnd)
  window.addEventListener('touchmove', onDragMove, { passive: false })
  window.addEventListener('touchend', onDragEnd)
}

function onTouchStart(e) {
  onDragStart(e)                // 移除 .prevent，正常传递事件
}

function onDragMove(e) {
  if (!drag.active) return
  // 移动端阻止页面滚动（仅当真正拖拽时）
  if (e.cancelable) e.preventDefault()

  const p = getPos(e)
  const dx = e.movementX !== undefined ? e.movementX : p.x - drag.mx
  const dy = e.movementY !== undefined ? e.movementY : p.y - drag.my

  // 判断是否发生了超过 3px 的拖动
  if (Math.abs(p.x - dragStart.x) > 3 || Math.abs(p.y - dragStart.y) > 3) {
    hasMoved = true
  }

  for (const card of allCards.value) {
    card.x += dx
    card.y += dy
    wrapCard(card)
  }

  vx = Math.max(-MAX_VEL, Math.min(MAX_VEL, dx))
  vy = Math.max(-MAX_VEL, Math.min(MAX_VEL, dy))

  applyPositions()
  drag.mx = p.x; drag.my = p.y
}

function onDragEnd() {
  drag.active = false
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', onDragEnd)
  window.removeEventListener('touchmove', onDragMove)
  window.removeEventListener('touchend', onDragEnd)

  if (Math.abs(vx) > VEL_MIN || Math.abs(vy) > VEL_MIN) {
    function step() {
      vx *= VEL_DECAY; vy *= VEL_DECAY
      if (Math.abs(vx) < VEL_MIN && Math.abs(vy) < VEL_MIN) { inertiaId = null; return }
      for (const card of allCards.value) {
        card.x += vx; card.y += vy
        wrapCard(card)
      }
      applyPositions()
      inertiaId = requestAnimationFrame(step)
    }
    inertiaId = requestAnimationFrame(step)
  }
}

function stopInertia() {
  if (inertiaId) { cancelAnimationFrame(inertiaId); inertiaId = null }
  vx = 0; vy = 0
}

// ── Navigation ─────────────────────────────────────
function goToLevel(card) {
  // 如果正在拖拽或发生过真实拖动，忽略本次点击
  if (drag.active || hasMoved) {
    hasMoved = false  // 重置，避免影响下次正常点击
    return
  }
  if (card.placeholder) return
  router.push(`/level/${card.level.id}`)
}

// ── Timeline overflow detection ────────────────────
let resizeObserver = null

function checkTimelineOverflow() {
  const el = timelineRef.value
  if (!el) return
  needsScroll.value = el.scrollWidth > el.clientWidth + 2
}

// ── Timeline horizontal scroll (wheel → horizontal) ──
function onTimelineWheel(e) {
  const el = timelineRef.value
  if (!el || el.scrollWidth <= el.clientWidth + 1) return
  // 始终阻止默认纵向滚动，统一转换为横向滚动
  e.preventDefault()
  el.scrollLeft += e.deltaY || e.deltaX || 0
}

// ── Lifecycle ──────────────────────────────────────
let cardResizeOb = null
let resizeDebounce = null

onMounted(async () => {
  if (containerRef.value) {
    calcCardSizes(containerRef.value.clientWidth)
  }
  buildGrid()
  await nextTick()
  initCenter()

  if (containerRef.value) {
    cardResizeOb = new ResizeObserver(() => {
      clearTimeout(resizeDebounce)
      resizeDebounce = setTimeout(() => {
        calcCardSizes(containerRef.value.clientWidth)
        uidCounter = 0; cardRefs = {}; stopInertia()
        buildGrid()
        nextTick(() => initCenter())
      }, 200)
    })
    cardResizeOb.observe(containerRef.value)
  }

  if (timelineRef.value) {
    checkTimelineOverflow()
    resizeObserver = new ResizeObserver(checkTimelineOverflow)
    resizeObserver.observe(timelineRef.value)
  }
})

onBeforeUnmount(() => {
  onDragEnd()
  stopInertia()
  if (resizeObserver) resizeObserver.disconnect()
  if (cardResizeOb) cardResizeOb.disconnect()
})
</script>

<style scoped>
.main-root {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
}

/* ── 拖拽区域 ──────────────────────────────────── */
.photos {
  flex: 1;
  position: relative;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  touch-action: manipulation;   /* 优化移动端点击，禁用双击缩放 */
}
.photos.dragging {
  cursor: grabbing;
}

/* ── 卡片 ────────────────────────────────────── */
.card {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.08);
  background: rgba(255,255,255,0.97);
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
  transition: box-shadow 0.3s ease;
  will-change: auto;
  opacity: 0.97;
  user-select: none;
  -webkit-user-select: none;
  contain: layout style paint;
}
.photos.dragging .card {
  will-change: transform;
}
.card:hover {
  box-shadow: 0 8px 36px rgba(0,0,0,0.14);
}
.card.placeholder {
  opacity: 0.95;
  background: rgba(255,255,255,0.7);
  cursor: default;
  border-style: dashed;
}
.card.placeholder:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}

.card-bg {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.03) 0%, transparent 70%);
  pointer-events: none;
}
.card.placeholder .card-bg {
  background: none;
}

.card-id {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: var(--card-id-size, 3.5rem);
  font-weight: 800;
  color: var(--color-black, #000);
  letter-spacing: -0.03em;
}
.card.placeholder .card-id {
  color: rgba(0,0,0,0.2);
  font-size: 4rem;
}

.card-name {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(0,0,0,0.35);
  letter-spacing: 0.02em;
}
.card-subtitle {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1.25rem;
  font-weight: 500;
  color: rgba(0,0,0,0.65);
}
.card-danger {
  display: flex;
  gap: 4px;
  font-size: 0.85rem;
  color: rgba(0,0,0,0.12);
}
.card-danger .on {
  color: #e63946;
}
.card-danger .danger-text {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-weight: 600;
  font-size: 0.8rem;
  color: rgba(0,0,0,0.6);
  letter-spacing: 0.04em;
}

/* ── 时间轴 ────────────────────────────────────── */
.timeline {
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 16px 20px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-top: 1px solid rgba(0,0,0,0.06);
  z-index: 10;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  touch-action: pan-x pinch-zoom;
}
.timeline::-webkit-scrollbar {
  display: none;
}
.timeline.scrollable {
  justify-content: flex-start;
}

.range-btn {
  padding: 8px 16px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 8px;
  background: rgba(255,255,255,0.6);
  cursor: pointer;
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(0,0,0,0.5);
  letter-spacing: 0.03em;
  transition: all 0.2s ease;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
}
.range-btn:hover {
  background: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.8);
}
.range-btn.active {
  background: var(--color-black, #000);
  color: #fff;
  border-color: var(--color-black, #000);
}
.range-label {
  pointer-events: none;
}
</style>·