<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"超蓝之境"</p>

      <div class="section">
        <h2>生存难度：&#x3C8;（精神危害）</h2>
        <div class="difficulty">
          <ul class="class-list">
            <li><span class="class-bullet entity"></span> 实体数量：不定</li>
            <li><span class="class-bullet unstable"></span> 层级稳定性：变化</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h2>描述</h2>
        <p>该层级的主要区域有着类似平原的地理环境，面积约为40万平方千米。流浪者能且仅能通过"门"进入该层级，"门"的形式并不拘泥于传统意义上的门，也可以是进入"入口"或特定区域。</p>
        <p>流浪者进入"超蓝之境"时，首先映入眼帘的便是一望无际的蔚蓝天空，本层级因此得名"超蓝之境"。除此之外则是绵延不绝的草原，其中点缀着些许人类活动的痕迹：或是早已报废的汽车，或是分崩离析的柏油马路，或是孤零零的破碎楼房。</p>
        <p>流浪者进入本层级时，时间通常表现为"白天"。此时层级内基本观测不到活动的实体，但到了<strong>"晚上"</strong>，原本寂静无声的平原便会立马变得"热闹"起来。在此层级中游荡着许多实体，它们的外表会根据流浪者的主观意识发生改变。若流浪者不幸遭遇了本层级的实体，它们会"窃取"流浪者的记忆，并使自己幻化成为被流浪者抱有强烈情感的人或物。小部分实体甚至拥有自己的<strong>"室"</strong>。它们会固定的区域活动，当流浪者误入其中后，会更加容易受到该实体的影响。</p>
        <p>流浪者在遭受本层级实体的精神侵害时，通常常识会受到影响。死者苏生不会令其感到惊讶，神话生物也不是不能出现。最终，流浪者会因为沉溺于自己的情感，投入实体的"怀抱"……部分意志坚定或"灵感"较高的流浪者在接触本层级实体时，能够发现其异常之处，并自主脱离实体影响，甚至帮助他人脱离实体影响。</p>
        <p>幸存者可在本层级内找到现成的"门"，也可以自己创造"门"。发现并找到"打开"它们的方式，即可切入其他层级，且有极小概率可切回前室。</p>
      </div>

      <div class="section sub-level-section">
        <div class="sub-level-header">
          <span class="sub-tag">SI30 子层级</span>
          <p class="sub-name">"彼岸"</p>
        </div>
        <p>在实体影响下完全失去理智的流浪者，会被送入"彼岸"。"彼岸"被描述为本层级的最深处或"世界的尽头"。流浪者进入"彼岸"时，往往身处一片漫长的海岸线，脚下是普通的沙滩，身后是并不高的防波堤。眼前的海洋与蔚蓝的天空融为一体，这震撼人心的美景仿佛并不属于这个世界。眼前的"蔚蓝"也具有本层级其他实体的能力，会扩大流浪者心中的情感，暗示每一位来到此处的流浪者进入其中。倘若流浪者跟从指引走入了"蔚蓝"，则会被本层级永远吞噬，再也无法离开。若流浪者在进入"彼岸"后恢复理智，抵挡住了"蔚蓝"的呼唤，即可在登上堤坝后，通过海之家里的"门"离开。</p>
      </div>
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

.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.entity { background: #9b5de5; }
.class-bullet.unstable { background: #f4a261; }

/* Sub-level section — visually distinct */
.sub-level-section {
  margin: 32px 0;
  padding: 28px 32px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(0,0,0,0.08);
  border-left: 4px solid #264653;
  background: rgba(42,157,143,0.04);
}
.sub-level-header { margin-bottom: 14px; }
.sub-tag {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 3px 8px;
  border-radius: 3px;
  background: rgba(42,157,143,0.12);
  color: #2a9d8f;
  margin-bottom: 6px;
}
.sub-name {
  font-family: var(--font-family);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-black);
  font-style: italic;
  margin: 0;
}
.sub-level-section p {
  color: rgba(0,0,0,0.7);
}

strong { color: rgba(0,0,0,0.85); }

@media (max-width: 767px) {
  .level-page { padding: 24px; }
  .sub-level-section { padding: 20px 20px; }
}
</style>
