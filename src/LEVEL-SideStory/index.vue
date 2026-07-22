<template>
  <div class="story-layout">
    <StorySidebar ref="storySidebarRef" currentStoryId="" />

    <div class="story-main">
      <div class="sidestory-page">
        <!-- SVG 画像层 —— 入场动画后会被移除 -->
        <div class="portrait-container" ref="containerRef" v-if="showPortrait">
      <img
        :src="portraitSrc"
        class="portrait-svg"
        ref="imgRef"
        alt="画像"
      />
    </div>

    <!-- 弧形角度指示器 + 时间轴 -->
    <svg
      class="arc-overlay"
      ref="arcSvgRef"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 整体移动组：阶段四同步左移 -->
      <g ref="movingGroupRef">
        <!-- 弧形指示器（阶段五移除） -->
        <g ref="arcGroupRef" v-if="showArc">
          <path ref="arcUpperRef" fill="none" stroke="var(--color-black, #000)" stroke-width="2" />
          <path ref="arcLowerRef" fill="none" stroke="var(--color-black, #000)" stroke-width="2" />
          <circle ref="arcDotRef" cx="0" cy="0" r="4" fill="var(--color-black, #000)" opacity="0" />
        </g>
        <!-- 时间轴线（持久保留） -->
        <line ref="timelineRef" x1="0" y1="0" x2="0" y2="0" stroke="var(--color-black, #000)" stroke-width="1" opacity="0" />
        <!-- 时间轴刻度（持久保留） -->
        <g ref="ticksRef" opacity="0" />
      </g>

      <!-- 时间轴分裂层（阶段六） -->
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

    <!-- 波浪背景 —— 始终存在，被覆盖层遮挡 -->
    <div class="waves-layer" ref="wavesRef">
      <WavesBackground />
    </div>

    <!-- 覆盖面板：随分裂向上下收拢，完成后变为毛玻璃 -->
    <div class="cover-panel" ref="coverUpperRef"></div>
    <div class="cover-panel" ref="coverLowerRef"></div>

    <!-- 横向滚动卡片（分裂完成后出现） -->
    <div class="cards-section" ref="cardsSectionRef">
      <HorizontalCards ref="cardsRef" :cards="stories" :fullStories="stories" @card-click="handleCardClick" @chapter-click="handleChapterClick" @scroll-x="onCardScroll" />
    </div>


      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import WavesBackground from '../components/WavesBackground.vue'
import HorizontalCards from './HorizontalCards.vue'
import StorySidebar from './StorySidebar.vue'
import { stories } from './stories/index.js'
import portraitSrc from '../assets/画像.svg'

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
const splitScrollRef = ref(null)
const storySidebarRef = ref(null)
const contentRef = ref(null)

// 控制 SVG 画像 & 弧形的 DOM 挂载
const showPortrait = ref(true)
const showArc = ref(true)

function goBack() {
  sessionStorage.setItem('skipIntro', '1')
  router.push('/')
}

function onCardScroll(x) {
  if (!animationDone) return
  const maxS = cardsRef.value?.getMaxScroll?.() || 0
  const w = screenW
  const totalLen = w + maxS + w * 0.3
  if (timelineUpperRef.value) {
    const pad = w * 0.15
    timelineUpperRef.value.setAttribute('x1', -pad)
    timelineUpperRef.value.setAttribute('x2', totalLen)
    timelineLowerRef.value.setAttribute('x1', -pad)
    timelineLowerRef.value.setAttribute('x2', totalLen)
    const visibleStart = x - pad - 200
    const visibleEnd = x + w + 200
    drawSplitTicks(visibleStart, visibleEnd, 'upper')
    drawSplitTicks(visibleStart, visibleEnd, 'lower')
  }
  if (splitScrollRef.value) {
    splitScrollRef.value.setAttribute('transform', `translate(${-x}, 0)`)
  }
}

function handleCardClick(card) {
  sessionStorage.setItem('skipSideStoryIntro', '1')
  router.push(`/sidestory/${card.id}`)
}

function handleChapterClick({ cardId, chapterIndex }) {
  sessionStorage.setItem('skipSideStoryIntro', '1')
  router.push(`/sidestory/${cardId}/${chapterIndex}`)
}

