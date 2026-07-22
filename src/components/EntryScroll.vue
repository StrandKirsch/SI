<template>
  <div class="home-layout">
    <MainSidebar ref="mainSidebarRef" @navigate="onNavigate" />

    <div class="home-main" :class="{ 'fade-out': isFadingOut }">
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import WavesBackground from './WavesBackground.vue'
import MainContent from './MainContent.vue'
import MainSidebar from './MainSidebar.vue'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const router = useRouter()
const mainSidebarRef = ref(null)
const isFadingOut = ref(false)

const spacerRef = ref(null)
const overlayRef = ref(null)
const siRef = ref(null)
const hintRef = ref(null)
const cardsRef = ref(null)

const targetScale = window.innerWidth >= 768 ? 800 : 500
let tl = null

// 侧边栏滑入 + 卡片渐显（同步进行）
function showCards() {
  gsap.to(cardsRef.value, {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    clearProps: 'opacity',
  })
  if (mainSidebarRef.value?.$el) {
    gsap.to(mainSidebarRef.value.$el, {
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }
}

// ── Sidebar → SideStory 过渡动画 ──────────────
async function onNavigate() {
  // 1. 侧边栏缩回 + 向左滑出
  mainSidebarRef.value?.collapse()
  if (mainSidebarRef.value?.$el) {
    gsap.to(mainSidebarRef.value.$el, {
      x: -260,
      duration: 0.35,
      ease: 'power2.in',
    })
  }
  await new Promise(r => setTimeout(r, 350))

  // 2. 背景 + 卡片渐隐
  isFadingOut.value = true
  await new Promise(r => setTimeout(r, 500))

  // 3. 跳转
  sessionStorage.setItem('skipIntro', '1')
  router.push('/sidestory')
}

onMounted(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  window.scrollTo(0, 0)

  // 侧边栏初始隐藏在屏幕左侧外
  if (mainSidebarRef.value?.$el) {
    gsap.set(mainSidebarRef.value.$el, { x: -260 })
  }

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

    // 卡片渐显 + 侧边栏滑入
    gsap.set(cardsRef.value, { opacity: 0 })
    gsap.to(cardsRef.value, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 0.3,
      clearProps: 'opacity',
    })
    if (mainSidebarRef.value?.$el) {
      gsap.to(mainSidebarRef.value.$el, {
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3,
      })
    }
    return
  }

  gsap.set(hintRef.value, { opacity: 1 })
  gsap.set(siRef.value, {
    scale: 1,
    opacity: 1,
    transformOrigin: 'center center'
  })
  gsap.set(cardsRef.value, { opacity: 0 })

  // 防止重复触发的标志
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
        // 当进度达到 30% 且尚未触发自动滚动时
        if (self.progress >= 0.3 && !autoScrolled) {
          autoScrolled = true
          
          // 使用 GSAP ScrollToPlugin 滚动到终点
          const spacer = spacerRef.value
          const targetScroll = spacer.offsetTop + spacer.offsetHeight - window.innerHeight
          
          gsap.to(window, {
            scrollTo: targetScroll,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
              // 滚动完成后的处理
              if (tl?.scrollTrigger) tl.scrollTrigger.kill()

              // 1. 隐藏遮罩
              if (overlayRef.value) {
                overlayRef.value.style.opacity = '0'
                overlayRef.value.style.display = 'none'
              }

              // 2. 回收滚动空间
              if (spacerRef.value) spacerRef.value.style.height = '0px'

              // 3. 重置滚动位置
              setTimeout(() => {
                window.scrollTo(0, 0)
              }, 300)

              // 4. 卡片渐显动画
              setTimeout(() => {
                showCards()
              }, 200)
            }
          })
        }
      },

      // ---------- 滚动离开（到达终点）时的处理 ----------
      onLeave() {
        // 如果自动滚动还没触发，这里作为兜底处理
        if (!autoScrolled) {
          autoScrolled = true
          
          if (tl?.scrollTrigger) tl.scrollTrigger.kill()

          // 1. 隐藏遮罩
          if (overlayRef.value) {
            overlayRef.value.style.opacity = '0'
            overlayRef.value.style.display = 'none'
          }

          // 2. 回收滚动空间
          if (spacerRef.value) spacerRef.value.style.height = '0px'

          // 3. 重置滚动位置
          setTimeout(() => {
            window.scrollTo(0, 0)
          }, 300)

          // 4. 卡片渐显动画
          setTimeout(() => {
            showCards()
          }, 200)
        }
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
/* ── Home layout: sidebar + main ── */
.home-layout {
  display: flex;
  min-height: 100vh;
  background: var(--color-off-white, #f7f7f7);
}

.home-main {
  flex: 1;
  min-width: 0;
  transition: opacity 0.5s ease;
}

.home-main.fade-out {
  opacity: 0;
  pointer-events: none;
}

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
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background: var(--color-off-white, #f7f7f7);
}
.content::-webkit-scrollbar {
  display: none;
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
  user-select: none;
  -webkit-user-select: none;
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
  user-select: none;
  -webkit-user-select: none;
}

@media (max-width: 767px) {
  .home-layout {
    flex-direction: column;
  }
}
</style>

<style>
html {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
html::-webkit-scrollbar {
  display: none;
}
</style>