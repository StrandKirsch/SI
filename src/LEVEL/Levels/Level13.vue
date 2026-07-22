<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"天文钟"</p>

      <!-- MEG 侧 -->
      <section class="faction-section meg"><div class="faction-tag">MEG 侧</div>
        <div class="section"><h2>生存难度：א</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet unsafe"></span> 不安全</li><li><span class="class-bullet twist"></span> 时空扭曲</li><li><span class="class-bullet entity"></span> 未知实体</li></ul></div></div>
        <div class="section"><h2>层级描述</h2><p>该层级被描述为一个无限延伸的，内部空间具有精密机械结构的房间。其背景色为日落后天空的蓝紫色，无自然光源，但金属零件会散发光泽。经探索，该层级的房间均为同心扇环状。由于该层级的特殊性质，对其圆心和圆周的探索均以失败告终。</p><p>流浪者刚进入该层级时，房间内最大的机械零件不超过 1m³；越靠近圆心的房间，其面积越小，内部零件也更加细小；越远离圆心的房间，其面积越大。已探明最小的零件体积约为 1dm³，最大的零件体积约为 1000m³。一位资深机械师发现了明显的星座轮等结构，推测它们大概率是在驱动一台天文钟。</p><p>该层级随探索距离的增加会发生<strong>时空扭曲</strong>。向圆心探索的流浪者会发现过去一段时间内的场景；向外探索则会提前体验自己的未来——大多是流浪者最大的愿望、理想、执念。但事件走向会从理想逐渐变得糟糕，带来精神损伤。MEG 不建议流浪者在该层级久留。</p><p>在探索过程中，流浪者可在层级模拟出的场景中找到一种特殊容器，内装有<strong>液态星云</strong>。拾取容器后即可切出层级。</p></div>
        <div class="section"><h2>探索记录</h2><p>SI-13 是非常稳定的能源产出地。MEG 曾建立开采队伍，但在第【数据删除】次任务中只有少数几人成功切出。结论：该层级带来的精神损伤不可逆，正常流浪者一生中只能有限次地探索该层级。</p><p>MEG 曾招募完全失忆的流浪者向圆心探索，他们均未受到精神损伤——但也未能发现星云。一位自称曾出生于战火之中的流浪者（没有"美好的回忆"）自愿探索，但在进入第【数据删除】个房间时突然精神崩溃。</p></div>
        <div class="section classified"><h2>BAUT 讯息</h2><p>近日 SI-13 的切入人次异常上升。BAUT 出于人道主义关怀，将在每月配给中添加星云补给。BAUT 在此呼吁流浪者不要在非必要情况下进入 SI-13。</p></div>
      </section>

      <!-- BAUT 侧 -->
      <section class="faction-section baut"><div class="faction-tag baut-tag">BAUT 侧 · C 等级以上</div>
        <div class="section"><h2>层级性质：E</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet stable"></span> 稳定</li><li><span class="class-bullet safe"></span> 易开发</li><li><span class="class-bullet energy"></span> 含能</li></ul></div></div>
        <div class="section"><h2>叙述</h2><p>这一层是重要的能源基地，外观上看是无限广阔的"星云海"。一般情况下，储能部派遣队员部署采集装置直接在星云中开采，也可经由 SI-？？的观察窗间接开采。MEG 发现 SI-13 的布拉格碎片并公布文档后，切入人次异常升高。为确保能源安全，月度配给物质中添加了星云项目。</p></div>
        <div class="section"><h2>实体：布拉格碎片</h2><p>该实体外形类似一面简化后的前厅"布拉格广场"上的天文钟，悬浮在无限的星云"海"中，数量无穷多。内部结构由"扇区"和"层"两个维度定义，几何中心处为控制核心。该实体吸收其他智慧实体在心理落差中释放的精神力来维持自身运转，同时将星云吸收、压缩、封装以吸引其他智慧实体。层级中存在"无名之火"用于维持布拉格碎片相对分散的状态。</p></div>
        <div class="section"><h2>特殊事件</h2><p>维护部上报了一起布拉格碎片异常消失的情况。行动部 EL021 介入，但没有找到目标人物。随后 BAUT 发布广域通讯寻找一名昔民女孩。在等待回信期间，SI-？？观察窗传回的全局影像中出现了一名未知男性。数支行动小队开始在稳定区内寻找相关线索。</p></div>
      </section>

      <div class="section"><h2>入口与出口</h2><h3 class="sub-heading">入口</h3><p>在任意层级找到指针位置异常的时钟并切出可到达此层级。MEG 不建议流浪者在 SI 层群佩戴非传统形制手表。在 Level SI-3 中切入显示着天文钟的电子屏幕可进入此层级。</p><h3 class="sub-heading">出口</h3><p>拾取星云后切出可来到 Level SI-6。推测探索到圆心或圆周可到达 SI-1（未经证实）。诺克立普贴使用后有 82% 的概率失效。</p></div>
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
.sub-heading { font-family: var(--font-family); font-size: 0.95rem; font-weight: 600; color: var(--color-black); margin: 12px 0 6px 0; }
.faction-section { margin-bottom: 32px; padding: 28px 32px; border-radius: var(--radius-md); border: 1px solid rgba(0,0,0,0.06); }
.faction-section.meg { border-left: 4px solid #2a9d8f; background: rgba(42,157,143,0.012); }
.faction-section.baut { border-left: 4px solid #e63946; background: rgba(230,57,70,0.012); }
.faction-tag { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 2px; padding: 3px 8px; border-radius: 3px; background: rgba(42,157,143,0.1); color: #2a9d8f; margin-bottom: 16px; }
.baut-tag { background: rgba(230,57,70,0.1); color: #e63946; }
.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.unsafe { background: #e63946; }
.class-bullet.twist { background: #9b5de5; }
.class-bullet.entity { background: #2a9d8f; }
.class-bullet.stable { background: #f4a261; }
.class-bullet.safe { background: #2a9d8f; }
.class-bullet.energy { background: #e76f51; }
.classified { background: rgba(0,0,0,0.015); padding: 16px 20px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.1); }
strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } .faction-section { padding: 20px 16px; } }
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
