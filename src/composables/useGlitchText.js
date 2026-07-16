import { onMounted, onUnmounted } from 'vue'

/**
 * Applies a persistent subtle RGB-split jitter to a text element.
 * @param {import('vue').Ref<HTMLElement|null>} elRef - template ref to the text element
 * @param {Object} options
 * @param {number} [options.intervalMin=80] - min ms between jitter updates
 * @param {number} [options.intervalMax=150] - max ms between jitter updates
 * @param {number} [options.maxOffset=3] - max pixel offset for normal jitter
 * @param {number} [options.bigGlitchChance=0.08] - probability of a big glitch each tick
 * @param {number} [options.bigGlitchMax=12] - max offset for big glitch
 */
export function useGlitchText(elRef, options = {}) {
  const {
    intervalMin = 80,
    intervalMax = 150,
    maxOffset = 3,
    bigGlitchChance = 0.08,
    bigGlitchMax = 12,
  } = options

  let timer = null
  let bigGlitchTimer = null

  function tick() {
    const el = elRef.value
    if (!el) return

    const isBigGlitch = Math.random() < bigGlitchChance
    const range = isBigGlitch ? bigGlitchMax : maxOffset

    const cx = (Math.random() - 0.5) * range * 2
    const cy = (Math.random() - 0.5) * range * 2
    const mx = (Math.random() - 0.5) * range * 2
    const my = (Math.random() - 0.5) * range * 2

    el.style.textShadow = `
      ${cx}px ${cy}px 0 rgba(0, 255, 255, 0.8),
      ${mx}px ${my}px 0 rgba(255, 0, 255, 0.8)
    `

    if (isBigGlitch) {
      el.style.transform = `translate(${(Math.random() - 0.5) * 6}px, ${(Math.random() - 0.5) * 4}px)`
      clearTimeout(bigGlitchTimer)
      bigGlitchTimer = setTimeout(() => {
        if (el) el.style.transform = 'translate(0, 0)'
      }, 60)
    }

    const nextInterval = Math.random() * (intervalMax - intervalMin) + intervalMin
    timer = setTimeout(tick, nextInterval)
  }

  onMounted(() => {
    tick()
  })

  onUnmounted(() => {
    clearTimeout(timer)
    clearTimeout(bigGlitchTimer)
    const el = elRef.value
    if (el) {
      el.style.textShadow = ''
      el.style.transform = ''
    }
  })
}
