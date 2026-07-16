<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"白夜"</p>

      <blockquote class="epigraph">"让我们向我们的伟大政府致敬！让我们为我们最后的家园——顽强的联合都市致敬！"<span class="epi-src">——《联合都市日报》结语</span></blockquote>

      <div class="section"><h2>生存难度：2</h2><div class="difficulty"><ul class="class-list"><li><span class="b entity"></span>大量实体</li></ul></div></div>

      <div class="section"><h2>描述</h2>
        <p>层级 SI-18 "白夜"，以其永恒不落的白日和紫红色天空得名。紫色天空与其上永恒闪烁的群星铺成了该层级宁静的底色。其已探明区域为面积 <strong>450 万平方千米</strong> 的超大型都市，地底部分暂未探明，正式名称为<strong>"白夜城"</strong>。</p>
        <p>层级内人口约在 <strong>1100 万</strong> 上下，在后室内实属罕见。大量该层级居民在此出生，在此逝世，终生不了解前厅，但认同其存在。这种对前厅的认同甚至催生出复杂的层级内次生文化与普世宗教，详情见《附录：基地、前哨与社区》。</p>
        <p>白夜城核心地区内各项设施齐全，建筑密集且物资充足。两条大型运河交叉穿过核心区，并在此形成广袤的河漫滩，该区域集中了层级内大部分的人口、物资和无害实体。除两河之中的岛屿行政区<strong>"恒畿区"</strong>外，核心区被划分为四大区，生活条件与经济发展水平从高到低为<strong>"白一区"、"白二区"、"夜三区"</strong>以及<strong>"夜四区"</strong>。除此之外还有两个被撤销的行政区，详情见附录。五大区内社会治安状况由于历史遗留问题，均不容乐观，但这在充斥时间、空间扭曲的 SI 层级内已经算得上是相当安全。</p>
        <p>宜居区内建筑风格两极分化明显，砼浇筑、玻璃幕墙、金属板件组成的近现代建筑与来自前厅的各民族传统建筑大聚合、小杂糅。前者多见于"白区"，后者多见于"夜区"。由于建城时期的复杂历史，恒畿区拥有大量在前厅确实存在的层级内复刻版古建筑，如托莱多城、雅典卫城、阿房宫、阿尔罕布拉宫等。复杂的地下铁路系统和地下运河系统贯通各区，但其危险程度较高，探索和开发程度长期较低。恒畿区和白区领导的<strong>"联合政府"</strong>在名义上统辖整个层级，因此层级 SI-18 "白夜"也被称为<strong>"联合都市"</strong>。该政权与 M.E.G 和 TMS 等组织均保持紧密合作关系。</p>
        <p>核心区外是一望无际的废弃城区，当地称其为<strong>"废区"</strong>（许多老人存在对那些区域的记忆，但根据联合都市的档案库来看，并没有详细证据表明那里曾存在大规模平民聚落），那里时间空间均不稳定，实体总量少于稳定区，但危险实体占比极高。由于历史遗留问题，大量准军事组织、恐怖组织和地方政权在废区内活动。</p>
        <p>尽管危险，但废区被证实内存在稳定通向其他层级的出口，这些出口与白夜城的物资补给线与经济线息息相关，因此联合都市政府长期且稳定地组织着废区的开拓和维持相对稳定。以恒畿区为圆心，每向外围 1000 千米，联合都市政府都采取爆破措施人为制造了宽度约 1.5 千米的坍塌隔离带。从核心区至第一坍塌带的废区被称为<strong>"晨废区"</strong>，第二带至第三带之间为<strong>"暮废区"</strong>，第三带至第四带为<strong>"黄昏废区"</strong>，第四带外围被称为<strong>"午夜废区"</strong>。越外围，危险度越高，特异现象也越多。</p>
        <p>由于联合都市内文娱产业的蓬勃发展，如博彩业和自媒体业，单人或组队深入废区成为了能够带来大量财富的冒险行动，无数的层级居民冒着生命危险前往废区谋生。M.E.G 提醒您，作为切入层级的流浪者，在任何情况下，我们都不建议您深入"废区"探索或谋生。</p>
      </div>

      <div class="divider"></div>

      <div class="section"><h2>附录：建城史话</h2>
        <p>白夜城从建城之初至今日，经历了三个阶段，约 <strong>3600 年</strong>。如此漫长的历史，且层级内空间相对稳定，自然会发展出复杂且具有独特性的后室次生文明。而 SI-18 "白夜"有一点独特之处——它的时空错乱影响了 SI 层级的入口设置。在前厅，不少古代近代的时空里也出现了 SI 层级的切入口。根据 M.E.G 的调查，白夜城大部分居民的祖先都来自前厅中确实存在的文明或国家，早的有苏美尔、埃及、商、周、希腊-罗马等；稍微靠后的有法兰克、印度、阿拉伯、拜占庭、玛雅、汉、唐和丹麦等；再往后则有西班牙、法兰西、德意志、奥斯曼、明和俄罗斯等等。事实上你能在 SI-18 "白夜"里找到任何你想找的文明，至少能找到它留下的痕迹。</p>
        <p>如此复杂的民族构成自然带来了难以调和的民族矛盾。但后室是一个远比现实残酷的世界，任何一次层级内的民族战争都会比前厅的惨烈数倍，付出的代价更大，为了至少能让后代生存下去，在"白夜历"1100 年前后，形成了以孤立语（主要为上古、中古和近代汉语）和分析语（主要为希腊语、英语和西班牙语）为基础，包含复综语、黏着语语法成分的<strong>"古代白夜通用语"</strong>。一定程度上缓和了民族矛盾，同时为后世的语言整合事业定了起点。</p>
        <p>这种多民族语言整合倾向并非空穴来风，事实上，在白夜历 700 年前后，就已经出现了一系列内容类似，且在主要文明区内广泛流传的"白夜建城史话"。在拉丁、日耳曼文明区内它名为《艾尔-齐亚德之歌》、《建城者伊勒-赛德》、《赫尔德之歌》等；在亚洲文明区内它名为《萨邓本纪》、《纵帆物语》、《故殇》等。</p>
        <p>M.E.G 综合各版本，重新编写了一套适合纳入资料库的版本。可以确定的是，白夜居民公认的第一位开拓者是一位伊比利亚人，且为天主教徒。他原名<strong>罗德里戈·齐亚德·德·迪亚兹</strong>，来自哥伦布的远航队。</p>
        <p>罗德里戈·齐亚德参与了哥伦布前往加勒比地区的第一次与第二次远航。在第一次远航中立下汗马功劳，于第二次远航前成为了船队中玛利亚-加朗特号的船长。该船于 <strong>1493 年 10 月 23 日</strong> 在第二次远航中于加勒比海外围的小安德烈斯群岛失踪。船员全部失踪。M.E.G 推测，整船船员应该切入了 SI 层级，白夜城流传的艾尔-齐亚德等形象应该为罗德里戈·齐亚德·德·迪亚兹。</p>
      </div>

      <div class="city-structure">
        <h3>白夜城环形结构</h3>
        <div class="ring-list">
          <div class="ring core"><span class="ring-name">恒畿区</span><span class="ring-desc">两河岛屿 · 联合政府中枢 · 古建筑复刻群</span></div>
          <div class="ring white"><span class="ring-name">白一区 · 白二区</span><span class="ring-desc">近现代建筑为主 · 高生活水平</span></div>
          <div class="ring night"><span class="ring-name">夜三区 · 夜四区</span><span class="ring-desc">传统建筑为主 · 发展中区域</span></div>
          <div class="ring waste"><span class="ring-name">晨废区</span><span class="ring-desc">核心区 → 第一坍塌带（1000km）</span></div>
          <div class="ring waste"><span class="ring-name">暮废区</span><span class="ring-desc">第二带 → 第三带</span></div>
          <div class="ring waste dark"><span class="ring-name">黄昏废区</span><span class="ring-desc">第三带 → 第四带</span></div>
          <div class="ring waste darkest"><span class="ring-name">午夜废区</span><span class="ring-desc">第四带外围 · 最危险</span></div>
        </div>
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
.level-content { max-width: 760px; margin: 0 auto; }
.level-title { font-family: var(--font-family); font-size: clamp(3rem, 10vw, 6rem); font-weight: 900; color: var(--color-black); letter-spacing: -0.04em; margin-bottom: 8px; }
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: rgba(0,0,0,0.5); margin-bottom: 20px; font-style: italic; letter-spacing: 0.04em; }

