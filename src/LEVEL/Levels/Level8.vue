<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"风暴脉搏"</p>

      <!-- Survival Difficulty -->
      <div class="section">
        <h2>生存难度：等级 2</h2>
        <div class="difficulty">
          <ul class="class-list">
            <li><span class="class-bullet unsafe"></span> 不安全</li>
            <li><span class="class-bullet stable"></span> 稳定</li>
            <li><span class="class-bullet entity"></span> 少量实体</li>
          </ul>
        </div>
      </div>

      <!-- 描述 -->
      <div class="section">
        <h2>描述</h2>
        <p>SI-Level 8 是 SI 层群的第 8 层。</p>
        <p>该层级表现为一片荒原，荒原，一望无际的荒原，以及盘踞其上的超大型飓风 "Blue Dragon"。</p>
        <p>流浪者切入该层级时将位于飓风 "Blue Dragon" 风眼正中。抬头望去，视野中是一个无比巨大的、近乎完美的圆形天空。它的边界是一圈高达 18,000 米以上、近乎垂直的云墙，这圈云墙永不停歇地以缓慢而威严的姿态以逆时针旋转。</p>
        <p>而风眼内部，阳光从正上方毫无遮挡地倾泻下来，形成巨大的光柱，将荒原铺设成金黄，将风之云壁赋予蓝白，灰白的光泽。翻滚的毁灭墨黑色在由风和云构成的泰坦之壁的脚下隐隐若现，将目力所及的寂静大地，以完美的圆形拥抱其中。</p>
        <p>这里没有任何基地，前哨与社区。这里只有流浪的旅人。任何多余的存在都会在流浪者离开后被风暴抹去，无论其痕迹身在何方。</p>
      </div>

      <!-- 实体 -->
      <div class="section">
        <h2>实体</h2>
        <div class="entity-box">
          <p class="entity-name">"Blue Dragon"</p>
          <p>该实体是独属于该层级的特殊实体，而非层级本身，其表现形态为超大型飓风。</p>
          <ul class="entity-specs">
            <li><strong>风眼直径：</strong>80 公里</li>
            <li><strong>整体直径：</strong>无法测量</li>
          </ul>
          <p>该实体并非传统意义上的飓风，飓风壁虽然风云涌动，但穿过飓风壁毫无阻力。其飓风壁外几乎没有风速，反而是风眼内会周期性刮起大风，但是风眼内部刮起的大风没有声音，风眼外部的飓风中也没有任何风声。</p>
          <p>经测定风眼内风速为 0-12 级，等级与风眼内部到切出点的距离呈现线性关系。</p>
        </div>

        <h3 class="sub-heading">穿越风壁效应</h3>
        <p>当流浪者走入风眼的风墙之后，在前往切出点的过程中将会出现以下情况：</p>
        <p>在风壁到切出点的前半程中，流浪者的心跳将会逐渐放缓，直至停跳。流浪者的身体不会因其发生任何变化，身体状况将与进入风壁时无异。但是当心率降为 0 的那一刻，流浪者会伴随一次脑干缺氧引起的类似叹息样的"濒死呼吸"，随后呼吸会很快停止，但行动能力不会因此受到影响。</p>
        <p>此时流浪者有 <strong>4 分钟</strong> 的时间，在这四分钟里，流浪者必须及时反应克服不适感向前行进，直至心率恢复正常。开始前进 2 分钟后心率将会开始上升。如果没有及时行动，4 分钟后流浪者会因停搏而脑死亡。心率回复正常区间后，将不再受层级影响。</p>
      </div>

      <!-- 入口与出口 -->
      <div class="section">
        <h2>入口与出口</h2>
        <h3 class="sub-heading">切入点</h3>
        <p>在有风的层级中存在切入点。</p>
        <h3 class="sub-heading">切出点</h3>
        <p>在实体 "Blue Dragon" 中，成环形带围绕在飓风壁外围，切出点高度过高无法测量，目前测量极限仍处于飓风包裹之中。其位置距离飓风眼正中距离一直在变化，外加实体 "Blue Dragon" 本身特性，导致实体 "Blue Dragon" 实际大小无法确定。</p>
        <p>已测定的距离为 1km-13km，其与风眼内风速呈现线性关系。对应的函数关系可以表示为：</p>
        <p class="formula">y = 13 − x</p>
      </div>

      <!-- 附件：流浪者日志 Part 1 -->
      <div class="section appendix">
        <h2>附件：流浪者日志 Part 1</h2>

        <p class="narrative">"额啊…还是一如既往的…壮观….哼…"</p>
        <p>阳光直射而下，将四周的云壁镀上金黄。孤狼的黑发也在阳光下变成了偏深的金棕色，也许他的发色本就如此。</p>
        <p class="dialogue">"你怎么跟乌鸦似的，头发平时那么黑，但光底下其实是个黄毛。"</p>
        <p class="dialogue">"不过没乌鸦毛那么捋顺，乱成这样倒是像你的代号一样了，狼。"</p>
        <p class="attribution-sm">——孤狼的前同事们对他的调侃</p>

        <p>孤狼望着极远处的云墙，那墙并非静止，而是沸腾翻滚。飓风壁，那正是飓风能量最集中的位置。名为 "Blue Dragon" 的飓风风眼内此刻寂静无比，寂静地能让人清楚的听见自己的心跳。孤狼的心跳有力而缓慢，似乎知晓身体的主人并不着急赶路，于是便放缓了速度，平息着切入前因遇险而剧烈运作的身体。</p>
        <p>另一个心跳也带着游丝般的脚步声凑了上来。孤狼转头看向身后的跟屁虫。那跟屁虫正披着不符身材的宽大黑色外套站定在他身侧，自觉的保持着距离。孤狼蹲下身子，一只手抓起荒原上的土，用指尖碾碎结块后甩着手叹了口气。</p>
        <p class="dialogue">"你在怕什么……"</p>
        <p>身旁的女孩默不作声，只是面无表情的看着孤狼。</p>
        <p class="dialogue">"要不把衣服还我？"</p>
        <p>见女孩仍然没有回话，孤狼站起身来，从工具袋里抓出测距仪，望向远处的飓风壁。</p>
        <p class="dialogue">"你……送我的……"</p>
        <p>孤狼算是认栽了，仰天长舒一口气，夸张的举起双手。</p>
        <p class="dialogue">"我认输，朋友，我认输了……"</p>
        <p>跟她交流真困难。这女孩是不会正常说话吗？</p>
        <p class="dialogue">"该出发了。脚刚才没扭着吧？"</p>
        <p>女孩歪着头听了一阵，面无表情的摇了下头。见此，孤狼整理了下携行具，开始自顾自地向远处的风墙走去。见那若有若无的脚步没有跟过来，他从兜里抓出两根能量棒，把其中一根随手向后扔去。他听见一连串细小的脚步声，然后就听见那根味道不佳却能填饱肚子的棒状物精确的落在了身后的跟屁虫手里。</p>
        <p>孤狼回过身，看着一路小跑着撕开包装的跟屁虫，略微有些力不从心。</p>
        <p class="dialogue">"饿了就说，别老是等着我问你……我们还有很长的路要走。"</p>

        <p class="scene-break">…………</p>
        <p class="scene-note">*在距离风墙还有三百米的位置</p>
        <p>孤狼醒了过来，他看了看手表，五个小时。他支撑起身体，呼吸着怡人的低气压空气，在确认最后一丝疲惫被驱赶出身体后缓缓站起。他轻拍身旁熟睡的少女，可蜷缩成一团的她只是轻轻抽动了两下，似乎十分贪恋这片安宁的荒原。是什么让她睡的如此之深……以往在其他层级，这少女可是有点儿动静就会机灵的翻起身来应对，无论身体多么疲惫。</p>
        <p>眼前巨大的风墙正在悄无声息的汹涌，对第一次来的人可不是什么安全的信号。明明她第一次来这儿。是直觉吗……对层级的直觉……有趣。</p>
        <p>不过叫醒她得用点儿手段了！和蔼！</p>
        <p>孤狼将手叉到少女的腋下，一把将其举起，然后开始在空中缓缓的晃来晃去。真轻啊。这招的确有效，见少女睁开睡眼朦胧的双眼呆滞的看着自己，孤狼把她重新放到地上。</p>
        <p class="dialogue">"跟屁虫，醒——醒———！"</p>
        <p class="dialogue">"嗯……."</p>
        <p class="dialogue">"这个，帮我背上。这些也送你了。只送了包哦，里面的东西还是我的，你帮我背着。"</p>
        <p>孤狼从背包上拆下几个模块化副包装上背带扔给了逐渐清醒的少女。他看着少女慵懒的背上自己扔过去的大包小包，抬起一只胳膊搭在了少女的肩上。令他诧异的是，这次少女没有躲开。孤狼挑了挑眉，转头对上了少女漆黑的双眸。那双无神而又漆黑的眸子像是要把他吸进去似的。孤狼闭上眼睛摇了摇头。</p>
        <p class="dialogue">"哎……总不能天天叫你跟屁虫吧，你有名字么？"</p>
        <p>少女依旧呆滞的看了一会孤狼，然后轻轻的摇了摇头。</p>
        <p class="dialogue">"真麻烦…."</p>
        <p>孤狼往后撤了几步，拿手指笔划出一个相框，将少女框入其中。还真是黑，黑色的头发，黑色的眼睛，加上我的外套，那真是一身黑了——即使阳光照上去都没什么变化。孤狼好像是想到了些什么，轻哼了一声。</p>
        <p class="dialogue">"穿这一身黑，就叫你乌鸦吧。"</p>
      </div>

      <!-- 附件：流浪者日志 Part 2 -->
      <div class="section appendix">
        <h2>附件：流浪者日志 Part 2</h2>

        <p>短短两天，我在这里听到的祈祷比在白夜城所有教堂里加起来的还要多。医院的天花板就像是看不完的童话，因为百无聊赖的我唯一的娱乐就是盯着这片单调的天花板发呆。</p>

        <p class="scene-note">很黑</p>
        <p>睁开眼时我在一个相当黑的地方。我好像跟一团不停搏动的物体紧紧粘连，我试着挣扎，可是很多温热的液体突然喷射出来，我听见那团不停搏动的物体狠狠绞动了一声，随后各种杂乱的电子音响了起来，我很害怕，只能重新闭上眼睡过去。</p>

        <p class="scene-note">很亮</p>
        <p>唯一的记忆就是刺眼的强光，我感觉我正在被人推着走，我身边是爸爸妈妈，还有穿着白衣服的医护人员，可是很痛，却又没什么力气再睁开眼，我只能朦胧的感觉自己到了一个地方，有东西顺着身上的管道注入血管，随后眼皮像是压了重物一样紧紧闭上，怎么都没有办法抬起。</p>

        <p class="scene-note">很黑</p>
        <p>很黑的地方，我醒来又在一个很黑的地方，但是很快有光探了进来，光很刺眼，又有冰冷的东西探了进来。我不想去看，我很累，只能半睡半醒的听着外界的声音。</p>
        <p class="dialogue">"停搏！"</p>
        <p class="dialogue">"止血，纱布！"</p>
        <p class="dialogue">"上人工心肺，我们没有太多时间了，大脑会缺氧而死的！"</p>
        <p class="dialogue">"是"</p>
        <p class="dialogue">"我探查到异物了，造成…..这是什么？"</p>
        <p class="dialogue">"不知道……我从来没有见过……"</p>
        <p class="dialogue">"异物紧紧粘连在心脏上，结合为一体了！"</p>
        <p class="dialogue">"见鬼，这就是造成出血的原因吗？可这根本没办法剥离！"</p>
        <p class="dialogue">"想要根治只能等待换心….搭桥手术开始"</p>
        <p class="dialogue">"姑娘你撑住啊，只要我们还能…只要我们能让心脏还能继续跳动，只要动起来就会好的…"</p>

        <p class="cry-out">动起来！让心脏跳动起来！动起来！！！</p>
        <p class="dialogue">"动起来啊！！！！我说过的动起来啊！"</p>
        <p>孤狼在黑暗中不停拍打着乌鸦的脸。即使孤狼给她做过预告，心脏停跳带来的猛然不适还是在瞬间击垮了这位少女。这种强烈的不适将她熟悉而陌生的恐惧从灵魂深处强行扯出。</p>

        <p class="dialogue">"可是我们根本没有合适的器官去移植！"</p>
        <p class="dialogue">"我们真的没有办法了么……患者明明…她在努力地想要活着啊"</p>
        <p class="dialogue">"看，就是那个发光的异物！"</p>
        <p class="dialogue">"连同心脏一起在发光吗！结合程度更深了，好迅速…."</p>
        <p class="dialogue">"它像是在回应患者的求生意志一样….."</p>
        <p class="dialogue">"我知道这个东西是什么了….闭胸，这种情况只能赌一把了，让心脏恢复跳动吧"</p>
        <p class="dialogue">"那到底是什么？！"</p>
        <p class="dialogue">"那到底是什么！"</p>

        <p class="cry-out">心脏成功跳动了。跳动起来吧！动起来，只要动起来一切都会好的！</p>
        <p class="dialogue">"醒醒，乌鸦，动起来啊跟屁虫！"</p>

        <p class="dialogue">"啊啊啊！！啊啊啊啊啊！！！"</p>
        <p>少女瘦弱的身体猛然爆发着恐怖的力量，以一种难以理解的姿态尖叫着向前冲去，那力量甚至把孤狼都掀开。</p>

        <p class="cry-out">跳动起来。动起来。我想活着。我想回家。</p>
        <p class="cry-out">停下！</p>
        <p class="dialogue">"停下！！！"</p>
        <p>孤狼紧紧抓住狂奔的乌鸦，可少女仍发疯一般向前冲去。无奈，孤狼只得一个箭步将其扑倒，将她拥入怀中紧紧抱住，直至乌鸦那过速的心跳缓缓降下与孤狼渐渐同频。</p>
        <p class="dialogue">"呼——呼——该死的，我提前告诉过你了，跑一段就停下，跑这么久你是想把心脏炸碎吗！昂？……嗯？乌鸦？还醒着么？小跟屁虫？"</p>
        <p>啊...... 失去意识了么？没办法，只能抱着你走了。</p>
        <p class="narrative closing">我来带你离开。</p>
      </div>

      <!-- 附录 -->
      <div class="section appendix">
        <h2>流浪者日志 附录</h2>
        <div class="record-box">
          <p class="record-label">附录 1</p>
          <p>患者器官与布拉格碎片深度结合，已经形成融合器官.....<br/>......... 于术后 XX 日失踪</p>
          <p class="record-source">——[白夜城某医院论文]</p>
        </div>
        <div class="record-box">
          <p class="record-label">附录 2</p>
          <p>患者记忆出现严重缺失和重度错乱，据该次行动特遣队队员 XXX 报告，疑似为患者在 SI-13 天文钟受到层级冲击导致。</p>
          <p class="record-source">——[TMS 医疗部门报告]</p>
          <p>患者要么沉默要么一直在说胡话，有关过去的所有记忆都是完全错乱的，可近期的记忆没有出现任何错乱，需要进一步观察。</p>
          <p class="record-source">——[TMS 医疗部门报告]</p>
        </div>
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

