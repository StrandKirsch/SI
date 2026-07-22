<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"县"</p>

      <div class="section">
        <h2>生存难度：孤立效应</h2>
        <div class="difficulty">
          <ul class="class-list">
            <li><span class="class-bullet stable"></span> 稳定</li>
            <li><span class="class-bullet mental"></span> 精神影响</li>
            <li><span class="class-bullet entity"></span> 大量无害实体</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h2>描述</h2>
        <p>Level SI-23 "县" 是一个十分独特的层级。本层级内的空间形态不同于任何已知的空间形态，其特征是与层级内流浪者的感知有高度一致性。这意味着，该层级没有固定的形态。M.E.G. 根据若干深入层级并成功定居的流浪者传来的报告分析出该层级具有"孤立效应"。</p>
        <p>由于本层级的"孤立效应"特征，M.E.G. 无法准确描述其内部形态，但根据流浪者的报告可以发现该层级内部形态存在某种共性：</p>
        <ol class="common-list">
          <li>在初次切入层级 SI-23 时，当地时间均为深夜或凌晨，夜空晴朗无星。</li>
          <li>层级 SI-23 的内部场景均与前厅中存在的中国西南地区的县级市高度吻合。</li>
          <li>层级 SI-23 内的所有室外灯光均为橙黄色，灯下必定存在一种体表类似木屑，散发出木头气味的飞蛾。这种飞蛾种群数量极大，且拥有智慧，能与流浪者进行精神交流。M.E.G. 暂且称呼其为"木蛾"。</li>
          <li>层级 SI-23 内的气味具有强烈的心理暗示作用（部分激进的研究人员认为其具有成瘾性）。所有流浪者都不约而同地在报告中花大篇幅描写层级内的气味，且明显带有正面的主观色彩。</li>
        </ol>
        <p>奇怪的是，"木蛾"无法以任何已知的方式带出层级 SI-23——有一些流浪者切出层级 SI-23，他们试图带出一些"木蛾"样本，可所有"木蛾"最终都变成了极为普通的铅笔屑。而切出的流浪者也会快速忘记层级内部的所有景象——但对于层级内的气味，他们记得一清二楚。</p>
        <p>值得一提的是，迄今为止，进入该层级或曾进入过的所有流浪者都维持着生理健康，这在理性客观而冷漠残酷的后室世界中十分罕见。但也有部分流浪者在该层级长期独居后表现出了不同程度的精神损伤，均不致命。目前 M.E.G. 认为其致病原因是过度孤独。</p>
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
.difficulty { background: rgba(0,0,0,0.03); padding: 16px 20px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 24px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.95rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 8px; }
.class-bullet { display: inline-block; width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.stable { background: #f4a261; }
.class-bullet.mental { background: #9b5de5; }
.class-bullet.entity { background: #2a9d8f; }
.common-list { margin: 8px 0 16px 2em; padding: 0; }
.common-list li { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.8; color: rgba(0,0,0,0.7); padding: 4px 0; }
strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } .class-list { flex-direction: column; gap: 6px; } }
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
