<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"月升·月落"</p>

      <!-- Survival Difficulty -->
      <div class="section">
        <h2>Survival Difficulty</h2>
        <div class="difficulty">
          <span class="class-label">Class 2e — Environmental</span>
          <ul class="class-list">
            <li><span class="class-bullet safe"></span> 较安全</li>
            <li><span class="class-bullet stable"></span> 较稳定</li>
            <li><span class="class-bullet hazard"></span> 轻度环境危害</li>
          </ul>
        </div>
      </div>

      <!-- Description -->
      <div class="section">
        <h2>描述</h2>
        <p>Level SI-6 是 SI 层群内部区域中起到枢纽作用的一层。它具备数量繁多的出入口，是探索 SI 层群时值得利用的交通要塞。该层级地处一个半岛，北、西、南三面环海，其陆上区域无限扩张，面积可以认为是无穷大。</p>
        <p>半岛上坐落着无数大型度假酒店，酒店内设施齐全，装潢精致，资源自动刷新。但是酒店之间存在平均 3 千米的间隔，酒店之间的空间有的是林地、有的是柏油路、有的是沙滩……目前已探明超过 15 种不同的环境。这使得从一个酒店前往另一酒店的难度存在一定的差异。</p>
        <p>该层级处于永夜状态，一天共分为四个时段：<strong>月升</strong>、<strong>夜晚</strong>、<strong>月落</strong>、<strong>暗夜</strong>，如此往复。由于没有日照时间，该层级在夜晚的平均气温在零下 3 至 7 摄氏度之间，而在暗夜的气温最低可低于零下 20 摄氏度。同时，所有酒店都会在暗夜期间关闭公共设施并停止供电，这导致暗夜期间整个层级并无任何光源，而流浪者自带的光源也会在这期间失效。进入暗夜前一小时，全层级会有警报响应，请流浪者及时回到酒店避险。</p>
      </div>

      <!-- 时段循环 -->
      <div class="cycle-diagram">
        <div class="cycle-phase">
          <span class="phase-icon">&#127761;</span>
          <span class="phase-name">月升</span>
          <span class="phase-temp">~0°C</span>
        </div>
        <span class="cycle-arrow">→</span>
        <div class="cycle-phase">
          <span class="phase-icon">&#127765;</span>
          <span class="phase-name">夜晚</span>
          <span class="phase-temp">-3 ~ -7°C</span>
        </div>
        <span class="cycle-arrow">→</span>
        <div class="cycle-phase">
          <span class="phase-icon">&#127768;</span>
          <span class="phase-name">月落</span>
          <span class="phase-temp">~0°C</span>
        </div>
        <span class="cycle-arrow">→</span>
        <div class="cycle-phase dark">
          <span class="phase-icon">&#127761;</span>
          <span class="phase-name">暗夜</span>
          <span class="phase-temp">&lt; -20°C</span>
        </div>
      </div>

      <!-- Entities -->
      <div class="section">
        <h2>实体</h2>
        <p>该层级中曾有流浪者上报过<strong>笑魇</strong>的存在，但在暗夜中笑魇自带的亮光会被遮盖，导致仍在酒店外的流浪者无法及时辨认并逃离。这也是除低温之外最主要的危险源。同时，在酒店里需要注意座钟、挂钟、机械手表和机械怀表的盘面是否被<strong>布拉格碎片</strong>替代。</p>
      </div>

      <!-- 基地、前哨与社区 -->
      <div class="section">
        <h2>基地、前哨与社区</h2>
        <p>该层级不具备孤立效应，所以存在社区和集群，流浪者可在此处进行交易、休整。由于 SI-6 是很多死区层级逃脱点的最终目的地，<strong>M.E.G.</strong> 在沿海第一酒店设置了紧急救助站。此外，<strong>BNTG</strong> 承包了城市第七酒店的维护工作，并在此开设了大型交易集群地；<strong>T.M.S.</strong> 在林地第四、第五酒店分别建立了联络处和前哨站；<strong>阿尔戈斯之眼</strong>曾在湿地第二酒店和山脉第六酒店设置了监察机构，但由于其核心成员意外离开了 SI 层群，回归概率渺茫，目前这两个社区已几近废弃。其余由流浪者、SI 层群特殊友善实体组建的团体不计其数，承担类似"居委会"的职责。</p>
        <p class="note">需要注意的是，BAUT 并未在该层级设立任何的机构和哨站，具体原因未知。</p>
      </div>

      <!-- 13&-3 -->
      <div class="section special-section">
        <h2>13 &amp; -3</h2>
        <p>BAUT 的朋友为我们提供了这一条讯息：正常情况下，酒店第十三层只有客房（有些比较讲究的酒店甚至没有第十三层）如果见到了一眼望不到头的走廊，只当它不存在就好，请允许这种无限延伸的层级存在一些小瑕疵，最后一扇客房门的位置就是实际的终点。</p>
        <p>地下负三层应当是具有纯白色天花板、墙面、地砖，且照明良好的战略级仓库以及其配套仓管设备间。如果发现大面积的灰色水泥地面、闪烁的日光灯、装潢粗糙至极的区域，可以上报给 M.E.G.，或者反映给 BAUT。这大概率是工程失误。</p>
      </div>

      <!-- BAUT 讯息 -->
      <div class="baut-message">
        <p class="baut-label">BAUT 高层向各组织驻 SI 层群总部高管发送的讯息</p>
        <p>关于近期上报的十三层和负三层的特殊情况，希望贵方莫要介入。SI-6 作为整个几率时空中为数不多的大型枢纽，不能只允许后室中的朋友通行。不过既然在这里，我们就能保证各位以及贵方成员的安全。</p>
        <p class="baut-ps">（负三层的"水泥地"区域有概率通往 Level 1）</p>
      </div>

      <!-- 入口与出口 -->
      <div class="entry-exit">
        <div class="entry">
          <h3>入口</h3>
          <ul>
            <li>在 Level C-444 仰视月亮逃生时有概率来到 SI-3，这之后的第一次切出必然到达 SI-6</li>
            <li>SI 层群各处都散落着度假酒店的广告，如果广告上宣传说规模比一般酒店大，那么就是指的 SI-6，当你意识到这点时把这张广告当成诺克立普贴并正常使用，可到达 SI-6</li>
            <li>更多入口持续探测中……</li>
          </ul>
        </div>
        <div class="exit">
          <h3>出口</h3>
          <ul>
            <li>每个酒店的顶层和地下二层都有通往其他层级的道路，会有地标提示</li>
            <li>更多出口持续探测中……</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="level-footer"><button class="top-btn" @click="scrollToTop">&#9650; 回到顶部</button></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({ id: { type: String, required: true } })
