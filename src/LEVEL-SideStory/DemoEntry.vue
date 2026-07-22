<template>
  <div class="demo-page">
    <div class="size-indicator">{{ screenW }} × {{ screenH }}</div>

    <div class="portrait-container" ref="containerRef" v-if="showPortrait">
      <img :src="portraitSrc" class="portrait-svg" ref="imgRef" alt="画像" />
    </div>

    <svg class="arc-overlay" ref="arcSvgRef" xmlns="http://www.w3.org/2000/svg">
      <g ref="movingGroupRef">
        <g ref="arcGroupRef" v-if="showArc">
          <path ref="arcUpperRef" fill="none" stroke="var(--color-black, #000)" stroke-width="2" />
          <path ref="arcLowerRef" fill="none" stroke="var(--color-black, #000)" stroke-width="2" />
          <circle ref="arcDotRef" cx="0" cy="0" r="4" fill="var(--color-black, #000)" opacity="0" />
        </g>
        <line ref="timelineRef" x1="0" y1="0" x2="0" y2="0" stroke="var(--color-black, #000)" stroke-width="1" opacity="0" />
        <g ref="ticksRef" opacity="0" />
      </g>
      <g ref="splitScrollRef">
        <g ref="splitGroupRef" opacity="0">
          <g ref="upperSplitRef">
            <line ref="timelineUpperRef" x1="0" y1="0" x2="0" y2="0" stroke="var(--color-black, #000)" stroke-width="1" />
            <g ref="ticksUpperRef" />
          </g>
          <g ref="lowerSplitRef">
            <line ref="timelineLowerRef" x1="0" y1="0" x2="0" y2="0" stroke="var(--color-black, #000)" stroke-width="1" />
            <g ref="ticksLowerRef" />
          </g>
        </g>
      </g>
    </svg>

    <div class="waves-layer" ref="wavesRef">
      <WavesBackground />
    </div>

    <div class="cover-panel" ref="coverUpperRef"></div>
    <div class="cover-panel" ref="coverLowerRef"></div>

    <div class="cards-section" ref="cardsSectionRef">
      <HorizontalCards ref="cardsRef" :cards="demoCards" :fullStories="demoCards" @card-click="onCardClick" @scroll-x="onCardScroll" @chapter-click="onChapterClick" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import WavesBackground from '../components/WavesBackground.vue'
import HorizontalCards from './HorizontalCards.vue'
import { stories } from './stories/index.js'
import portraitSrc from '../assets/画像.svg'

// 临时测试卡片数据
const testCards = Array.from({ length: 10 }, (_, i) => ({
  id: `test-${i + 1}`,
  title: `测试卡片 ${i + 1}`,
  author: '临时',
  subtitle: `这是用于滚动测试的临时卡片 #${i + 1}`,
  levelRef: `SI-???`,
}))
const demoCards = [...stories, ...testCards]

const router = useRouter()

const containerRef = ref(null)
const imgRef = ref(null)
const arcSvgRef = ref(null)
const movingGroupRef = ref(null)
const arcGroupRef = ref(null)
const arcUpperRef = ref(null)
const arcLowerRef = ref(null)
const arcDotRef = ref(null)
const timelineRef = ref(null)
const ticksRef = ref(null)
const splitScrollRef = ref(null)
const splitGroupRef = ref(null)
const upperSplitRef = ref(null)
const lowerSplitRef = ref(null)
const timelineUpperRef = ref(null)
const timelineLowerRef = ref(null)
const ticksUpperRef = ref(null)
const ticksLowerRef = ref(null)
const wavesRef = ref(null)
const coverUpperRef = ref(null)
const coverLowerRef = ref(null)
const cardsSectionRef = ref(null)
const cardsRef = ref(null)

const showPortrait = ref(true)
const showArc = ref(true)
const screenW = ref(window.innerWidth)
const screenH = ref(window.innerHeight)

let masterTl = null
let animationDone = false
let resizeTimer = null

// ── 辅助函数：读取当前窗口尺寸 ──
function W() { return screenW.value }
function H() { return screenH.value }

function updateScreenSize() {
  screenW.value = window.innerWidth
  screenH.value = window.innerHeight
}

