<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"未知空域"</p>

      <div class="section">
        <h2>生存难度：Φ</h2>
        <div class="difficulty">
          <ul class="class-list">
            <li><span class="class-bullet entity"></span> 实体数量：不定</li>
            <li><span class="class-bullet unstable"></span> 层级稳定性：变化</li>
            <li>生存难度：Φ</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h2>描述</h2>
        <p>SI-25层级是一片大小不定的海上空域，面积不定，大约在10000km²至250000km²。其高度限制估测为30000m左右，实际大小因观测载具限制无法确定。主要实体只有这片蔚蓝的天空，其余实体皆为实体"天空"所衍生。</p>
        <p>当流浪者进入其中时，会进入一架在空中稳定飞行的飞机座舱中，飞机型号可能是一战至现代所出现过的飞机型号。飞机中会有一个<strong>任务板</strong>，当流浪者进入时，任务板上将会有丰富的信息，包括飞机的全套操作手册以及任务目标。通过此任务板，流浪者将获悉自己的"任务目标"。目前出现过"目标"只有击落全部敌机。同时任务板也会在出击前告知你是否拥有队友，敌机数量和类型。任务板同时记载着各种与机体所属年代相应的空战机动以及的必要知识，并遂机体迭代升级更新知识以及敌机种类和数量。出击前，机体部件调教改装，以及出击油量及武器挂载均可通过任务板选择更改。</p>
        <p>完成一次任务后，流浪者将获得一定量积分，流浪者可使用积分换取物资，升级机体，以及取得更先进机体，但每次解锁新机体时不能跨代解锁，只能按照层级给出的科技树解锁。每次任务都有试错机会，若流浪者死亡，可在限定次数内重启任务，若重生次数用完，流浪者将在下一次被击坠时切入SI-22"倒悬的往生路"。在积分达到额定数量时，流浪者可以选择用积分兑换切出，随后驾驶机体驶向切出点，随后切出该层级，切入SI层群的其他层级。切出时流浪者会获得一套一次性降落伞并知悉使用方法，随后切入到SI-27"熙熙攘攘，我们的城市"，SI-19"他们不在老去"或SI-18"白夜"，SI-4"博物迷宫——争取"等层级的高空中。在使用降落伞成功降落后，降落伞会瞬间消失。</p>
      </div>

      <div class="section appendix">
        <h2>附录1 《最后的日志》</h2>
        <p class="poetic">我坐在不断变化的座舱中，磨练着战斗的艺术。从一无所知，到沧桑的老鸟。我驾驶古老的钢铁，翻飞银色的蝴蝶；聆听过活塞的心跳，感受着喷气的轰鸣。由我击坠的机体足以我离开这片天空。可我觉得我本就属于这里。只有这里，这片未知的空域，是我的王国。</p>
        <p class="note">*这份残缺日志出现在座舱中，由一位流浪者带回。整本日志仅有这一部分尚未完全烧焦，可以辨认，其他部分已被烧毁。</p>
      </div>

      <div class="section appendix">
        <h2>附录2</h2>
        <p class="log-line">*（无线电）他们凭空出现！他们凭空出现！新的实体生成了，准备接敌！</p>
        <p class="log-line">*（无线电）他们越来越难缠了！雷达上面一团糟，应该是电子压制一类的东西，我看不到他们！明明半个月前我们还在用*代机迎敌！</p>
        <p class="log-line">*（无线电信号不良）（脏话）！为什么这次你也在我的任务目标里，敌我识别里你不是友军！</p>
        <p class="log-line">*（无线电断断续续）下........空导弹——....规.......他们凭空出（爆炸）</p>
      </div>

      <div class="section appendix">
        <h2>附录3</h2>
        <p class="log-line">这片天空是活的，是有思维的。从我进去的那一刻我就能感觉得到。它......不不不.....祂在观察。</p>
        <p class="log-line">*（打断）就用它得了。</p>
        <p class="log-line">好好好，它正在试图理解我们，理解我们的思维，理解我们的机械，理解我们的关系</p>
        <p class="log-line">*跟谁的关系？</p>
        <p class="log-line">人与人的......人与机械的.....与天空的......我进去过两次了，那些该死的实体动作越来越灵巧了，他们学会了我们漫长航空史上一切的一切。</p>
        <p class="log-line">（沉默）（漫长的沉默）</p>
        <p class="log-line">我们都是白鼠</p>
        <p class="log-line">【记录中断】</p>
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
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
