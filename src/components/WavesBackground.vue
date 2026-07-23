<template>
  <div
    class="waves-container"
    ref="containerRef"
    @mouseleave="onMouseLeave"
  >
    <svg ref="svgRef" class="waves-svg"></svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { createNoise2D } from 'simplex-noise'

const containerRef = ref(null)
const svgRef = ref(null)

// ── Configuration ──────────────────────────────────
const X_GAP = 13
const Y_GAP = 32
const WAVE_AMP = 12
const WAVE_COS_AMP = 32
const WAVE_SIN_AMP = 16
const CURSOR_RADIUS = 100
const STRING_TENSION = 0.005
const FRICTION = 0.925
const STRENGTH = 2
const CLAMP = 100

// ── State ──────────────────────────────────────────
const noise2D = createNoise2D()
let bounding = null
let lines = []
let paths = []
let animFrameId = null

const mouse = {
  x: -10, y: 0,
  lx: 0, ly: 0,
  sx: 0, sy: 0,
  v: 0, vs: 0,
  a: 0,
  set: false,
}

// Guard against synthetic mouse events firing after touch
let isTouching = false

// ── Grid ───────────────────────────────────────────
function setSize() {
  bounding = containerRef.value.getBoundingClientRect()
  const svg = svgRef.value
  svg.setAttribute('width', bounding.width)
  svg.setAttribute('height', bounding.height)
  svg.style.width = `${bounding.width}px`
  svg.style.height = `${bounding.height}px`
}

function setLines() {
  const { width, height } = bounding

  paths.forEach(p => p.remove())
  paths = []
  lines = []

  const oWidth = width + 200
  const oHeight = height + 30
  const totalLines = Math.ceil(oWidth / X_GAP)
  const totalPoints = Math.ceil(oHeight / Y_GAP)
  const xStart = (width - X_GAP * totalLines) / 2
  const yStart = (height - Y_GAP * totalPoints) / 2

  const svg = svgRef.value
  const ns = 'http://www.w3.org/2000/svg'

  for (let i = 0; i <= totalLines; i++) {
    const points = []
    for (let j = 0; j <= totalPoints; j++) {
      points.push({
        x: xStart + X_GAP * i,
        y: yStart + Y_GAP * j,
        wave: { x: 0, y: 0 },
        cursor: { x: 0, y: 0, vx: 0, vy: 0 },
      })
    }

    const path = document.createElementNS(ns, 'path')
    path.setAttribute('fill', 'none')
    path.setAttribute('stroke', 'var(--color-line, #171717)')
    path.setAttribute('stroke-width', '1')
    svg.appendChild(path)
    paths.push(path)
    lines.push(points)
  }
}

// ── Mouse / Touch ──────────────────────────────────
function updateMousePosition(x, y) {
  mouse.x = x - bounding.left
  mouse.y = y - bounding.top + window.scrollY

  if (!mouse.set) {
    mouse.sx = mouse.x; mouse.sy = mouse.y
    mouse.lx = mouse.x; mouse.ly = mouse.y
    mouse.set = true
  }
}

function onMouseMove(e) {
  if (isTouching) return
  updateMousePosition(e.pageX, e.pageY)
}

function onTouchStart(e) {
  if (e.touches.length > 0) {
    isTouching = true
    updateMousePosition(e.touches[0].clientX, e.touches[0].clientY)
  }
}

function onTouchMove(e) {
  if (e.touches.length > 0) {
    updateMousePosition(e.touches[0].clientX, e.touches[0].clientY)
  }
}

function onTouchEnd() {
  isTouching = false
  mouse.set = false
}

function onTouchCancel() {
  isTouching = false
  mouse.set = false
}

function onMouseLeave() {
  if (isTouching) return
  mouse.set = false
}

// ── Physics ────────────────────────────────────────
function movePoints(time) {
  for (const points of lines) {
    for (const p of points) {
      const move = noise2D(
        (p.x + time * 0.0125) * 0.002,
        (p.y + time * 0.005) * 0.0015
      ) * WAVE_AMP
      p.wave.x = Math.cos(move) * WAVE_COS_AMP
      p.wave.y = Math.sin(move) * WAVE_SIN_AMP

      const dx = p.x - mouse.sx
      const dy = p.y - mouse.sy
      const d = Math.hypot(dx, dy)
      const l = Math.max(CURSOR_RADIUS, mouse.vs)

      if (d < l) {
        const s = 1 - d / l
        const f = Math.cos(d * 0.001) * s
        p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065
        p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065
      }

      p.cursor.vx += (0 - p.cursor.x) * STRING_TENSION
      p.cursor.vy += (0 - p.cursor.y) * STRING_TENSION

      p.cursor.vx *= FRICTION
      p.cursor.vy *= FRICTION

      p.cursor.x += p.cursor.vx * STRENGTH
      p.cursor.y += p.cursor.vy * STRENGTH

      p.cursor.x = Math.min(CLAMP, Math.max(-CLAMP, p.cursor.x))
      p.cursor.y = Math.min(CLAMP, Math.max(-CLAMP, p.cursor.y))
    }
  }
}

function moved(point, withCursor = true) {
  const cx = withCursor ? point.cursor.x : 0
  const cy = withCursor ? point.cursor.y : 0
  return {
    x: Math.round((point.x + point.wave.x + cx) * 10) / 10,
    y: Math.round((point.y + point.wave.y + cy) * 10) / 10,
  }
}

// ── Draw ───────────────────────────────────────────
function drawLines() {
  for (let i = 0; i < lines.length; i++) {
    const points = lines[i]
    if (!points.length) continue

    const first = moved(points[0], false)
    let d = `M ${first.x} ${first.y}`

    for (let j = 1; j < points.length; j++) {
      const p = moved(points[j], true)
      d += ` L ${p.x} ${p.y}`
    }

    paths[i].setAttribute('d', d)
  }
}

// ── Loop ───────────────────────────────────────────
function tick(now) {
  // Smooth mouse
  mouse.sx += (mouse.x - mouse.sx) * 0.1
  mouse.sy += (mouse.y - mouse.sy) * 0.1

  const dx = mouse.x - mouse.lx
  const dy = mouse.y - mouse.ly
  mouse.v = Math.hypot(dx, dy)
  mouse.vs += (mouse.v - mouse.vs) * 0.1
  mouse.vs = Math.min(100, mouse.vs)

  mouse.lx = mouse.x
  mouse.ly = mouse.y
  mouse.a = Math.atan2(dy, dx)

  movePoints(now)
  drawLines()

  animFrameId = requestAnimationFrame(tick)
}

// ── Lifecycle ──────────────────────────────────────
let resizeObserver = null

onMounted(() => {
  setSize()
  setLines()
  animFrameId = requestAnimationFrame(tick)

  // Window 级别监听，不受上层卡片 z-index 影响
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('touchstart', onTouchStart, { passive: true })
  window.addEventListener('touchmove', onTouchMove, { passive: true })
  window.addEventListener('touchend', onTouchEnd)
  window.addEventListener('touchcancel', onTouchCancel)

  resizeObserver = new ResizeObserver(() => {
    setSize()
    setLines()
  })
  resizeObserver.observe(containerRef.value)
})

onBeforeUnmount(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId)
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchend', onTouchEnd)
  window.removeEventListener('touchcancel', onTouchCancel)
})
</script>

<style scoped>
.waves-container {
  position: fixed;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: auto;
}

.waves-svg {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
