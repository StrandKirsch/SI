<template>
  <div class="level-page" :class="{ corrupted: revealed }">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title" ref="titleRef">SI-{{ id }}</h1>
      <p class="level-name" ref="nameRef">"诞圣"</p>

      <div class="story" ref="storyRef">
        <p data-corrupt>糖果小镇的小河藏着魔法！就算冬日寒风呼呼吹，河水也从来不会结上冰。小孩子们早就盼着这一天啦，大家一齐冲到河边，叽叽喳喳闹个不停。</p>
        <p data-corrupt>一根根彩虹色的管道里，正咕嘟咕嘟往外冒焦糖色的果冻！它们像胖乎乎的小胖子，扑通扑通跳进小河，把河水染成了甜甜的蜜糖色。小史莱姆们蹲在岸边，眼球瞪得圆溜溜的，紧盯着管道口。一看到果冻喷出来，就立刻欢呼着伸出小手，捞起那些软乎乎、弹溜溜的小家伙，往脸上、衣服上抹呀抹，把自己变成了香喷喷的果冻小娃娃。</p>
        <p data-corrupt>可我得赶紧找到我的史莱姆导游呀，只好恋恋不舍地离开，没来得及加入他们的打闹，朝着小镇中心快步跑去。</p>
        <p data-corrupt>圣诞平安夜的糖果小镇，简直被施加过魔法一样！五颜六色的史莱姆居民们正忙着打扮家门口的圣诞树：有的往树枝上挂彩虹糖做的小铃铛，有的插上会发光的星星蜡烛，空气里飘着甜甜的糖果香，大家要热热闹闹庆祝新年呀～</p>
        <p data-corrupt>还有些圆滚滚的史莱姆，慢吞吞地在大街上晃悠，一看到街边摆着的可爱吸管饮料，就立刻凑过去，把吸管"噗"地扎进自己软乎乎的身体里，吸得滋滋响！吸饱了就扑通躺在路边的雪堆上，肚子鼓鼓的，呼呼大睡起来，模样别提多惬意啦。</p>
        <p data-corrupt>走着走着，我钻进了一条没有路灯的小路，黑乎乎的有点吓人。我赶紧划亮一根火柴，点燃手里的小蜡烛，暖黄的光刚亮起来——</p>
        <p data-corrupt>突然"呼啦啦"冒出好多史莱姆！吓得我手里的蜡烛差点掉在地上。它们一个个举着自己的拐杖糖果，在我身上蹭来蹭去，好像在跟我撒娇。我被围得团团转，正着急呢，我的史莱姆导游终于找来了，一把拉着我的手就冲出了包围圈。</p>
        <p data-corrupt>导游拉着我爬上小镇最高的小山，山顶上有一座亮晶晶的教堂。它骄傲地挺起小胸脯，给我讲起教堂和糖果小镇的故事，每一句话都带着甜甜的自豪感。</p>
        <p data-corrupt>红的、蓝的、粉的、紫的史莱姆居民们，安安静静地聚在教堂前，软乎乎的小爪子合十，闭着眼睛虔诚地祈祷～</p>
        <p data-corrupt>穿着白袍的史莱姆牧师慢慢走出来，在大家面前轻声祝福，然后轻轻碰了碰每个大史莱姆的身体，"噗"地一下，就从它们肚子里掏出了小小的史莱姆宝宝！</p>
        <p data-corrupt>小史莱姆跟大史莱姆长得一模一样，圆溜溜的大眼睛，小嘴巴里还长着白白的小牙齿，可爱得让人想捏捏。就是有些小史莱姆的颜色怪怪的，实在是不讨喜。</p>
        <p data-corrupt>其实我来的路上就见过好多大史莱姆啦！它们捡起路边装着五颜六色甜水的可爱吸管，"噗"地扎进自己软乎乎的身体里，吸几口甜水，走着走着，肚子里就冒出了小史莱姆～</p>
        <p data-corrupt>这些小史莱姆有的颜色也不好看，还有的总爱扭来扭去、抽动身体，可它们长得奇形怪状的，引得其他史莱姆都掏出自己珍藏的糖果，想跟交换他们呢。</p>
        <p data-corrupt class="stomach-growl">"咕噜噜噜——"</p>
        <p data-corrupt>跑了这么久，我的肚子叫得好大声呀，好像在喊"我要吃好吃的！"</p>
        <p data-corrupt>史莱姆导游笑着邀请我去他家吃圣诞大餐，我早就等不及要尝尝糖果小镇的圣诞美食啦，脚步都变得轻快起来。</p>
      </div>

      <div class="scroll-spacer" ref="spacerRef"></div>

      <div class="danger-reveal" ref="dangerRef">
        <div class="glitch-overlay"></div>
        <p class="fake-danger">层级难度："童话"</p>
        <div class="true-dangers">
          <p class="meg-note">M.E.G. 内注：<span>生存难度 死区</span></p>
          <p class="tms-note">T.M.S. 内注：<span>生存难度无法衡量，已启动认知滤网</span></p>
          <p class="baut-note">Expander（B.A.U.T.）内注：<span>十死无生</span></p>
        </div>
      </div>
    </div>

    <div class="level-footer"><button class="top-btn" @click="scrollToTop">&#9650; 回到顶部</button></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function goBack() { sessionStorage.setItem('skipIntro', '1'); router.push('/') }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
