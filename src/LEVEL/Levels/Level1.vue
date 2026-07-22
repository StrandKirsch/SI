<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>

      <!-- ===== MEG 侧 ===== -->
      <section class="faction-section meg">
        <div class="faction-tag">MEG 侧 · 隐秘层级</div>
        <p class="level-name">"存档点"</p>

        <!-- Survival Difficulty -->
        <div class="section">
          <h2>生存难度：等级 0</h2>
          <div class="difficulty">
            <ul class="class-list">
              <li><span class="class-bullet unsafe"></span> 疏离</li>
              <li><span class="class-bullet stable"></span> 寂静</li>
              <li><span class="class-bullet minimal"></span> 复原</li>
            </ul>
          </div>
        </div>

        <!-- 概述 -->
        <div class="section">
          <h2>概述</h2>
          <p>有少数流浪者上报了与档案库中入档的任何一个层级匹配度为 0 的新区域，MEG 整理知情者的口述和视觉资料，经过内部讨论，将这一区域定性为新的隐秘层级。相关档案不会在主页中显示，进入该层级后，档案会自动打开。</p>
          <p>该层级被描述为一座高 10 米的酒店大堂，左右两面为贯通天花板和地板的落地窗，透过它们可以看到室外环境：永夜之下的公园，似乎望不到边际。天空是一片纯粹的黑，而地面的路灯星星点点。前后则分别是前台和电梯间，前台空无一人，而电梯间被高大、厚重的黄铜镀铬栅栏封闭。大堂中央是一座 5 米高的悬浮晶胞模型，似乎是一种全息投影。透过代表原子的球状结构，可以看到其内部的微缩层级景观，每一个"原子"代表一个层级。但有些"原子"并不透明，无法观察内部结构。流浪者虽然因为围栏隔断而不能直接接触模型，但可以通过围栏外的操作台进行交互，其中一个可选项就是挑选一个层级作为目的地进行切出。</p>
          <p>需要注意的是，上报有关该层级的信息的流浪者均为经验丰富的高级调查员，但他们均没有进入该层级前一小段时间的记忆，只是模糊地记得他们曾在切入该层级前参与过极度危险、激进的探索。MEG 成立调查小队按照上报者提供的描述寻找该层级入口的行动均以失败告终，这曾一度使得档案部将该层级定性为一种"现象"或"效应"，但所有上报者的唯一共识就是他们坚决认定该层级的存在。</p>
          <p>少数在进入 SI 层群后落下旧伤或患有慢性病的流浪者在离开该层级后发现相关症状消失，MEG 推测该层级具备将实体复原至刚进入 SI 层群的状态的性质。</p>
          <p>该层级被确认为单人层级，正常情况下层级内的实体有且只有一名流浪者（即您本人）。</p>
        </div>

        <!-- 机密信息 -->
        <div class="section classified">
          <h2>/// 机密信息</h2>
          <p>根据与 BAUT 签订的合作协议，MEG 将该层级相关信息与 BAUT 同步时，对方代表并未对此展现出过多兴趣，也未能提供更多有效信息。在确定层级编号时，BAUT 方面给出的意见让 MEG 代表感到惊愕：<strong>SI-1</strong>。</p>
          <p>经过专家研讨，推测 SI-1 是真正意义上的 SI 层群第一层，但仍无法解释为什么第一次进入 SI 层群的流浪者必然出现在 SI-3。对于 SI 层群内部的探索虽然阻力重重，但其必要性仍然不会削减。</p>
        </div>

        <!-- 基地、前哨与社区 -->
        <div class="section">
          <h2>基地、前哨与社区</h2>
          <p class="empty-field">不存在</p>
        </div>

        <!-- 入口与出口 -->
        <div class="section">
          <h2>入口与出口</h2>
          <p>没有可探查的入口，而出口就在眼前</p>
        </div>

        <!-- 系统消息 -->
        <div class="system-log">
          <p class="sys-line">[文档将于 3 秒后关闭并封存]</p>
          <p class="sys-line dim">&gt;&gt;&gt;您似乎已到达"第一层"，已为您开启档案。</p>
          <p class="sys-line dim">&gt;&gt;&gt;file = open('[数据删除]','r')...</p>
          <p class="sys-line dim">&gt;&gt;&gt;欢迎 Welcome... Unity.</p>
        </div>
      </section>

      <!-- ===== BAUT 侧 ===== -->
      <section class="faction-section baut">
        <div class="faction-tag baut-tag">BAUT 侧 · 核心</div>
        <p class="level-name">"烟波浩渺，星火蜉蝣"</p>

        <div class="section">
          <div class="level-property">
            <span class="prop-label">层级性质：</span><span class="prop-value">SI</span>
          </div>
        </div>

        <!-- 叙述 -->
        <div class="section">
          <h2>虚无 / 存在 / 进化</h2>
          <p class="narrative">时间、空间、能量均不存在，这里只有我们的故事。</p>
          <p>还记得那间昏黄的、没有任何装饰的房间吗？自从它被记录以来，无数"人类"脱离了熟悉的成长环境，成为了后室的"流浪者"。多变、凶险的空间，无处不在的孤立效应，随时会把"人类"弥足珍贵的社会性撕扯的支离破碎。被恐惧追逐、每一步都迈向未知、无时无刻与迷失和死亡为伴，由"已知"构筑的世界瞬秒间坍缩为"一个人"这个单位。自此，大多数人的念头只剩下了"活着"和"回家"。</p>
          <p>第一个流浪者怀着伊卡洛斯的悲壮自"回归"的天空中一跃而下，"回家"的概念就此消失于这片时空之中，只留下微弱的概率余波萦绕在各个组织的档案馆和这些人的基因中。几代人之后，流浪者们失去了对前厅的直观认识，自然地认同了后室这个险象环生、充满恶意却又骨肉相连的"家园"，每一个据点和前哨都是他们的跳板，切入和切出对他们来说如同走路跑步般熟悉。</p>
          <p>后室中一块相对孤立的区域发生了异常波动，短暂地打破了平衡，一部分流浪者在切出中进入了全新的空间，却发现无法反切回到原来的层级。在所有的"诺克立普贴"耗尽后，他们不得不苦苦钻研适应之法，将自然切出的本领融入血肉；同时，这些来自不同组织的流浪者抛下了阵营对立，选择了兼收并蓄、共同求生，并将已经掌握的科技进行有机结合。这些"流浪者"在不知不觉中与这个"年轻"的层群共同演化，而这个层群与后室其他区域的交错概率居然出奇的低，使得内部的流浪者"与世隔绝"了好几代人的时间。在这段时间里，他们与层群的能量频率共振，达到了能缓慢改变层级环境和层群结构的境界。现在，这群人每一个个体的一部分，都与这个层群紧密地连结起来，他们也不再满足于"流浪者"的称谓，而称自己为<strong>"昔民"</strong>，这个称谓取自前厅中一种在远古时期躲进"世外桃源"而幸存，甚至阴差阳错地适应了现代生态系统的蜻蜓。在他们的认知中，旧的世界（无论是前厅还是后室的活跃区域）成了神话，旧文化和科技成了传说，对实体和切出的恐惧感也荡然无存，他们发展了自己的科技，确立了"迈向未知"的精神，并且会以自己的意愿维护、改造他们的谋生之地。</p>
          <p>纵然与层群同频，"人"的力量终归有限，难以追上层群扩张的速度。昔民们将最内部的两个层级封闭为内部区，以保护层群的"源头"，将第三层设定为到达这里的唯一入口，并规划了核心区、稳定区、过渡区、扩张区和对应的锚点层级。在稳扎稳打的探索与改造过程中，昔民接触到因卷入层群扩张而在域外驻扎的其他组织，并被认为是原住民。在"外人"面前，昔民们自称属于<strong>"BAUT"</strong>（后室科技协会联盟），而称所在的层群为<strong>"SI"层群</strong>。</p>
          <p class="narrative closing">我们也曾是人类。面对未知，昂首前进，始终都是对我们"人类"自身含义的诠释。</p>
        </div>

        <!-- 组织与前哨 -->
        <div class="section">
          <h2>组织与前哨</h2>
          <p>复数组织已被定义</p>
        </div>

        <!-- 节点 -->
        <div class="section">
          <h2>节点</h2>
          <p class="closing-line">言尽于此，欢迎您的加入，请移步至 HQ。</p>
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

