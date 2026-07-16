<template>
  <div class="level-page" :class="{ devastated: view === 'present' }">
    <button class="back-btn" @click="goBack">&larr; Back to Index</button>
    <div class="level-content">
      <h1 class="level-title">SI-{{ id }}</h1>
      <p class="level-name">{{ view === 'past' ? '"莽原"' : '"报晓守望"' }}</p>

      <div class="toggle-bar">
        <button class="toggle-btn" :class="{ active: view === 'past' }" @click="view = 'past'">追忆往昔</button>
        <button class="toggle-btn" :class="{ active: view === 'present' }" @click="view = 'present'">回顾当下</button>
      </div>

      <!-- ═══════════ 追忆往昔 ═══════════ -->
      <div v-if="view === 'past'" class="doc-view past-view">
        <div class="view-badge past-badge">2018.7.22 之前</div>

        <blockquote class="epigraph">莽原大荒，灾年难竟。悲夫往昔，已无可追。<span class="episrc">——该层级某本遗落的诗集</span></blockquote>

        <div class="section"><h2>生存难度：2</h2><div class="difficulty"><ul class="class-list"><li><span class="b unsafe"></span>不安全</li><li><span class="b stable"></span>稳定</li><li><span class="b entity"></span>少量实体</li></ul></div></div>

        <div class="section"><h2>描述</h2>
          <p>SI-Level20 是一块无垠的稀树草原（附件：SI-Level20的一处自然风光），有一些人造结构的痕迹，包括但不限于：篝火、残垣断壁、营地等，在各处都可能出现如杏仁水等补给品，实体较少，让人不禁想起前厅的非洲草原生态，此处需特别指出——本层级的气候不能拿此比喻。切入点与切出点多但固定，后室Wi-Fi信号中等，观光业发达，是一处规模不断扩大的流浪者聚集层级，此处登记在案的流浪者聚居地有101个。<sup>[数据引用于2017年10月的例行报告，"虽然这些大多是居民在十人之内的小型聚居地，但喜人的是该数据仍在上涨，自MEG入驻后在层级的大开发，我们有信心让此处成为一个较安全的人类大型聚居层级！"——MEG SI层群分部拓荒署 Novaak先生]</sup>，详情见此文档<em>[SI-Level20流浪者聚居地记录档案]（该页面被删除或不存在！）</em>。</p>
        </div>

        <div class="section"><h2>入口与出口（目前无法使用）</h2><p>入口：<br/>出口：</p></div>

        <div class="section"><h2>注意事项与探索指南：</h2>
          <ol class="guide-list">
            <li>本层级存在着季节变化，但变化频率是近一个月一次，请切入的流浪者备好抗热抗寒的衣物用品。若不慎切入，面对着危险情况的流浪者：请寻找附近的聚居地或MEG站点寻找帮助！<em>[SI-Level20流浪者聚居地与MEG站点等地图 附地标]（该页面被删除或不存在！）</em></li>
            <li>本层级存在着<strong>「实体大迁徙」现象！！！！！</strong>而好消息是切入的流浪者不会出现在它们的路线上。关于实体的迁徙路线经两年来的测绘与后来的实践修订已经十分完善，在夏季时大迁徙才会发生，目前这种现象已经成为了热门的旅游项目，若有观光需求可以联系聚居地的导游（附合影服务），这种景观足矣大开眼界并与你的好友吹嘘！这里给出<em>「实体大迁徙观测指南（附地图）」（该页面被删除或不存在！）</em><br/><em>附件：与远处一群实体合影的流浪者们.jpg（文件被删除或不存在！）</em></li>
            <li>本层级不时与速切协会合作举办速切竞赛，若流浪者看到许多人同时消失，请不要感到惊慌，此外您能来此观赛将有幸得到BNTG与速切协会共同设计的纪念品，速切竞赛相关内容请前往层级的速切协会分部咨询。</li>
            <li>本层级有着多年的文学创作氛围，在此吟游诗人随处可见，若是能为诗人们赏上两口美酒自然是最好不过了！莽原文学协会欢迎各位流浪者共同创作，以及若在探索中发现散佚的诗集/小说/散文等内容，欢迎投稿至SI-Level20的大图书馆，同时我们将不时举办创作大赛，我们的官网链接请点击此处<em>（该页面被删除或不存在！）</em>。</li>
            <li>SI层群原住民"昔民"有着独特的文化，请外来的流浪者尊重他们的文化，MEG与BAUT提倡文明理智的解决问题，若有争执请前往<em>[昔民与外来流浪者调解处]</em>解决，站点分部请查阅上文地图链接。</li>
          </ol>
          <p class="fine-print">※第2~4项由BNTG SI层群文化宣传部与MEG SI层群分部拓荒署提供，属于宣传性质，BAUT并不对此负责。</p>
        </div>

        <div class="section appendix"><h2>附件1：MEG、BNTG与BAUT的三方谈判记录</h2><p>《关于开放SI-Level20 莽原作为对外开放的窗口试点层级之一的决定》纪要：经过一年有余的谈判，BAUT做出了让步，同意将荒芜但安全的SI-Level20交给MEG与BNTG共同开发，但要遵守他们的规矩。</p></div>

        <div class="section appendix"><h2>附件2：《SI层群原住民"昔民"文化风俗小考》</h2><p class="meta">——MEG SI层群分部拓荒署外勤档案员 Rosland</p><p><strong>概要：</strong>本文以外勤调查与问卷调查等为研究方法，探讨"昔民"独特的文化现象和SI层级的外界隔绝因素之间的关系。研究得出了"昔民"具体的群体画像，提出了交涉建议。</p><p><strong>关键词：</strong>昔民；SI层群；文化考察；孤立层群；这群人是在漠视死亡吗？</p><p><strong>引言：</strong>（正在使用语音转文字…）得了吧，我是第一个做这个研究的，我当时真没想那么多立项原因，哎不是你是说MEG要求我们必须填这一项？那我真是操死你的妈，咳咳，为了填补SI层群原住民研究的空白……我当时看到SI-Level20中某诗集有一篇曾云："烟波浩渺，星火蜉蝣……如同前厅亚洲的古文《赤壁赋》中的那句"寄蜉蝣于天地，渺沧海之一粟"……</p><p><strong>研究方法：</strong>（正在使用语音转文字…）我真的不想填了，这真的只是个普通的调查啊，别他妈拦我，我要找总辖理论，怎么一篇普通的文化考察也要按这格式写？！</p><p><strong>研究结果：</strong>（正在使用语音转文字…）研究发现"昔民"对实体与切出的恐惧阈值高于常人50%，对于死亡的漠视感较外界高出了23%，而关于归乡——返回前厅的念头较对常人的调查结果少了79%，此外33%的调查对象展现了对外界层群人类的藐视，文学领域中则较外界层群……我终于干完事了，放我下班！！！！！</p></div>

        <div class="section appendix"><h2>附件3：昔民与外来流浪者调解处的通知</h2><p class="meta">调字【2016】7号</p><p>近日来昔民与外界层级的流浪者的矛盾激增，我们并不在乎工作量，请各位积极前往调解处解决问题，并向您身边的朋友们宣传团结共荣的理念，让我们共建美好家园！</p></div>
      </div>

      <!-- ═══════════ 回顾当下 ═══════════ -->
      <div v-if="view === 'present'" class="doc-view present-view">
        <div class="view-badge present-badge">2018.7.22 之后</div>

        <div class="section"><h2>未来要如何重建，暂时还没有答案</h2><p class="motto">——拓荒署对"风暴"后现状的总结</p></div>

        <div class="section"><h2>生存等级：5 <sup>[此处的生存等级是在"风暴"袭击了SI-Level20时临时启用的。]</sup></h2><div class="difficulty"><ul class="class-list"><li><span class="b unsafe"></span>不安全</li><li><span class="b unstable"></span>不稳定</li><li><span class="b entity"></span>实体横行</li></ul></div></div>
        <div class="section"><h2>生存等级：3</h2><div class="difficulty"><ul class="class-list"><li><span class="b unsafe"></span>不安全</li><li><span class="b unstable"></span>不稳定</li><li><span class="b entity"></span>少量实体</li></ul></div></div>

        <div class="section"><h2>描述</h2><p>SI-Level20是SI层群的第20层。在流浪者们初次踏足于此地时，这里还是一片荒芜，但又安全的区域。但在2018年7月22日的大型灾难「风暴」影响到了该层级，且因此与MEG的SI层群分部断开联系近六个月，目前这里十分危险。</p><p class="warn">在得到MEG SI层群分部拓荒署的许可前，请勿主动切入本层级！</p>
        <div class="editor-note"><p>您目前查看的页面正是SI-Level20的现状。重新编辑这篇档案时我内心不禁五味杂陈：这场灾难近乎摧毁了我们近八年来的所有努力，而我们却在这"近乎"的残余中又一次尝试将它重新垒起。先前的档案将永久留存，原因有三，一是本层级目前已失去了原本作为稳定据点之一的作用；二是「风暴」后的SI-Level20的后室Wi-Fi信号并不稳定，每次联络与维护文档都会间隔很久；三是最重要的原因：我们不能忘记这个创造者死了妈与此同时他妈的骨灰化为量子态而致使千变万化的地方，想抹去我们的存在有多么容易，我们就是在做这种斗争。请让我在两处文档的开头向SI-Level20中的所有幸存者致敬，对"风暴"波及的所有遇难者缅怀。</p><p class="fine-print">保留原层级文档的决议由MEG SI层群分部与分部拓荒署公投通过，过程公开透明，记录请见已完全公开的会议记录。</p></div>
        <p>SI-Level20是一块无垠的稀树草原（附件：SI-Level20的一处自然风光），有一些人造结构的痕迹，包括但不限于：篝火、残垣断壁、营地等，杏仁水等补给品在风暴影响区域内出现，实体较少，层级气候炎热，同热带草原气候的雨季。切入点目前已固定，暂无切出点<sup>[关于此处的解释详情请见调查报告]</sup>，MEG拓荒署再次提醒，在得到MEG拓荒署的许可前，请勿主动切入本层级！</p>
        <p>后室Wi-Fi信号中断，自从上次SI-20的拓荒署前哨站为主文档库上传层级现状，以及与MEG SI层群分部通讯已经时隔了六个月有余<sup>[截止于2022年3月10日。]</sup>。在此期间，MEG SI层群分部拓荒署履行自上次短暂通讯的决议，仍在保持每月派遣一支<del>过量物资</del><ins>足量物资</ins>的由机动特遣队Eta6——培训过的老练外勤人员护送的科考队。</p>
        <div class="argument"><p class="arg-a">【正在使用语音转文字——Osward】说真的，你们不觉得划给的人力和物资会不会太多了，每次对SI-20的决议我都觉得对他们偏向的过分了，这不是在吸我们的血吗？</p><p class="arg-b">【正在使用语音转文字——Mardi】我去你妈的吧，有点良心好吗，要说吸血，之前那八年里我们从SI-20得到的收益还不够堵住你杏仁水依赖症的嘴吗？安全区内几乎见不到补给品，想要你就得去那遍地龙卷的地方去找，农产业的收益托"风暴"影响天气的福微乎其微，我们不能坐视不理，层级还有一群数量可观的人在喘气！这群猛士阅读了这份档案，签署了拓荒署那份明摆着准备给亲属送抚恤物资的协议，明知可能回不来，他们竟然也打算前往，去研究"风暴"，去在"风暴"中寻回那些失踪了，回不了家的人！更何况，最近有些传言说BAUT明明有能力在"风暴"里挽救无数性命，可他们却袖手旁观，只因SI-20算作我们的地盘，我们只能靠自己再次建起这一切。</p><p class="admin-lock">【Admin：文档已锁定】</p><p class="admin-warn">【Admin：慎言。】</p></div></div>

        <div class="section"><h2>大型灾难"风暴"事故调查报告</h2><p>本报告将由时间顺序持续更新，直至……我们解明（Solved）、克服（Overcome）、战胜（Beat）它，如果后室有它的主人还是意志什么的，我们要让祂知道，面对灾难，人类并非无计可施。（即SOB原则，拓荒署于SI层群遭遇第一起大型灾难时提出）。</p><p class="sign-off">——MEG SI层群分部拓荒署 总辖 Clara·Pond</p></div>

        <div class="section"><h3 class="sub-heading">"风暴"的开端</h3><p>2018年7月22日，凌晨，这本该是SI-20"莽原"这处无垠草原的一个平常且燥热的月圆之夜，可毫无征兆地，草原各处出现了大量龙卷风——其携带着实体并驱赶着周边的实体，目击者声称：平均每隔三四公里就能看到一道擎天龙卷，其中裹挟着诸多实体，而地上的诸多实体都在逃窜，似乎还有些不属于本层级的实体<sup>[此事在后续的调查中得以证实。]</sup>。更具灾难性的是，层级内与对层级外的通讯信号在急速减弱，所有切出手段已失效。</p><p class="img-cap">附件1中"天灾信使"送来的照片 拍摄时间2018/07/22/00:32</p><p>这一切来的太过突然，以至于许多人在睡梦中就被龙卷风撕成了碎片，被摧毁的聚居地更是数不胜数。更雪上加霜的是，后室Wi-Fi信号的中断，SI-20彻底变成了一处孤岛，信号中断前对外发出的最后一条消息是：<strong>"第二场大型灾难发生了……请禁止普通人员切入本层级，此外我在拓荒署于本层级分部暂时无法联系的情况下，代表SI-20层级MEG申请援助。"</strong>之后，MEG SI层群拓荒署在第一时间发布通知，警告流浪者不要前往SI-20。</p></div>

        <div class="section tape"><p class="tape-label">附件1 [rec:no.325/2018/7/22]，一份来源于SI-20拓荒署通信段的录音记录</p><p class="stage-dir">【警笛声不断响起，伴随着分辨不清数量的跑动声音】</p><p class="dialogue">Ackwood：安保部门先去关掉警报，别让实体被吸引而来！<em>*叹气声*</em>现在是2018年的七月二十二日，凌晨五十四分，于"莽原"层级拓荒署通信段，我是段长Ackwood。我们在四分钟前，地表站点的一公里外观测到了一处龙卷正在生成，目前在场人员已经全部疏散至地下避难设施。此外，不明原因造成的多数流浪者聚居处以及MEG等组织的通讯全部中断。</p><p class="stage-dir">【警报声停下了，但周围的议论声又是此起彼伏，多显不安急促】</p><p class="dialogue">Muhammad：让开，让开！我说你他妈给我让开！我有照片要拿给站长看！我都说了别他妈挡路——</p><p class="stage-dir">【传来一道撞击地板的沉闷声音】</p><p class="dialogue">Muhammad：段长，刚刚有一路车队，他们交给掩护人员进入地下工事的安保部门这张照片，留下了一句"我们一路上都能遇见这种龙卷"就继续驱车向西了……你自己看吧。</p><p class="dialogue">Ackwood：<em>*倒吸一口冷气*</em>我现在是知道是什么造成的通讯中断了。这群抠搜的家伙，恐怕现在才知道要买一套昂贵的设备以及完善人防的好了——可谁他妈会料到有这种事？<em>*拍掌*</em>好了，都给老子动起来，先把这张照片发给各通信终端，文字公告也需发布，Jefferson，你去拟一份目前灾难情况的概述；Muhammad，试着启用所有可行的广播线路，就播报那份概述，预案里的内容对现在的求生没有用处；应急作业小组跟我走，我们要试着在与其他层级的通信中断之前把这起事故通知出去！快，快，快！</p><p class="stage-dir">【长达二十多分钟的嘈杂噪音，多为通信段工作人员交流与操作设备】</p><p class="dialogue">Ackwood：哈哈，当了七年的站长，上一次出生产事故还是在325天前，还他妈只是有人把我喜欢的混音磁带放进了广播，七年啊，就这么一次，现在出这么大的事，我真是——啧，与拓荒署联系的第一次尝试，发送第一条消息与附件图片："SI-20正遭受遍及全层群的龙卷风与实体潮的破坏，情况如图。"</p><p class="dialogue">小组成员：发送完成了，段长。</p><p class="dialogue">Ackwood：第二条信息，"第二次大型灾难发生了……请禁止普通人员切入本层级，此外我在拓荒署于本层级分部暂时无法联系的情况下，代表SI-20 MEG分部申请援助。"</p><p class="dialogue">小组成员：段长，我们的通讯信号正在不断减弱，这次失败了！</p><p class="dialogue">Ackwood：第二次尝试。</p><p class="dialogue">小组成员：还是失败了……</p><p class="stage-dir">【砸击桌面的声音】</p><p class="dialogue">Ackwood：第三次尝试！</p><p class="dialogue">小组成员：信号微弱到几乎无法通信了！<em>*短促的呼吸声*</em></p><p class="stage-dir">【一声清脆的敲击键盘声】</p><p class="dialogue">小组成员：完成了！但——</p><p class="dialogue">Ackwood：但我们现在已经成了一处孤岛，无论是其他层级，还是这个地下工事之外的事情，我们一概不知。是啊是啊，我只能说……祝我们好运。<em>*沉重而缓慢的叹息*</em></p><p class="stage-dir">【录音结束】</p></div>

        <div class="section tape"><p class="tape-label">附件2 [vid/2018/07/22/00/12]，一份来源于团体"天灾信使"的录像。</p><p class="stage-dir">【拍摄者的镜头在正对着远处的龙卷风，不断翻卷的龙卷外围似乎裹挟着一些东西。镜头开始晃动，是拍摄者试图摇醒旁边的伙伴。】</p><p class="dialogue">Clarkson：醒醒——醒醒！赶紧起来，草原上刮起龙卷了！</p><p class="dialogue">Zacc：<em>*呵欠*</em>你在开什么玩笑？我宁愿信这里起野火也不会相信——</p><p class="stage-dir">【镜头再次晃动，能看出是换人持有。镜头对着龙卷风再次聚焦，关闭了夜视模式，呈现在荧幕中的是细菌、笑魇、猎犬等敌对实体，被龙卷风卷入空中。接着，拍摄者此时开启了夜视模式，注意到草原远处的地平线上有着诸多白色的光点——那是实体的眼睛。】</p><p class="dialogue">Zacc：我操，快去把营地的人叫醒！叫所有人都上车，带上必备品，得马上离开这里！</p><p class="stage-dir">【拍摄视角转至地面，不断晃动，视频中传来的声音是此地的管理者在组织聚居地的成员，立即收拾并驱车离开。】</p><p class="stage-dir">【视频录制间隔了一段时间，目前是凌晨24分，拍摄者坐在一俩敞篷越野车的后座上，试图继续观察那道龙卷风。】</p><p class="dialogue">Clarkson：我不知道这算不算世界末日，起码对我来说：是的。这么大的动静，拓荒署怎么可能一点通知不发——哦，因为信号瘫痪了。老大有说我们该往哪走吗？</p><p class="stage-dir">【镜头转向前方，一个只留下背影的女人坐在驾驶位上。】</p><p class="dialogue">Zacc：他说往东开，因为我们已经在已开发地带的最西边了。他希望能看到有什么地方能避难，或者，我们开着车逃一路。不，不对，前面怎么还有龙卷风！？</p><p class="stage-dir">【拍摄者聚焦前方，那又是同样的"实体龙卷"，但还裹挟了一些人类，不知是死是活的人类。】</p><p class="dialogue">Clarkson：老天啊……</p><p class="stage-dir">【拍摄结束。】</p></div>

        <div class="section tape"><p class="tape-label">附件3 《关于第二次大型灾难的首日报告》——MEG SI-20拓荒署分部</p><p>我实在不知外界现状如何，只能捡我遇见的状况来撰写这份报告。不论是鉴于目前我的处境，还是因为得执行拓荒署所谓的汇报流程，我都没得选，我除了这件事以外已经无事可做。</p><p>这里是MEG SI-20的拓荒署分部，坐落于"莽原"西部开发区，应到五十五人，实到一人。第二次大型灾难我命名为<strong>"风暴"</strong>，你们爱叫啥叫啥吧。我是这里的档案员<strong>柳如意</strong>，在龙卷风莫名出现于我们分部时，我是唯一那个在地下室加班整理被废止的昔民与外来流浪者调解处的档案的，因此逃过一劫。我的同僚们在这场灾难的开始，就被夺去了性命，不觉得很讽刺吗？如今我只能锁在这个令人窒息的地下角落，门外还偶尔传来实体的啸叫声，孤身一人——你们就当是牢骚吧，因为我也不知道这份报告会不会被后来人看到，或者发送给总部之类的。</p><p>凌晨三十三分，如我前文所述的，一个龙卷风就莫名其妙地出现在了基地上，把所有人连带地表的建筑全部搅碎了——也许会有幸存者，也许不会有。地下与外界的交流手段仅剩下发信室的应急通信端，我在凌晨一点二十二分收到了通信段拓荒署的全频通知，但他们发送过后就失去了信号，不知下落。</p><p>同时通讯频道中，恐慌的人们发送的大量消息使通讯堵塞，我挑有价值的部分说。第一次的大型灾难就在中途变换了形式，不知这次会如何。</p><p>"风暴"出现于2018年7月22日的凌晨，是无数道凭空出现的龙卷风，裹挟着诸多SI-20常见的实体，似乎还有些来自其他层级的实体？实体被龙卷搅上天，又有一部分被甩到地面上，在草原上徘徊，目前危险程度应归到"实体横行"的等级。没人知道第一处龙卷出现在什么时候，但可以确定的是，它是从西边开始出现的，当通信段发布通知时，东部的一些流浪者还在频道里怀疑消息的真实性。"风暴"事起，整个层级的通讯都受到了干扰，并且与那些龙卷无直接关系，似乎是层级的性质遭到了改变？我的一位住东边的昔民朋友在正午才回我消息，说是在此之前信号总是断断续续。并且所有的切出手段均已失效，我听到了频道中尝试切出的流浪者临死前的哀嚎。</p><p>此外，出现了一个自称<strong>"天灾信使"</strong>的民间团体，成员约有三四十人，从频道里的消息可以考证，通信段的最后一次公告中的照片正是来源于天灾信使。他们在"风暴"伊始驾驶着一批车辆，试图从西部开发区到东部开发区，在逃离的同时向各聚居地警告"风暴"的到来。确实让我见识到了在天灾中流浪者的胆量，但愿他们的运气如他们的胆量一样惊人。目前，历经一天，他们已经移动至"莽原"中部开发区，我将持续关注这支新兴团体的动向——通过与频道中尚能通讯的流浪者们交流。我已经公布了"莽原"所有的人防设施地址。</p><p>我不知道层级的通讯信号究竟能稳定多久，所以我已经将全文上传至频道与本地档案库——电子与纸质各一份。但愿我能活着把这份报告交出去，但愿我们能熬过这场大型灾难，但愿我们能再次屹立于这片莽原。</p><p class="sign-off">记住，流浪者们，面对天灾，人类并非无计可施。<br/>——柳如意 2018/7/22</p></div>

        <div class="section appendix"><h2>附件4 《关于第二次大型灾难前期拓荒署的初步反应》</h2><p class="meta">MEG SI层群分部拓荒署文件 拓字【2018】5号 关于第二次大型灾难的首次救灾行动</p><p>拓荒署是第一时间收到SI-20"莽原"通信段的警告的，组织救援救灾力量也是最为迅速的。但在失联的情况下我们的工作变得十分严峻，而且据守在其他层级的SI-20切入点的MEG站点则告知了我们：切入点已不可用，使用多种常规手段切入亦然未果。我们联系了Eta-6，"层级执法队"，在多次尝试后确定：他们也无法切入。</p><p>目前我们在积极尝试各种方法，试图联系与切入层级内，同时，增加了在SI-20切入点附件的MEG站点的人员与资源部署，已知情报已更新至数据库。</p><p>请不要放弃希望，但愿"莽原"的各位一切安好，我们绝不会放弃救援行动。</p><p class="sign-off">——MEG SI层群分部拓荒署 总辖 Clara·Pond 2018年7月22日</p></div>

        <div class="section"><h3 class="sub-heading">"风暴"的转折与第二次变化</h3><p>2018年12月26日，SI-20处于SI-63的切入点出现了剧烈反应，地面出现了一处涡旋状隧道，状如龙卷。站点在等待人员调动的同时，观望数日未见变化，于2018年12月29日，救灾委员会决定派出先遣队探索。</p><p>在第一批先遣队前往未探明隧道五日后，2019年1月3日，我们遇上了意外之喜，SI-20与其他层级的通讯终于恢复。委员会第一时间与先遣队取得联系，得到回复：暂未出现损失，同时他们在切入点附近建立起了据点。第二件好消息：SI-20的幸存者们与我们取得联系，告知了我们这近半年来层级的变化，至于内容的可信度，经考证除少量文艺加工外均属实。</p><p>先遣队与幸存者的汇报中都提及了"风暴"的二度变化，详见附件2、3。</p><p>在SI-20的通讯与来往稳定的期间，委员会先后派遣了4支队伍前往支援，护送愿意离开的幸存者离开层级，令人意外的是，近半成人不愿离开。撤离行动是在两天之内迅速完成的，在SI-20再度失联前，委员会决定派遣一批科研团队、后勤队伍与武装部队驻扎此地，相信幸存者与他们能够践行S.O.B原则，为人类夺回此地。<em>【正在编辑】好在后续也证明确实如此。</em></p><p>另，我们与α-3"骑士团"的合作请求被对方拒绝了，只能继续调用那些老练的MEG成员了。</p></div>

        <div class="section appendix"><h2>附件1 《关于SI-20切入点旁MEG据点的人员调动》</h2><p>致人事科，此次是第二次大型灾难的第五次人事调动，做如下安排：……SI-45的外勤人员增加5位，武装人员增加12位。SI-63的科研人员增加15位，外勤人员增加20位，武装人员增加30位，自愿者优先。并且需要随时调用α-3"骑士团"的权限，我们已另作汇报以及一份合作协议至"骑士团"本部。前日，我们发现在SI-63进入SI-20的切入点有异常现象，怀疑切入点将重新开启，请尽快调度人员前往。另：请通知调度人员多需留意BAUT的情报人员，近日来情报科多次报告，他们的小动作不断，似乎在围绕着第二次大型灾难展开，仅是SI-20附近的据点就多了不少探子。</p><p class="sign-off">MEG SI层群分部拓荒署 第二次大型灾难救灾委员会 2018年12月26日</p></div>

        <div class="section tape"><p class="tape-label">附件3 《SI-20"莽原"2018年下半年受灾情况报告》(节选)</p><p>是的又是我，柳如意，我他妈活着回来啦！并且在这间地下室多了几十个新住户，我和救灾来的MEG成员们也在今天见了面，我马上把这半年来的情况为各位做个总结。</p><p>SI-20"莽原"，原先已登记的101处流浪者聚居地现存43处，其中含重组的聚居地8处。原登记的流浪者有3246人，现有954人。</p><p>在第二次大型灾难"风暴"来临时，未能及时反应的西部开发区伤亡惨重。同时由于西部的各类设施较多，遭到的损害也是最严重的。其中MEG的各处机构也是十不存一，已无法维持分部的运行，若要考虑重新建立驻地，请考虑再度组织人员建立应急标准下的精简机构。</p><p>另外，"莽原"的大图书馆被漫天的龙卷风摧毁成残垣断壁了，地下室中的图书无碍，但地表的图书几乎全部损毁，但诗歌完好无恙，我本担心它们将散佚于狂风之中，这都多亏了图书馆的工作人员与滞留此地的流浪者们共同努力，才把它们抢救出来！</p><p>对了，大型灾难的应急预案并非一无是处，根据文件指导，我们修建的多处人防设施成为了这段艰难时期的避难所，就是食品有点太单一了。</p><p>民间团体<strong>"天灾信使"</strong>在"风暴"开始的头几日，历遍了整片开发区，同时也及时联系了沿途的聚居地流浪者们，为他们指明了避难设施所在地，最终落脚于之前废止的"昔民与外来流浪者调解处"的地下人防设施。真不可置信，他们在实体风暴中<strong>三十七人全部幸存</strong>！他们在挽救了许多生命的同时，跑赢了天灾，无愧于天灾信使的名号。若是要宣传人们的伟大精神，大可以捡这些事情报道。嗯，绝不是为了我自个成名。</p><p>……</p><p>"风暴"一开始就是从西部开发区开始蔓延的实体龙卷风，持续了四个多月！还好人防设施里的物资够我们支撑许久。"风暴"的变化是在12月3日发生的，我也给不出具体时间，总之这里的龙卷风开始向开发区外移动，同时它们卷走了大部分漫步于草原上的实体，目前可以宣布开发区的安全程度重回原先的水平了——我们刚踏上这片土地时的安全水平。龙卷在移动过程中呈现融合的趋势，"天灾信使"们录制的视频里为我们呈现了这个令人不安的现象，好在它们已经远离了开发区。</p><p>同时，在开发区边缘出现了足矣环绕整个区域的木屋，除了能在最近距离观测这些龙卷风之外，我们暂时没有想到它的其他用途。说句令人不舒服的，我感觉我们像是，被这包围了开发区的龙卷风圈养了？</p><p>关于撤离事项，我也已经通知了各个聚居地的流浪者们，我先表个态，我不走，我要继续记录这里的事情，直到我死去或者这片草原上的人们再次安居乐业的日子！这段时间的大小事记就这些了，希望下次失去联系的时间不要太久。</p><p class="sign-off">柳如意 2019年1月13日</p></div>

        <div class="section"><h2>"风暴"的第二次变化后</h2><p class="meta">前言：我是拓荒署外勤档案员，兼第二次大型灾难救灾委员会成员，S·Rosland。我在完整的参与了第二次大型灾难"风暴"的从中期至今的抢险救灾行动后，决定撰写这段介绍，旨在客观地叙述目前报晓守望，即SI-20的状况。前几个版本有失偏颇，且有传播对内仇恨的嫌疑，故委员会与拓荒署委托我对此处项目进行修改。</p><p>SI-20目前启用了新的代号，<strong>"报晓守望"</strong>，该提案在2020年5月1日通过，详情请见拓荒署新闻网的记录。为何启用这样的名字？这需要从一次偶然的双向观测说起。</p><p>在"风暴"第二次变化后，环绕着开发区边境突兀出现的小屋成了观测那些大小不一的龙卷的科考站。2019年4月25日，自2019年2月3日的联络中断再次恢复。编号为北12的科考站观测到了两处巨型龙卷正在接触的过程，且在长时间内并未产生其他反应。同时，在SI-45，进入SI-20的切入点，有4位从SI-91"世外天堂"逃出的流浪者慌不择路，在躲避追兵时选择进入未启用的切入点。<sup>[请放心，这四名流浪者在经过检疫流程后确定无害，已得到妥善安置。追杀者已悉数击毙，我们绝不能容忍SI-99对外界的侵染。——MEG拓荒署武装部]</sup></p><p>这时巧合中的巧合产生了：北12的高速摄像机拍摄到编号为"金星"与"木星"的两个巨型龙卷正好接触时，切入点再次可用，将几人送入了SI-20。在此之前，对于开发区之外的龙卷风的运动，人们试图在各种角度寻找其与后室的联系，均以证明失败告终，这次偶然为我们提供了一个新思路。</p><p>新的课题："龙卷风之间的接触是否意味着SI-20的切入点再次接通？"被端上了台面。在多次与其他层级MEG据点的合作研究中，我们终于成功证明了猜想。此后，更多的科研人员与武装部队在签署协议后被调至SI-20长期驻守。</p><p>至此，这场大型灾难的规律就目前来说，终于被<em>（原文此处留白）</em>。在希望它不会再次产生变化的同时，我们将驻守于此，像中世纪的守夜人那样，看守瞭望，直到黎明的到来，同时希望对"风暴"的研究能造福流浪者们。</p><p class="sign-off">——S·Rosland 2020.9.9</p></div>

        <div class="section appendix"><h2>附件1 《SI-20对外界联络恢复现象的研究报告》（摘要）</h2><p>作为一名在前厅的前气象学家，我想指出的是，SI-20的"风暴"呈现形式确为一场超大型的雷暴，影响范围无从估计，但是，雷暴不可能产生一个真空的包围圈，其中产生的龙卷能永不消失？这更不可能！而且这些影像资料里的龙卷风在第二次变化中，融合变为"超级单体"这更是天方夜谭！综合地说，我们气象研究团队只能对其的表面气象学现象做研究。目前我们将全层级的可观测到的龙卷风逐个标记，组成了一幅<strong>"龙卷星图"</strong>，便于日后研究。</p><p class="meta">——不愿透露姓名的气象研究团队成员</p><p>综合了多种观测手段，包括但不限于对照切入点开放时间与"龙卷星图"中各龙卷的接触时间，我们得出以下结论，能用于SI-20的重建工作。</p><ul class="findings"><li>SI-20的通讯信号先于切入点恢复正常。</li><li>SI-20的开发区外围的龙卷之间相互接触，意味着某一处切入点的再次启用，所以恢复通讯是切入点可用的前兆。</li><li>此外龙卷间的接触甚至会产生新的切入点，但位置随机，无法确认。因此我们建议选用已探明的切入点，或派遣先遣队。</li><li>SI-20的通讯与切入状态保持正常的时间长短不定，调遣人员的时机请谨慎选择。</li></ul><p>关于更为详细的研究与证明过程，请见本报告的完整文献。</p><div class="classified"><p>以下内容正在经过审查，若需查看，请提供MEG SI层群分部的档案库管理员权限。</p><p>密钥:■■■■■■■■</p><p class="granted">欢迎回来，总辖 Clara·Pond！</p></div></div>

        <div class="section tape"><p class="tape-label">附件2 [rec/eta6/training_7th/day3]</p><p class="dialogue">CPT：再说一遍，我的军衔不是上尉，这<em>*消音*</em>是我的代号，我们的教学没有这么多官架子，请不！要！阿！谀！奉！承！好吗？</p><p class="stage-dir">【在短暂的鸦雀无声后，讲话者继续发言】</p><p class="dialogue">CPT：好了，让我们进入今天的理论教学内容。本次我们主要学习的是，在躲避层群内大多常见实体的情况下，完成对受困人员的搜救。哦对，我们还针对了SI-20中出现的实体做了特别教学调研。</p><p class="stage-dir">【课程教学进行了约2个小时，铃声响起，迎来了十分钟的课间休息】</p><p class="dialogue">CPT：喂？<em>*小声地*</em>哦是你啊，Novvak先生，我都说了，TMS不想和BAUT关系闹得太僵，现在能让我们开培训班已经很冒险了，真不能再让步了——</p></div>

        <div class="section appendix"><h2>附件3 一封来信。</h2><p class="meta">致S·Rosland：</p><p>你好！</p><p>自上次小聚，已是三个月前了，我在离开SI-20放个小长假的时候，去了一趟SI-10出塞，那里有一座和前厅的无异的关帝庙，那些演员虽说是实体，可确实专业，演出很好看啊！我去求了一件雷击木手串保平安，过一阵回去我打算把它摆在我的电脑桌上。</p><p>啊，还有SI-35"possibility"，赌博不好，我知道，但是我开的第一个"盒"就给我了整整几百来瓶杏仁水啊，我见好就收了，是的。绝不是因为"盒"有配额，我只能在一众BAUT和MEG，甚至是TMS的武装保护下开一个。</p><p>在各层级与SI-20的切入点周围绕了一圈，发现BAUT的眼线只增不减，明明我们的成果都摆在明面了，他们到底在打探什么？这期间我还走访了许多昔民朋友，有些还是BAUT的成员，有的人说，"BAUT内部对MEG的意见不一，但目前是鹰派占上风，意图打压MEG的发展，维护自己在稳定区内的核心地位，'莽原'，我是说SI-20，它本就是BAUT不情不愿地划给MEG的地盘，如今遭了灾，他们肯定有诸多借口推辞不帮。再想想以往BAUT一会与你们MEG蜜月期，一会又马上进入冷战期，一切够明白了吧。"还有更离谱的观点，"BAUT在观望，评估你们抵御天灾的能力。"</p><p>这都他妈第二次大型灾难了，还要评估什么，从第一次学到教训，活用于下次吗？我承认MEG与BAUT建交也不过十五年，不过从你那份《SI层群原住民"昔民"文化风俗小考》和一系列相关研究来看，我释然了。"烟波浩渺，星火蜉蝣。"昔民，在SI层群这片桃花源里认同了这个充满恶意的空间，悍不畏死，勇于探索未知，这都是很美好的精神啊。</p><p>可为什么面对我们这些外界来客，就如此排外呢？因为我们终归不是自己人，只是来划一块地分一杯羹的投机客吗？我与许多昔民私交甚好，希望他们团体内部的党派之争快点终结，不管怎么说，鹰派也好，鸽派也好，谁彻底掌握BAUT都比一个左右脑互搏的矛盾体要好！</p><p>还记得2017年，我们参与了SI-20的大图书馆举办的流觞诗会吗？那时的莽原，我们在大图书馆的穹顶上看着远处的实体迁徙群，与来自天南海北的流浪者们饮酒赋诗，好不自在！当时我提笔一句："远眺莽地绿，同饮浊酿来。"那个从白夜城来的那一身黑的姑娘，为我续了一句有寓意的好对："邻访桃源客，齐辟前路开。"自此，我们更是坚定了为外来流浪者与昔民两方奔走，求同存异的道路。她旁边那个小男孩还一脸诧异地望着人家，说是原来她还会说话啊，引得我们一阵大笑。</p><p>今日，我把这打油诗再赠于你、以及我自己。好了，过一阵我就再来找你当面小叙。</p><p>万事顺利</p><p>再会！</p><p class="sign-off">柳如意<br/>2022年1月12日</p></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({ id: { type: String, required: true } })
