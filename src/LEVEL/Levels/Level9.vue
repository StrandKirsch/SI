<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"奇迹之海"</p>

      <!-- 主层级概述 -->
      <div class="section">
        <h2>生存难度：难度 3 → 死区</h2>
        <div class="difficulty">
          <ul class="class-list">
            <li><span class="class-bullet unsafe"></span> 极不稳定</li>
            <li><span class="class-bullet entity"></span> 实体横行</li>
          </ul>
        </div>
        <p class="mt-16">SI-9 由两个子层级构成，分别是 SI-9-1 "巴别塔" 和 SI-9-2 "孤舟"。</p>
      </div>

      <!-- ===== SI-9-1 ===== -->
      <section class="sub-level">
        <div class="sub-tag">SI-9-1</div>
        <p class="sub-name">"巴别塔"</p>

        <div class="section">
          <h2>描述</h2>
          <p>表现为一座建立在悬空岛屿上的螺旋形巨塔，其真实体量受其空间特性无法测量，其主体由无数风格不同的建筑混乱穿插构成。从古老的巴比伦砖石到现代的钢筋混凝土，乃至未来主义，好似所有时代的文明都被强行糅合在这座塔中。</p>
          <p>建筑内部的空间极度非线性，流浪者走过的路面可能会突然断裂，建筑内外的走廊或楼梯会无形中延长或缩短，某些通道可能会突然形成无法离开的死循环。内部的墙壁、地板和天花板上刻满了可辨识的现有文字以及无法辨识的古代文字与壁画，甚至出现二进制编码、计算机代码和不可解读的符号。</p>
          <p>在巨塔各处会延伸出特殊的平台，平台上设有祭坛。祭坛存放有一本书，该书悬浮于祭坛的正中央。塔的最下端联通数条水瀑，水瀑飞流直下，洒入云层。</p>
        </div>

        <div class="section">
          <h2>存在实体</h2>
          <div class="entity-box">
            <p class="entity-name">"变乱之巴别"</p>
            <p>该实体游走于层级建筑内部的各类文字、符号以及壁画中，在某段文字现身时，往往会引发自身所出现位置的非线形空间变化。在出现某段文字、符号或壁画中时，作为实体行动媒介的部分将会离开所处墙面，并强烈吸引流浪者的注意。</p>
            <p>如果流浪者观察该实体过久，将会视观察时间长短受到以下由轻至重的影响：</p>
            <ol class="effect-chain">
              <li>暂时失语</li>
              <li>临时丧失母语能力</li>
              <li>只能理解所观察符号的意思并彻底失去阅读能力</li>
              <li>完全丧失语言能力和阅读能力</li>
              <li>信息过载造成的脑死亡</li>
            </ol>
          </div>

          <div class="entity-box">
            <p class="entity-name">"循迹之苦旅"</p>
            <p>该实体外形为一本手缝皮革书籍，其书页构成特殊，材质不断变换，可能为竹简、羊皮纸、宣纸、石板、电子屏幕以及无法理解的材料，书页上不断变换着各类符号，有的符号残缺不全。</p>
          </div>
        </div>

        <div class="section">
          <h2>入口与出口</h2>
          <h3 class="sub-heading">入口</h3>
          <p>在阅读历史类书籍或者相关材料的时候，如果出现文字丢失/模糊/各种形式的乱码/无意义的替换等异常情况，则有概率切入该层级并进入子层级"巴别塔"。</p>
          <h3 class="sub-heading">出口</h3>
          <ul class="entry-list">
            <li>进入塔内不断向下，将会来到水瀑源头，跳下去将会切入 <strong>SI-30 "超蓝之境"</strong>。</li>
            <li>如果在攀登巨塔的时候来到延伸出的平台上，可通过阅读祭坛上存放的"循迹之苦旅"切入子层级 <strong>SI-9-2 "孤舟"</strong>。</li>
          </ul>
        </div>
      </section>

      <!-- ===== SI-9-2 ===== -->
      <section class="sub-level dead-zone">
        <div class="sub-tag dead-tag">SI-9-2</div>
        <p class="sub-name">"孤舟"</p>
        <p class="dead-label">生存难度：死区</p>

        <div class="section">
          <h2>描述</h2>
          <p>该层级主体是一个悬浮在无尽虚空之中的绝对非实体平面，并有一层类似水的液体海漂浮其上。四周被各类星云和星体环绕，远处还有一个巨大无比的黑洞，摩擦生热与引力能释放赋予其明亮而壮阔的吸积盘。在这些寰宇造物面前，一切都显得如此渺小。</p>
          <p>在液体海中，有无数条由各类生物遗骸和各类物品残骸堆积而成的通路，其分布形同一颗巨树，由粗壮的树干向四周辐射出分枝和根茎。有些"路"短到几步就可以走完，有些"路"则延伸至不可观测的远方。</p>
        </div>

        <div class="section">
          <h2>特殊状态</h2>
          <div class="state-box">
            <p><strong>"热寂"：</strong>整个层级将会无限接近宇宙的死亡，届时新的"路"将不再生成。当 SI-9-2 处于此状态时，SI-9-1 "巴别塔" 的巨塔将会倒塌。</p>
          </div>
          <div class="state-box">
            <p><strong>"坍缩"：</strong>整个 SI-9-2 层级将会在坍塌毁灭后迎来重生。SI-9-1 也会随之重建。</p>
          </div>
        </div>

        <div class="section">
          <h2>存在实体</h2>
          <div class="entity-box">
            <p class="entity-name">"文明之存续"</p>
            <p class="entity-note">该实体为层级中的"路"，下面将该实体简称为"路"。</p>
            <p>流浪者如果在触碰构成该实体的某件物品或生物遗骸时，会有小概率获取到有关该物品的知识或是该生物遗骸的部分记忆，甚至一窥属于该部分实体的文明缩影。</p>
            <p>当流浪者向不存在"路"的虚空水面中踏出新的一步时，可能会生成新的"路"，此时流浪者可以继续探索。如果走出<strong>"生路"</strong>，流浪者会在脚下生成新路。"生路"具有脆弱性，有可能在生成后突然断裂，随后消失在虚空之中。</p>
            <p>有时流浪者所探索出的路将会是<strong>"死路"</strong>，"死路"有概率与已经生成的"生路"别无二致，但是"死路"出现后，流浪者在死路尽头上向虚空踏出新一步时将不会生成路，致使流浪者掉入虚空。"死路"生成时也有概率造成严重的反噬后果，其表现为自我毁灭式的崩坏回退，并对临近的"生路"造成可修复或不可逆的损伤。</p>
            <p>流浪者如果跌入虚空，将会化为构成新"路"的原料。当新"路"生成或流浪者死亡时，实体"循迹之苦旅"的书页上将会诞生新的信息。</p>
          </div>

          <div class="entity-box">
            <p class="entity-name">"信息之海洋"</p>
            <p>该实体表现为该层级中漂浮于虚空之上的水平液体海。构成该实体的"液体"其实是一种特殊的信息载体，并蕴含丰富的精神能量，这使得该实体可以生成新的"路"或是引爆整个层级使其进入"坍缩"。该信息是由触碰"文明之存续"所得。</p>
          </div>

          <div class="entity-box">
            <p class="entity-name">"生存之抉择"</p>
            <p>该实体表现为一个冰冷漆黑的按钮，其只在该子层级处于<strong>"热寂"</strong>状态下出现。一旦按下该按钮，流浪者将会自爆，并引发整个"信息之海洋"的爆炸。爆炸将摧毁所有存在的"路"，并让整个子层级进入"坍缩"状态。"信息之海洋"将会释放出足够子层级进入"坍缩"态的能量，并将摧毁的"文明之存续"转化为信息补充入"信息之海洋"。该实体信息由接触"文明之存续"所得。</p>
          </div>
        </div>

        <div class="section">
          <h2>出口与入口</h2>
          <h3 class="sub-heading">入口</h3>
          <p>由 SI-9-1 通过"循迹之苦旅"切入。</p>
          <h3 class="sub-heading">出口</h3>
          <p>这里没有任何出口。</p>
        </div>
      </section>
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
.section:last-child { margin-bottom: 0; }

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

