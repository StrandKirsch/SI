<template>
  <div class="page-wrapper">
    <div class="spacer" ref="spacerRef"></div>

    <div class="content">
      <WavesBackground />
      <div class="cards-wrapper" ref="cardsRef">
        <MainContent />
      </div>
    </div>

    <div class="overlay" ref="overlayRef">
      <h2 class="si" ref="siRef">SI</h2>
      <div class="hint" ref="hintRef">&darr; Scroll down to enter</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WavesBackground from './WavesBackground.vue'
import MainContent from './MainContent.vue'

gsap.registerPlugin(ScrollTrigger)

const spacerRef = ref(null)
const overlayRef = ref(null)
const siRef = ref(null)
const hintRef = ref(null)
const cardsRef = ref(null)

const targetScale = window.innerWidth >= 768 ? 800 : 500
let tl = null

onMounted(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  window.scrollTo(0, 0)

  if (!spacerRef.value || !siRef.value) return

  // 检查是否从层级页面返回 —— 跳过入场动画
  const skipIntro = sessionStorage.getItem('skipIntro')
  if (skipIntro) {
    sessionStorage.removeItem('skipIntro')

    // 直接隐藏遮罩和滚动空间
    if (overlayRef.value) {
      overlayRef.value.style.opacity = '0'
      overlayRef.value.style.display = 'none'
    }
    if (spacerRef.value) spacerRef.value.style.height = '0px'

    // 隐藏 SI 元素
    gsap.set(siRef.value, { opacity: 0 })
    gsap.set(hintRef.value, { opacity: 0, display: 'none' })

    // 卡片渐显动画
    gsap.set(cardsRef.value, { opacity: 0 })
    gsap.to(cardsRef.value, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 0.3,
      clearProps: 'opacity'
    })
    return
  }

  gsap.set(hintRef.value, { opacity: 1 })
  gsap.set(siRef.value, {
    scale: 1,
    opacity: 1,
    transformOrigin: 'center center'
  })
  gsap.set(cardsRef.value, { opacity: 0 })

  // 新增：防止重复触发自动滚动的标志
  let autoScrolled = false

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: spacerRef.value,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      once: true,
      invalidateOnRefresh: true,

      // ---------- 滚动进度更新时检测 ----------
      onUpdate: (self) => {
        // 当进度达到 30% 且尚未触发自动滚动时，执行平滑滚动至终点
        if (self.progress >= 0.3 && !autoScrolled) {
          autoScrolled = true
          const spacer = spacerRef.value
          // 计算 spacer 底部对齐视口底部所需的滚动距离
          const targetScroll = spacer.offsetTop + spacer.offsetHeight - window.innerHeight
          window.scrollTo({ top: targetScroll, behavior: 'smooth' })
        }
      },

      // ---------- 滚动离开（到达终点）时的处理 ----------
      onLeave() {
        if (tl?.scrollTrigger) tl.scrollTrigger.kill()

        // 1. 隐藏遮罩
        if (overlayRef.value) {
          overlayRef.value.style.opacity = '0'
          overlayRef.value.style.display = 'none'
        }

        // 2. 回收滚动空间
        if (spacerRef.value) spacerRef.value.style.height = '0px'

        // 3. 重置滚动位置（延迟避免干扰）
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 300)

        // 4. 延迟 0.2 秒后卡片淡入
        setTimeout(() => {
          gsap.to(cardsRef.value, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            clearProps: 'opacity'
          })
        }, 200)
      }
    }
  })

  // ---------- 主时间线动画 ----------
  tl.to(siRef.value, { scale: targetScale, ease: 'power2.inOut', duration: 1 }, 0)
  tl.to(overlayRef.value, { opacity: 0, ease: 'power2.in', duration: 0.5 }, 0.5)
  tl.to(hintRef.value, { opacity: 0, ease: 'power2.in', duration: 0.15 }, 0.2)
})

onBeforeUnmount(() => {
  if (tl) {
    tl.kill()
    tl.scrollTrigger?.kill()
  }
})
</script>

<style scoped>
.page-wrapper {
  position: relative;
}

.spacer {
  height: 3000px;
  pointer-events: none;
  opacity: 0;
}

.content {
  position: fixed;
  inset: 0;
  z-index: 1;
  overflow-y: scroll;              /* 保留滚动功能 */
  scrollbar-width: none;           /* Firefox 隐藏 */
  -ms-overflow-style: none;        /* IE/Edge 隐藏 */
  background: var(--color-off-white, #f7f7f7);
}
.content::-webkit-scrollbar {
  display: none;                   /* Chrome/Safari/Edge 隐藏 */
}

.overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: var(--color-black, #000000);
  mix-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.si {
  font-size: clamp(4rem, 5vw, 20rem);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  transform-origin: center;
}

.cards-wrapper {
  position: absolute;
  inset: 0;
  z-index: 2;
  will-change: opacity;
  transform: translateZ(0);
}

.hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: clamp(0.75rem, 1.5vw, 1rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>

<!-- 全局样式：彻底隐藏浏览器默认滚动条（不影响滚动功能） -->
<style>
html {
  scrollbar-width: none;          /* Firefox */
  -ms-overflow-style: none;       /* IE / Edge */
}
html::-webkit-scrollbar {
  display: none;                  /* Chrome / Safari / Edge */
}
</style>