<template>
  <div class="level-page">
    <div class="level-content">
      <button class="back-btn" @click="goBack">&larr; Back</button>
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"暴雨"</p>

      <div class="section">
        <h2>生存难度：等级 3</h2>
        <div class="difficulty">
          <ul class="class-list">
            <li><span class="class-bullet unsafe"></span> 不安全</li>
            <li><span class="class-bullet unstable"></span> 不稳定</li>
            <li><span class="class-bullet entity"></span> 特殊实体</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h2>描述</h2>
        <p>该层级表现为一座类伦敦风格的城市，大小无法估量，其中建筑与变异生态形成共生关系。整座城市呈现出一种诡异的生命力，空气中弥漫着潮湿的植物腥气，混合着麦芽发酵味。部分路面覆盖着藤蔓与荧光菌毯。天空永远灰蒙蒙的，有时还会起大雾。建筑已经不再是单纯的无机物，与植物共生一体，成为了植物攀附生长的框架，而植物又弥合了建筑的伤痕。</p>
        <p>该层级含有丰富的地下通道网络，主要为地下铁路网，特殊防核掩体和排水系统。</p>
        <p>该层级会迎来周期性的大雨，这是该层级特殊的生态周期。每当空气变得潮湿沉重，空气中传来巨兽一般的喘息，这便是降雨的预兆。起初的雨水细如牛毛，淅淅沥沥。但在几秒内便会变为黄豆大小，此阶段将会持续五秒左右，随后降水量激增，雨水倾盆，好似海洋倒扣而下。流浪者甚至无法在雨中看清任何事物，甚至无法在雨水的压力下挪动身体。雨水会导致水位激增，地表的大部分建筑都会被冲垮，只有矗立在各处的巨大教堂与钟楼得以幸免，雨水甚至无法进入这两种建筑内，这两种建筑属于下雨时的绝对安全区。其余建筑在被破坏前，雨水也不会涌入内部，此时的建筑内部不会受到大雨影响。大雨在排水系统全功率运行前，会淹没地下通道，只有防核掩体内不会进水，属于下雨时地下的绝对安全区。降雨后水位会骤然升高，但是在排水系统全力运行后，地表的雨水会被全部排走。但是地下通道作为排水系统的一部分仍会洪水肆虐。雨后，受损的建筑会被植物修复愈合。</p>
        <p>某些钟楼和教堂的顶部高过云端。在这些建筑的顶部，你可以一窥云层之上的天空。白天，天上没有太阳，取而代之的是月亮。月亮是漆黑的，但是其上却有着洁白的斑纹勾勒出坑洼与平原。夜间的月亮与正常月亮无异，十分明亮，而且在这种状态下你仍然能看见星星与银河。下雨时云层之上会凝聚更高的一层黑云，风暴在两层云间肆虐，电闪雷鸣。</p>
      </div>

      <div class="section">
        <h2>特殊实体</h2>
        <div class="entity-box">
          <p class="entity-name">"线"</p>
          <p>该实体会在被大雨覆盖的区域出现，线无法影响未损毁的建筑及其内部以及绝对安全区。线会随机切割空间，造成错位或空间的替换。在空间被切割前，被切割区域的边界会有约半秒左右的闪光出现。该实体使得流浪者在排水系统全功率运行后也无法安全的在大雨中的街道上移动。</p>
        </div>
        <div class="entity-box">
          <p class="entity-name">"气球"</p>
          <p>该实体数量极其稀少，通常在未降雨的街道上和未降雨时的钟楼顶层出现。该实体表现为普通的充气气球，颜色为粉色。流浪者可通过给粉气球充气的方式切出该层级。如果在粉气球充气爆炸前未能切出，粉气球将在爆炸后变为灰气球。灰气球也可以被充气，只不过充气手段只能靠流浪者吹气。灰气球被充气至爆炸后，会以流浪者为中心生成半径527米的降雨区并跟随流浪者移动，降雨区的雨与层级周期性的降雨特性无异，流浪者可以穿过大雨的水幕看清外界，并不受大雨和"线"影响自由移动。大雨还会修复使用者身体的损伤，流浪者即使收到难以想象的致命伤，也会被降雨区内的雨水修复。此时的流浪者将会无法进入地下、教堂、钟楼，以及未损毁的建筑内。大雨会持续九小时零八分钟，雨停之后，流浪者会在雨中变为玻璃，并在一声钟声后分崩破碎迎来死亡。流浪者将无法在这段时间切出层级。钟声出现后七分钟，整个SI-49层级将迎来大雨。</p>
        </div>
        <div class="entity-box">
          <p class="entity-name">"奈落之底"</p>
          <p>该实体数量极其稀少。该实体表现为一把英国韦伯利转轮手枪，其中装填有六发子弹。该实体会使持有者性格的阴暗面被放大，并产生偏执与感官迟钝的症状。该实体特性为发射出的子弹具有必中效果，但是最后一发子弹绝对会以某种方式杀死持有者。该实体在子弹打空前或使用者死亡前不会离开使用者，即使使用者丢弃该实体，该实体也会重新出现在使用者面前，同时使用者之外的人无法使用该实体。必中效果仅对距离发射处150米以内的目标生效，且一旦发射，即使目标超出这个距离也将命中。对于发射前150米之外的目标将会失去必中效果。使用灰气球后，必中半径扩大到四百八十六米。该实体可以被带出层级，并在六发子弹打空后回到该层级。流浪者使用该实体发射第一枪后，将被视作持有者。</p>
        </div>
      </div>

      <div class="section">
        <h2>入口与出口</h2>
        <h3 class="sub-heading">切入方式</h3>
        <p>在狭窄通道中有概率出现切入点；在水中或雨中触碰闪白细线可切入。</p>
        <h3 class="sub-heading">切出方式</h3>
        <ul class="entry-list">
          <li>从穿过云层的钟楼或教堂顶部跳下（有概率被云中看不见的建筑重伤甚至杀死）</li>
          <li>使用粉"气球"切出</li>
        </ul>
      </div>
    </div>

    <div class="level-footer"><button class="top-btn" @click="scrollToTop">&#9650; 回到顶部</button></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() { sessionStorage.setItem('skipIntro', '1'); router.push('/') }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