// ── 静态元素位置更新 ──
function updateStaticPositions() {
  const w = W(), h = H()
  const upperY = h / 6
  const lowerY = h * 5 / 6
  gsap.set(coverUpperRef.value, { top: 0, height: upperY })
  gsap.set(coverLowerRef.value, { top: lowerY, height: h - lowerY })
  gsap.set(upperSplitRef.value, { y: upperY })
  gsap.set(lowerSplitRef.value, { y: lowerY })
  const pad = w * 0.15
  gsap.set(timelineUpperRef.value, { attr: { x1: -pad, x2: w + pad } })
  gsap.set(timelineLowerRef.value, { attr: { x1: -pad, x2: w + pad } })
}

// ── 刻度绘制 ──
function drawSplitTicks(xStart, xEnd, half) {
  const refMap = { upper: ticksUpperRef, lower: ticksLowerRef }
  const ticks = refMap[half]?.value
  if (!ticks) return
  const dir = half === 'upper' ? 'up' : 'down'
  const spacing = 40, tickH = 6
  let html = ''
  for (let x = Math.ceil(xStart / spacing) * spacing; x <= xEnd; x += spacing) {
    const major = x % 120 === 0
    const h = major ? tickH * 2 : tickH
    const alpha = major ? 0.5 : 0.2
    const y1 = dir === 'up' ? -h : 0
    const y2 = dir === 'down' ? h : 0
    html += `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="rgba(0,0,0,${alpha})" stroke-width="${major ? 1.2 : 0.6}"/>`
  }
  ticks.innerHTML = html
}

function onCardScroll(x) {
  if (!animationDone) return

  const maxS = cardsRef.value?.getMaxScroll?.() || 0
  const w = W()
  const totalLen = w + maxS + w * 0.3 // 屏宽 + 可滚动距离 + 缓冲

  // 动态扩展时间轴长度
  if (timelineUpperRef.value) {
    const pad = w * 0.15
    timelineUpperRef.value.setAttribute('x1', -pad)
    timelineUpperRef.value.setAttribute('x2', totalLen)
    timelineLowerRef.value.setAttribute('x1', -pad)
    timelineLowerRef.value.setAttribute('x2', totalLen)
    // 重绘刻度（只保留可见区域 + 缓冲区，节省资源）
    const visibleStart = x - pad - 200
    const visibleEnd = x + w + 200
    drawSplitTicks(visibleStart, visibleEnd, 'upper')
    drawSplitTicks(visibleStart, visibleEnd, 'lower')
  }

  // 平移时间轴
  if (splitScrollRef.value) {
    splitScrollRef.value.setAttribute('transform', `translate(${-x}, 0)`)
  }
}

function onChapterClick({ cardId, chapterIndex }) {
  router.push(`/sidestory/${cardId}/${chapterIndex}`)
}

function onCardClick(card) {
  router.push(`/sidestory/${card.id}`)
}

