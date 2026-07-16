<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"possibility"</p>

      <div class="section"><h2>生存难度：2（宜居）</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet unsafe"></span> 不安全</li><li><span class="class-bullet stable"></span> 稳定</li><li><span class="class-bullet entity"></span> ？？？</li></ul></div></div>

      <div class="section"><h2>层级概述</h2><p>Level SI-35 "possibility"，其已探明区域为面积 335 平方千米的一块陆地，四周为海洋。该陆地几乎被平原与河流填充，其土壤极其适合种植作物。这块陆地上有着 3-4 个大城市以及若干小聚落，M.E.G、B.N.T.G、BAUT 等组织皆与这里的城市有所合作，TMS 也在此处常驻几支小队以应对特殊实体"灾"。物资来源有耕作、交易以及通过特殊实体"盒"获得。</p></div>

      <div class="section"><h2>Phenomenon —— "盒"化</h2><p>在 Level SI-35 中，封闭的容器有时会出现特殊的变化，称之为"盒"化。受影响容器上会出现一种类似荆棘的纹路，在 30 分钟内会慢慢变得明显，最后该纹路将会发出紫光，此时该容器会被转化为特殊实体<strong>"盒"</strong>。</p></div>

      <div class="section"><h2>特殊实体 "盒"</h2><p>表现为周身有着发着紫光荆棘纹路的密封容器。被流浪者打开时，内容物将会是完全随机的：可能蹦出几千瓶杏仁水、几乎无限的皇家口粮、各种武器、各种物资；也有可能从中切入实体（但不会出现比"灾"更危险的实体）；甚至有可能出现切入其他层级的通道。特殊实体"盒"不可被带出 Level SI-35。</p></div>

      <div class="section"><h2>特殊实体 "灾"</h2><p>仅会在"盒"中出现的实体。"灾"在同一时间只能出现一个。在外形上表现为一只西方龙，站立时约 10 米高，龙尾约有 3 米长。破坏力强大，具有一定程度的智慧，且每次现身时会展现不同的能力（身体素质强化、高密度能量束、快速自愈、短距离空间转移、使役死灵士兵、皮肤酸液、传送吞入者等）。每次出现只会拥有一种特性。由于"灾"存在时"盒"不会再出现新的"灾"，此时为囤积物资的好时机。</p></div>

      <div class="section"><h2>切入和切出</h2><h3 class="sub-heading">切入</h3><p>保持着好奇心不目视其内容物地打开一个容器并摸索就有可能切入 Level SI-35。</p><h3 class="sub-heading">切出</h3><p>通过特殊实体"盒"或被特殊形态的"灾"吞入腹中可以切出。</p></div>
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
.sub-heading { font-family: var(--font-family); font-size: 0.95rem; font-weight: 600; color: var(--color-black); margin: 12px 0 6px 0; }
.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.unsafe { background: #e63946; }
.class-bullet.stable { background: #f4a261; }
.class-bullet.entity { background: #9b5de5; }
strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } }
</style>
