<template>
  <div class="level-page">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">"工厂群"</p>

      <div class="section"><h2>生存难度：等级 2</h2><div class="difficulty"><ul class="class-list"><li><span class="class-bullet safe"></span> 规则内安全</li><li><span class="class-bullet stable"></span> 稳定</li><li><span class="class-bullet entity"></span> 实体极多但基本为非生命体</li></ul></div></div>

      <div class="section"><h2>概述</h2><p>SI-512 由连续厂区组成，已探明区域未见边界。厂区之间无城市、荒地、住宅区，只有车间、大型器械、管廊、封闭通道、货运井、控制室、高炉、冷却站、实验舱、研究站、拆解区。车间高约十八米，顶部装有白色灯带。地面铺灰色树脂层。厂区长期运行，全部产线无人员岗位。厂区仍持续产出，产物多为厂区自身所需部件。</p><p>该层级核心现象为<strong>扩建和换代</strong>。扩建期到来前，未铺设地面会先出现浅蓝色测量线，随后地面硬化分区，墙体、管线、灯带、闸门、产线基座依次生成。换代发生在旧产线成为效率瓶颈时，旧产线停机后系统自动拆解、重新装配。</p></div>

      <div class="section"><h2>物质数据化</h2><p>SI-512 可将固体、液体、气体写入储存阵列。该过程不只记录外形，也记录质量、温度、压力、成分、相态、内部应力和运动状态。调用发生在装配口、仓储井、白色货柜和实验舱内。系统不区分资源和障碍——物体只要进入扫描区，就会获得编号。进入者若随身物品贴上白色小牌，应立刻离开该区。</p></div>

      <div class="section"><h2>微缩宇宙产线</h2><p>厂区深层存在高能实验区，入口多在地下三百米以下。实验区核心设备为厚壁球体容器，外径约二十四米。容器内会引爆量子色等离子爆弹，爆轰后短时出现奇点，奇点稳定后进入培养舱。培养舱内会形成封闭宇宙样本。部分样本内部出现复杂化学结构——复杂度超出阈值后，样本被封存转入红色编号区。</p></div>

      <div class="section"><h2>人员风险</h2><p>SI-512 不主动追逐进入者。主要风险来自排程、扫描、拆解、转存、扩建和换代。进入者站在通道边缘一般不会受干预，但站上传送带、进入黄色测量线范围、破坏传感器等会触发巡检单元。长期停留人员会出现固定行为变化，第三阶段常拒绝离开厂区。</p></div>

      <div class="section"><h2>对外投放</h2><p>SI-512 可向其他层级提供工业品，包括化学品、标准构件、供电模块、净化器、通讯中继件、医疗耗材甚至任意规模的纯粹能量。投放不依赖常规通道——将产品写入储存网络，再借量子纠缠链路锁定其他层级内已存在的节点端口。</p></div>

      <div class="section"><h2>出口</h2><p>出口多出现在物流区，门牌常写"外协发运""样品寄送""非厂内资产通道"。若墙面终端显示"未登记资产"，出口可开启十五至四十秒。离开前应丢弃带编号的小牌、白色扎带、库存贴纸。皮肤上出现编号时，现有方法无法清除。</p></div>

      <div class="section appendix"><h2>末次记录节选</h2><p>三十一号奇点培养仓第 9267 轮循环出现数据异常，奇点体积膨胀速率未达预期，但质量增长速率正常，经评估需转入红色编号区。红色编号区已断开与存储矩阵的链接。备用数据中心正在尝试链接。备用数据中心返回数据：<br/><span class="corrupted">"歡迎使用 SI-512 產出的工業藝術品。"</span></p></div>
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
.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 20px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; }
.class-bullet { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.class-bullet.safe { background: #2a9d8f; }
.class-bullet.stable { background: #f4a261; }
.class-bullet.entity { background: #9b5de5; }
.appendix { background: rgba(0,0,0,0.01); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.08); }
.corrupted { font-family: serif; letter-spacing: 0.1em; color: rgba(0,0,0,0.5); }
strong { color: rgba(0,0,0,0.85); }
@media (max-width: 767px) { .level-page { padding: 24px; } }
</style>