function goBack() { sessionStorage.setItem('skipIntro', '1'); router.push('/') }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
</script>

<style scoped>
.level-page {
  min-height: 100vh;
  background: #f5f4f2;
  padding: 40px;
}

.level-content { max-width: 740px; margin: 0 auto; }

.level-title {
  font-family: var(--font-family);
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900; color: var(--color-black); letter-spacing: -0.04em; margin-bottom: 8px;
}

.level-name {
  font-family: var(--font-family);
  font-size: 1.4rem; font-weight: 500; font-style: italic;
  color: rgba(0,0,0,0.5); margin-bottom: 40px; letter-spacing: 0.04em;
}

/* ── Sections ── */
.section { margin-bottom: 40px; }

.section h2 {
  font-family: var(--font-family); font-size: 1.25rem; font-weight: 700;
  color: var(--color-black); margin-bottom: 14px;
  padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.06);
}

.section p {
  font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85;
  color: rgba(0,0,0,0.7); margin-bottom: 12px; text-indent: 2em;
}

.note {
  color: rgba(0,0,0,0.5) !important; font-style: italic; font-size: 0.9rem !important;
}

/* ── Difficulty ── */
.difficulty {
  background: rgba(0,0,0,0.03); padding: 20px 24px;
  border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.06);
}
.class-label {
  font-weight: 700; font-size: 1.15rem; color: #c47a1e; display: block; margin-bottom: 12px;
}
.class-list {
  list-style: none; padding: 0; margin: 0; display: flex; gap: 24px; flex-wrap: wrap;
}
.class-list li {
  font-family: var(--font-family); font-size: 0.9rem; font-weight: 600;
  color: rgba(0,0,0,0.65); display: flex; align-items: center; gap: 8px;
}
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.safe   { background: #2a9d8f; }
.class-bullet.stable { background: #f4a261; }
.class-bullet.hazard { background: #c4a01e; }

/* ── Cycle diagram ── */
.cycle-diagram {
  display: flex; align-items: center; justify-content: center; gap: 12px;
  padding: 24px; margin-bottom: 40px;
  background: rgba(0,0,0,0.02); border-radius: var(--radius-sm);
  border: 1px solid rgba(0,0,0,0.05); flex-wrap: wrap;
}
.cycle-phase {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 12px 16px; border-radius: 8px;
  background: rgba(255,255,255,0.6);
}
.cycle-phase.dark {
  background: rgba(0,0,0,0.85); color: #ccc;
}
.cycle-phase.dark .phase-name { color: #ccc; }
.cycle-phase.dark .phase-temp { color: #e63946; }
.phase-icon { font-size: 1.5rem; }
.phase-name {
  font-size: 0.85rem; font-weight: 600; color: rgba(0,0,0,0.75);
}
.phase-temp {
  font-size: 0.72rem; color: rgba(0,0,0,0.4); font-family: 'JetBrains Mono', monospace;
}
.cycle-arrow {
  font-size: 1.2rem; color: rgba(0,0,0,0.2);
}

/* ── Special section ── */
.special-section {
  background: rgba(0,0,0,0.015); padding: 24px 28px;
  border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.1);
}
.special-section h2 {
  font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em;
}

/* ── BAUT message ── */
.baut-message {
  margin: 40px 0; padding: 28px 32px;
  background: rgba(230,57,70,0.03); border-radius: var(--radius-sm);
  border-left: 4px solid #e63946;
}
.baut-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
  text-transform: uppercase; color: #e63946; margin-bottom: 16px;
}
.baut-message p:not(.baut-label):not(.baut-ps) {
  font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85;
  color: rgba(0,0,0,0.75); margin-bottom: 10px; text-indent: 2em;
}
.baut-ps {
  font-size: 0.85rem !important; color: rgba(0,0,0,0.4) !important;
  font-style: italic; text-indent: 0 !important;
}

/* ── Entry & Exit ── */
.entry-exit {
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
  margin-top: 40px; padding-top: 24px;
  border-top: 1px solid rgba(0,0,0,0.06);
}
.entry-exit h3 {
  font-family: var(--font-family); font-size: 1rem; font-weight: 600;
  color: var(--color-black); margin-bottom: 8px;
}
.entry-exit ul { list-style: none; padding: 0; }
.entry-exit li {
  font-family: var(--font-family); font-size: 0.9rem;
  color: rgba(0,0,0,0.6); padding: 4px 0;
  border-bottom: 1px solid rgba(0,0,0,0.03);
}

/* ── Strong ── */
strong { color: rgba(0,0,0,0.85); }

@media (max-width: 767px) {
  .level-page { padding: 24px; }
  .entry-exit { grid-template-columns: 1fr; }
  .class-list { flex-direction: column; gap: 6px; }
  .cycle-diagram { flex-direction: column; }
  .cycle-arrow { transform: rotate(90deg); }
}
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