.epigraph { text-align: center; font-style: italic; color: rgba(0,0,0,0.5); margin: 0 0 36px; padding: 20px 24px; border: 1px dashed rgba(0,0,0,0.1); border-radius: var(--radius-sm); }
.epi-src { display: block; font-size: 0.8rem; color: rgba(0,0,0,0.35); margin-top: 8px; font-style: normal; }

.section { margin-bottom: 36px; }
.section h2 { font-family: var(--font-family); font-size: 1.15rem; font-weight: 700; color: var(--color-black); margin-bottom: 14px; padding-bottom: 6px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85; color: rgba(0,0,0,0.7); margin-bottom: 10px; text-indent: 2em; }

.difficulty { background: rgba(0,0,0,0.03); padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.65); display: flex; align-items: center; gap: 6px; }
.b { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.b.entity { background: #9b5de5; }

.divider { height: 1px; background: rgba(0,0,0,0.08); margin: 40px 0; position: relative; }
.divider::after { content: '◆'; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: var(--color-off-white); padding: 0 14px; font-size: 0.55rem; color: rgba(0,0,0,0.15); }

/* City rings */
.city-structure { margin: 40px 0; padding: 28px 32px; border: 1px solid rgba(0,0,0,0.08); border-radius: var(--radius-md); background: rgba(0,0,0,0.01); }
.city-structure h3 { font-family: var(--font-family); font-size: 1rem; font-weight: 700; color: var(--color-black); margin-bottom: 18px; text-align: center; }
.ring-list { display: flex; flex-direction: column; gap: 8px; }
.ring { display: flex; align-items: baseline; gap: 16px; padding: 10px 16px; border-radius: 6px; border-left: 4px solid; }
.ring.core { border-left-color: #2a9d8f; background: rgba(42,157,143,0.04); }
.ring.white { border-left-color: #4a90d9; background: rgba(74,144,217,0.04); }
.ring.night { border-left-color: #7b68ee; background: rgba(123,104,238,0.04); }
.ring.waste { border-left-color: #c4a01e; background: rgba(196,160,30,0.04); }
.ring.waste.dark { border-left-color: #c47a1e; background: rgba(196,122,30,0.05); }
.ring.waste.darkest { border-left-color: #8b0000; background: rgba(139,0,0,0.06); }
.ring-name { font-weight: 700; font-size: 0.88rem; color: var(--color-black); white-space: nowrap; min-width: 120px; }
.ring-desc { font-size: 0.82rem; color: rgba(0,0,0,0.5); }

strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } .ring { flex-direction: column; gap: 2px; } .ring-name { min-width: auto; } }
</style>