/* ── Entity box ── */
.entity-box {
  background: rgba(0,0,0,0.015); padding: 20px 24px;
  border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.06);
  margin-bottom: 20px;
}
.entity-name {
  font-family: var(--font-family); font-size: 1.2rem; font-weight: 700;
  color: var(--color-black); text-indent: 0 !important; margin-bottom: 12px !important;
}
.entity-specs {
  list-style: none; padding: 0; margin: 8px 0;
  display: flex; flex-wrap: wrap; gap: 24px;
}
.entity-specs li {
  font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;
  color: rgba(0,0,0,0.6);
}

/* ── Formula ── */
.formula {
  text-align: center; font-family: 'JetBrains Mono', monospace;
  font-size: 1.3rem !important; font-weight: 600;
  color: var(--color-black) !important; text-indent: 0 !important;
  padding: 12px 0; letter-spacing: 0.05em;
}

/* ── Appendix / Narrative ── */
.appendix { background: rgba(0,0,0,0.01); padding: 28px 32px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.08); }

.narrative { text-indent: 0 !important; font-weight: 500 !important; color: rgba(0,0,0,0.85) !important; }
.narrative.closing { text-align: right; font-size: 1.05rem !important; margin-top: 20px !important; }

.dialogue {
  text-indent: 0 !important; padding-left: 16px;
  border-left: 2px solid rgba(0,0,0,0.08); font-style: italic;
  color: rgba(0,0,0,0.55) !important;
}

