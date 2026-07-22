<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"秩序·无序"</p>

      <div class="section"><h2>生存难度：熵</h2><div class="difficulty"><ul class="class-list"><li><span class="b safe"></span>安全</li><li><span class="b stable"></span>稳定</li><li><span class="b entropy"></span>熵增</li></ul></div></div>

      <div class="section"><h2>层级描述</h2>
        <p>该层级的外观被描述为"类似于前厅现代城市的一个街区"，长宽均在700米左右。层级的中心是一个十字路口，它作为该层级的交通枢纽把区域等分为4个部分。在层级中存在分岔道居民区、商场、公园等设施。层级内没有发电厂、水厂、农田等基础建设，但供水、供电、其他资源供应均在一定时间内正常。该层级内的所有消费行为均以"信用"为媒介，通过面部识别支付。正常执行支付动作将不消耗信用，试图规避支付将会扣除信用。若信用清零，将会到达Level-11，并在相当长一段时间内无法再次进入SI层群。信用不满时会每天回复1点。</p>
        <p>该层级没有地势变化，边界处推测为无限高的高纯度透明水晶幕墙，且目前任何已知手段无法破坏该边界。该层级存在厚度，但是目前对该层级地下≥7米的探索均以失败告终。该层级Wi-Fi信号良好。</p>
      </div>

      <div class="meg-warning-box">
        <p class="meg-label">MEG警告：以下内容将在每一个流浪者进入该层级时被推送，请每一位流浪者明悉：</p>
        <p class="meg-core">不要试图维护(阻止)该层级的秩序(覆灭)</p>
      </div>

      <div class="section">
        <p>目前，初次进入该层级的流浪者普遍反映无法通过常规切出或使用诺克立普贴反切的方式切回任何一个已知层级，推测该层级属于一个新的层群。当然，一些特殊的方式可以将流浪者带回I层群或者C层群。就研究结果来看，M.E.G.认定该层级为流浪者切入该层群时到达的第一个层级。<sup>[注释：在M.E.G.整理有关该层级的档案时，一自称B.A.U.T. (Backrooms Associational Union of Technology)的组织提出与M.E.G.共同整理。据悉，该组织是由SI层群内"流浪者"与实体共同成立的组织。鉴于对该层群知之甚少，M.E.G.接受与B.A.U.T.合作，协议由两组织共同议定。]</sup></p>
      </div>

      <div class="section baut-section"><h2>以下内容来自B.A.U.T.提供的信息，由M.E.G.整理归档</h2>
        <p>Level-SI-3是由无数个平行单元组成的复合型无穷层级，每个单元能承载有限数量的流浪者，流浪者在切入时会随机进入一个稳定且具备承载力的单元。</p>
        <p>流浪者普遍反映，随着在SI-3探索时间的增长，层级内的资源会逐渐减少；断水、断电事件频发；流浪者之间爆发冲突的频率提高；层级内开始产出武器……总而言之，层级的混乱度呈指数级提升。当然，有些流浪者试图发起维护层级秩序的运动，但是均在数日内因参与者失踪而以失败告终。对此，我们正告所有在SI-3中的流浪者，学会放弃，不要试图维护该层级的秩序，在层级覆灭前切出！</p>
        <p>据B.A.U.T.给出的信息，每个单元的覆灭周期为90天，单元间存在相位差，十字路口处可以找到一面大型电子显示屏，用于查看层级当前状态及标准24h制时间，单元覆灭后会重置回初始状态。</p>
        <div class="cycle-box">
          <p class="cycle-title">覆灭周期（90天）</p>
          <div class="cycle-grid">
            <div class="cycle-phase stable"><span class="phase-name">稳定期</span><span class="phase-range">1~45D</span></div>
            <div class="cycle-phase chaos"><span class="phase-name">混乱期</span><span class="phase-range">46~75D</span></div>
            <div class="cycle-phase collapse"><span class="phase-name">覆灭期</span><span class="phase-range">76~90D</span></div>
            <div class="cycle-phase death"><span class="phase-name">"热寂"</span><span class="phase-range">90D末</span></div>
          </div>
        </div>
      </div>

      <div class="section"><h2>基地与前哨</h2><p>由于该层级的特殊性质，该层级不存在基地与前哨</p></div>

      <div class="section"><h2>入口与出口</h2>
        <h3 class="sub-heading">入口</h3>
        <ul class="entry-list">
          <li>在非SI层群区域找到一块自然生成的硅单质切出</li>
          <li>在SI层群的任意层级内切入写有公式"S=lnω"的物体即可进入</li>
        </ul>
        <h3 class="sub-heading">出口</h3>
        <ul class="entry-list">
          <li>耗尽信用会自动回到Level-11</li>
          <li>任意切出会进入SI-4</li>
          <li class="hidden">【隐藏：维护层级内秩序会进入SI-3.1】</li>
          <li>电子显示屏变成天文钟时可进入SI-13</li>
        </ul>
      </div>

      <div class="section phenomenon"><h2>特殊效应</h2>
        <p class="pheno-name">Phenomenon-SI-3，"宜居依赖"：</p>
        <p>30%的流浪者会产生定居该层级的想法，并试图维系该层级的稳定。随时间推移，剩余70%的流浪者会自发地变得焦躁、混乱。</p>
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
.level-page { min-height: 100vh; background: var(--color-off-white); padding: 40px; }
.level-content { max-width: 760px; margin: 0 auto; }
.level-title { font-family: var(--font-family); font-size: clamp(3rem, 10vw, 6rem); font-weight: 900; color: var(--color-black); letter-spacing: -0.04em; margin-bottom: 8px; }
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: rgba(0,0,0,0.5); margin-bottom: 40px; font-style: italic; letter-spacing: 0.04em; }

