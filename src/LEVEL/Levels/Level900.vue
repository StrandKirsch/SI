<template>
  <div class="level-page" ref="pageRef" :style="radiationStyle">
    <!-- 辐射花屏叠加层 -->
    <div class="rad-overlay noise-layer"></div>
    <div class="rad-overlay scanline-layer"></div>
    <div class="rad-overlay grain-layer"></div>
    <div class="level-content" ref="contentRef">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"地狱之上，凝视繁花"</p>

      <div class="journal">
        <p>从 SI-X 的一条小巷中走出，转过墙角，我就来到了这个地方。这里的景象同档案中描述的 SI-X 完全不同，因此，我合理推测这是一个新的层级，或者是 SI-X 的一个特殊区域。按照协定，我将对我在这个区域的探索进行记录，希望一切顺利。</p>
        <p>现在的时间似乎是下午到傍晚之间，暖黄色的阳光给整个城镇加上了一层怀旧氛围的滤镜。不知怎的，我试图在这个 21 世纪 00 年代的城镇中寻找家乡的事物：曾经的住宅、市场、书店……它们还在原来的位置，但是已经不再是记忆中的样子，一切都像在梦中一样。</p>
        <p>老旧的居民楼、皲裂的柏油马路、砖石参差的人行步道、春日里绿化带中盛开的花朵……它们让我一度怀疑自己回到了幼时居住的地方。尽管眼前和记忆的差别明确地告诉我这是后室中一个从未踏足过的空间，但诸多的巧合让我难以不相信这里就是家乡。巨大的心理落差让我很不舒服，我得坐下来休息一下了。</p>
        <p>拧开瓶子，我坐在街边的一棵树下伴着花香抿了一口杏仁水。奇怪的是，我竟然尝不出那清淡却独特的杏仁的味道。可能是我有点疲劳了，不知不觉间，我已经在这里游荡了很久，可太阳还没有落山的意思。稍作修整，我站起身来，循着记忆找到"家"曾经所在的居民楼走去。单元门和以前一样虚掩着，我穿过大门，走入楼梯间。</p>
        <p>奇怪的是，我并没有在记忆中的楼层上找到自家的门牌号。我沿着楼梯把每一层找了个遍，都是无功而返，感觉就像是家门凭空消失了一样。我走出单元门，环顾四周，确认相对位置是正确的。再走进去沿楼梯寻找，结果未曾有丝毫改变。如此反复数次，我也失去了耐心，只好悻悻的离开，继续在街道上游荡。路过花坛的时候，我只觉得内心烦躁、不安，并没有嗅到花朵的一丝芬芳。</p>
        <p class="fade-1">已经不知道在这里度过多长时间了，有"家"而不能回的境况让难过、恐惧的情绪时刻萦绕心头。我从街边的长椅上坐起，试图整理从来到这里到现在的思绪。大脑一团乱麻，我不知道我从何处来、到何处去，先前的记忆早已遗失殆尽，只有这些文字让我将信将疑地接受现在的状况。阳光像以往一样，毫无温度地照耀着我这个街道上唯一存在的孤单者。我想流泪，但是双手摊开捂住脸颊时，才发现脸颊感觉不到泪水流过，手掌也接受不到脸颊的触感了。</p>
        <p class="fade-2">时间不重要了，记忆也不重要了，我只知道还应该在这个本子上写点东西。没有风，没有小鸟，没有人。什么都听不到，死一般的沉寂。对了，我那块最宝贝的江诗丹顿三问腕表，推下报时按键之后也没有反应，明明击锤在运动，为什么报时声也离我而去了呢？眼睛有点模糊了，看样子我应该好好休息一下。</p>
        <p class="fade-3 illegible">（这一页的文字扭曲重叠在一起，无法辨认，以下内容来自探索记录仪的语音记录）</p>
        <p class="fade-4">起"床"了，又是新的一天。太阳落山了吗？不……不对，我看不到自己的手，周围什么都没有……</p>
        <p class="fade-4 silence">（静默）</p>
        <p class="fade-5">算了，这大抵就是结局了吧。什么都感觉不到，什么都不记得了。我只是个再也无法归乡的游子罢了，哦，对了，我依稀能看见那片繁花。</p>
        <p class="fade-6 epilogue">（此后的记录毫无意义，探查员只是四处游荡，画面持续录制直至记录仪电量耗尽）</p>
      </div>

      <div class="divider"></div>

      <div class="report">
        <p>以上是 MEG 某探查员遗留的探索记录。前日，某探索分队在 SI 某层级发现了该探查员的遗体，其眼球"融化"，瞳孔不透明，口腔鼻腔黏膜尽数脱落、溃烂，皮肤完全灼伤毁坏。MEG 与 BAUT 根据记录仪数据还原信息，确定了这个距离 SI 核心区域极其"遥远"的新层级。</p>
        <p>此后双方派出多支高规格分队乃至组织联合探查，采用了后室地铁等特殊进入手段。因为队员传回的数据虽大同小异，但在关键参数未能达成一致，所以以上探索行动均未能对该层级的认知取得实质性的进展。鉴于前期行动极高的减员率，后续行动计划已被终止，已知的入口已被严格封闭。</p>
        <p>不幸的是，切入该层级的情况具备随机性，且该层级不存在可靠的出口和社群。MEG 与 BAUT 发布联合警告：误入该层级的流浪者请立刻通过特殊途径离开。基于以上种种因素，双方在层级基础资料的编写上很轻松地达成了共识：</p>
      </div>

      <div class="official-dossier">
        <h2 class="dossier-title">Level SI 900</h2>
        <p class="dossier-subtitle">"地狱之上，凝视繁花"</p>
        <div class="danger-block">
          <p class="danger-main">生存难度：死区 — 辐射</p>
          <ul class="danger-details">
            <li>异常的怀旧效应</li>
            <li>无解的感官剥夺</li>
            <li>不可靠出口</li>
          </ul>
        </div>
        <p>有关该层级的描述均不完全重合，所以无法确定其具体的内部情况。未及时切出的流浪者最终均已死亡。遇难者上报了感官与记忆的逐渐丢失，从遇难者的遗体上检测到了极高剂量的电离辐射。</p>
        <p class="final-warning">如误入该层级，立刻上报切入方式和标准时间。<br/>你已无法返乡，即刻切出。</p>
      </div>
    </div>

    <div class="level-footer"><button class="top-btn" @click="scrollToTop">&#9650; 回到顶部</button></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function goBack() { sessionStorage.setItem('skipIntro', '1'); router.push('/') }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
