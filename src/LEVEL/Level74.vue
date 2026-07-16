<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"逐日航迹"</p>

      <div class="section"><h2>生存难度：宜居</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet safe"></span> 安全</li><li><span class="class-bullet stable"></span> 稳定</li></ul></div></div>

      <div class="section"><h2>层级描述</h2><p>Level SI-74 是一片无边无际的高空阈限空间，全域被永恒的黄昏笼罩，唯一的核心存在是一架通体银白、机身带有协和标识的飞行器，型号为协和 001 号原型机。这架飞机拆除了部分乘客座椅以安装科学仪器，并在机背开设了专用观察窗，流浪者将其命名为<strong>逐日号</strong>。</p><p>该层级没有地面、没有云层，只有从橘红渐变至暗紫的黄昏天幕，以及晨昏线后恒定追随的黑夜。层级内空气稀薄却可供人类正常呼吸，环境无风无云，整片空间寂静无比，唯有逐日号引擎的轰鸣持续回荡。整个层级空间呈环形闭合状态，逐日号始终沿着固定航线，朝着天空尽头那轮日蚀高速飞行，飞行速度恒定维持在 <strong>2.04 马赫</strong>。</p><p>层级存在固定循环规则：每次追逐月影 74 分钟后，飞机燃油便会彻底耗尽，飞行速度随之急剧下降，无法始终追上日蚀。逐日号会一次次进入日蚀的庞然巨影之中，奋力追逐，再被月影抛离；等到天幕重现天明，月影再度掠过机身时，飞机燃油会自行完全补充，机体随即重新加速，开启下一轮追逐，如此周而复始，永不停歇。</p><p>层级内所有可活动区域仅限逐日号客机的机身内部与机翼表面，除此之外无任何可落脚、可探索的空间。</p></div>

      <div class="section appendix"><h2>附录：追逐往日之影</h2><p class="poetic">油量见底，速度在坠<br/>晨昏线从舷窗里追上<br/>月影不驻，往日不返<br/>尾焰滑入未来的黑</p></div>

      <div class="section"><h2>入口</h2><p>极少数情况下，乘坐飞行器、把玩飞机模型，或是内心怀揣"驻留过往"强烈执念的人，会意外切入该层级。</p></div>

      <div class="section"><h2>出口</h2><p>当逐日号引擎发出异响、机身出现剧烈颠簸时，迅速找到机舱内任意座位坐稳系好安全带，此时有 60% 概率被随机传送至其他危险层级，40% 概率进入安全层级。</p></div>
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
.section { margin-bottom: 32px; }
.section h2 { font-family: var(--font-family); font-size: 1.1rem; font-weight: 700; color: var(--color-black); margin-bottom: 12px; padding-bottom: 4px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85; color: rgba(0,0,0,0.7); margin-bottom: 8px; text-indent: 2em; }
.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.safe { background: #2a9d8f; }
.class-bullet.stable { background: #f4a261; }
.appendix { background: rgba(0,0,0,0.01); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.08); }
.poetic { text-indent: 0 !important; font-style: italic; text-align: center; line-height: 2.2 !important; color: rgba(0,0,0,0.5) !important; }
strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } }
</style>
