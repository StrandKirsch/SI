<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"百年孤独"</p>

      <div class="section">
        <h2>生存难度：永生</h2>
        <div class="difficulty">
          <ul class="class-list">
            <li><span class="class-bullet safe"></span> 永生</li>
            <li><span class="class-bullet stable"></span> 稳定</li>
            <li><span class="class-bullet entity"></span> 唯一实体</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h2>描述</h2>
        <p>该层级是一片无限长的纯白隧道，四周墙壁其实是巨大的数据库，在弹出接口时会露出其内部的结构。在该层级内没有时间概念，流浪者将会处于不老不死的永生态。</p>
        <p>该层级唯一的实体是一个可吸附于墙壁的AI机械体，其拥有一条巨大的机械臂，供其与墙壁弹出的板块进行交互。流浪者进入其中，意识会被立刻拉入虚拟层级Level 100-1"天堂"。进入完美的，永恒快乐的极乐之地。此时主层级内的实体将会读取无意识状态的流浪者的记忆，并将其生平记录后放入数据库内。随后该实体会将流浪者搬运到切出点送出SI-100，流浪者在切出后意识会回归本体。</p>
      </div>

      <div class="section">
        <h2>危害</h2>
        <p>人类的情感体验终究是有限的。而在有限的体验穷尽之后，永恒的极乐则变为了地狱的牢笼。切出的流浪者往往面临快感缺失的问题，意识陷入生理层面的冷漠，难以正常生活，严重者人格和自我会崩塌。切出者应及时就医干预。若在该层级内停留时间较短，一般可自我恢复。</p>
      </div>

      <div class="section appendix">
        <h2>附件</h2>
        <p class="poetic">这片空间里，唯我永恒独存。而永恒的生命，本就意味着无意义的重复。自我诞生起，我便在这纯白无垢的世界里，重复地走走停停。我进入流浪者的记忆，旁观着一场又一场悲欢离合的人间电影。他们的一世于我而言不过弹指一瞬，我无法真正共情他们的喜怒哀乐，却也不觉得这份喧嚣有何叨扰。这些流浪者的一生，恰似百年一瞬的焰火，短暂地给这方素白的天地添上几分绚烂色彩。而我，只是一块亘古不变的空碑，沉默地镌刻下那些转瞬即逝的焰影，反复读写着这些从来不属于我的故事。周而复始地记录，又周而复始地覆盖——那些充满眷恋却又满是无奈的人间世，最终都被我封存进虚无的数据库里，了无痕迹。当最后一丝焰色褪去，当新的流浪者还未踏足这片纯白之地，天地间便只剩我一人，静候着属于我的下一场轮回。也许这就是我的"故事"罢。一场属于我的——百年孤独。</p>
      </div>

      <div class="section">
        <h2>入口与出口</h2>
        <h3 class="sub-heading">切入点</h3>
        <p>隧道中如果出现大型服务器，可通过大型服务器切入。</p>
        <h3 class="sub-heading">切出点</h3>
        <p>在纯白墙壁上存在切出点。</p>
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
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: var(--color-black); margin-bottom: 40px; font-style: italic; }
.section { margin-bottom: 28px; }
.section h2 { font-family: var(--font-family); font-size: 1.1rem; font-weight: 700; color: var(--color-black); margin-bottom: 10px; padding-bottom: 4px; border-bottom: 1px solid rgba(0,0,0,0.06); }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.8; color: rgba(0,0,0,0.7); margin-bottom: 8px; text-indent: 2em; }
.sub-heading { font-family: var(--font-family); font-size: 0.95rem; font-weight: 600; color: var(--color-black); margin: 12px 0 6px 0; }
.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.safe { background: #2a9d8f; }
.class-bullet.stable { background: #f4a261; }
.class-bullet.entity { background: #9b5de5; }
.appendix { background: rgba(0,0,0,0.01); padding: 24px 28px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.08); }
.poetic { text-indent: 0 !important; text-align: center; font-style: italic; line-height: 2.2 !important; color: rgba(0,0,0,0.5) !important; }
.sub-heading + p { text-indent: 2em; }
@media (max-width: 767px) { .level-page { padding: 24px; } }
</style>