defineProps({ id: { type: String, required: true } })

const revealed = ref(false)
const dangerRef = ref(null)
const titleRef = ref(null)
const nameRef = ref(null)
const spacerRef = ref(null)
let observer = null

const GARBLE = '锟斤拷烫烫烫屯屯屯繝繝縺ｧ蜈医㍼螟医㍼縺吶〰縺ｪ縺九ｉ螟峨ｒ蟄医〰蜿門￥蜈医↓鬮倬�ꙮ꙯ꙮ꙯ꚚꙘꚛ𐊧𐊨𐊩᚛᚜᚛᚛᚛᚛᚛ᛗᛘᛢᛣᛤᛥ'
const ZALGO = '̍̎̄̅̿̑̆͗͑͆͋͌͊͐͒͛̃̾̾͝͝͠͡͝͝͠҉҉҈҉҈'
const TECH = '0100101011101010101010101010101010101001010ERROR_0xFF3A//SEGFAULT@0xDEADBEEF//NULL_PTR'

let corruptTimers = []

function randomChar() {
  const pools = [GARBLE, GARBLE, GARBLE, TECH]
  const pool = pools[Math.floor(Math.random() * pools.length)]
  return pool[Math.floor(Math.random() * pool.length)]
}

function corruptText(text, intensity) {
  const chars = [...text]
  const result = []
  for (let i = 0; i < chars.length; i++) {
    if (Math.random() < intensity * 0.85) {
      let g = randomChar()
      if (Math.random() < intensity * 0.4) {
        const zCount = Math.floor(Math.random() * 3) + 1
        for (let z = 0; z < zCount; z++) g += ZALGO[Math.floor(Math.random() * ZALGO.length)]
      }
      result.push(g)
    } else if (Math.random() < intensity * 0.5) {
      continue
    } else {
      result.push(chars[i])
    }
  }
  return result.join('') || '▮▮▮'
}

function startCorruption() {
  const paras = document.querySelectorAll('[data-corrupt]')
  if (!paras.length) return
  const STAGGER = 140

  for (let i = paras.length - 1; i >= 0; i--) {
    const delay = (paras.length - 1 - i) * STAGGER
    const p = paras[i]
    const original = p.textContent

    const timer = setTimeout(() => {
      p.textContent = corruptText(original, 0.3)
      p.classList.add('corrupting')
      setTimeout(() => { p.textContent = corruptText(original, 0.6) }, 300)
      setTimeout(() => { p.textContent = corruptText(original, 0.9); p.classList.add('fully-corrupt') }, 700)
    }, delay)
    corruptTimers.push(timer)
  }

  const lastDelay = paras.length * STAGGER + 1000
  corruptTimers.push(setTimeout(() => {
    if (titleRef.value) titleRef.value.textContent = corruptText(titleRef.value.textContent, 0.8)
    if (nameRef.value) nameRef.value.textContent = corruptText(nameRef.value.textContent, 0.8)
    if (spacerRef.value) spacerRef.value.style.opacity = '0'
  }, lastDelay))
}

watch(revealed, (val) => { if (val) nextTick(() => startCorruption()) })

onMounted(() => {
  if (!dangerRef.value) return
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => { revealed.value = true }, 600)
      if (observer) observer.disconnect()
    }
  }, { threshold: 0.4, rootMargin: '-80px' })
  observer.observe(dangerRef.value)
})

onUnmounted(() => { if (observer) observer.disconnect(); corruptTimers.forEach(clearTimeout) })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap');

.level-page { min-height: 100vh; background: var(--color-off-white); padding: 40px; transition: background 0.8s ease; }
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; position: relative; z-index: 2; }
.back-btn:hover { opacity: 0.8; }
.level-content { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }

.level-title { font-family: 'ZCOOL XiaoWei', var(--font-family); font-size: clamp(3.5rem, 12vw, 7rem); font-weight: 400; color: var(--color-black); letter-spacing: 0.02em; margin-bottom: 12px; transition: color 0.8s ease; }
.level-name { font-family: 'ZCOOL XiaoWei', var(--font-family); font-size: 2rem; font-weight: 400; color: var(--color-black); margin-bottom: 48px; letter-spacing: 0.06em; transition: color 0.8s ease; }

/* Story */
.story p { font-family: 'ZCOOL XiaoWei', var(--font-family); font-size: 1.2rem; line-height: 2.3; color: rgba(0,0,0,0.72); margin-bottom: 32px; text-indent: 2em; transition: color 0.4s ease; }
.story p:first-child { margin-top: 0; }
.stomach-growl { text-align: center !important; font-size: 1.6rem !important; color: rgba(0,0,0,0.5) !important; text-indent: 0 !important; margin: 44px 0 !important; letter-spacing: 0.08em; }

