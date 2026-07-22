<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"冷却，直至荒凉"</p>

      <!-- Survival Difficulty -->
      <div class="section">
        <h2>生存难度：等级 4</h2>
        <div class="difficulty">
          <ul class="class-list">
            <li><span class="class-bullet unsafe"></span> 不安全</li>
            <li><span class="class-bullet stable"></span> 较稳定</li>
            <li><span class="class-bullet entity"></span> 实体数量多</li>
          </ul>
        </div>
      </div>

      <!-- 层级外观 -->
      <div class="section">
        <h2>层级外观</h2>
        <p>SI-5 被描述为一个盆地中的"废弃"工业基地，由于 SI-5 的舒张效应，勘测队始终无法接近层级外围的山脉，所以当前认定 SI-5 的面积无穷大。层级中央是一座建在自然水系旁边的、看上去已经服役许久的双曲线冷却塔，外围则是无尽的厂房和工业设施。该层级长期处于类似于雾霾的压抑天气中，但是空气质量仍然优良，工业区刺鼻的空气被一种带有清淡烟味的潮湿气体取代。</p>
        <p>经过勘测队的调查，该层级看上去处于"废弃状态"，厂房墙漆脱落、大门半掩、内部设施老化，但是所有工业设施都在以一个较低的速率持续运行，且整体没有继续衰退的迹象。同时，层级中工业区内的树木的树干焦黑，叶片呈棕红色，但仍处于存活状态。水系中能发现小型鱼类实体等生命存在，河流上有星星点点的小船，大多数是空空如也的。</p>
        <p>中央的冷却塔外漆已尽数脱落，露出内部的砖石，外侧的爬梯也锈迹斑斑，但它依旧苟延残喘地履行着职责：塔顶慢悠悠地吐着白雾，塔底的喷淋头向水池释放"热水"，成为了这个空间里为数不多的声源。基于种种勘测结果，最终得出的结论是：该层级的生态和工业运转在未知效应下形成了一种特殊的平衡状态。</p>
        <p class="attribution">——勘测官 L 的行动日志</p>
      </div>

      <!-- 实体情况 -->
      <div class="section">
        <h2>实体情况</h2>
        <p>该层级实体数量多，大多数为悲尸、成年无面灵和猎犬。但它们都不活跃，只是自顾自地在厂房之间穿梭，无面灵有时会驾着小船在河流湖泊上游荡，猎犬更倾向于趴在大门口或者树底下肢团伪装的灌木旁。流浪者在不产生较大噪音（比工业设备噪音和喷淋头水声大）和不使用较亮光源的情况下不容易被攻击。</p>
        <p>无名之火和笑魇不会在该层级出现，布拉格碎片在进入该层级后会变成灰色，钝人不会选择隔墙攻击流浪者，派对客不喜欢这里。</p>
      </div>

      <!-- 探索记录 -->
      <div class="section">
        <h2>探索记录</h2>
        <p>流浪者进入该层级时大概率会在冷却塔下，此时可以通过塔下承重柱的空隙看到塔底的喷淋系统。经检测，喷淋的液体为液态痛苦和杏仁水的混合稀溶液。由于勘测队在冷却塔附近的厂房中发现了杏仁水，故推测冷却塔的一个作用为分离液态痛苦和杏仁水，但是液态痛苦的去处仍然未知。</p>
        <p>从中心向外探索，会发现不同功能的厂房。厂房被专门化地用于生产特定的一种工业品，设备会以一个低速率、高效率的模式生产普通工业品甚至火盐、皇家口粮等较稀有物品，但产量低得令人绝望。大多数烟气会被收集起来压缩为碳等较低级的工业品，这使得该层级的空气质量得以提升。层级内流水的成分为极稀的杏仁水，来自于冷却塔顶的蒸汽。</p>
        <p class="quote">"这个层级整体就给人一种半死不活的感觉，无聊透顶！"</p>
        <p class="attribution">——某位勘测员看着从自己面前若无其事地溜过去的悲尸，小声抱怨道。</p>
      </div>

      <!-- 入口出口 -->
      <div class="section">
        <h2>入口与出口</h2>
        <h3 class="sub-heading">入口</h3>
        <ul class="entry-list">
          <li>从 SI-4 迷宫尽头的红顶洋房后门离开进入 SI-5。</li>
          <li>在序号 &gt;5 的层级中死亡会以特殊的悲尸形态进入冷却塔内部（次数有限，因人而异）。</li>
          <li>在任意 5 以外的层级中找到一把周围有小矩形样式粒子效果的灰色锤子并用其敲击任意平面以进入厂房（这会产生较大的噪音）（锤子数量有限但具体数量和分布情况未知）。</li>
          <li>兼容特殊的切入方式。</li>
        </ul>

        <h3 class="sub-heading">出口</h3>
        <p>适当地放下一些包袱吧，慢慢遛一遛，只要你想，总能出去的。</p>
        <p class="hint">（怀有离开的念头，并保持静默状态探索一段时间后自然切出，不要引起实体的攻击）</p>
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
  background: var(--color-off-white);
  padding: 40px;
}