// ── 响应式屏幕尺寸 ──
let screenW = window.innerWidth
let screenH = window.innerHeight
let masterTl = null
let animationDone = false
let resizeTimer = null

function updateScreenSize() {
  screenW = window.innerWidth
  screenH = window.innerHeight
}

function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    updateScreenSize()
    if (animationDone) {
      updateStaticPositions()
    }
  }, 250)
}

// ── 侧边栏滑入动画 ──
function showSidebar() {
  const el = storySidebarRef.value?.$el
  if (!el) return
  if (window.innerWidth <= 767) {
    // 移动端：入场动画完成后渐显收起状态的侧边栏
    gsap.set(el, { x: 0 })
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' })
  } else {
    gsap.to(el, {
      x: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
  }
}

// ── 静态元素位置更新（动画完成后 resize 时调用）──
function updateStaticPositions() {
  const upperY = screenH / 6
  const lowerY = screenH * 5 / 6
  gsap.set(coverUpperRef.value, { top: 0, height: upperY })
  gsap.set(coverLowerRef.value, { top: lowerY, height: screenH - lowerY })
  gsap.set(upperSplitRef.value, { y: upperY })
  gsap.set(lowerSplitRef.value, { y: lowerY })
  // 更新分裂线宽度
  const pad = screenW * 0.15
  gsap.set(timelineUpperRef.value, { attr: { x1: -pad, x2: screenW + pad } })
  gsap.set(timelineLowerRef.value, { attr: { x1: -pad, x2: screenW + pad } })
}

onMounted(() => {
  // 侧边栏初始隐藏在屏幕左侧外
  if (storySidebarRef.value?.$el) {
    gsap.set(storySidebarRef.value.$el, { x: -260 })
    if (window.innerWidth <= 767) {
      gsap.set(storySidebarRef.value.$el, { x: 0, opacity: 0 })
    }
  }

  // 从故事页返回时跳过入场动画，直接展示最终状态
  const skipSideStoryIntro = sessionStorage.getItem('skipSideStoryIntro')
  if (skipSideStoryIntro) {
    sessionStorage.removeItem('skipSideStoryIntro')

    // 直接隐藏画像和弧形
    showPortrait.value = false
    showArc.value = false

    // 跳过动画，直接展示最终状态
    const upperY = screenH / 6
    const lowerY = screenH * 5 / 6
    const pad = screenW * 0.15

    // 覆盖层 → 毛玻璃
    gsap.set(coverUpperRef.value, { top: 0, height: upperY })
    coverUpperRef.value.style.background = 'rgba(255,255,255,0.15)'
    coverUpperRef.value.style.backdropFilter = 'blur(12px)'
    coverUpperRef.value.style.webkitBackdropFilter = 'blur(12px)'

    gsap.set(coverLowerRef.value, { top: lowerY, height: screenH - lowerY })
    coverLowerRef.value.style.background = 'rgba(255,255,255,0.15)'
    coverLowerRef.value.style.backdropFilter = 'blur(12px)'
    coverLowerRef.value.style.webkitBackdropFilter = 'blur(12px)'

    // 分裂时间轴
    gsap.set(splitGroupRef.value, { x: 0, y: 0, opacity: 1 })
    gsap.set(upperSplitRef.value, { y: upperY })
    gsap.set(lowerSplitRef.value, { y: lowerY })
    gsap.set(timelineUpperRef.value, { attr: { x1: -pad, y1: 0, x2: screenW + pad, y2: 0 } })
    gsap.set(timelineLowerRef.value, { attr: { x1: -pad, y1: 0, x2: screenW + pad, y2: 0 } })
    // 隐藏原始时间轴
    gsap.set(timelineRef.value, { opacity: 0 })
    gsap.set(ticksRef.value, { opacity: 0 })

    // 绘制分裂轴刻度
    const splitLineLen = screenW + pad * 2
    drawSplitTicks(0, splitLineLen, 'upper')
    drawSplitTicks(0, splitLineLen, 'lower')

    // 波浪背景
    gsap.set(wavesRef.value, { opacity: 1 })

    // 横向卡片直接渐显
    gsap.set(cardsSectionRef.value, { opacity: 0 })
    gsap.to(cardsSectionRef.value, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    })
    showSidebar()

    animationDone = true
    window.addEventListener('resize', onResize)
    return
  }

  const img = imgRef.value
  if (!img) return

  // SVG viewBox: 3213 x 1643, aspect ≈ 1.956
  const SVG_W = 3213
  const SVG_H = 1643
  const svgAspect = SVG_W / SVG_H

  // 视觉焦点：右侧一半的中心
  const focalX = SVG_W * 1.2
  const focalY = SVG_H * 0.5
  const initialScale = screenW / (screenH * svgAspect / 2)

  // ── 弧形参数 ──
  const arcRadius = 90
  const arcCenterX = screenW * 0.32
  const arcCenterY = screenH / 3

  // ══════════════════════════════════════════
  // 初始状态
  // ══════════════════════════════════════════
  const initScale = () => Math.max(screenW / (screenH * svgAspect / 2), 1)
  gsap.set(img, {
    height: '100vh',
    width: 'auto',
    transformOrigin: '75% 50%',
    scale: initScale,
    y: screenH * 1.1,
    x: -0.25 * screenH * svgAspect,
    force3D: true,
  })
  img.style.willChange = 'transform'

  // 动画期间隐藏波浪背景（避免 rAF 竞争），结束后再显示
  gsap.set(wavesRef.value, { opacity: 0 })
  gsap.set(cardsSectionRef.value, { opacity: 0 })
  gsap.set(contentRef.value, { opacity: 0 })

  // 覆盖层初始：上半从顶部到 splitY，下半从 splitY 到底部（从中间向上下展开）
  const coverInitY = screenH / 3
  gsap.set(coverUpperRef.value, { top: 0, height: coverInitY })
  gsap.set(coverLowerRef.value, { top: coverInitY, height: screenH - coverInitY })

  // 移动组初始位置（弧形 + 时间轴的共同父级）
  gsap.set(movingGroupRef.value, { x: arcCenterX, y: arcCenterY })
  gsap.set(timelineRef.value, {
    attr: { x1: 0, y1: 0, x2: 0, y2: 0 },
  })

  // ── 弧形绘制辅助函数 ──
  const arcProgress = { value: 0 }

  function drawArc(progress) {
    const angle = progress * 120 * Math.PI / 180  // 0 → 120° in radians
    const R = arcRadius

    // 上半弧：从 0° 逆时针展开至 -angle
    const ux = R * Math.cos(-angle)
    const uy = R * Math.sin(-angle)
    arcUpperRef.value?.setAttribute(
      'd',
      `M ${R} 0 A ${R} ${R} 0 0 0 ${ux.toFixed(2)} ${uy.toFixed(2)}`
    )

    // 下半弧：从 0° 顺时针展开至 +angle
    const lx = R * Math.cos(angle)
    const ly = R * Math.sin(angle)
    arcLowerRef.value?.setAttribute(
      'd',
      `M ${R} 0 A ${R} ${R} 0 0 1 ${lx.toFixed(2)} ${ly.toFixed(2)}`
    )
  }

  // 绘制初始状态 (progress = 0 → 点)
  drawArc(0)

  // ══════════════════════════════════════════
  // 动画时间线
  // ══════════════════════════════════════════
  const tl = gsap.timeline({ delay: 0.4, defaults: { force3D: true } })
  masterTl = tl

  // ── 阶段一：SVG 从下方上升至中心，快→慢 ──
  tl.to(img, {
    y: 0,
    duration: 1.3,
    ease: 'power3.out',
  })

  // ── 阶段二：SVG 缩小至全屏 + 水平居中，慢→快→慢 ──
  tl.to(img, {
    scale: 1,
    x: 0,
    duration: 1.0,
    ease: 'power4.inOut',
  })

  // ── 阶段三：弧形从 X 轴向两侧展开 120°，快→慢 ──
  tl.call(() => {
    gsap.set(arcDotRef.value, { opacity: 1 })
  })
  tl.to(arcProgress, {
    value: 1,
    duration: 1.0,
    ease: 'power3.out',
    onUpdate: () => drawArc(arcProgress.value),
  })

  // ══════════════════════════════════════════
  // 阶段四：时间轴从 0 平滑延伸至最终长度 + SVG 弧形左移
  // ══════════════════════════════════════════
  const svgFullWidth = screenH * svgAspect
  const timelineFinalLen = Math.max(svgFullWidth * 1.5, screenW * 1.2)
  tl.call(() => { gsap.set(timelineRef.value, { opacity: 1 }) })
  tl.to(timelineRef.value, {
    attr: { x1: 0, y1: 0, x2: timelineFinalLen, y2: 0 },
    duration: 2.5, ease: 'power4.in',
  }, '-=0.6')
  tl.to(img, { x: -(svgFullWidth + 200), duration: 1.5, ease: 'power3.inOut' }, '-=1.5')
  tl.to(movingGroupRef.value, { x: -(svgFullWidth + 200) + arcCenterX, duration: 1.5, ease: 'power3.inOut' }, '<')

  // ── 阶段五：移除 SVG 画像和弧形指示器 ──
  tl.call(() => {
    showPortrait.value = false
    showArc.value = false
  })

  // ══════════════════════════════════════════
  // 阶段六 a：分裂线出现（无刻度），隐藏原始时间轴
  // ══════════════════════════════════════════
  const splitStartX = 0
  const splitY = screenH / 3
  const splitLeftPad = screenW * 0.15
  const splitRightPad = screenW * 0.15
  const splitLineLen = screenW + splitLeftPad + splitRightPad

  tl.call(() => {
    gsap.set(splitGroupRef.value, { x: splitStartX, y: 0 })
    gsap.set(upperSplitRef.value, { y: splitY })
    gsap.set(lowerSplitRef.value, { y: splitY })

    // 上半线（无刻度）
    gsap.set(timelineUpperRef.value, {
      attr: { x1: -splitLeftPad, y1: 0, x2: screenW + splitRightPad, y2: 0 },
    })
    ticksUpperRef.value.innerHTML = ''

    // 下半线（无刻度）
    gsap.set(timelineLowerRef.value, {
      attr: { x1: -splitLeftPad, y1: 0, x2: screenW + splitRightPad, y2: 0 },
    })
    ticksLowerRef.value.innerHTML = ''

    // 显示分裂组，隐藏原始时间轴
    gsap.set(splitGroupRef.value, { opacity: 1 })
    gsap.set(timelineRef.value, { opacity: 0 })
    gsap.set(ticksRef.value, { opacity: 0 })
  })

  // ── 阶段六 b：刻度沿两条分裂线同时长出 ──
  const tickGrow = { val: 0 }
  tl.to(tickGrow, {
    val: 1,
    duration: 0.7,
    ease: 'power2.out',
    onUpdate() {
      const currentLen = splitLineLen * tickGrow.val
      drawSplitTicks(0, currentLen, 'upper')
      drawSplitTicks(0, currentLen, 'lower')
    },
  })

  // ══════════════════════════════════════════
  // 阶段六 c：两轴分离 + 覆盖层收拢
  // ══════════════════════════════════════════
  const upperTargetY = screenH / 6
  const lowerTargetY = screenH * 5 / 6

  // 上半时间轴向上
  tl.to(upperSplitRef.value, {
    y: upperTargetY,
    duration: 1.2,
    ease: 'power3.inOut',
  })

  // 下半时间轴向下
  tl.to(lowerSplitRef.value, {
    y: lowerTargetY,
    duration: 1.2,
    ease: 'power3.inOut',
  }, '<')

  // 上半覆盖层向上收拢
  tl.to(coverUpperRef.value, {
    height: upperTargetY,
    duration: 1.2,
    ease: 'power3.inOut',
  }, '<')

  // 下半覆盖层向下收拢
  tl.to(coverLowerRef.value, {
    top: lowerTargetY,
    height: screenH - lowerTargetY,
    duration: 1.2,
    ease: 'power3.inOut',
  }, '<')

  // ── 收拢完成后：覆盖层变为半透明毛玻璃 ──
  tl.call(() => {
    coverUpperRef.value.style.background = 'rgba(255,255,255,0.15)'
    coverUpperRef.value.style.backdropFilter = 'blur(12px)'
    coverUpperRef.value.style.webkitBackdropFilter = 'blur(12px)'
    coverLowerRef.value.style.background = 'rgba(255,255,255,0.15)'
    coverLowerRef.value.style.backdropFilter = 'blur(12px)'
    coverLowerRef.value.style.webkitBackdropFilter = 'blur(12px)'
  })

  // ── 横向滚动卡片 + 波浪背景渐显 + 侧边栏滑入（同步）──
  tl.to(cardsSectionRef.value, {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  })
  tl.to(wavesRef.value, { opacity: 1, duration: 0.8, ease: 'power2.out' }, '<')
  tl.call(showSidebar, null, '<')

  // 标记动画完成 + 清理 GPU 合成层
  tl.call(() => {
    animationDone = true
    if (imgRef.value) imgRef.value.style.willChange = 'auto'
  })

  // 监听窗口尺寸变化
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  if (masterTl) masterTl.kill()
  window.removeEventListener('resize', onResize)
})

// ── 分裂时间轴刻度绘制 ──
function drawSplitTicks(xStart, xEnd, half) {
  const refMap = { upper: ticksUpperRef, lower: ticksLowerRef }
  const ticks = refMap[half]?.value
  if (!ticks) return

  // 上半只有向上刻度，下半只有向下刻度
  const dir = half === 'upper' ? 'up' : 'down'

  const spacing = 40
  const tickH = 6
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

// ── 时间轴刻度绘制 ──
function drawTicks(totalLen) {
  const ticks = ticksRef.value
  if (!ticks) return

  const spacing = 40
  const tickH = 6
  let html = ''
  for (let x = spacing; x < totalLen; x += spacing) {
    const major = x % 120 === 0
    const h = major ? tickH * 2 : tickH
    const alpha = major ? 0.5 : 0.2
    html += `<line x1="${x}" y1="${-h}" x2="${x}" y2="${h}" stroke="rgba(0,0,0,${alpha})" stroke-width="${major ? 1.2 : 0.6}"/>`
  }
  ticks.innerHTML = html
}
</script>

<style scoped>
/* ── 布局：侧边栏固定 + 主内容 ── */
.story-layout {
  display: flex;
  min-height: 100vh;
  background: var(--color-off-white, #f7f7f7);
}

.story-main {
  flex: 1;
  min-width: 0;
  position: relative;
}

.sidestory-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--color-off-white, #f7f7f7);
}

/* ── 横向滚动卡片区域 ── */
.cards-section {
  position: fixed;
  left: 0;
  right: 0;
  top: 16.666vh;
  height: 66.666vh;
  z-index: 8;
  display: flex;
  align-items: center;
}

/* ── SVG 画像容器 ── */
.portrait-container {
  position: fixed;
  inset: 0;
  z-index: 20;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.portrait-svg {
  display: block;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: auto;
}

/* ── 弧形 + 时间轴覆盖层 ── */
.arc-overlay {
  position: fixed;
  inset: 0;
  z-index: 25;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

/* ── 波浪背景层 ── */
.waves-layer {
  position: fixed;
  inset: 0;
  z-index: 1;
}

/* ── 覆盖面板：遮挡波浪背景，随分裂收拢，完成后变毛玻璃 ── */
.cover-panel {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
  background: var(--color-off-white, #f7f7f7);
  pointer-events: none;
  transition: background 0.4s ease;
}

/* ── 内容层 ── */
.sidestory-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 720px;
  padding: 40px 32px;
  margin: 0 auto;
  pointer-events: auto;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm, 8px);
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;
  margin-bottom: 40px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.back-btn:hover {
  background: rgba(0, 0, 0, 0.95);
  opacity: 0.85;
}

.content-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 48px 40px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.04);
}

.page-title {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 900;
  color: var(--color-black, #000);
  letter-spacing: -0.04em;
  margin-bottom: 4px;
}

.page-subtitle {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.35);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 32px;
}

.divider {
  width: 60px;
  height: 1px;
  background: rgba(0, 0, 0, 0.12);
  margin-bottom: 32px;
}

.page-desc {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 16px;
}

.page-desc-secondary {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 40px;
}

.placeholder-area {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  background: rgba(0, 0, 0, 0.02);
  border: 1px dashed rgba(0, 0, 0, 0.08);
  border-radius: 12px;
}

.placeholder-icon {
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.15);
}

.placeholder-text {
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.3);
  font-style: italic;
}

@media (max-width: 767px) {
  .story-layout {
    flex-direction: column;
  }

  .story-main {
    padding-top: 44px;
  }

  .sidestory-content {
    padding: 24px 16px;
  }

  .content-card {
    padding: 32px 24px;
  }

}
</style>