.attribution-sm {
  text-align: right; font-size: 0.8rem !important; font-style: italic;
  color: rgba(0,0,0,0.35) !important; text-indent: 0 !important; margin-top: 2px !important;
}

.scene-break {
  text-align: center; font-size: 1rem !important; letter-spacing: 1em;
  color: rgba(0,0,0,0.25) !important; text-indent: 0 !important; margin: 24px 0 !important;
}

.scene-note {
  text-indent: 0 !important; font-weight: 600; font-size: 0.9rem !important;
  color: rgba(0,0,0,0.55) !important; margin-top: 16px !important; margin-bottom: 4px !important;
}

.cry-out {
  text-indent: 0 !important; font-weight: 700; font-size: 1rem !important;
  color: rgba(0,0,0,0.85) !important; text-align: center; margin: 16px 0 !important;
  letter-spacing: 0.06em;
}

/* ── Record boxes ── */
.record-box {
  margin-bottom: 20px; padding: 16px 20px;
  background: rgba(0,0,0,0.02); border-radius: var(--radius-sm);
  border: 1px solid rgba(0,0,0,0.04);
}
.record-label { font-weight: 700; color: var(--color-black); font-size: 0.9rem; margin-bottom: 6px; text-indent: 0 !important; }
.record-source {
  text-align: right; font-size: 0.8rem !important; font-style: italic;
  color: rgba(0,0,0,0.35) !important; text-indent: 0 !important; margin-top: 8px !important;
}

strong { color: rgba(0,0,0,0.85); }

@media (max-width: 767px) {
  .level-page { padding: 24px; }
  .class-list { flex-direction: column; gap: 6px; }
  .appendix { padding: 20px 16px; }
  .entity-specs { flex-direction: column; gap: 4px; }
}
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