.level-content { max-width: 800px; margin: 0 auto; }

.level-title {
  font-family: var(--font-family); font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900; color: var(--color-black); letter-spacing: -0.04em; margin-bottom: 8px;
}

.level-name {
  font-family: var(--font-family); font-size: 1.5rem; font-weight: 600;
  color: var(--color-black); margin-bottom: 40px; font-style: italic; letter-spacing: 0.04em;
}

/* ── Sections ── */
.section { margin-bottom: 36px; }

.section h2 {
  font-family: var(--font-family); font-size: 1.15rem; font-weight: 700;
  color: var(--color-black); margin-bottom: 14px;
  padding-bottom: 6px; border-bottom: 1px solid rgba(0,0,0,0.06);
}

.section p {
  font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85;
  color: rgba(0,0,0,0.7); margin-bottom: 10px; text-indent: 2em;
}
.section p:last-child { margin-bottom: 0; }

.sub-heading {
  font-family: var(--font-family); font-size: 1rem; font-weight: 600;
  color: var(--color-black); margin: 16px 0 8px 0;
}

/* ── Difficulty ── */
.difficulty {
  background: rgba(0,0,0,0.03); padding: 16px 20px;
  border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05);
}
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 24px; flex-wrap: wrap; }
.class-list li {
  font-family: var(--font-family); font-size: 0.95rem; font-weight: 600;
  color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 8px;
}
.class-bullet { display: inline-block; width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.unsafe   { background: #e63946; }
.class-bullet.stable   { background: #f4a261; }
.class-bullet.entity   { background: #9b5de5; }

/* ── Entry list ── */
.entry-list { list-style: none; padding: 0; margin: 0 0 16px 0; }
.entry-list li {
  font-family: var(--font-family); font-size: 0.95rem; line-height: 1.7;
  color: rgba(0,0,0,0.7); padding: 6px 0 6px 16px; position: relative;
  border-bottom: 1px solid rgba(0,0,0,0.04);
}
.entry-list li::before {
  content: '→'; position: absolute; left: 0; top: 6px;
  color: rgba(0,0,0,0.25); font-weight: 600; font-size: 0.85rem;
}
.entry-list li:last-child { border-bottom: none; }

/* ── Special text styles ── */
.attribution {
  text-align: right; font-style: italic; color: rgba(0,0,0,0.4) !important;
  font-size: 0.85rem !important; text-indent: 0 !important; margin-top: 4px !important;
}
.quote {
  text-indent: 0 !important; font-style: italic; font-weight: 500;
  color: rgba(0,0,0,0.55) !important; padding-left: 16px;
  border-left: 2px solid rgba(0,0,0,0.1);
}
.hint {
  text-indent: 0 !important; font-size: 0.85rem !important;
  color: rgba(0,0,0,0.4) !important; font-style: italic;
}

@media (max-width: 767px) {
  .level-page { padding: 24px; }
  .class-list { flex-direction: column; gap: 6px; }
}
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
