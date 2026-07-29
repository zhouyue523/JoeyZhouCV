import { createContext, useContext, useState, useCallback } from 'react'

export const ME = {
  nameZh: '周悦',
  nameEn: 'JOEY',
  dob: '1998.05',
  school: '重庆大学',
  origin: '辽宁省大连市',
  email: 'zhouyue523@outlook.com',
  phone: '13206190620',
  title: '华为终端BG 重庆Marketing 高级营销专员',
  period: '2024.08 — 2026.05',
  eduM: '戏剧与影视-电影 硕士',
  eduMPeriod: '2021.09 — 2024.06',
  eduB: '戏剧影视美术设计 学士',
  eduBPeriod: '2017.09 — 2021.06',
  avatar: '/images/avatar-ip.png',
}

const DICT = {
  zh: {
    nav: {
      profile: '档案',
      films: '影像',
      matrix: '矩阵',
      explore: '漫游',
      philosophy: '哲思',
      back: '返回',
    },
    intro: {
      l1: '正在接入…',
      l2: 'A MARKETING ODYSSEY',
      l3: 'STARRING',
      skip: '点击跳过',
    },
    hero: {
      kicker: '个人作品集 · MARKETING PORTFOLIO',
      line1: '把营销',
      line2: '做成浪漫',
      role: `${ME.nameZh} · ${ME.title}`,
      desc: `华为终端 BG 重庆 Marketing 高级营销专员（${ME.period}）—— 带过手机、运动健康、智慧办公三大产业；也从 0 到 1 孵化过 300+ 账号的新媒体矩阵。曾任网易重庆内容策划、人民网重庆视频编导，懂内容、懂流量、懂品牌。`,
      chips: ['Huawei Pura X', '全渠道整合', '爆款内容', '私域闭环'],
      cta1: '开始漫游',
      cta2: '营销哲思',
      scroll: '向下滚动 · SCROLL',
      status: [
        'BASE · EARTH',
        'STATUS · OPEN TO WORK',
        'CHANNEL · ALL',
        'JAZZ · ON',
      ],
    },
    marquee: {
      m1: '✦ SEE YOU SPACE COWBOY  ✦  营销的目的是让推销变得多余  ✦  复古 · 霓虹 · 爵士  ✦  区域营销操盘手',
      m2: '✦  洞察 · 连接 · 内容 · 转化  ✦  全渠道矩阵  ✦  300+ 账号孵化  ✦  10 个成功出圈  ✦  50+ 条百万爆款',
      outro:
        '✦ SEE YOU SPACE COWBOY  ✦  下次见 · 在某个城市的某场路演  ✦  SIDE A · END',
    },
    interlude1: {
      label: 'TRANSITION · 幕间',
      title: '流量星河',
      subtitle: '从品牌影像到内容矩阵——好内容自己会走路',
    },
    interlude2: {
      label: 'TRANSITION · 幕间',
      title: '地球漫游',
      subtitle: '工作之外是另一场探索——带上好奇心出发',
    },
    profile: {
      part: 'PART  01',
      en: 'THE COWBOY FILE',
      title: '牛仔档案',
      sub: '基本信息 · BASIC INFO',
      fileNo: 'CASE FILE No.2026-001',
      stamp: 'MARKETING OPS',
      quote: '在品牌与宇宙之间，做一名浪漫的牛仔。',
      skillsTitle: '核心能力 · CORE ARSENAL',
      skills: [
        {
          no: '01',
          t: '市场与策略',
          en: 'STRATEGY',
          d: '区域市场洞察 · 竞品分析 · 消费者画像 · 本地化营销策略 · 年度营销计划统筹',
        },
        {
          no: '02',
          t: '全渠道管理',
          en: 'OMNI-CHANNEL',
          d: '户外 / 梯媒 / 社媒 / KOL / 异业合作 · 品牌大事件策划 · 文旅与赛事 IP 嫁接',
        },
        {
          no: '03',
          t: '内容生产',
          en: 'CONTENT',
          d: '爆款内容策划 · 方言与民俗特色内容定制 · 本地 KOL 管理 · 手绘 / PS / 视频剪辑',
        },
        {
          no: '04',
          t: '活动与转化',
          en: 'ACTIVATION',
          d: '线下路演 · 商圈快闪店 · 门店地推 ·「短视频—企微—门店」私域引流闭环',
        },
      ],
      eduTitle: '教育背景 · EDUCATION',
      eduItems: [
        {
          t: `${ME.eduM}`,
          period: ME.eduMPeriod,
          d: '定期组织技能培训与团队建设活动，统筹策划校园大型活动宣传（迎新晚会、校园文化节等）。',
        },
        {
          t: `${ME.eduB}`,
          period: ME.eduBPeriod,
          d: '统筹策划校园新闻报道，带领团队完成重大事件与学术讲座报道；与校内外媒体、社团合作，拓展传播渠道。',
        },
      ],
      expTitle: '经历速览 · EXPERIENCE',
      experiences: [
        {
          no: '2024 — 2026',
          t: '华为终端BG · 重庆',
          en: 'HUAWEI DEVICE',
          sub: '高级营销专员',
          d: '手机 / 运动健康 / 智慧办公三大产业 GTM 操盘；从 0 到 1 孵化 300+ 新媒体账号矩阵。',
        },
        {
          no: '2020 — 2021',
          t: '网易重庆 · 内容策划',
          en: 'NETEASE',
          sub: '内容策划',
          d: '「华为耳机 × 重庆非遗声音」跨界活动：统筹 100+ KOL 全网推广，打造科技与传统融合营销案例。',
        },
        {
          no: '2019 — 2020',
          t: '人民网重庆 · 视频编导',
          en: 'PEOPLE.CN',
          sub: '视频内容编导',
          d: '「五一·出去耍」系列短视频获百万浏览冲上本地热搜；「高考加油」等视频累计点赞 20w+。',
        },
      ],
    },
    films: {
      part: 'PART  02',
      en: 'BRAND FILMS',
      title: '品牌影像志',
      sub: '华为终端 · 高级营销专员时期作品',
      note: '将 mp4 文件放入 public/videos/ 并按下方命名即可自动替换占位画面',
      mediaTitle: '媒体权威背书 · MEDIA ENDORSEMENT',
      mediaDesc: '新闻媒体与政府机构报道扩散，为品牌事件注入公信力与权威势能。',
      media: [
        {
          name: '人民网',
          sub: '中央重点新闻网站',
          tag: '亿级传播',
        },
        {
          name: '上游新闻',
          sub: '千万粉丝主流媒体',
          tag: '千万级粉丝',
        },
        {
          name: '重庆广电 · 华龙网',
          sub: '重庆省级广电媒体',
          tag: '百万级触达',
        },
        {
          name: '重庆市文旅',
          sub: '政府文旅主管部门',
          tag: '权威背书',
        },
        {
          name: '重庆网信办',
          sub: '政府网信主管部门',
          tag: '官方扩散',
        },
      ],
      items: [
        {
          no: 'FILM 01',
          tag: '手机 · 核心产业',
          t: 'Huawei Pura X 外观 ID 展示',
          dur: '01:50',
          d: '阔折叠形态与独特 ID 设计语言全角度呈现，传递 Pura X 先锋美学。',
          v: 'purax-1',
          vertical: true,
        },
        {
          no: 'FILM 02',
          tag: '手机 · 核心产业',
          t: 'Huawei Pura X 实用功能展示',
          dur: '02:18',
          d: '影像系统、折叠交互等核心功能场景化展示，直观传达产品力与日常实用性。',
          v: 'purax-2',
          vertical: true,
        },
        {
          no: 'FILM 03',
          tag: '手机 · 核心产业',
          t: 'Huawei Pura X 顶级设计师口碑',
          dur: '03:05',
          d: '顶级设计师深度体验后真实证言，从设计视角诠释 Pura X 的工业美学价值。',
          v: 'purax-3',
        },
        {
          no: 'FILM 04',
          tag: '运动健康',
          t: 'Huawei Watch Ultimate 2',
          dur: '01:52',
          d: '非凡大师系列旗舰手表：极致材质与户外探险场景叙事，传递高端运动腕表定位。',
          v: 'watch-ultimate2',
        },
        {
          no: 'FILM 05',
          tag: '运动健康',
          t: 'Huawei Watch Ultimate',
          dur: '02:05',
          d: '非凡大师首代产品：深海潜水与极地场景传播，建立「华为最硬核手表」用户认知。',
          v: 'watch-ultimate',
        },
        {
          no: 'FILM 06',
          tag: '运动健康',
          t: 'Huawei Watch GT 6',
          dur: '01:40',
          d: 'GT 系列最新代：长续航 + 运动模式升级，面向大众运动人群的日常场景化种草。',
          v: 'watch-gt6',
        },
        {
          no: 'FILM 07',
          tag: '运动健康',
          t: 'Huawei Watch GT 5',
          dur: '02:12',
          d: 'GT 系列主力款：性价比与设计平衡，区域渠道重点主推产品的内容包定制。',
          v: 'watch-gt5',
        },
        {
          no: 'FILM 08',
          tag: '智慧办公',
          t: 'MateBook × 大足石刻研究员证言',
          dur: '02:34',
          d: '大足石刻研究院研究员出镜：文保工作者用华为 PC 做数字化研究与创作的真实故事。',
          v: 'matebook-1',
        },
        {
          no: 'FILM 09',
          tag: '智慧办公',
          t: 'MateBook × 大足石刻 AI 视频',
          dur: '03:18',
          d: '大足石刻文物「动起来」× 华为 PC 的 AI 创意短片：千年石刻融入当代科技生活。',
          v: 'matebook-2',
        },
        {
          no: 'FILM 10',
          tag: '智慧办公',
          t: 'MatePad「花小粉」× 重庆高校动画',
          dur: '02:20',
          d: 'MatePad「花小粉」IP 形象打卡重庆高校：动画形式展现平板在校园学习与创作中的年轻活力。',
          v: 'matepad-huaxiaofen',
        },
      ],
    },
    matrix: {
      part: 'PART  03',
      en: 'THE MATRIX',
      title: '流量星系',
      sub: '从 0 到 1 搭建本地新媒体矩阵',
      stats: [
        { v: 300, s: '+', l: '孵化账号', en: 'ACCOUNTS' },
        { v: 20, s: '+', l: '成功出圈', en: 'INCUBATED' },
        { v: 60, s: '+', l: '50W+ 爆款', en: '50W+ HITS' },
        { v: 50, s: '+', l: '百万级爆款', en: '1M+ HITS' },
      ],
      groupsTitle: '出圈账号构成 · THE LINEUP',
      groups: [
        {
          t: '颜值向',
          en: 'LOOKS',
          n: 3,
          d: '@小雪哈基米 · @好运将0 · @年年有为的猪猪 — 颜值即流量入口，人设即记忆钩子。',
        },
        {
          t: '数码向',
          en: 'TECH',
          n: 3,
          d: '@涂涂不是大耳朵 · @小张聊数码 · @CT爱数码 — 专业评测与上手体验，建立信任资产。',
        },
        {
          t: '抽象玩梗',
          en: 'MEME',
          n: 4,
          d: '@祥佳音数码 · @虾仁不眨眼 · @小闪电 · @可乐可乐不加奶 — 用梗破圈，让传播自己长脚。',
        },
      ],
      desc: '60+ 条 50W+ 爆款、50+ 条百万级爆款不是彩票，是洞察的复利：先让一个人笑出声，算法会替你找到一百万个像他一样的人。',
      accountsTitle: '出圈账号展示 · TOP ACCOUNTS',
      accountsNote: '将爆款截图放入 public/images/，并按下方命名即可自动替换占位画面',
      accounts: [
        { name: '小雪哈基米', cat: '颜值向', catEn: 'LOOKS', link: 'https://v.douyin.com/', img: 'account-xiaoxue' },
        { name: '好运将0', cat: '颜值向', catEn: 'LOOKS', link: 'https://v.douyin.com/', img: 'account-haoyun' },
        { name: '年年有为的猪猪', cat: '颜值向', catEn: 'LOOKS', link: 'https://v.douyin.com/', img: 'account-niannian' },
        { name: '涂涂不是大耳朵', cat: '数码向', catEn: 'TECH', link: 'https://v.douyin.com/', img: 'account-tutu' },
        { name: '小张聊数码', cat: '数码向', catEn: 'TECH', link: 'https://v.douyin.com/', img: 'account-xiaozhang' },
        { name: 'CT爱数码', cat: '数码向', catEn: 'TECH', link: 'https://v.douyin.com/', img: 'account-ct' },
        { name: '祥佳音数码', cat: '抽象玩梗', catEn: 'MEME', link: 'https://v.douyin.com/', img: 'account-xiangjiayin' },
        { name: '虾仁不眨眼', cat: '抽象玩梗', catEn: 'MEME', link: 'https://v.douyin.com/', img: 'account-xiaren' },
        { name: '小闪电', cat: '抽象玩梗', catEn: 'MEME', link: 'https://v.douyin.com/', img: 'account-xiaoshandian' },
        { name: '可乐可乐不加奶', cat: '抽象玩梗', catEn: 'MEME', link: 'https://v.douyin.com/', img: 'account-kele' },
      ],
    },
    explore: {
      part: 'PART  04',
      en: 'EARTH ROAMING',
      title: '地球漫游指南',
      sub: '工作之外，是另一场探索',
      items: [
        {
          no: '04-01',
          t: '油画创作',
          en: 'OIL PAINTING',
          d: '画布是另一块屏幕，颜料是另一种文案。',
          img: 'hobby-painting',
        },
        {
          no: '04-02',
          t: '概念场景设计',
          en: 'CONCEPT ART',
          d: '为每一个想象构建它的世界——用设计语言搭建视觉叙事空间。',
          img: 'hobby-concept',
        },
        {
          no: '04-03',
          t: '旅行',
          en: 'TRAVEL',
          d: '收集世界的配色方案与人间烟火。',
          img: 'hobby-travel',
        },
        {
          no: '04-04',
          t: '慢跑',
          en: 'RUNNING',
          d: '每路过一座城市都要用脚步打卡核心路线——运动数据是另一种成绩单。',
          img: 'hobby-running',
        },
        {
          no: '04-05',
          t: '3D 形象',
          en: '3D AVATAR',
          d: '给自己捏了一个数字分身——永远好奇，永远试新。',
          img: 'avatar',
        },
        {
          no: '04-06',
          t: '手绘动画《神经女侠》',
          en: 'NERVE HEROINE',
          d: '独立手绘创作动画短片——用逐帧画笔讲一个属于自己宇宙的故事。',
          video: 'nerve-heroine',
        },
      ],
    },
    footer: {
      line1: 'SEE YOU SPACE COWBOY…',
      line2: '下次见 · 在某个城市的某场路演',
      contact: '联系方式',
      philosophy: '营销哲思',
      rights: `© 2026 ${ME.nameEn} · 用热爱与爵士乐构建`,
    },
    philo: {
      nav: '哲思',
      kicker: 'THE PHILOSOPHY · 营销哲思',
      title: '营销哲思',
      quote: '营销的目的是让推销变得多余。',
      enQuote: 'The aim of marketing is to make selling superfluous.',
      author: '彼得·德鲁克',
      source: '《管理的实践》',
      lede: '1966 年，彼得·德鲁克在《管理实践》里写下这句话时，商业世界的传播还停留在报纸和广播的叙事里。半个多世纪过去，渠道从纸面搬进了掌心，屏幕是新的街头，算法是新的报纸——而这句话却愈发锋利。它是我做每一场战役之前，先问自己的那道题。',
      chapters: [
        {
          no: 'CHAPTER 01',
          en: 'INSIGHT',
          t: '洞察：营销的起点不是产品，是人',
          ps: [
            '区域市场洞察不是报表里的数字，是菜市场的叫卖声、商圈晚高峰的人流走向、凌晨外卖订单的品类结构。竞品分析不是为了打败谁——而是弄清楚消费者在货架前究竟在比较什么。',
            '消费者画像不是标签的堆砌，而是一个具体的人，在具体的一天里，具体的犹豫。看懂一座城，品牌才能在这里真正地住下来。',
          ],
          pull: '看懂一座城，才能让一个品牌在这里住下来。',
        },
        {
          no: 'CHAPTER 02',
          en: 'CONNECTION',
          t: '连接：渠道不是货架，是场域',
          ps: [
            '户外大牌、电梯广告、社交媒体、KOL、异业合作——单个渠道只是噪音，编排之后才是爵士乐。每件乐器都要知道何时独奏、何时安静。',
            '品牌大事件与文旅、赛事 IP 的嫁接，本质上是把品牌写进一座城市的共同记忆。人们或许记不住一张海报，但会记住那个夏天的比赛、那条街的快闪、以及那个被品牌点亮的夜晚。',
          ],
          pull: '最好的媒介组合像一支爵士乐队：每件乐器都知道何时独奏，何时安静。',
        },
        {
          no: 'CHAPTER 03',
          en: 'CONTENT',
          t: '内容：好内容自己会走路',
          ps: [
            '爆款不是运气的彩票——是洞察的复利。方言与民俗不是猎奇的素材，而是本地人身份认同的开关。一句乡音，胜过千言万语的卖点罗列；一个精准的梗，比一百张精美海报更能钻进心里。',
            '从手绘到 PS 再到剪辑，创作工具一直在变。但让人停下来的东西没变过：真诚、幽默，以及那句——「这说的不就是我吗」。',
          ],
          pull: '先让一个人笑出声，算法会替你找到一百万个像他一样的人。',
        },
        {
          no: 'CHAPTER 04',
          en: 'CONVERSION',
          t: '转化：让热爱可抵达',
          ps: [
            '路演、快闪、地推不是销售的触角，而是品牌的体温。当消费者在线下感受到真实的品牌存在，那种信任的温度，是任何一个 banner 广告都无法替代的。',
            '「短视频—企微—门店」的私域闭环，做的不是流量收割，而是把一次心动，安顿成一段稳定的关系。当产品足够好、内容足够真诚，推销确实会变得多余——人们会自己来，还会带上朋友。',
          ],
          pull: '推销是追，营销是吸引。追来的会走，吸引来的会留下。',
        },
      ],
      endingT: '回到德鲁克',
      ending:
        '「让推销变得多余」不是营销人的终点，而是起点。愿我们做的每一次营销，都配得上消费者的喜欢。',
      outro: 'SEE YOU SPACE COWBOY…',
      back: '返回首页 BACK HOME',
    },
  },

  /* ── ENGLISH ── */
  en: {
    nav: {
      profile: 'PROFILE',
      films: 'FILMS',
      matrix: 'MATRIX',
      explore: 'EXPLORE',
      philosophy: 'PHILOSOPHY',
      back: 'BACK',
    },
    intro: {
      l1: 'Connecting…',
      l2: 'A MARKETING ODYSSEY',
      l3: 'STARRING',
      skip: 'SKIP',
    },
    hero: {
      kicker: 'PORTFOLIO · MARKETING ODYSSEY',
      line1: 'MAKE MARKETING',
      line2: 'ROMANTIC.',
      role: `${ME.nameEn} · Senior Marketing Specialist`,
      desc: `HUAWEI Device BG Chongqing Marketing, Senior Marketing Specialist (${ME.period}) — led GTM across smartphones, wearables & smart office portfolios; built a 300+ account new media matrix from scratch. Previously content strategist at NetEase Chongqing and video director at People.cn Chongqing.`,
      chips: ['Huawei Pura X', 'Omni-channel', 'Viral Content', 'Private Domain'],
      cta1: 'START THE JOURNEY',
      cta2: 'PHILOSOPHY',
      scroll: 'SCROLL DOWN',
      status: [
        'BASE · EARTH',
        'STATUS · OPEN TO WORK',
        'CHANNEL · ALL',
        'JAZZ · ON',
      ],
    },
    marquee: {
      m1: '✦ SEE YOU SPACE COWBOY  ✦  The aim of marketing is to make selling superfluous  ✦  Retro · Neon · Jazz  ✦  Regional Marketing Lead',
      m2: '✦  Insight · Connection · Content · Conversion  ✦  Omni-channel Matrix  ✦  300+ Accounts  ✦  10 Incubated  ✦  50+ Million-View Hits',
      outro:
        '✦ SEE YOU SPACE COWBOY  ✦  Until next time, at some pop-up in some city  ✦  SIDE A · END',
    },
    interlude1: {
      label: 'INTERMISSION',
      title: 'THE MATRIX',
      subtitle: 'From brand films to content galaxy — good content walks on its own',
    },
    interlude2: {
      label: 'INTERMISSION',
      title: 'EARTH ROAMING',
      subtitle: 'Beyond work, another journey — curiosity as compass',
    },
    profile: {
      part: 'PART  01',
      en: 'THE COWBOY FILE',
      title: 'The Cowboy File',
      sub: 'BASIC INFO',
      fileNo: 'CASE FILE No.2026-001',
      stamp: 'MARKETING OPS',
      quote: 'Be a romantic cowboy between brands and the cosmos.',
      skillsTitle: 'CORE ARSENAL',
      skills: [
        {
          no: '01',
          t: 'Market & Strategy',
          en: 'STRATEGY',
          d: 'Regional insight · Competitive analysis · Consumer profiling · Localized strategy · Annual marketing planning',
        },
        {
          no: '02',
          t: 'Omni-channel',
          en: 'OMNI-CHANNEL',
          d: 'OOH / Elevator / Social / KOL / Cross-industry partnerships · Brand events · Cultural & sports IP integration',
        },
        {
          no: '03',
          t: 'Content Creation',
          en: 'CONTENT',
          d: 'Viral content planning · Dialect & local culture content · Local KOL management · Hand-drawing / PS / Video editing',
        },
        {
          no: '04',
          t: 'Activation',
          en: 'ACTIVATION',
          d: 'Roadshows · Pop-up stores · Field promotions · "Short Video — WeCom — Store" private domain funnel',
        },
      ],
      eduTitle: 'EDUCATION',
      eduItems: [
        {
          t: `${ME.eduM}`,
          period: ME.eduMPeriod,
          d: 'Organized skill training & team building. Led campus-wide event promotion including galas and cultural festivals.',
        },
        {
          t: `${ME.eduB}`,
          period: ME.eduBPeriod,
          d: 'Led campus news coverage, managing teams reporting on major events & academic lectures. Built partnerships with media outlets & student clubs.',
        },
      ],
      expTitle: 'EXPERIENCE',
      experiences: [
        {
          no: '2024 — 2026',
          t: 'HUAWEI Device · Chongqing',
          en: 'HUAWEI DEVICE',
          sub: 'Senior Marketing Specialist',
          d: 'GTM lead across smartphones, wearables & smart office. Built 300+ account new media matrix from scratch.',
        },
        {
          no: '2020 — 2021',
          t: 'NetEase Chongqing',
          en: 'NETEASE',
          sub: 'Content Strategist',
          d: '"Huawei Earbuds × CQ Intangible Heritage" crossover campaign: coordinated 100+ KOLs across platforms.',
        },
        {
          no: '2019 — 2020',
          t: 'People.cn Chongqing',
          en: 'PEOPLE.CN',
          sub: 'Video Director',
          d: 'Created "Go Out" short video series reaching 1M+ views on local trending. "Gaokao Cheer" videos earned 200K+ likes.',
        },
      ],
    },
    films: {
      part: 'PART  02',
      en: 'BRAND FILMS',
      title: 'Brand Films',
      sub: 'Product marketing from HUAWEI Senior Marketing Specialist era',
      note: 'Place mp4 files in public/videos/ to auto-replace these placeholder visuals',
      mediaTitle: 'MEDIA ENDORSEMENT',
      mediaDesc: 'News outlets & government authority coverage, adding credibility and authoritative momentum to brand events.',
      media: [
        { name: 'People.cn', sub: 'National key news website', tag: '100M+ Reach' },
        { name: 'Shangyou News', sub: '10M+ follower mainstream media', tag: '10M+ Followers' },
        { name: 'CQTV · Hualong Net', sub: 'Provincial-level media', tag: '1M+ Exposure' },
        { name: 'CQ Culture & Tourism', sub: 'Municipal tourism authority', tag: 'Gov Endorsement' },
        { name: 'CQ Cyberspace Admin', sub: 'Municipal cyberspace authority', tag: 'Official Amplification' },
      ],
      items: [
        {
          no: 'FILM 01',
          tag: 'Smartphone · Core',
          t: 'Huawei Pura X Design Showcase',
          dur: '01:50',
          d: 'All-around presentation of the foldable form factor & unique ID design language, conveying Pura X\'s avant-garde aesthetics.',
          v: 'purax-1',
          vertical: true,
        },
        {
          no: 'FILM 02',
          tag: 'Smartphone · Core',
          t: 'Huawei Pura X Feature Demo',
          dur: '02:18',
          d: 'Camera system, foldable interaction & core features showcased in real-life scenarios for intuitive product communication.',
          v: 'purax-2',
          vertical: true,
        },
        {
          no: 'FILM 03',
          tag: 'Smartphone · Core',
          t: 'Huawei Pura X Designer Endorsement',
          dur: '03:05',
          d: 'Top-tier designers share genuine testimonials after in-depth experience, interpreting Pura X\'s industrial design value.',
          v: 'purax-3',
        },
        {
          no: 'FILM 04',
          tag: 'Wearables & Health',
          t: 'Huawei Watch Ultimate 2',
          dur: '01:52',
          d: 'Flagship premium smartwatch: exquisite materials & outdoor adventure storytelling for high-end fitness enthusiasts.',
          v: 'watch-ultimate2',
        },
        {
          no: 'FILM 05',
          tag: 'Wearables & Health',
          t: 'Huawei Watch Ultimate',
          dur: '02:05',
          d: 'First-gen Ultimate series: deep-sea diving & polar expeditions content, building the "toughest Huawei watch" perception.',
          v: 'watch-ultimate',
        },
        {
          no: 'FILM 06',
          tag: 'Wearables & Health',
          t: 'Huawei Watch GT 6',
          dur: '01:40',
          d: 'Latest GT series: extended battery life & upgraded sports modes, everyday scenario seeding for mass fitness audience.',
          v: 'watch-gt6',
        },
        {
          no: 'FILM 07',
          tag: 'Wearables & Health',
          t: 'Huawei Watch GT 5',
          dur: '02:12',
          d: 'GT series anchor model: balancing price & design, customized content packs for regional channel promotion.',
          v: 'watch-gt5',
        },
        {
          no: 'FILM 08',
          tag: 'Smart Office',
          t: 'MateBook × Dazu Rock Carvings Researcher',
          dur: '02:34',
          d: 'Dazu Rock Carvings Academy researcher on camera: a heritage conservator\'s real story of using Huawei PC for digital research & creativity.',
          v: 'matebook-1',
        },
        {
          no: 'FILM 09',
          tag: 'Smart Office',
          t: 'MateBook × Dazu Rock Carvings AI Film',
          dur: '03:18',
          d: 'Dazu Rock Carvings heritage "come alive" × Huawei PC AI creative short: millennial sculptures blending into modern tech life.',
          v: 'matebook-2',
        },
        {
          no: 'FILM 10',
          tag: 'Smart Office',
          t: 'MatePad "Hua Xiaofen" × CQ Universities',
          dur: '02:20',
          d: 'MatePad "Hua Xiaofen" IP animated short touring Chongqing universities, showcasing tablet use in campus learning & creative life.',
          v: 'matepad-huaxiaofen',
        },
      ],
    },
    matrix: {
      part: 'PART  03',
      en: 'THE MATRIX',
      title: 'The Content Matrix',
      sub: 'Building a local new media matrix from zero to one',
      stats: [
        { v: 300, s: '+', l: 'Accounts Built', en: 'ACCOUNTS' },
        { v: 20, s: '+', l: 'Incubated', en: 'INCUBATED' },
        { v: 60, s: '+', l: '50W+ Viral Hits', en: '50W+ HITS' },
        { v: 50, s: '+', l: '1M+ Viral Hits', en: '1M+ HITS' },
      ],
      groupsTitle: 'Incubated Lineup · THE LINEUP',
      groups: [
        { t: 'Beauty', en: 'LOOKS', n: 3, d: '@xiaoxuehajimi · @haoyunjiang0 · @niannianyouwei — Visual appeal as traffic portal, persona as memory hook.' },
        { t: 'Tech Reviews', en: 'TECH', n: 3, d: '@tutubushidaerduo · @xiaozhangliaoshuma · @CTaishuma — Professional reviews that build trust equity.' },
        { t: 'Memes', en: 'MEME', n: 4, d: '@xiangjiayinshuma · @xiarenbuzhayan · @xiaoshandian · @kelekelebujianai — Breaking out with humor, content that spreads itself.' },
      ],
      desc: '60+ hits over 500K and 50+ over 1M views are not lottery tickets — they are the compound interest of insight. Make one person laugh, and the algorithm finds a million more just like them.',
      accountsTitle: 'TOP ACCOUNTS',
      accountsNote: 'Place screenshots in public/images/ and name them as shown below',
      accounts: [
        { name: 'xiaoxuehajimi', cat: 'Beauty', catEn: 'LOOKS', link: 'https://v.douyin.com/', img: 'account-xiaoxue' },
        { name: 'haoyunjiang0', cat: 'Beauty', catEn: 'LOOKS', link: 'https://v.douyin.com/', img: 'account-haoyun' },
        { name: 'niannianyouwei', cat: 'Beauty', catEn: 'LOOKS', link: 'https://v.douyin.com/', img: 'account-niannian' },
        { name: 'tutubushidaerduo', cat: 'Tech', catEn: 'TECH', link: 'https://v.douyin.com/', img: 'account-tutu' },
        { name: 'xiaozhangliaoshuma', cat: 'Tech', catEn: 'TECH', link: 'https://v.douyin.com/', img: 'account-xiaozhang' },
        { name: 'CTaishuma', cat: 'Tech', catEn: 'TECH', link: 'https://v.douyin.com/', img: 'account-ct' },
        { name: 'xiangjiayinshuma', cat: 'Meme', catEn: 'MEME', link: 'https://v.douyin.com/', img: 'account-xiangjiayin' },
        { name: 'xiarenbuzhayan', cat: 'Meme', catEn: 'MEME', link: 'https://v.douyin.com/', img: 'account-xiaren' },
        { name: 'xiaoshandian', cat: 'Meme', catEn: 'MEME', link: 'https://v.douyin.com/', img: 'account-xiaoshandian' },
        { name: 'kelekelebujianai', cat: 'Meme', catEn: 'MEME', link: 'https://v.douyin.com/', img: 'account-kele' },
      ],
    },
    explore: {
      part: 'PART  04',
      en: 'EARTH ROAMING',
      title: 'Earth Roaming Guide',
      sub: 'Life beyond work — another kind of exploration',
      items: [
        {
          no: '04-01',
          t: 'Oil Painting',
          en: 'OIL PAINTING',
          d: 'The canvas is another screen. Paint is just another kind of copy.',
          img: 'hobby-painting',
        },
        {
          no: '04-02',
          t: 'Concept Art',
          en: 'CONCEPT ART',
          d: 'Building worlds for every idea — visual storytelling through design language.',
          img: 'hobby-concept',
        },
        {
          no: '04-03',
          t: 'Travel',
          en: 'TRAVEL',
          d: "Collecting the world's color palettes and human stories.",
          img: 'hobby-travel',
        },
        {
          no: '04-04',
          t: 'Running',
          en: 'RUNNING',
          d: 'Every city I pass through, I map its best routes with my feet — fitness data is my other scorecard.',
          img: 'hobby-running',
        },
        {
          no: '04-05',
          t: '3D Avatar',
          en: '3D AVATAR',
          d: 'Built a digital twin of myself — forever curious, forever exploring the new.',
          img: 'avatar',
        },
        {
          no: '04-06',
          t: 'Animated Short "Nerve Heroine"',
          en: 'NERVE HEROINE',
          d: 'Hand-drawn animated short — telling a story from my own universe, frame by frame.',
          video: 'nerve-heroine',
        },
      ],
    },
    footer: {
      line1: 'SEE YOU SPACE COWBOY…',
      line2: 'Until next time, at some pop-up in some city.',
      contact: 'CONTACT',
      philosophy: 'PHILOSOPHY',
      rights: `© 2026 ${ME.nameEn} · Built with passion & jazz`,
    },
    philo: {
      nav: 'PHILOSOPHY',
      kicker: 'THE PHILOSOPHY · 营销哲思',
      title: 'The Philosophy',
      quote: 'The aim of marketing is to make selling superfluous.',
      enQuote: 'The aim of marketing is to make selling superfluous.',
      author: 'PETER F. DRUCKER',
      source: 'The Practice of Management',
      lede: 'When Peter Drucker wrote these words in <em>The Practice of Management</em>, communication was still limited to newspaper columns and 30-second TV spots. Half a century later, channels have moved from paper to palm — the screen is the new street, algorithms the new broadsheets — yet these words cut sharper than ever. It is the question I ask myself before every campaign.',
      chapters: [
        {
          no: 'CHAPTER 01',
          en: 'INSIGHT',
          t: 'Insight: Marketing Begins with People, Not Products',
          ps: [
            'Regional insight isn\'t numbers in a spreadsheet — it\'s the dialect in the wet market, the foot traffic at 6 PM in the shopping district, the category spread of late-night delivery orders. Competitive analysis isn\'t about beating anyone — it\'s about understanding what people are actually comparing at the shelf.',
            'Consumer profiling isn\'t a stack of labels. It\'s a specific person, on a specific day, having a specific hesitation. Understand a city deeply enough, and your brand can truly live there.',
          ],
          pull: 'Understand a city deeply enough, and your brand can truly live there.',
        },
        {
          no: 'CHAPTER 02',
          en: 'CONNECTION',
          t: 'Connection: Channels Are Not Shelves — They Are Fields',
          ps: [
            'Billboards, elevator screens, social media, KOLs, cross-industry partnerships — a single channel is noise. Orchestrated together, they become jazz. Every instrument must know when to solo and when to be silent.',
            'Brand mega-events and cultural or sports IP integrations are, at their core, about writing the brand into a city\'s collective memory. People may forget a poster, but they will remember that summer tournament, that street-side pop-up, that night the brand illuminated.',
          ],
          pull: 'The best media mix is like a jazz band: every instrument knows when to solo and when to be silent.',
        },
        {
          no: 'CHAPTER 03',
          en: 'CONTENT',
          t: 'Content: Good Content Walks on Its Own',
          ps: [
            'Viral hits aren\'t lottery tickets — they are the compound interest of insight. Dialect and folklore aren\'t exotic gimmicks — they are the identity switch of a local audience. One phrase in the local tongue outweighs a thousand polished selling points.',
            'From hand-drawing to Photoshop to video editing — the tools keep changing. What makes people stop scrolling hasn\'t: sincerity, humor, and that flash of recognition — "Wait, that is so me."',
          ],
          pull: 'Make one person laugh, and the algorithm will find a million more just like them.',
        },
        {
          no: 'CHAPTER 04',
          en: 'CONVERSION',
          t: 'Conversion: Make Your Passion Reachable',
          ps: [
            'Roadshows, pop-ups, and offline activations aren\'t tentacles of sales — they\'re the body temperature of the brand. When consumers feel a brand\'s presence in the real world, that warmth of trust cannot be replaced by any banner ad.',
            'The "Short Video — WeCom — Store" private domain funnel isn\'t about traffic harvesting — it\'s about turning a moment of interest into a lasting relationship. When the product is good enough and the content sincere enough, selling truly becomes superfluous — people will come on their own, and bring friends.',
          ],
          pull: 'Selling is chasing. Marketing is attracting. Those you chase will leave. Those you attract will stay.',
        },
      ],
      endingT: 'Back to Drucker',
      ending:
        '"Making selling superfluous" is not the finish line for a marketer — it is the starting line. May every campaign we run be worthy of the people who love it.',
      outro: 'SEE YOU SPACE COWBOY…',
      back: 'BACK HOME',
    },
  },
}

const LangCtx = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('portfolio-lang') || 'zh'
    } catch {
      return 'zh'
    }
  })

  const toggle = useCallback(() => {
    setLang((l) => {
      const n = l === 'zh' ? 'en' : 'zh'
      try {
        localStorage.setItem('portfolio-lang', n)
      } catch {}
      return n
    })
  }, [])

  const t = DICT[lang]

  return (
    <LangCtx.Provider value={{ lang, toggle, t, ME }}>
      {children}
    </LangCtx.Provider>
  )
}

export function useLang() {
  return useContext(LangCtx)
}