.mt-16 { margin-top: 16px; }

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

/* ── Sub-level block ── */
.sub-level {
  margin: 40px 0; padding: 36px 40px;
  border-radius: var(--radius-md); border: 1px solid rgba(0,0,0,0.06);
  background: rgba(0,0,0,0.012);
}
.sub-level.dead-zone {
  border-left: 4px solid #e63946;
  background: rgba(230,57,70,0.015);
}

.sub-tag {
  display: inline-block; font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem; font-weight: 600; letter-spacing: 2px;
  padding: 4px 10px; border-radius: 4px; margin-bottom: 8px;
  background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.5);
}
.dead-tag { background: rgba(230,57,70,0.1); color: #e63946; }

.sub-name {
  font-family: var(--font-family); font-size: 1.3rem; font-weight: 600;
  color: var(--color-black); margin-bottom: 28px; font-style: italic; letter-spacing: 0.04em;
}

.dead-label {
  display: inline-block; font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem; font-weight: 700; letter-spacing: 3px;
  color: #e63946; background: rgba(230,57,70,0.08);
  padding: 6px 14px; border-radius: 4px; margin-bottom: 28px;
}

/* ── Entity box ── */
.entity-box {
  background: rgba(0,0,0,0.015); padding: 20px 24px;
  border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.06);
  margin-bottom: 20px;
}
.entity-name {
  font-family: var(--font-family); font-size: 1.1rem; font-weight: 700;
  color: var(--color-black); text-indent: 0 !important; margin-bottom: 10px !important;
}
.entity-note {
  font-size: 0.85rem !important; font-style: italic;
  color: rgba(0,0,0,0.45) !important; text-indent: 0 !important; margin-bottom: 10px !important;
}

/* ── Effect chain ── */
.effect-chain {
  margin: 10px 0 0 2em; padding: 0;
  font-family: var(--font-family); font-size: 0.9rem; line-height: 2;
  color: rgba(0,0,0,0.65);
}
.effect-chain li:last-child { color: #e63946; font-weight: 600; }

/* ── State boxes ── */
.state-box {
  background: rgba(0,0,0,0.02); padding: 14px 20px;
  border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.04);
  margin-bottom: 12px;
}
.state-box p { text-indent: 0 !important; margin-bottom: 0 !important; }

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

strong { color: rgba(0,0,0,0.85); }

@media (max-width: 767px) {
  .level-page { padding: 24px; }
  .sub-level { padding: 24px 20px; }
  .class-list { flex-direction: column; gap: 6px; }
}
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