defineProps({ id: { type: String, required: true } })

const pageRef = ref(null)
const contentRef = ref(null)
const scrollPct = ref(0)

function onScroll() {
  const content = contentRef.value
  if (!content) return
  const rect = content.getBoundingClientRect()
  const viewH = window.innerHeight
  const offset = -rect.top
  const total = rect.height - viewH
  if (total <= 0) { scrollPct.value = 1; return }
  scrollPct.value = Math.max(0, Math.min(1, offset / total))
}

const radiationStyle = computed(() => {
  const t = scrollPct.value
  return {
    '--rad-noise': (t * 0.5).toFixed(3),
    '--rad-scan': (t * 0.45).toFixed(3),
    '--rad-grain': (t * 0.55).toFixed(3),
    '--rad-shift': (t * 4).toFixed(1) + 'px',
  }
})

onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => { window.removeEventListener('scroll', onScroll) })
</script>

<style scoped>
.level-page {
  min-height: 100vh;
  background: #f7f5f0;
  padding: 40px;
  position: relative;
  isolation: isolate;
}

.back-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; background: var(--color-black); color: var(--color-white);
  border: none; border-radius: var(--radius-sm);
  font-family: var(--font-family); font-size: 0.9rem; font-weight: 500;
  cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px;
  position: relative; z-index: 10;
}
.back-btn:hover { opacity: 0.8; }

.level-content {
  max-width: 720px; margin: 0 auto;
  position: relative; z-index: 1;
  text-shadow: calc(var(--rad-shift, 0px) * 0.5) 0 0 rgba(255,0,0,0.15),
               calc(var(--rad-shift, 0px) * -0.5) 0 0 rgba(0,255,255,0.12);
}

.level-title {
  font-family: var(--font-family); font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900; color: var(--color-black); letter-spacing: -0.04em; margin-bottom: 8px;
}
.level-name {
  font-family: var(--font-family); font-size: 1.4rem; font-weight: 500; font-style: italic;
  color: rgba(0,0,0,0.5); margin-bottom: 48px; letter-spacing: 0.04em;
}

