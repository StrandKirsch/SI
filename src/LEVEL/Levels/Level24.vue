<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"山麓之道"</p>

      <div class="section"><h2>生存难度：3级</h2><div class="difficulty"><ul class="class-list"><li><span class="b unsafe"></span>不安全</li><li><span class="b unstable"></span>不稳定</li><li><span class="b entity"></span>中量实体</li></ul></div></div>

      <div class="section"><h2>层级概述</h2>
        <p>该层级的可探明部分是一片向四面八方无限延伸的低山丘陵，森林密布，一条蜿蜒曲折的山麓古道贯穿整个层级连接着各个荒废的乡镇聚落。道路平均宽度约7米，最大宽度可达12米左右。层级内道路的形态复杂且多变，出于安全考虑，不建议流浪者长时间离开道路。该层级实体对道路产生畏惧（原因尚未查明），目前尚未观测到实体主动在白天接近道路。目前并未探明该古道的起点与终点。</p>
        <p>道路时常经过一些坍塌的或露出地表的溶洞，发育有溶洞河湖，流浪者可以在此安全获取食物和饮水，否则流浪者仅能在聚落安全地获得补给。请勿深入溶洞，我们对其内部构造一无所知。层级内的植被暂且没有发现有危害，可以适度取用。</p>
        <p>该层级的时间流逝速度不稳定，尤其是在流浪者陷入发呆、焦虑、精神分裂等心智游移状态时时间流逝会显著加快。一旦进入黄昏，层级内的危险实体会陷入活跃状态，此时它们敢于主动在古道上方活动，对流浪者造成威胁。强烈建议误入该层级的流浪者控制自己的精神状态，在白天抵达层级内的聚落或废弃聚落等区域过夜；或是提前做好战斗准备，打退任何来犯的实体。</p>
        <p>运行良好的电厂、水厂、工厂在已探明区域内几乎绝迹，但仍有部分低产能的工厂被流浪者聚落维护到可以使用的程度。层级内居民排斥电力，亦排斥大部分电子设备。流浪者聚落为修建在古路较宽处中央的中小型村庄，建筑形式以半地穴式长屋为主，木构，前后共两个大门，宽度约7m，依照所在路段最短宽度而定；长100m~300m，依照聚落人口而定。</p>
      </div>

      <div class="divider"></div>

      <div class="section"><h2>调查笔记</h2>
        <p>该层级的可探明部分是一片向四面八方无限延伸的低山丘陵，一条蜿蜒曲折的石板路贯穿整个层级连接着各个荒废的乡镇聚落。道路平均宽度约7米，最大宽度可达12米左右。路在半山腰逡巡前进，一侧靠山林，在道路上投下珍贵的凉荫，另一侧则俯瞰谷地。别往下看，因为那景色就跟电视机一样，一看就是半天，很容易就误了时间。山路距离谷地并不算高，却足够漫起云雾，遮盖流浪者的视线，若不是在盛夏时节，很难看到下面。我无法描述下方情况，也不敢向下探索，原因之一是这个层级我是去年秋天来的。</p>
        <p>根据我半年以来的经验，我认为流浪者在此层级内切忌长时间远离大路，也尽量避免向上深入山林，因为这里的实体惧怕道路或是惧怕某样跟道路相关的事物。当你孤身一人在荒野中漫游，你大概会变成它们的盘中餐。不过......好在它们的动作很迅速，大概你也不会感到痛吧——这其实算是一条快速解脱的天堂高速路。（希望你在任何层级遭遇不测时都这样想）我，就等着被熬死后"当庭释放"，嗨......</p>
        <p>这条石板路从头到脚都充斥着异常。每一天，每一刻它的形态都在转换——或是它本来就过于复杂，导致岔路非常之多，经常走着走着原先的道路就成了断头路，当你回头后却发现一条陌生的岔道，而其上的石板竟然磨损程度更严重，风化痕迹更深。当你怀着犹豫的心理，试问自己应不应该换路而行，时间又会变得飞快，稍不留神天就暗了。一切都像是诚心要害你。想问题时树枝好像被粘住了，连影子都不动一下；望着云雾发神时，那些白色的妖精竟然顺着你的视线向后退去，叫你望眼欲穿，却穿不透，看得你头晕眼睛疼。这时，那Gold太阳倒是走得飞快，不一会就把云给烧红了。每次我都是这时候才反应过来，每次都是头一偏，发现路就这么断了。每次都是拼了命在陌生岔路上飞奔，每次都是星与月在头上飞奔，实体们在我身后鬼叫，不一会就声音就转到了我的左右边......</p>
        <p>运行良好的电厂、水厂、工厂在已探明区域内几乎绝迹，但存在上述建筑物的废墟。出于安全性和可能性的考量，我并未深入探索，我会在切出层级后将相关胶片上交组织——我无法使用任何电子设备，才出此下策。电力紧张只是一方面的原因。同时，正如我所讲的该层级缺乏水厂，而根据我的几次深入林间调查（相当危险，好几次差点洗白）发现该层级的岩体为石灰岩，降水下渗严重，露出的水源多为溶洞水，矿物质含量过高，食用后会导致身体机能弱化，进而增加事故可能性。同样的，由于工厂和机器生产的缺失，该层级的聚落生产力低下，使用的武器很原始，且我们无法在层级内找到充足的弹药、医疗补给，难以展开行动。建议今后控制进入该层级的人员数量，以控制伤亡。</p>
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
.level-content { max-width: 760px; margin: 0 auto; }
.level-title { font-family: var(--font-family); font-size: clamp(3rem, 10vw, 6rem); font-weight: 900; color: var(--color-black); letter-spacing: -0.04em; margin-bottom: 8px; }
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: rgba(0,0,0,0.5); margin-bottom: 40px; font-style: italic; letter-spacing: 0.04em; }

.section { margin-bottom: 36px; }
.section h2 { font-family: var(--font-family); font-size: 1.15rem; font-weight: 700; color: var(--color-black); margin-bottom: 14px; padding-bottom: 6px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85; color: rgba(0,0,0,0.7); margin-bottom: 10px; text-indent: 2em; }

.difficulty { background: rgba(0,0,0,0.03); padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.65); display: flex; align-items: center; gap: 6px; }
.b { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.b.unsafe { background: #e63946; }
.b.unstable { background: #f4a261; }
.b.entity { background: #9b5de5; }

.divider { height: 1px; background: rgba(0,0,0,0.08); margin: 40px 0 44px 0; position: relative; }
.divider::after { content: '◆'; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: var(--color-off-white); padding: 0 14px; font-size: 0.55rem; color: rgba(0,0,0,0.15); }

@media (max-width: 767px) { .level-page { padding: 24px; } .class-list { flex-direction: column; gap: 6px; } }
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: opacity var(--transition-fast); margin-bottom: 40px; }
.back-btn:hover { opacity: 0.8; }
.level-footer { margin-top: 40px; text-align: center; }
.top-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px; background: rgba(0,0,0,0.06); color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
.top-btn:hover { background: rgba(0,0,0,0.85); color: #fff; }
</style>