.section { margin-bottom: 36px; }
.section h2 { font-family: var(--font-family); font-size: 1.15rem; font-weight: 700; color: var(--color-black); margin-bottom: 14px; padding-bottom: 6px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85; color: rgba(0,0,0,0.7); margin-bottom: 10px; text-indent: 2em; }
.sub-heading { font-family: var(--font-family); font-size: 1rem; font-weight: 600; color: var(--color-black); margin: 14px 0 6px 0; }

.difficulty { background: rgba(0,0,0,0.03); padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.65); display: flex; align-items: center; gap: 6px; }
.b { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.b.safe { background: #2a9d8f; }
.b.stable { background: #f4a261; }
.b.entropy { background: #7b68ee; }

/* MEG warning */
.meg-warning-box { background: rgba(139,0,0,0.04); border: 1px solid rgba(139,0,0,0.12); border-left: 4px solid #8b0000; padding: 20px 24px; border-radius: var(--radius-sm); margin: 28px 0; text-align: center; }
.meg-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 600; color: #8b0000; letter-spacing: 0.04em; margin-bottom: 10px !important; text-indent: 0 !important; }
.meg-core { font-size: 1.1rem !important; font-weight: 700; color: #8b0000 !important; text-indent: 0 !important; letter-spacing: 0.06em; }

/* BAUT section */
.baut-section { background: rgba(0,0,0,0.012); padding: 24px 28px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.06); }

/* Cycle */
.cycle-box { background: rgba(0,0,0,0.02); padding: 18px 22px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); margin: 18px 0; }
.cycle-title { text-align: center; font-weight: 700; font-size: 0.95rem; color: var(--color-black); margin-bottom: 12px !important; text-indent: 0 !important; }
.cycle-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
.cycle-phase { text-align: center; padding: 10px 6px; border-radius: 6px; }
.cycle-phase.stable { background: rgba(42,157,143,0.08); }
.cycle-phase.chaos { background: rgba(244,162,97,0.08); }
.cycle-phase.collapse { background: rgba(230,57,70,0.08); }
.cycle-phase.death { background: rgba(0,0,0,0.08); }
.phase-name { display: block; font-weight: 700; font-size: 0.85rem; color: var(--color-black); margin-bottom: 2px; }
.phase-range { display: block; font-size: 0.75rem; color: rgba(0,0,0,0.45); font-family: 'JetBrains Mono', monospace; }

/* Entry list */
.entry-list { list-style: none; padding: 0; }
.entry-list li { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.75; color: rgba(0,0,0,0.7); padding: 5px 0 5px 16px; position: relative; border-bottom: 1px solid rgba(0,0,0,0.04); }
.entry-list li::before { content: '→'; position: absolute; left: 0; top: 5px; color: rgba(0,0,0,0.2); font-weight: 600; font-size: 0.85rem; }
.entry-list li:last-child { border-bottom: none; }
.entry-list li.hidden { color: rgba(0,0,0,0.3); font-style: italic; border-bottom: none; }

/* Phenomenon */
.phenomenon { background: rgba(0,0,0,0.015); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.1); }
.pheno-name { font-weight: 700; color: var(--color-black); font-size: 0.95rem; text-indent: 0 !important; margin-bottom: 8px !important; }

sup { font-size: 0.7rem; color: rgba(0,0,0,0.35); }

@media (max-width: 767px) { .level-page { padding: 24px; } .class-list { flex-direction: column; gap: 6px; } .cycle-grid { grid-template-columns: 1fr 1fr; } }
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