defineProps({ id: { type: String, required: true } })
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
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.8; color: rgba(0,0,0,0.7); margin-bottom: 8px; text-indent: 2em; }
.sub-heading { font-family: var(--font-family); font-size: 1rem; font-weight: 600; color: var(--color-black); margin: 12px 0 6px 0; }
.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.unsafe { background: #e63946; }
.class-bullet.unstable { background: #f4a261; }
.class-bullet.entity { background: #9b5de5; }
.entity-box { background: rgba(0,0,0,0.015); padding: 16px 20px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.06); margin-bottom: 14px; }
.entity-name { font-family: var(--font-family); font-size: 1.05rem; font-weight: 700; color: var(--color-black); text-indent: 0 !important; margin-bottom: 4px !important; }
.entry-list { list-style: none; padding: 0; }
.entry-list li { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.7; color: rgba(0,0,0,0.7); padding: 4px 0 4px 14px; position: relative; border-bottom: 1px solid rgba(0,0,0,0.04); }
.entry-list li::before { content: '→'; position: absolute; left: 0; top: 4px; color: rgba(0,0,0,0.25); font-weight: 600; font-size: 0.8rem; }
@media (max-width: 767px) { .level-page { padding: 24px; } }
/* ── 底部回到顶部 ── */
.level-footer {
  max-width: 800px;
  margin: 40px auto 0;
  text-align: center;
}

.top-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-sm, 8px);
  font-family: var(--font-family, 'Inter', sans-serif);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.top-btn:hover {
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
}
</style>