// ── 构建动画（所有尺寸使用函数式取值）──
function buildAnimation() {
  const img = imgRef.value
  if (!img) {
    // DOM 尚未就绪，延迟重试
    requestAnimationFrame(() => buildAnimation())
    return
  }

  const SVG_W = 3213
  const SVG_H = 1643
  const svgAspect = SVG_W / SVG_H
  // 视觉焦点：SVG 右侧一半的中心 (x ≈ 2409.75, 即 75%)
  const focalXPct = 75
  const focalYPct = 50

  // 初始状态（使用当前窗口尺寸）
  // 初始缩放：右侧一半填满屏宽 + 防止 SVG 下端暴露在窗口内
  const initScale = () => Math.max(W() / (H() * svgAspect / 2), 1)
  gsap.set(img, {
    height: '100vh', width: 'auto',
    transformOrigin: `${focalXPct}% ${focalYPct}%`,
    scale: initScale,
    y: () => H() * 1.1,
    x: () => -0.25 * H() * svgAspect,
    force3D: true,
  })
  // GPU 合成层
  img.style.willChange = 'transform'

  // 动画期间隐藏波浪背景（避免 rAF 竞争），结束后再显示
  gsap.set(wavesRef.value, { opacity: 0 })
  gsap.set(cardsSectionRef.value, { opacity: 0 })

  gsap.set(coverUpperRef.value, { top: 0, height: () => H() / 3 })
  gsap.set(coverLowerRef.value, { top: () => H() / 3, height: () => H() * 2 / 3 })

  gsap.set(movingGroupRef.value, { x: () => W() * 0.32, y: () => H() / 3 })
  gsap.set(timelineRef.value, { attr: { x1: 0, y1: 0, x2: 0, y2: 0 } })

  // 弧形
  const arcRadius = 90
  const arcProgress = { value: 0 }
  function drawArc(progress) {
    const angle = progress * 120 * Math.PI / 180
    const R = arcRadius
    const ux = R * Math.cos(-angle), uy = R * Math.sin(-angle)
    const lx = R * Math.cos(angle), ly = R * Math.sin(angle)
    arcUpperRef.value?.setAttribute('d', `M ${R} 0 A ${R} ${R} 0 0 0 ${ux.toFixed(2)} ${uy.toFixed(2)}`)
    arcLowerRef.value?.setAttribute('d', `M ${R} 0 A ${R} ${R} 0 0 1 ${lx.toFixed(2)} ${ly.toFixed(2)}`)
  }
  drawArc(0)

  const tl = gsap.timeline({ delay: 0.4, defaults: { force3D: true } })
  masterTl = tl

  // 阶段一：SVG 上升，焦点进入屏幕
  tl.to(img, { y: 0, duration: 1.3, ease: 'power3.out' })
  // 阶段二：SVG 缩小至全屏 + 水平居中，慢→快→慢
  tl.to(img, { scale: 1, x: 0, duration: 1.0, ease: 'power3.inOut' })
  // 阶段三：弧形展开
  tl.call(() => { gsap.set(arcDotRef.value, { opacity: 1 }) })
  tl.to(arcProgress, { value: 1, duration: 1.0, ease: 'power3.out', onUpdate: () => drawArc(arcProgress.value) })
  // 阶段四：时间轴从 0 平滑延伸至最终长度 + SVG 弧形左移
  const svgFullWidth = () => H() * svgAspect
  const timelineFinalLen = () => Math.max(svgFullWidth() * 1.5, W() * 1.2)
  tl.call(() => { gsap.set(timelineRef.value, { opacity: 1 }) })
  // 时间轴单段平滑延伸
  tl.to(timelineRef.value, {
    attr: { x1: 0, y1: 0, x2: timelineFinalLen, y2: 0 },
    duration: 2.5, ease: 'power4.in',
  }, '-=0.6')
  // SVG + 弧形左移（延迟启动，与时间轴重叠）
  tl.to(img, { x: () => -(svgFullWidth() + 200), duration: 1.5, ease: 'power3.inOut' }, '-=1.5')
  tl.to(movingGroupRef.value, { x: () => -(svgFullWidth() + 200) + W() * 0.32, duration: 1.5, ease: 'power3.inOut' }, '<')
  // 阶段五：移除
  tl.call(() => { showPortrait.value = false; showArc.value = false })
  // 阶段六 a：分裂线出现
  tl.call(() => {
    const w = W(), h = H()
    const splitLeftPad = w * 0.15, splitRightPad = w * 0.15
    gsap.set(splitGroupRef.value, { x: 0, y: 0 })
    gsap.set(upperSplitRef.value, { y: h / 3 })
    gsap.set(lowerSplitRef.value, { y: h / 3 })
    gsap.set(timelineUpperRef.value, { attr: { x1: -splitLeftPad, y1: 0, x2: w + splitRightPad, y2: 0 } })
    gsap.set(timelineLowerRef.value, { attr: { x1: -splitLeftPad, y1: 0, x2: w + splitRightPad, y2: 0 } })
    ticksUpperRef.value.innerHTML = ''
    ticksLowerRef.value.innerHTML = ''
    gsap.set(splitGroupRef.value, { opacity: 1 })
    gsap.set(timelineRef.value, { opacity: 0 })
    gsap.set(ticksRef.value, { opacity: 0 })
  })
  // 阶段六 b：刻度长出
  const tickGrow = { val: 0 }
  tl.to(tickGrow, {
    val: 1, duration: 0.7, ease: 'power2.out',
    onUpdate() {
      const w = W()
      const splitLineLen = w + w * 0.15 + w * 0.15
      const len = splitLineLen * tickGrow.val
      drawSplitTicks(0, len, 'upper')
      drawSplitTicks(0, len, 'lower')
    },
  })
  // 阶段六 c：分离 + 收拢
  tl.to(upperSplitRef.value, { y: () => H() / 6, duration: 1.2, ease: 'power3.inOut' })
  tl.to(lowerSplitRef.value, { y: () => H() * 5 / 6, duration: 1.2, ease: 'power3.inOut' }, '<')
  tl.to(coverUpperRef.value, { height: () => H() / 6, duration: 1.2, ease: 'power3.inOut' }, '<')
  tl.to(coverLowerRef.value, { top: () => H() * 5 / 6, height: () => H() / 6, duration: 1.2, ease: 'power3.inOut' }, '<')
  // 毛玻璃
  tl.call(() => {
    coverUpperRef.value.style.background = 'rgba(255,255,255,0.15)'
    coverUpperRef.value.style.backdropFilter = 'blur(12px)'
    coverUpperRef.value.style.webkitBackdropFilter = 'blur(12px)'
    coverLowerRef.value.style.background = 'rgba(255,255,255,0.15)'
    coverLowerRef.value.style.backdropFilter = 'blur(12px)'
    coverLowerRef.value.style.webkitBackdropFilter = 'blur(12px)'
  })
  // 卡片 + 波浪背景渐显
  tl.to(cardsSectionRef.value, { opacity: 1, duration: 0.8, ease: 'power2.out' })
  tl.to(wavesRef.value, { opacity: 1, duration: 0.8, ease: 'power2.out' }, '<')
  tl.call(() => {
    animationDone = true
    // 清理 GPU 合成层
    if (imgRef.value) imgRef.value.style.willChange = 'auto'
  })
}

