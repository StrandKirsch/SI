import { onMounted, onUnmounted, ref } from 'vue'

export function useNoise(canvasRef) {
  let animationId = null
  let ctx = null
  let width = 0
  let height = 0
  const isRunning = ref(false)

  function resize() {
    const canvas = canvasRef.value
    if (!canvas) return
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
  }

  function drawNoise() {
    if (!ctx) return
    // Draw semi-transparent black to fade old noise
    ctx.fillStyle = 'rgba(10, 10, 10, 0.08)'
    ctx.fillRect(0, 0, width, height)

    // Add random noise pixels
    const particleCount = 120
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const alpha = Math.random() * 0.06
      const shade = Math.random() > 0.5 ? 255 : 0
      ctx.fillStyle = `rgba(${shade}, ${shade}, ${shade}, ${alpha})`
      ctx.fillRect(x, y, Math.random() * 3 + 1, Math.random() * 3 + 1)
    }

    animationId = requestAnimationFrame(drawNoise)
  }

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
    ctx = canvas.getContext('2d')
    resize()
    window.addEventListener('resize', resize)
    isRunning.value = true
    drawNoise()
  })

  onUnmounted(() => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    window.removeEventListener('resize', resize)
    isRunning.value = false
  })

  return { isRunning }
}
