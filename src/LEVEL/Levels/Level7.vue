<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"墨中人"</p>

      <div class="section"><h2>生存难度：等级 4</h2><div class="difficulty"><ul class="class-list"><li><span class="b unsafe"></span>不安全</li><li><span class="b unstable"></span>不稳定</li><li><span class="b entity"></span>中等数量实体</li></ul></div></div>

      <div class="section"><h2>描述</h2>
        <p>SI-7"墨中人"表现为一座无限延展的古典中式书房。地面由青砖铺就，砖缝间浸染着千年墨渍，触之微凉。四壁矗立紫檀木书架，高耸入雾，架上陈列万卷典籍，然所有书册翻开皆为无字白页。层级内光线来自悬浮于空中的数十盏铜灯，灯火为青白色，无烟无烬，照度恒定如黄昏。</p>
        <p>层级的核心规则集中于一张置于中央的乌木书案。案上有一方歙砚，墨汁自涌，永不干涸；另有一张素白信笺，尺寸约一尺见方，仅容百余字。任何进入者必须在三刻钟（约四十五分钟）内于信笺上完成一篇古文创作。文体不限，诗、词、赋、记、铭、箴皆可，但须描绘一处逻辑自洽的虚拟世界，且文中必须隐含至少一处明确的"出口意象"——例如钟磬之声、月影倒悬、舟楫自横、鹤唳云端等。</p>
        <p>若逾期未完成，或所写内容存在明显矛盾、破碎、无法构成完整世界，书写者将被立即剥离全部记忆，肉体化为书架上一卷空白竹简，随机散落至其他层级，永无复原可能。</p>
        <p>若成功完稿，信笺会自行燃烧，化为青烟。作者会瞬间坠入自己所构建的文字世界，以"局中人"身份在其中生存。时间流速与外界不同，层级内度过三日，相当于现实时间仅三小时。三日期满，作者自动切回书房，其作品则转化为书架上的一卷金色典籍，供后来者选阅。然而，任何作品一旦被他人选中作为"入境之钥"，原卷即燃为灰烬，永久失效，无法再次使用。</p>
        <p>进入他人所写诗词世界时，使用者须于书架前闭目，以手触卷，心中默念所选作品的标题或首句。成功后，身体将虚化并融入书卷，降临于作品所描绘的世界。在此期间，使用者可借助层级的自动翻译机制理解原文——该机制会将作品中的文字以阅读者母语标注于旁侧，但仅限于书房内生效；一旦入境，翻译消失，使用者必须依赖自身对文义的理解来生存与寻找出口。</p>
      </div>

      <div class="section"><h2>实体</h2>
        <p>层级内存在少数实体，皆由旧日失败者的残存意识凝结而成。它们以"批注者"或"校勘灵"的形态出现，形如半透明的人形墨影，行动迟缓，不主动攻击，但会尝试触碰书写者的手臂，干扰其运笔。若被连续触碰三次，书写者将在三刻钟内暂时丧失古文表达能力，只能写出白话或乱码，导致作品作废。因此建议书写时佩戴手套，或背靠墙壁以缩小被触范围。</p>
        <p>此外，书架上偶尔会传出极轻的翻页声，那是"待选卷"在自行翻动。若听见某卷连续翻动三声，则代表该卷内容在"呼唤"你，可优先考虑选用。</p>
      </div>

      <div class="section"><h2>出口与通道</h2>
        <p>离开SI-7"墨中人"的唯一方式是完成一次"入境-回归"循环——即要么自己写完作品并活着度过三日世界，要么选用他人的作品并找到其中的出口意象回归。除此之外，层级内无任何已知的物理出口或隐蔽通道。</p>
      </div>

      <div class="section"><h2>基地、前哨和社区</h2>
        <p>本层级无任何常驻基地或组织。曾有流浪者尝试在书房角落搭建临时营地，但数小时后便被墨渍吞噬，仅留下几页残稿。建议单人行动，避免携带多名同伴——层级空间虽大，但"孤立效应"会自然将多人分散至不同书柜区，彼此无法相遇，反而增加集体失联风险。</p>
      </div>

      <div class="section"><h2>入口</h2>
        <p>SI-7"墨中人"的入口不固定。已知的切入方式包括：</p>
        <ul class="entry-list">
          <li>在任意层级中阅读一本无字古籍时，若内心浮现强烈"想写点什么"的冲动，书页会突然生出墨字，随后空间扭曲，将阅读者拉入此书房。</li>
          <li>在梦境中连续三夜梦见同一首未完成的古诗，则第四夜入睡后有概率直接在此层级醒来。</li>
        </ul>
      </div>

      <div class="section"><h2>出口（回归后）</h2>
        <p>完成三日生存并成功切回后，使用者会出现在原层级原位置，时间仅过去三小时。但会保留层内记忆，且手臂内侧会浮现一道墨色细纹，记录入境次数。墨纹积累至七道后，使用者将永久获得"墨中人"标记——此后无需信笺，只需闭目构思，即可进入任何自己创作或读过且未失效的诗词世界。此标记无法移除。</p>
      </div>


      <div class="section"><h2>特别警告</h2>
        <p>书房内所有作品自带自动翻译注释，但进入世界后翻译立即失效。若对所选古文理解不足，可能迷失在字面歧义中，永远找不到出口意象。建议优先挑选自己熟悉文体或曾背诵过的作品。</p>
        <p>层内禁止涂改他人作品。若在书卷上添加批注或删改文字，立即触发"焚卷"机制，改写者与原文一同化为灰烬。</p>
        <p>该层级不受任何已知组织控制，也无人能破坏其核心规则。曾有人试图将信笺带离书案，结果手臂自肘部齐断，断肢化为墨池中一尾游鱼。</p>
        <p>最后提醒：三日虽短，但文字世界中的时间感受可能被拉长至数十年。回归后，心理年龄可能远超物理年龄，建议回归后接受心理评估。墨纹计数器会记录您的真实经历时长，若一次入境后墨纹呈现螺旋状，说明您在境内度过超过三日——请立即向任何层级的前哨站报告，进行记忆校正。</p>
      </div>

      <div class="level-footer">
        <button class="top-btn" @click="scrollToTop">&#9650; 回到顶部</button>
      </div>
    </div>
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
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
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
.b.unsafe { background: #e63946; }
.b.unstable { background: #f4a261; }
.b.entity { background: #9b5de5; }

.entry-list { list-style: none; padding: 0; margin: 0 0 16px 0; }
.entry-list li { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.75; color: rgba(0,0,0,0.7); padding: 5px 0 5px 16px; position: relative; border-bottom: 1px solid rgba(0,0,0,0.04); }

.appendix { background: rgba(0,0,0,0.01); padding: 22px 26px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.08); }
.poem-title { font-weight: 700; color: var(--color-black); font-size: 1rem; text-indent: 0 !important; margin-bottom: 12px !important; }
.poem { text-align: center; padding: 16px 0; }
.poem p { text-indent: 0 !important; font-style: italic; line-height: 2.4; color: rgba(0,0,0,0.65); font-size: 1rem; margin-bottom: 6px !important; }

.survival-list { margin: 8px 0 0 1.5em; }
.survival-list li { font-family: var(--font-family); font-size: 0.93rem; line-height: 1.85; color: rgba(0,0,0,0.65); padding: 4px 0; }

.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }

strong { color: rgba(0,0,0,0.85); }

@media (max-width: 767px) { .level-page { padding: 24px; } .class-list { flex-direction: column; gap: 6px; } }
</style>
