<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"未知空域"</p>

      <div class="section"><h2>生存难度：Φ</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet entity"></span> 实体数量：不定</li><li><span class="class-bullet unstable"></span> 层级稳定性：变化</li></ul></div></div>

      <div class="section"><h2>描述</h2><p>SI-25 层级是一片大小不定的海上空域，面积不定，大约在 10,000km² 至 250,000km²。其高度限制估测为 30,000m 左右。主要实体只有这片蔚蓝的天空，其余实体皆为实体"天空"所衍生。</p><p>当流浪者进入其中时，会进入一架在空中稳定飞行的飞机座舱中，飞机型号可能是一战至现代所出现过的飞机型号。飞机中会有一个<strong>任务板</strong>，上面将有丰富的信息，包括飞机的全套操作手册以及任务目标——目前出现过的"目标"只有击落全部敌机。同时任务板也会告知你是否拥有队友、敌机数量和类型。</p><p>完成任务后流浪者将获得积分，可用积分换取物资、升级机体、解锁更先进机体（按科技树逐代解锁）。每次任务都有试错机会，若重生次数用完，流浪者将在下一次被击坠时切入 SI-22。</p><p>在积分达到额定数量时，流浪者可以选择用积分兑换切出，驾驶机体驶向切出点，随后切出至 SI 层群的其他层级的高空，并获得一次性降落伞。</p></div>

      <div class="section appendix"><h2>附录 1：最后的日志</h2><p class="poetic">我坐在不断变化的座舱中，磨练着战斗的艺术。<br/>从一无所知，到沧桑的老鸟。<br/>我驾驶古老的钢铁，翻飞银色的蝴蝶；<br/>聆听过活塞的心跳，感受着喷气的轰鸣。<br/>由我击坠的机体足以我离开这片天空。<br/>可我觉得我本就属于这里。<br/>只有这里，这片未知的空域，是我的王国。</p><p class="note">*这份残缺日志出现在座舱中，由一位流浪者带回。整本日志仅有这一部分尚未完全烧焦。</p></div>

      <div class="section appendix"><h2>附录 2：无线电记录</h2><p class="log-line">他们凭空出现！他们凭空出现！新的实体生成了，准备接敌！</p><p class="log-line">他们越来越难缠了！雷达上面一团糟……明明半个月前我们还在用*代机迎敌！</p><p class="log-line">为什么这次你也在我的任务目标里，敌我识别里你不是友军！</p></div>

      <div class="section appendix"><h2>附录 3：访谈</h2><p>"这片天空是活的，是有思维的。从我进去的那一刻我就能感觉得到。它……不不不……祂在观察。它正在试图理解我们，理解我们的思维，理解我们的机械，理解我们的关系……那些该死的实体动作越来越灵巧了，他们学会了我们漫长航空史上一切的一切。我们都是白鼠。"</p></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
defineProps({ id: { type: String, required: true } })
const router = useRouter()
function goBack() { sessionStorage.setItem('skipIntro', '1'); router.push('/') }
</script>

<style scoped>
.level-page { min-height: 100vh; background: var(--color-off-white); padding: 40px; }
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-content { max-width: 800px; margin: 0 auto; }
.level-title { font-family: var(--font-family); font-size: clamp(3rem, 10vw, 6rem); font-weight: 900; color: var(--color-black); letter-spacing: -0.04em; margin-bottom: 8px; }
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: var(--color-black); margin-bottom: 40px; font-style: italic; }
.section { margin-bottom: 28px; }
.section h2 { font-family: var(--font-family); font-size: 1.1rem; font-weight: 700; color: var(--color-black); margin-bottom: 10px; padding-bottom: 4px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.8; color: rgba(0,0,0,0.7); margin-bottom: 8px; text-indent: 2em; }
.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.entity { background: #9b5de5; }
.class-bullet.unstable { background: #f4a261; }
.appendix { background: rgba(0,0,0,0.01); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.08); }
.poetic { text-indent: 0 !important; font-style: italic; text-align: center; line-height: 2.2 !important; color: rgba(0,0,0,0.5) !important; }
.log-line { text-indent: 0 !important; font-size: 0.85rem !important; color: rgba(0,0,0,0.5) !important; margin-bottom: 4px !important; padding-left: 8px; border-left: 2px solid rgba(0,0,0,0.08); }
.note { text-indent: 0 !important; font-style: italic; font-size: 0.82rem !important; color: rgba(0,0,0,0.35) !important; margin-top: 12px !important; }
strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } }
</style>