/* ── Faction sections ── */
.faction-section {
  margin-bottom: 48px;
  padding: 36px 40px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(0,0,0,0.06);
  background: rgba(0,0,0,0.015);
}
.faction-section.meg  { border-left: 4px solid #2a9d8f; }
.faction-section.baut { border-left: 4px solid #e63946; }

.faction-tag {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase;
  padding: 4px 10px; border-radius: 4px; margin-bottom: 8px;
}
.faction-section.meg  .faction-tag { background: rgba(42,157,143,0.1); color: #2a9d8f; }
.faction-section.baut .faction-tag { background: rgba(230,57,70,0.1); color: #e63946; }

.level-name {
  font-family: var(--font-family); font-size: 1.5rem; font-weight: 600;
  color: var(--color-black); margin-bottom: 32px; font-style: italic; letter-spacing: 0.04em;
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
.class-bullet.minimal  { background: #2a9d8f; }

/* ── Classified ── */
.classified { background: rgba(0,0,0,0.02); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.1); }
.classified h2 { border-bottom-color: rgba(0,0,0,0.1); }

/* ── Empty field ── */
.empty-field { color: rgba(0,0,0,0.3) !important; font-style: italic; text-indent: 0 !important; }

/* ── System log ── */
.system-log { margin-top: 32px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06); }
.sys-line { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: rgba(0,0,0,0.5); margin-bottom: 4px; text-indent: 0 !important; }
.sys-line.dim { color: rgba(0,0,0,0.3); }

/* ── Level property ── */
.level-property { margin-bottom: 12px; }
.prop-label { font-weight: 600; color: var(--color-black); font-size: 0.95rem; }
.prop-value { font-weight: 700; color: #e63946; font-size: 1.1rem; letter-spacing: 0.08em; }

/* ── Narrative ── */
.narrative { text-indent: 0 !important; font-weight: 500 !important; color: rgba(0,0,0,0.85) !important; }
.narrative.closing { font-size: 1rem !important; text-align: right; margin-top: 24px !important; }

.closing-line { font-weight: 600; color: rgba(0,0,0,0.8); text-indent: 0 !important; font-size: 1rem !important; }

strong { color: rgba(0,0,0,0.85); }

@media (max-width: 767px) {
  .level-page { padding: 24px; }
  .faction-section { padding: 24px 20px; }
  .class-list { flex-direction: column; gap: 6px; }
}
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