const router = useRouter()
function goBack() { sessionStorage.setItem('skipIntro', '1'); router.push('/') }

const view = ref('present')
</script>

<style scoped>
.level-page { min-height: 100vh; background: var(--color-off-white); padding: 40px; transition: background 0.6s ease; }
.level-page.devastated { background: #e8e0d8; }
.back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--color-black); color: var(--color-white); border: none; border-radius: var(--radius-sm); font-family: var(--font-family); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: all 0.4s ease; margin-bottom: 24px; position: relative; z-index: 2; }
.back-btn:hover { opacity: 0.8; }
.level-page.devastated .back-btn { background: #4a4a4a; color: #bbb; }
.level-content { max-width: 800px; margin: 0 auto; }
.level-title { font-family: var(--font-family); font-size: clamp(3rem, 10vw, 6rem); font-weight: 900; color: var(--color-black); letter-spacing: -0.04em; margin-bottom: 8px; transition: color 0.4s ease; }
.level-page.devastated .level-title { color: #3a3530; }
.level-name { font-family: var(--font-family); font-size: 1.5rem; font-weight: 600; color: var(--color-black); margin-bottom: 28px; font-style: italic; transition: color 0.4s ease; }
.level-page.devastated .level-name { color: #5a5045; }

/* Toggle */
.toggle-bar { display: flex; gap: 8px; margin-bottom: 32px; }
.toggle-btn { flex: 1; padding: 14px 0; border: 1px solid rgba(0,0,0,0.12); border-radius: var(--radius-sm); background: rgba(0,0,0,0.02); font-family: var(--font-family); font-size: 1rem; font-weight: 500; cursor: pointer; color: rgba(0,0,0,0.4); transition: all 0.25s; }
.toggle-btn:hover { color: rgba(0,0,0,0.65); border-color: rgba(0,0,0,0.25); }
.toggle-btn.active { color: var(--color-white); border-color: var(--color-black); background: var(--color-black); }

.view-badge { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 600; letter-spacing: 2px; padding: 4px 10px; border-radius: 4px; margin-bottom: 20px; }
.past-badge { background: rgba(42,157,143,0.1); color: #2a9d8f; }
.present-badge { background: rgba(230,57,70,0.1); color: #e63946; }
.level-page.devastated .present-badge { background: rgba(180,60,60,0.15); color: #8b3a3a; }

/* Epigraph */
.epigraph { text-align: center; font-style: italic; color: rgba(0,0,0,0.5); margin: 0 0 32px; padding: 20px; border: 1px dashed rgba(0,0,0,0.1); border-radius: var(--radius-sm); }
.episrc { display: block; font-size: 0.8rem; color: rgba(0,0,0,0.35); margin-top: 6px; }

/* Sections */
.section { margin-bottom: 32px; }
.section h2 { font-family: var(--font-family); font-size: 1.1rem; font-weight: 700; color: var(--color-black); margin-bottom: 12px; padding-bottom: 4px; border-bottom: 1px solid rgba(0,0,0,0.06); transition: color 0.4s, border-color 0.4s; }
.section h3 { font-family: var(--font-family); font-size: 1rem; font-weight: 700; color: var(--color-black); margin-bottom: 10px; }
.section p { font-family: var(--font-family); font-size: 0.95rem; line-height: 1.85; color: rgba(0,0,0,0.7); margin-bottom: 10px; text-indent: 2em; transition: color 0.4s; }
.sub-heading { font-family: var(--font-family); font-size: 1rem; font-weight: 600; color: var(--color-black); margin: 16px 0 8px 0; transition: color 0.4s; }
.motto { text-align: center; font-weight: 600; color: rgba(0,0,0,0.55) !important; text-indent: 0 !important; font-style: italic; margin-bottom: 16px !important; }
.warn { font-weight: 700; color: #8b0000 !important; text-indent: 0 !important; text-align: center; }
.meta { font-size: 0.82rem !important; color: rgba(0,0,0,0.4) !important; text-indent: 0 !important; margin-bottom: 8px !important; }
.fine-print { font-size: 0.8rem !important; color: rgba(0,0,0,0.35) !important; text-indent: 0 !important; margin-top: 12px !important; }
.img-cap { font-style: italic; text-align: center; color: rgba(0,0,0,0.35) !important; font-size: 0.82rem !important; text-indent: 0 !important; }

/* Devastated */
.level-page.devastated .section h2 { color: #4a4038; border-bottom-color: rgba(0,0,0,0.04); }
.level-page.devastated .section p { color: rgba(0,0,0,0.55); }
.level-page.devastated .sub-heading { color: #4a4038; }
.level-page.devastated .motto { color: rgba(0,0,0,0.4) !important; }
.level-page.devastated strong { color: rgba(0,0,0,0.65); }
.level-page.devastated em { color: rgba(0,0,0,0.4); }

.difficulty { background: rgba(0,0,0,0.03); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); transition: background 0.4s, border-color 0.4s; }
.level-page.devastated .difficulty { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.03); }
.class-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 16px; flex-wrap: wrap; }
.class-list li { font-family: var(--font-family); font-size: 0.9rem; font-weight: 600; color: rgba(0,0,0,0.7); display: flex; align-items: center; gap: 6px; transition: color 0.4s; }
.level-page.devastated .class-list li { color: rgba(0,0,0,0.45); }
.b { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.b.unsafe { background: #e63946; }
.b.stable { background: #f4a261; }
.b.entity { background: #9b5de5; }
.b.unstable { background: #f4a261; }

.guide-list { margin: 0 0 0 1.5em; }
.guide-list li { font-family: var(--font-family); font-size: 0.95rem; line-height: 2; color: rgba(0,0,0,0.7); padding: 2px 0; transition: color 0.4s; }
.level-page.devastated .guide-list li { color: rgba(0,0,0,0.5); }

.editor-note { background: rgba(0,0,0,0.015); padding: 16px 20px; border-left: 3px solid rgba(0,0,0,0.1); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; margin: 16px 0; transition: background 0.4s, border-color 0.4s; }
.editor-note p { text-indent: 0 !important; font-style: italic; color: rgba(0,0,0,0.5); font-size: 0.9rem !important; transition: color 0.4s; }
.level-page.devastated .editor-note { background: rgba(0,0,0,0.03); border-left-color: rgba(0,0,0,0.06); }
.level-page.devastated .editor-note p { color: rgba(0,0,0,0.4); }

.argument { background: rgba(0,0,0,0.015); padding: 16px 20px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.04); margin: 14px 0; }
.arg-a, .arg-b { text-indent: 0 !important; font-size: 0.85rem !important; margin-bottom: 8px !important; padding-left: 12px; border-left: 2px solid rgba(0,0,0,0.08); }
.admin-lock { text-indent: 0 !important; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #8b0000; margin: 8px 0 0 !important; }
.admin-warn { text-indent: 0 !important; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #8b0000; margin: 0 !important; }

.tape { background: rgba(0,0,0,0.01); padding: 18px 22px; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.04); margin: 16px 0; transition: background 0.4s, border-color 0.4s; }
.tape-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 600; color: rgba(0,0,0,0.4); margin-bottom: 10px; text-indent: 0 !important; display: block; }
.stage-dir { font-size: 0.82rem !important; color: rgba(0,0,0,0.35) !important; font-style: italic; text-indent: 0 !important; margin: 8px 0 !important; }
.dialogue { text-indent: 0 !important; font-style: italic; color: rgba(0,0,0,0.55) !important; padding-left: 12px; border-left: 2px solid rgba(0,0,0,0.06); margin-bottom: 6px !important; font-size: 0.9rem !important; transition: color 0.4s, border-color 0.4s; }
.level-page.devastated .tape { background: rgba(0,0,0,0.03); border-color: rgba(0,0,0,0.02); }
.level-page.devastated .dialogue { color: rgba(0,0,0,0.4) !important; border-left-color: rgba(0,0,0,0.04); }

.sign-off { text-align: right; font-weight: 600; color: rgba(0,0,0,0.55) !important; text-indent: 0 !important; margin-top: 16px !important; transition: color 0.4s; }
.level-page.devastated .sign-off { color: rgba(0,0,0,0.4) !important; }

.appendix { background: rgba(0,0,0,0.01); padding: 18px 22px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,0,0,0.08); margin-top: 20px; transition: background 0.4s, border-color 0.4s; }
.appendix h2 { font-size: 0.95rem !important; }
.level-page.devastated .appendix { background: rgba(0,0,0,0.03); border-color: rgba(0,0,0,0.04); }

.findings { margin: 8px 0 16px 1.5em; }
.findings li { font-family: var(--font-family); font-size: 0.93rem; line-height: 1.9; color: rgba(0,0,0,0.65); padding: 2px 0; }

.classified { background: rgba(0,0,0,0.02); border: 1px dashed rgba(0,0,0,0.12); padding: 16px 20px; border-radius: var(--radius-sm); margin: 16px 0; text-align: center; }
.classified p { text-indent: 0 !important; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: rgba(0,0,0,0.45); margin-bottom: 4px !important; }
.granted { color: #2a9d8f !important; font-weight: 600; }

strong { color: rgba(0,0,0,0.85); transition: color 0.4s; }
em { color: rgba(0,0,0,0.5); }
sup { font-size: 0.7rem; color: rgba(0,0,0,0.35); }
del { color: rgba(0,0,0,0.3); }
ins { text-decoration: none; color: rgba(0,0,0,0.7); }

@media (max-width: 767px) { .level-page { padding: 24px; } .toggle-bar { flex-direction: column; } }
</style>