/* ── Journal ── */
.journal p { font-family: var(--font-family); font-size: 1rem; line-height: 2; color: rgba(0,0,0,0.78); margin-bottom: 22px; text-indent: 2em; }
.journal p.fade-1 { color: rgba(0,0,0,0.62); }
.journal p.fade-2 { color: rgba(0,0,0,0.48); }
.journal p.fade-3 { color: rgba(0,0,0,0.35); font-style: italic; }
.journal p.fade-4 { color: rgba(0,0,0,0.25); }
.journal p.fade-5 { color: rgba(0,0,0,0.15); font-style: italic; text-align: center; text-indent: 0; margin-top: 32px; }
.journal p.fade-6 { color: rgba(0,0,0,0.1); font-style: italic; text-align: center; text-indent: 0; font-size: 0.9rem; margin-top: 24px; }
.illegible { letter-spacing: 0.03em; word-spacing: 0.06em; }
.silence { text-align: center; text-indent: 0; font-style: italic; color: rgba(0,0,0,0.18) !important; margin: 28px 0 !important; }
.epilogue { color: rgba(0,0,0,0.08) !important; }

/* ── Divider ── */
.divider { height: 1px; background: rgba(0,0,0,0.08); margin: 56px 0 48px 0; position: relative; z-index: 2; }
.divider::after { content: '◆'; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: #f7f5f0; padding: 0 16px; font-size: 0.6rem; color: rgba(0,0,0,0.15); }

/* ── Report ── */
.report p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85; color: rgba(0,0,0,0.65); margin-bottom: 14px; text-indent: 2em; }

/* ── Official dossier ── */
.official-dossier { margin-top: 48px; padding: 40px 44px; border: 1px solid rgba(0,0,0,0.1); background: rgba(0,0,0,0.02); border-radius: var(--radius-md); position: relative; z-index: 2; }
.dossier-title { font-family: var(--font-family); font-size: 1.8rem; font-weight: 900; color: var(--color-black); margin-bottom: 4px; }
.dossier-subtitle { font-family: var(--font-family); font-size: 1.1rem; font-weight: 500; font-style: italic; color: rgba(0,0,0,0.45); margin-bottom: 28px; }
.danger-block { background: rgba(0,0,0,0.03); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.06); margin-bottom: 24px; }
.danger-main { font-weight: 700; font-size: 1.05rem !important; color: #8b0000 !important; text-indent: 0 !important; margin-bottom: 12px !important; }
.danger-details { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 16px; }
.danger-details li { font-size: 0.9rem; color: rgba(0,0,0,0.6); padding-left: 14px; position: relative; }
.danger-details li::before { content: '—'; position: absolute; left: 0; top: 0; color: rgba(0,0,0,0.2); font-weight: 600; }
.official-dossier > p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.8; color: rgba(0,0,0,0.65); margin-bottom: 12px; text-indent: 2em; }
.final-warning { text-align: center; font-weight: 600; font-size: 1rem !important; color: #8b0000 !important; text-indent: 0 !important; margin-top: 28px !important; line-height: 2.2 !important; letter-spacing: 0.04em; }

/* ================================================
   RADIATION FILM DAMAGE OVERLAYS
   ================================================ */
.rad-overlay {
  position: fixed; inset: 0; pointer-events: none; z-index: 5;
}

/* 1. Noise — feTurbulence SVG */
.noise-layer {
  opacity: var(--rad-noise, 0);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
  mix-blend-mode: overlay;
}

/* 2. Scanlines */
.scanline-layer {
  opacity: var(--rad-scan, 0);
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.04) 2px,
    rgba(0,0,0,0.04) 4px
  );
  animation: scanline-drift 0.15s linear infinite;
  animation-play-state: paused;
}
@keyframes scanline-drift {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

/* 3. Grain — animated particle-like dots */
.grain-layer {
  opacity: var(--rad-grain, 0);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
  background-size: 64px 64px;
  mix-blend-mode: difference;
  animation: grain-flicker 0.08s steps(2) infinite;
  animation-play-state: paused;
}
@keyframes grain-flicker {
  0% { transform: translate(0,0); }
  25% { transform: translate(-4px,3px); }
  50% { transform: translate(2px,-5px); }
  75% { transform: translate(-1px,-2px); }
  100% { transform: translate(3px,4px); }
}

/* ── Activate animations when scroll progress > 0 ── */
.level-page:has(.rad-overlay) .scanline-layer { animation-play-state: running; }
.level-page:has(.rad-overlay) .grain-layer { animation-play-state: running; }

@media (max-width: 767px) {
  .level-page { padding: 24px; }
  .official-dossier { padding: 28px 24px; }
  .danger-details { flex-direction: column; gap: 6px; }
}
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
