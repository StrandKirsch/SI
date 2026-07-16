<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"暴雨"</p>

      <div class="section"><h2>生存难度：等级 3</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet unsafe"></span> 不安全</li><li><span class="class-bullet unstable"></span> 不稳定</li><li><span class="class-bullet entity"></span> 特殊实体</li></ul></div></div>

      <div class="section"><h2>描述</h2><p>该层级表现为一座类伦敦风格的城市，大小无法估量，其中建筑与变异生态形成共生关系。整座城市呈现出一种诡异的生命力，空气中弥漫着潮湿的植物腥气，混合着麦芽发酵味。部分路面覆盖着藤蔓与荧光菌毯。天空永远灰蒙蒙的，有时还会起大雾。建筑已经不再是单纯的无机物，与植物共生一体，成为了植物攀附生长的框架，而植物又弥合了建筑的伤痕。</p><p>该层级含有丰富的地下通道网络，主要为地下铁路网、特殊防核掩体和排水系统。</p><p>该层级会迎来周期性的大雨。起初的雨水细如牛毛，但在几秒内便会变为黄豆大小，随后降水量激增，雨水倾盆，好似海洋倒扣而下。流浪者甚至无法在雨中看清任何事物，甚至无法在雨水的压力下挪动身体。只有矗立在各处的巨大教堂与钟楼得以幸免——雨水甚至无法进入这两种建筑内，属于绝对安全区。地下只有防核掩体内不会进水。雨后，受损的建筑会被植物修复愈合。</p><p>某些钟楼和教堂的顶部高过云端。在这些建筑的顶部，你可以一窥云层之上的天空。白天，天上没有太阳，取而代之的是漆黑的月亮，其上却有着洁白的斑纹。夜间的月亮与正常月亮无异。下雨时云层之上会凝聚更高的一层黑云，风暴在两层云间肆虐，电闪雷鸣。</p></div>

      <div class="section"><h2>特殊实体</h2>
        <div class="entity-box"><p class="entity-name">"线"</p><p>该实体会在被大雨覆盖的区域出现，无法影响未损毁的建筑及其内部以及绝对安全区。线会随机切割空间，造成错位或空间的替换。在空间被切割前，被切割区域的边界会有约半秒左右的闪光出现。</p></div>
        <div class="entity-box"><p class="entity-name">"气球"</p><p>数量极其稀少，表现为普通的粉色充气气球。流浪者可通过给粉气球充气的方式切出该层级。如果粉气球充气爆炸前未能切出，将变为灰气球。灰气球被充气至爆炸后，会生成半径 527 米的降雨区并跟随流浪者移动，雨水会修复身体损伤。大雨持续九小时零八分钟，雨停之后流浪者将在一声钟声后化为玻璃破碎死亡。</p></div>
        <div class="entity-box"><p class="entity-name">"奈落之底"</p><p>一把英国韦伯利转轮手枪，装填六发子弹。该实体会使持有者性格阴暗面被放大。子弹具有必中效果（150 米内），但最后一发子弹绝对会以某种方式杀死持有者。使用灰气球后必中半径扩大到 486 米。可被带出层级。</p></div>
      </div>

      <div class="section"><h2>入口与出口</h2><h3 class="sub-heading">切入</h3><p>在狭窄通道中有概率出现切入点；在水中或雨中触碰闪白细线可切入。</p><h3 class="sub-heading">切出</h3><ul class="entry-list"><li>从穿过云层的钟楼或教堂顶部跳下（有概率被重伤甚至杀死）</li><li>使用粉"气球"切出</li></ul></div>
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
</style>
