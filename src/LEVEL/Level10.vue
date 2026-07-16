<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"出塞"</p>

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

      <div class="section">
        <h2>描述</h2>
        <p>该层级表现为一片沙漠和一座关隘。</p>
        <p>关隘主要由内城、瓮城、罗城、外城和城壕组成。其核心是方形的内城，东西两侧各有一道瓮城拱卫，形成"回"字形的多重防御格局，易守难攻。沿着那光滑的石板路穿过厚重的拱券式门洞即可进入城内。城内面积开阔，但建筑毫无冗余的装饰，一切都为战争服务。</p>
        <p>位于内城东北部有一座将军府，这是一座典型的明清院落建筑。其内部陈设着古旧的桌椅、兵器和文书。城中是演武场，是一片开阔的空地，时不时有演员似的士兵办好妆造进行演武，这些演员并非人类，他们没有五官的脸画着脸谱，不知为何，你能透过脸部读出他们的喜怒哀愁。演武场中竖着一把巨大的关刀，你用尽办法也不可能将他拿起。而这关刀的主人却不曾出现。</p>
        <p>沿着马道可以登上高达 10 余米的城墙。城墙顶部宽阔，外侧有着锯齿形用于瞭望和攻击的垛口。在内城外，建有关帝庙和一座精美的戏台，为这座大漠要塞增添了一丝人间烟火气。</p>
        <p>出关吧，在城中寻得关照，在西侧寻得掌握官印的"演员"盖上官印即可出关。向西行，穿过戈壁，就能见到那雄伟无比的沙丘。沙丘连绵，那似乎并不能称为"沙丘"，而是由金色流沙堆积而成的沙山。在清晨，阳光为这山镀上一层浓郁的金，明暗交错的线条充满着独属于大地的生命。日落时分的夕阳将整个沙海染成赤金，温度渐降。时不时有驼铃声越过沙丘，可当你望去，那里空无一物，唯有鸣沙作响。</p>
        <p>你倾听那沙声，能听到那时间所养育沙海之下，埋没这不属于这里的历史与文明。而流浪者们，漫步于其上。</p>
      </div>

      <div class="section">
        <h2>实体</h2>
        <div class="entity-box">
          <p class="entity-name">"演员"</p>
          <p>一群披甲执锐的没有五官的人形实体，面部画有各式脸谱。对流浪者没有攻击性，若流浪者观看他们演武，这些实体会很开心。</p>
        </div>
      </div>

      <div class="section">
        <h2>入口与出口</h2>
        <h3 class="sub-heading">切入点</h3>
        <p>在有沙漠的层级中存在切入点。切入后流浪者将进入内城外的石板路上。</p>
        <h3 class="sub-heading">切出点</h3>
        <p>在城中找到关照并在出关处加盖官印后向西行走，若是在沙山中寻得清泉即可切出至其他层级。</p>
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
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: var(--color-black); margin-bottom: 40px; font-style: italic; letter-spacing: 0.04em; }
.section { margin-bottom: 36px; }
.section h2 { font-family: var(--font-family); font-size: 1.15rem; font-weight: 700; color: var(--color-black); margin-bottom: 14px; padding-bottom: 6px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85; color: rgba(0,0,0,0.7); margin-bottom: 10px; text-indent: 2em; }
.sub-heading { font-family: var(--font-family); font-size: 1rem; font-weight: 600; color: var(--color-black); margin: 16px 0 8px 0; }
.difficulty { background: rgba(0,0,0,0.03); padding: 16px 20px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 24px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.95rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 8px; }
.class-bullet { display: inline-block; width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.unsafe { background: #e63946; }
.class-bullet.stable { background: #f4a261; }
.class-bullet.entity { background: #9b5de5; }
.entity-box { background: rgba(0,0,0,0.015); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.06); margin-bottom: 16px; }
.entity-name { font-family: var(--font-family); font-size: 1.1rem; font-weight: 700; color: var(--color-black); text-indent: 0 !important; margin-bottom: 8px !important; }
strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } .class-list { flex-direction: column; gap: 6px; } }
</style>