.story p.corrupting { animation: text-glitch 0.25s steps(2); color: rgba(180,0,0,0.7); }
.story p.fully-corrupt { color: rgba(200,0,0,0.9); letter-spacing: 0.05em; word-break: break-all; }
@keyframes text-glitch { 0% { transform: translate(2px,0); opacity: 0.8; } 50% { transform: translate(-2px,1px); opacity: 1; } 100% { transform: translate(0,0); opacity: 1; } }

.scroll-spacer { height: 40vh; display: flex; align-items: center; justify-content: center; position: relative; transition: opacity 0.6s ease; }
.scroll-spacer::after { content: '~ ✦ ~'; font-family: 'ZCOOL XiaoWei', var(--font-family); font-size: 1.4rem; color: rgba(0,0,0,0.12); letter-spacing: 0.2em; }

/* Danger reveal */
.danger-reveal { margin-top: 24px; padding: 40px 36px; border-radius: var(--radius-md); border: 1px solid rgba(0,0,0,0.06); background: rgba(0,0,0,0.015); position: relative; overflow: hidden; transition: all 0.8s ease; margin-bottom: 80px; }
.fake-danger { text-align: center; font-family: 'ZCOOL XiaoWei', var(--font-family); font-size: 1.4rem; font-weight: 400; color: rgba(0,0,0,0.45); margin-bottom: 28px; text-indent: 0 !important; letter-spacing: 0.05em; }
.true-dangers p { font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; letter-spacing: 1px; text-align: center; margin-bottom: 12px; color: rgba(0,0,0,0.35); text-indent: 0 !important; }
.true-dangers p span { font-weight: 700; color: rgba(0,0,0,0.5); }

/* Corrupted state */
.level-page.corrupted { background: #1a0000; animation: bg-bleed 0.8s ease-out; }
.level-page.corrupted .level-title,
.level-page.corrupted .level-name,
.level-page.corrupted .story p,
.level-page.corrupted .scroll-spacer::after,
.level-page.corrupted .fake-danger { color: #ddd; }
.level-page.corrupted .scroll-spacer::after { color: rgba(255,255,255,0.08); }
.level-page.corrupted .true-dangers p,
.level-page.corrupted .true-dangers p span { color: #ddd; }
.level-page.corrupted .danger-reveal { background: rgba(139,0,0,0.3); border-color: rgba(139,0,0,0.5); }
.level-page.corrupted .true-dangers p span { color: #ff4444; text-shadow: 0 0 8px rgba(255,0,0,0.5); }
.level-page.corrupted .meg-note span { color: #ff2222; }
.level-page.corrupted .tms-note span { color: #ff4444; }
.level-page.corrupted .baut-note span { color: #ff6666; }

.glitch-overlay { position: absolute; inset: 0; pointer-events: none; z-index: 10; background: transparent; }
.level-page.corrupted .glitch-overlay { animation: glitch-flash 1s steps(4) forwards; }

@keyframes glitch-flash {
  0%   { background: rgba(255,0,0,0.12); transform: translate(0,0); }
  8%   { background: rgba(0,255,255,0.08); transform: translate(-8px,4px); }
  16%  { background: transparent; transform: translate(6px,-3px); }
  24%  { background: rgba(255,0,0,0.18); transform: translate(-3px,1px); }
  32%  { background: transparent; transform: translate(10px,2px); }
  40%  { background: rgba(139,0,0,0.25); transform: translate(-5px,-4px); }
  48%  { background: rgba(200,0,50,0.08); transform: translate(2px,3px); }
  56%  { background: transparent; transform: translate(-10px,0); }
  64%  { background: rgba(100,0,0,0.35); transform: translate(4px,-2px); }
  72%  { background: rgba(255,50,50,0.1); transform: translate(-2px,1px); }
  80%  { background: rgba(180,0,0,0.2); transform: translate(7px,0); }
  90%  { background: transparent; transform: translate(-1px,-1px); }
  100% { background: transparent; transform: translate(0,0); }
}
@keyframes bg-bleed {
  0%   { background: var(--color-off-white); }
  25%  { background: #f5e6e6; }
  55%  { background: #4a0000; }
  100% { background: #1a0000; }
}

.level-page.corrupted .back-btn { background: #333; color: #ccc; }

@media (max-width: 767px) { .level-page { padding: 24px; } .story p { font-size: 1.05rem; line-height: 2.1; margin-bottom: 24px; } .danger-reveal { padding: 28px 20px; margin-bottom: 60px; } .scroll-spacer { height: 25vh; } }
/* ── 底部回到顶部 ── */
.level-footer {
  max-width: 800px;
  margin: 40px auto 0;
  text-align: center;
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
</style>