// ── 重置状态并重建动画 ──
async function resetAndRebuild() {
  if (masterTl) { masterTl.kill(); masterTl = null }
  showPortrait.value = true
  showArc.value = true
  animationDone = false
  // 重置 GPU 合成层
  if (imgRef.value) imgRef.value.style.willChange = 'auto'
  // 清除内联毛玻璃样式
  if (coverUpperRef.value) {
    coverUpperRef.value.style.background = ''
    coverUpperRef.value.style.backdropFilter = ''
    coverUpperRef.value.style.webkitBackdropFilter = ''
  }
  if (coverLowerRef.value) {
    coverLowerRef.value.style.background = ''
    coverLowerRef.value.style.backdropFilter = ''
    coverLowerRef.value.style.webkitBackdropFilter = ''
  }
  gsap.set(splitGroupRef.value, { opacity: 0 })
  gsap.set(cardsSectionRef.value, { opacity: 0 })
  // 等待 Vue 重新渲染 v-if 元素
  await new Promise(r => requestAnimationFrame(r))
  buildAnimation()
}

function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    updateScreenSize()
    if (animationDone) {
      updateStaticPositions()
    } else {
      resetAndRebuild()
    }
  }, 300)
}

onMounted(() => {
  buildAnimation()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  if (masterTl) masterTl.kill()
  window.removeEventListener('resize', onResize)
  clearTimeout(resizeTimer)
})
</script>

<style scoped>
.demo-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--color-off-white, #f7f7f7);
}
.size-indicator {
  position: fixed;
  top: 8px;
  right: 12px;
  z-index: 999;
  background: rgba(0,0,0,0.7);
  color: #0f0;
  font-family: monospace;
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 4px;
  pointer-events: none;
}
.portrait-container {
  position: fixed; inset: 0; z-index: 20;
  overflow: hidden; display: flex; align-items: center; justify-content: center;
  pointer-events: none;
}
.portrait-svg { display: block; will-change: transform; transform: translateZ(0); backface-visibility: hidden; image-rendering: auto; }
.arc-overlay {
  position: fixed; inset: 0; z-index: 25;
  width: 100%; height: 100%; pointer-events: none; overflow: visible;
}
.waves-layer { position: fixed; inset: 0; z-index: 1; }
.cover-panel {
  position: fixed; left: 0; right: 0; z-index: 5;
  background: var(--color-off-white, #f7f7f7);
  pointer-events: none; transition: background 0.4s ease;
}
.cards-section {
  position: fixed; left: 0; right: 0;
  top: 16.666vh; height: 66.666vh;
  z-index: 8; display: flex; align-items: center;
}
</style>
