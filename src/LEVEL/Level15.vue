<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"幻痛"</p>
      <p class="epigraph-top">"歌舞升平之中，也不要忘记永恒的伤痛"</p>

      <div class="section"><h2>生存难度：运变 宜居 → 4</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet mental"></span> 不定的精神影响</li><li><span class="class-bullet entity"></span> 传染性效应</li><li><span class="class-bullet safe"></span> 充足的资源</li></ul></div></div>

      <div class="section"><h2>层级结构</h2><p>由无数个大型夜店以区块为单位挤压、拼接而成，每个夜店内存在主厅、舞池、BAR、温泉区、客房、包厢等功能区。夜店之间形成连廊式的缓冲区。不同功能区装潢不一，但共同的特点是：<strong>白底红框黑图案的"手机静音"提示</strong>。</p><p><strong>主厅：</strong>大型铁框灯架，大型 LED 屏，大型 DJ 台，地势高于舞池 2 米，蓝色系射灯。<strong>舞池：</strong>地势基准点，紫色、绿色、黄色系射灯。<strong>BAR：</strong>1m 地势，暖黄色地面灯带，卡座，吧台。</p></div>

      <div class="section"><h2>特殊实体 "电话"</h2><p>随机发出特定的"电话铃声"并在周围一定范围内引发认知污染。外形为任意形制的固定或移动通讯设备。流浪者在认知干扰产生的幻觉中"死亡"会使身上的通讯设备转化为"电话"，同时流浪者大脑停止活动。</p></div>

      <div class="section"><h2>SI-15 相关效应</h2><p><strong>半孤立效应：</strong>流浪者以 1 至 5 名为一个单位被孤立。<strong>"安全时间"效应：</strong>流浪者切入 SI-15 时会有一段时间不受到认知干扰影响。</p></div>

      <!-- 子层级 -->
      <section class="sub-level"><div class="sub-tag">子层级 I</div><p class="sub-name">夜店</p><p>如上所述。</p></section>
      <section class="sub-level dead-zone"><div class="sub-tag dead-tag">子层级 II</div><p class="sub-name">医院</p><p>无 I 中的污染类实体，只有无法清理的尸体和定时刷新的医疗物资。该实体（注：指医院中的实体）会主动攻击流浪者，攻击欲望高，且部分实体会伪装成医护人员潜伏各处。请注意分辨。该层分为一、二、三楼三层，每一层成模块化无限延展。从 I 中切出有概率进入 II。从 II 中切出一定会来到其他 SI 层级。</p></section>

      <div class="epigraph-bottom"><p>那都是看到新闻后，他们的家人朋友打来而响起的</p><p>舞池里的尸体堆里密密麻麻的电话铃声</p><p>那都是仇恨的枪声过后</p><p>你所能听到的无数幻痛</p></div>
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
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: var(--color-black); margin-bottom: 12px; font-style: italic; }
.epigraph-top { text-align: center; font-style: italic; font-size: 0.9rem; color: rgba(0,0,0,0.4); margin-bottom: 32px; }
.section { margin-bottom: 28px; }
.section h2 { font-family: var(--font-family); font-size: 1.1rem; font-weight: 700; color: var(--color-black); margin-bottom: 10px; padding-bottom: 4px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.8; color: rgba(0,0,0,0.7); margin-bottom: 8px; text-indent: 2em; }
.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.mental { background: #9b5de5; }
.class-bullet.entity { background: #e63946; }
.class-bullet.safe { background: #2a9d8f; }
.sub-level { margin: 24px 0; padding: 24px 28px; border-radius: var(--radius-md); border: 1px solid rgba(0,0,0,0.06); background: rgba(0,0,0,0.01); }
.dead-zone { border-left: 4px solid #e63946; }
.sub-tag { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 2px; padding: 3px 8px; border-radius: 3px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.5); margin-bottom: 6px; }
.dead-tag { background: rgba(230,57,70,0.1); color: #e63946; }
.sub-name { font-family: var(--font-family); font-size: 1.15rem; font-weight: 600; color: var(--color-black); margin-bottom: 16px; font-style: italic; }
.epigraph-bottom { margin-top: 32px; padding: 28px; background: rgba(0,0,0,0.015); border: 1px dashed rgba(0,0,0,0.1); border-radius: var(--radius-sm); text-align: center; }
.epigraph-bottom p { font-family: var(--font-family); font-size: 0.9rem; line-height: 2.2; color: rgba(0,0,0,0.55); font-style: italic; margin-bottom: 0 !important; }
strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } }
</style>
