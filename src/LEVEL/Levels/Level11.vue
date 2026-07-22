<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"影色舞"</p>

      <div class="section">
        <h2>生存难度：等级 3</h2>
        <div class="difficulty">
          <ul class="class-list">
            <li><span class="class-bullet safe"></span> 安全</li>
            <li><span class="class-bullet unstable"></span> 不稳定</li>
            <li><span class="class-bullet entity"></span> 少量实体威胁</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h2>描述</h2>
        <p>SI-11 表现为一栋带有后花园的三层别墅，季节被定格在仲夏，永远处于夜晚，别墅和后花园外，四周被黑暗笼罩，天空或是暗淡无光或是繁星点点。流浪者无法通过任何手段探索别墅和花园之外的地方。一旦进入就会被黑暗吞噬陷入昏迷，醒来后被传送回洋房二楼。虽然每个房间内都有灯，但是无法点亮。光源只有花园内的低矮花园灯，以及二楼书房内的绿色古典台灯。这些光源恒亮，无法关闭。</p>
        <p>二楼书房内有一架金斯伯格钢琴，可被正常弹奏。该层级具有伪孤立效应，允许结伴进入，切入后却无法相遇。同时，结伴切入人数将决定 SI-11 内部分特殊实体的数量。</p>
      </div>

      <div class="section">
        <h2>子层级：SI-11-1 "十日河"</h2>
        <p>该子层级中是一条由繁星构成的笔直河流，河床布满人骨，河流最深处只能没过流浪者腰部。流浪者虽顺流而下，行进时却阻力重重，宛若逆流而上，面迎水流冲击。</p>
        <p>流浪者进入时，便能看到"十日河"上空高悬的血红倒计时，上面将有为期十日的倒数。若是流浪者能在十日内走到"十日河"终点，便可切出到 SI-其他层级。若是未能完成，流浪者将沉入河底逝去，化为白骨，没于星河，直至时光终焉。</p>
        <p><strong>切入方式：</strong>当 SI-11 内仅剩下流浪者自己的"傍身之影"时，流浪者的"傍身之影"将会向流浪者伸出手，带他穿过 SI-11 四周的黑暗，切入子层级"十日河"。</p>
        <p><strong>切出方式：</strong>走到"十日河"尽头切出。</p>
        <p><strong>特性：</strong>"十日河"会在流浪者前进的时候冲刷流浪者的意志，意志不坚定者可能会在途中被河流剥离血肉、人格、记忆，甚至被剥离独属于流浪者生命中的一段时间。</p>
      </div>

      <div class="section">
        <h2>实体</h2>
        <div class="entity-box"><p class="entity-name">1. "月光奏鸣"</p><p class="entity-subtitle">在星空暗淡无光时，月光洒落音符</p><p>该实体会替代正常出现的月光，其表现为月光亮度异常激增。同时月光中会有黑色音符下落，黑色音符会使接触到它的生物失去听觉。生物一旦被照射到，被照射部分将会血肉糜烂，只留下皑皑白骨。</p></div>
        <div class="entity-box"><p class="entity-name">2. "春秋蝉蛊"</p><p>在后花园出现的实体，当"傍身之影"出现在其附近时，发出蝉鸣，在数十秒鸣叫之后钻入地下，开始新一轮生命的周期。蝉鸣声中，天空迅速变换，星宿轮转，时间飞逝。可仲夏之夜，亘古不变，唯有蝉蛊破土鸣唱，复而沉眠，轻薄双翼，镌刻时间。</p></div>
        <div class="entity-box"><p class="entity-name">3. "傍身之影"</p><p>常态下无实体的虚影实体，其数量由结伴切入该层级的流浪者数量决定，且实体形态与切入的流浪者一一对应，仅在蝉鸣声中可被观测与触碰。鉴于孤立效应，流浪者会独自出现在该层级中，但是除了自己的"傍身之影"外，可以接触到同伴的"傍身之影"。流浪者将对可被观测接触状态下的属于自身的"傍身之影"有极其强的辨识能力。</p><p class="poetic">你看不清它的面容，但能读懂它的天真。你知晓它是你，那个儿时的自己。它无法理解你血管流淌的焦虑，你无法拥抱儿时无忧脚步的轻盈。</p></div>
        <div class="entity-box"><p class="entity-name">4. "四季虫歌"</p><p>声音类实体，会在流浪者弹奏钢琴时出现。若是流浪者身边出现流浪者自己的"傍身之影"，"四季虫歌"不会出现。该实体会被真情流露的音乐吸引，出现后，时间流速加快，四季轮转，一年光阴白驹过隙，随后将流浪者送出该层级，并随机切入一个 SI 层级。</p></div>
      </div>

      <div class="section">
        <h2>出口</h2>
        <ul class="entry-list"><li>借助"四季虫歌"切出</li><li>在子层级"十日河"中切出</li></ul>
      </div>

      <div class="section"><h2>有关实体特点</h2><p>属于流浪者自己的"傍身之影"若是被流浪者自己击杀，流浪者将会出现记忆缺失症状，也可能引发部分精神类疾病，严重程度不定。若是自己的"傍身之影"被其他流浪者杀死，流浪者自己也将一同死亡。</p></div>

      <div class="epigraph">
        <p>人类怎样才能摆脱自己的影子？</p><p>人类怎样拒却自己的宿命？</p><p>人类怎样才能脱胎换骨？</p><p>人类怎样成为一个新的自我？</p><p>若是连自身都无法认清，又该向谁发问？</p><p>若是连自己的影子都无法摆脱，又怎样获得自由？</p>
      </div>
    </div>
    <div class="level-footer"><button class="top-btn" @click="scrollToTop">&#9650; 回到顶部</button></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
