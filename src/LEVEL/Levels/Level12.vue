<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"西西弗斯"</p>

      <p class="overview">该层级分为两层：Level SI-12.1 与 Level SI-12.2。从任意位置切入 Level SI-12 均会先进入 Level SI-12.1。</p>

      <!-- SI-12.1 -->
      <section class="sub-level"><div class="sub-tag">SI-12.1</div><p class="sub-name">"无尽之旅"</p>
        <div class="section"><h2>生存难度：ψ 无 → 高危精神污染</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet safe"></span> 无实体</li><li><span class="class-bullet stable"></span> 稳定</li></ul></div></div>
        <div class="section"><h2>描述</h2><p>Level SI 12.1 由 SI-12.1.1 至 SI 12.1.30 共 30 个子层级构成，且这 30 个层级中均有稳定切出点，切出后便会进入 Level SI 12.2。30 个子层级空间构成相同。SI 12.1 中各层级被奇迹之海（TMS）认定存在时空异常，后经多次考察，Level SI-12.1 中只存在认知危害，且随层级编号增大不断加深。</p><p>初入 SI 12.1，会被强制进入 SI-12.1.1，并且无论切入时是否存在既定目的地，均会被 SI 12.1 将目的地变更为当前子层级切出点并受强烈指引。当在 Level 12.1.1 中走到距切出点 14km 时，此处将被认定为起始点，并在走出一定距离后（2&lt;x&lt;7）进入下一深度的 SI 12.1 的子层级。</p><p>根据 TMS 的归纳，层级编号代表了该层级的"下潜深度"：<strong>1~5 为浅滩，6~15 为深海，16~27 为深渊，28~30 为冥河</strong>。认知危害随深度增加而加剧，并逐渐造成幻听幻视、情绪不稳定、精神分裂等症状，并伴随使你停止前进的暗示。一旦进入者彻底放弃前进，将会永远被困在当前层级，最终因认知污染而死。</p><p>进入下一深度时，深度会随机增加 1~5。同时，每增加一次深度，可从起始点走出的距离会增加 1~4km。若深度已达 30，则每返回一次起始点，可行进距离增加 4km。</p><p>当初次进入 SI 12.1 时，每人将会见到不同形式的情景，但初次走出 4km 时，便会找到有关西西弗斯的图样，以及其旁铭文：<em>"西西弗斯推着巨石，行迹已然模糊，时间失去意义。新一次前行，总要学会放弃"</em>。</p></div>
        <div class="section"><h2>入口与出口</h2><p>多个切入点均处于 SI 层群，较为稳定。切出点在每个子层级中均存在，极其稳定，且均通向 Level SI-12.2。</p></div>
      </section>

      <!-- SI-12.2 -->
      <section class="sub-level safe-zone"><div class="sub-tag safe-tag">SI-12.2</div><p class="sub-name">"幻想乡"</p>
        <div class="section"><h2>生存难度：宜居</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet safe"></span> 无认知影响</li><li><span class="class-bullet stable"></span> 无实体 稳定</li><li><span class="class-bullet entity"></span> 资源充足</li></ul></div></div>
        <div class="section"><h2>描述</h2><p>Level SI 12.2 是一片丰饶无比的土地，地貌多样，风景秀美，有使人心情愉悦并缓慢治疗精神类创伤和认知影响的效果。同时，该层级内随机刷新物资，且较为丰富。存在大型聚居地。TMS 已在此处建立大型基地并开展基建，已存在多个由其建立的聚居地与外贸点。同时 TMS 与红星和 MEG 开展相关合作。</p></div>
      </section>

      <!-- 附件 -->
      <div class="section appendix"><h2>附件一：深度测绘行动</h2><p>由 C.J.Kra 博士发起，以陈博士"下潜深度"分级理论为理论基础，TMS 开展了 Level SI-12.1 的子层级数量探查以及深度标定。共测量出 30 个子层级，深度标记 1-30。从 28-30 深度活着回来的仅有雪风小队（深度 28 三人）、"震中"Atlas 上校（深度 29）、以及"白日梦想家"（深度 30，一人）。</p></div>
      <div class="section appendix"><h2>附件二</h2><p>精神学者 B 提出 Level SI 12 本身可能为实体，或为实体意识精神所化，乃至 SI 层群也可能本身为实体或为实体所化。</p></div>
      <div class="section appendix"><h2>附件三：雪风小队通讯记录（节选）</h2>
        <p class="log-line">—雪风—：时空异常在逐步加剧，认知污染出现。你们有没有听到很多呓语</p>
        <p class="log-line">—轻骑士3—：很多噪音在我脑海中，试图让我放弃前进，该死。</p>
        <p class="log-line">—雪风—：如果不是放弃，而是去放弃些什么的……也许，是放弃放弃本身。</p>
        <p class="log-line">—雪风—：动起来吧，咱们可不能困在这儿。</p>
        <p class="log-note">*第十六次尝试，雪风小队抵达目标地，与雨燕队接触。四人均受认知污染。</p>
        <p class="log-line">—雪风—：为什么你们的留言里要用"划船"和"灯塔"作意象？</p>
        <p class="log-line">—雨燕—：我们在一条船上，要划船到另一个地方，那有个很亮的灯塔在指引。</p>
        <p class="log-line">—雪风—：看来每批进入的人经历是不同的，但空间却是同一个，真是怪异。</p>
        <p class="log-note">=行动归档完毕，数据已保存=</p>
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
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: var(--color-black); margin-bottom: 20px; font-style: italic; }
.overview { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.7; color: rgba(0,0,0,0.6); margin-bottom: 36px; text-indent: 2em; }
.section { margin-bottom: 28px; }
.section h2 { font-family: var(--font-family); font-size: 1.1rem; font-weight: 700; color: var(--color-black); margin-bottom: 12px; padding-bottom: 4px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.8; color: rgba(0,0,0,0.7); margin-bottom: 8px; text-indent: 2em; }
.sub-level { margin: 32px 0; padding: 28px 32px; border-radius: var(--radius-md); border: 1px solid rgba(0,0,0,0.06); background: rgba(0,0,0,0.012); }
.safe-zone { border-left: 4px solid #2a9d8f; background: rgba(42,157,143,0.015); }
.sub-tag { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 2px; padding: 3px 8px; border-radius: 3px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.5); margin-bottom: 6px; }
.safe-tag { background: rgba(42,157,143,0.1); color: #2a9d8f; }
.sub-name { font-family: var(--font-family); font-size: 1.2rem; font-weight: 600; color: var(--color-black); margin-bottom: 24px; font-style: italic; }
.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.safe { background: #2a9d8f; }
.class-bullet.stable { background: #f4a261; }
.class-bullet.entity { background: #9b5de5; }
.appendix { background: rgba(0,0,0,0.01); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.08); }
.log-line { text-indent: 0 !important; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem !important; color: rgba(0,0,0,0.55) !important; padding-left: 8px; border-left: 2px solid rgba(0,0,0,0.08); margin-bottom: 4px !important; }
.log-note { text-indent: 0 !important; font-style: italic; font-size: 0.82rem !important; color: rgba(0,0,0,0.4) !important; margin: 12px 0 6px !important; }
strong { color: rgba(0,0,0,0.85); }
em { font-style: italic; color: rgba(0,0,0,0.5); }
@media (max-width: 767px) { .level-page { padding: 24px; } .sub-level { padding: 20px 16px; } }
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