defineProps({ id: { type: String, required: true } })
const router = useRouter()
function goBack() { sessionStorage.setItem('skipIntro', '1'); router.push('/') }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
</script>

<style scoped>
.level-page { min-height: 100vh; background: var(--color-off-white); padding: 40px; }
.level-content { max-width: 800px; margin: 0 auto; }
.level-title { font-family: var(--font-family); font-size: clamp(3rem, 10vw, 6rem); font-weight: 900; color: var(--color-black); letter-spacing: -0.04em; margin-bottom: 8px; }
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: var(--color-black); margin-bottom: 40px; font-style: italic; letter-spacing: 0.04em; }
.section { margin-bottom: 36px; }
.section h2 { font-family: var(--font-family); font-size: 1.15rem; font-weight: 700; color: var(--color-black); margin-bottom: 14px; padding-bottom: 6px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85; color: rgba(0,0,0,0.7); margin-bottom: 10px; text-indent: 2em; }
.sub-heading { font-family: var(--font-family); font-size: 1rem; font-weight: 600; color: var(--color-black); margin: 16px 0 8px 0; }
.difficulty { background: rgba(0,0,0,0.03); padding: 16px 20px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 24px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.95rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 8px; }
.class-bullet { display: inline-block; width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.safe { background: #2a9d8f; }
.class-bullet.unstable { background: #f4a261; }
.class-bullet.entity { background: #9b5de5; }
.entity-box { background: rgba(0,0,0,0.015); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.06); margin-bottom: 16px; }
.entity-name { font-family: var(--font-family); font-size: 1.1rem; font-weight: 700; color: var(--color-black); text-indent: 0 !important; margin-bottom: 4px !important; }
.entity-subtitle { font-size: 0.85rem !important; font-style: italic; color: rgba(0,0,0,0.4) !important; text-indent: 0 !important; margin-bottom: 10px !important; }
.poetic { text-indent: 0 !important; font-style: italic; color: rgba(0,0,0,0.55) !important; padding-left: 16px; border-left: 2px solid rgba(0,0,0,0.08); }
.entry-list { list-style: none; padding: 0; }
.entry-list li { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.7; color: rgba(0,0,0,0.7); padding: 6px 0 6px 16px; position: relative; border-bottom: 1px solid rgba(0,0,0,0.04); }
.entry-list li::before { content: '→'; position: absolute; left: 0; top: 6px; color: rgba(0,0,0,0.25); font-weight: 600; }
.epigraph { margin-top: 40px; padding: 32px; background: rgba(0,0,0,0.015); border: 1px dashed rgba(0,0,0,0.1); border-radius: var(--radius-sm); text-align: center; }
.epigraph p { font-family: var(--font-family); font-size: 0.9rem; line-height: 2.2; color: rgba(0,0,0,0.55); text-indent: 0 !important; font-style: italic; margin-bottom: 0 !important; }
strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } .class-list { flex-direction: column; gap: 6px; } }
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
