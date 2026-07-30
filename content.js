const sharedPaperLinks = {
  stttSclc: "https://www.nature.com/articles/s41392-024-01942-w",
  stttGastric: "https://www.nature.com/articles/s41392-024-01773-9",
  lungCancer: "https://www.sciencedirect.com/science/article/pii/S0169500224000672",
  ijgc: "https://www.sciencedirect.com/science/article/pii/S1048891X24019790",
  cellBiosci: "https://link.springer.com/article/10.1186/s13578-023-01156-7",
  jtm: "https://translational-medicine.biomedcentral.com/articles/10.1186/s12967-025-07408-z",
  frontImmunol:
    "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2026.1696792/full",
  natCommun: "https://www.nature.com/articles/s41467-026-73562-7",
  glomus:
    "https://www.sciencedirect.com/science/article/abs/pii/S0344033825004236?via%3Dihub",
};

const prioritizedPaperUrls = [
  sharedPaperLinks.lungCancer,
  sharedPaperLinks.natCommun,
  sharedPaperLinks.stttSclc,
  sharedPaperLinks.jtm,
  sharedPaperLinks.frontImmunol,
  sharedPaperLinks.cellBiosci,
  sharedPaperLinks.ijgc,
  sharedPaperLinks.glomus,
  sharedPaperLinks.stttGastric,
];

const featuredProject = {
  links: {
    registrationUrl: "https://clinicaltrials.gov/study/NCT06443684",
    coverageUrl: "https://mp.weixin.qq.com/s/x9LRrGD43tcW-B3oC0fMtQ",
  },
  images: {
    heroImage: "./assets/projects/drive/esmo-oral.jpg",
    esmoOralPhoto: "./assets/projects/drive/esmo-oral.jpg",
    expertPhoto: "./assets/projects/drive/expert-group.jpg",
    companyTalkPhoto: "./assets/projects/drive/company-talk.jpg",
  },
  zh: {
    label: "Featured Project · NSCLC · MRD · Translational Research",
    title: "驱动基因突变NSCLC MRD全国多中心转化研究",
    summary:
      "基于驱动基因突变作为肺癌发生发展的主干分子事件，探索驱动基因导向的液体活检用于术后复发监测和MRD评估的可行性。联合全国14家临床中心开展多中心研究，统筹研究设计、中心入组、样本检测、随访及数据分析，为公司MRD产品注册前积累关键临床证据；研究中期结果获ESMO Asia 2025口头汇报。",
    role: "Project Lead / Medical Affairs & Translational Research",
    highlights: [
      "全国多中心真实世界研究",
      "驱动基因突变 NSCLC 与 MRD",
      "ClinicalTrials.gov 注册",
      "ESMO Asia 2025 口头汇报",
    ],
    sections: {
      clinicalNeed:
        "驱动基因突变肺癌术后仍需要更简洁、可及的MRD监测方法。传统tumor-informed方法通常依赖大panel或WES/WGS，流程和成本较高。",
      innovation:
        "研究以核心驱动变异监测术后ctDNA，评估driver-informed MRD与复发风险、随访时间点及长期结局的关系。",
    },
    roles: [
      {
        title: "Scientific Rationale & Biomarker Strategy｜科学依据与标志物策略",
        copy: "基于驱动基因主干事件特征，建立driver-informed MRD研究假设和监测框架。",
      },
      {
        title: "Study Design & Multicenter Execution｜研究设计与多中心执行",
        copy: "主导方案、CRF及SAP撰写，统筹14家中心的入组、样本、随访和数据质量。",
      },
      {
        title: "Product Evidence Generation｜产品证据生成",
        copy: "通过多中心真实世界研究积累MRD产品注册前关键临床证据，并探索上市后应用场景。",
      },
      {
        title: "Data Interpretation & Scientific Communication｜数据解读与学术传播",
        copy: "整合临床、驱动基因、MRD和结局数据，推动国际会议汇报、论文及专家沟通。",
      },
    ],
    outputs: [
      {
        type: "Study Scale",
        title: "14家临床中心",
        copy: "全国多中心研究执行",
      },
      {
        type: "Product Evidence",
        title: "Pre-registration Evidence",
        copy: "产品注册前临床证据积累",
      },
      {
        type: "Registration",
        title: "ClinicalTrials.gov",
        copy: "NCT06443684",
        button: "查看注册",
        urlKey: "registrationUrl",
      },
      {
        type: "Conference",
        title: "ESMO Asia 2025",
        copy: "中期结果口头汇报",
      },
    ],
    details: {
      open: "展开项目详情",
      close: "收起项目详情",
    },
    timeline: [
      {
        phase: "Phase 1｜Study Initiation",
        title: "研究启动与专家参与",
        copy: "与研究者确认人群、终点、检测及随访方案。",
      },
      {
        phase: "Phase 2｜Clinical Trial Registration",
        title: "ClinicalTrials.gov 注册",
        copy: "完成NCT06443684注册。",
        button: "View Registration on ClinicalTrials.gov",
        urlKey: "registrationUrl",
      },
      {
        phase: "Phase 3｜Enrollment and Study Execution",
        title: "患者入组与研究执行推进",
        copy: "管理中心入组、样本、随访和数据质量。",
      },
      {
        phase: "Phase 4｜ESMO Asia 2025 Oral Presentation",
        title: "ESMO Asia 2025 口头汇报",
        copy: "研究入选ESMO Asia 2025口头汇报。",
        imageKey: "esmoOralPhoto",
      },
      {
        phase: "Phase 5｜Medical Communication",
        title: "论文与医学传播",
        copy: "完成会议材料、论文及后续医学宣讲。",
        imageKey: "companyTalkPhoto",
      },
    ],
    evidence: [
      {
        type: "Registration",
        title: "ClinicalTrials.gov 研究注册",
        copy: "研究以NCT06443684完成公开注册。",
        button: "View Registration",
        urlKey: "registrationUrl",
      },
      {
        type: "Conference",
        title: "ESMO Asia 2025 口头汇报",
        copy: "研究入选ESMO Asia 2025口头汇报。",
        imageKey: "esmoOralPhoto",
      },
      {
        type: "Expert Engagement",
        title: "与临床专家共同推进研究",
        copy: "与研究者沟通入组、执行及结果解读。",
        imageKey: "expertPhoto",
      },
      {
        type: "Medical Communication",
        title: "代表公司进行研究宣讲",
        copy: "在后续研讨会介绍研究设计与主要结果。",
        imageKey: "companyTalkPhoto",
      },
      {
        type: "External Coverage",
        title: "第三方医学公众号报道",
        copy: "研究在ESMO Asia披露后获得公开报道。",
        button: "Read Coverage",
        urlKey: "coverageUrl",
      },
    ],
  },
  en: {
    label: "Featured Project · NSCLC · MRD · Translational Research",
    title: "National Multicenter Translational MRD Study in Driver-Mutant NSCLC",
    summary:
      "Grounded in the role of oncogenic driver alterations as trunk events in lung cancer, this study evaluates the feasibility of driver-informed liquid biopsy for postoperative recurrence surveillance and MRD assessment. The study is being conducted across 14 clinical sites, with responsibility spanning study design, site enrollment, sample testing, follow-up, and data analysis. The program is generating key pre-registration clinical evidence for the company’s MRD product, and interim results were selected for oral presentation at ESMO Asia 2025.",
    role: "Project Lead / Medical Affairs & Translational Research",
    highlights: [
      "National multicenter real-world study",
      "Driver-mutant NSCLC and MRD",
      "Registered on ClinicalTrials.gov",
      "Accepted as an oral presentation at ESMO Asia 2025",
    ],
    sections: {
      clinicalNeed:
        "Postoperative MRD monitoring in driver-mutant lung cancer needs a simpler, more accessible approach. Conventional tumor-informed methods often rely on large panels or WES/WGS, adding cost and complexity.",
      innovation:
        "The study monitors postoperative ctDNA through core driver alterations and assesses associations between driver-informed MRD, recurrence risk, sampling timepoints, and long-term outcomes.",
    },
    roles: [
      {
        title: "Scientific Rationale & Biomarker Strategy",
        copy: "Built the driver-informed MRD hypothesis and monitoring framework around the truncal nature of oncogenic driver alterations.",
      },
      {
        title: "Study Design & Multicenter Execution",
        copy: "Led protocol, CRF, and SAP development and managed enrollment, samples, follow-up, and data quality across 14 sites.",
      },
      {
        title: "Product Evidence Generation",
        copy: "Used a multicenter real-world study to generate key pre-registration clinical evidence for the MRD product and explore post-launch use cases.",
      },
      {
        title: "Data Interpretation & Scientific Communication",
        copy: "Integrated clinical, driver alteration, MRD, and outcome data and developed congress presentations, manuscripts, and KOL communications.",
      },
    ],
    outputs: [
      {
        type: "Study Scale",
        title: "14 Clinical Sites",
        copy: "National multicenter study execution",
      },
      {
        type: "Product Evidence",
        title: "Pre-registration Evidence",
        copy: "Clinical evidence development for product registration",
      },
      {
        type: "Registration",
        title: "ClinicalTrials.gov",
        copy: "NCT06443684",
        button: "View Registration",
        urlKey: "registrationUrl",
      },
      {
        type: "Conference",
        title: "ESMO Asia 2025",
        copy: "Interim results selected for oral presentation",
      },
    ],
    details: {
      open: "View Project Details",
      close: "Hide Project Details",
    },
    timeline: [
      {
        phase: "Phase 1｜Study Initiation",
        title: "Study Initiation and Expert Engagement",
        copy: "Aligned the population, endpoints, testing, and follow-up plan with investigators.",
      },
      {
        phase: "Phase 2｜ClinicalTrials.gov Registration",
        title: "ClinicalTrials.gov Registration",
        copy: "Registered as NCT06443684.",
        button: "View Registration on ClinicalTrials.gov",
        urlKey: "registrationUrl",
      },
      {
        phase: "Phase 3｜Enrollment and Study Execution",
        title: "Enrollment and Study Execution",
        copy: "Managed site enrollment, samples, follow-up, and data quality.",
      },
      {
        phase: "Phase 4｜ESMO Asia 2025 Oral Presentation",
        title: "ESMO Asia 2025 Oral Presentation",
        copy: "Accepted for oral presentation at ESMO Asia 2025.",
        imageKey: "esmoOralPhoto",
      },
      {
        phase: "Phase 5｜Medical Communication",
        title: "Publication and Medical Communication",
        copy: "Prepared congress materials, manuscripts, and follow-up scientific presentations.",
        imageKey: "companyTalkPhoto",
      },
    ],
    evidence: [
      {
        type: "Registration",
        title: "ClinicalTrials.gov Registration",
        copy: "The study is publicly registered as NCT06443684.",
        button: "View Registration",
        urlKey: "registrationUrl",
      },
      {
        type: "Conference",
        title: "ESMO Asia 2025 Oral Presentation",
        copy: "Accepted for oral presentation at ESMO Asia 2025.",
        imageKey: "esmoOralPhoto",
      },
      {
        type: "Expert Engagement",
        title: "Collaboration with Clinical Experts",
        copy: "Worked with investigators on enrollment, execution, and interpretation.",
        imageKey: "expertPhoto",
      },
      {
        type: "Medical Communication",
        title: "Representing the Company in Scientific Seminars",
        copy: "Presented the study design and main findings at scientific seminars.",
        imageKey: "companyTalkPhoto",
      },
      {
        type: "External Coverage",
        title: "Third-party Medical Media Coverage",
        copy: "The ESMO Asia presentation received public medical media coverage.",
        button: "Read Coverage",
        urlKey: "coverageUrl",
      },
    ],
  },
};

const SITE_CONTENT = {
  zh: {
    meta: {
      name: "李行",
      roleShort: "肿瘤医学事务",
      description: "肿瘤医学事务、肺癌转化医学、生物标志物、伴随诊断及临床证据生成个人作品集。",
    },
    actions: {
      contact: "联系我",
      explore: "查看工作经历",
      resume: "下载中英文简历",
    },
    hero: {
      eyebrow: "肿瘤医学事务 · 转化医学 · 临床证据生成",
      name: "李行",
      location: "Shanghai, China",
      photoNote: "职业照待补充",
      tagline: "肺癌转化医学 / 生物标志物与伴随诊断 / 专家洞察与医学策略",
      summary:
        "具备6年以上肿瘤医学事务与转化研究经验，聚焦肺癌靶向治疗、免疫治疗、耐药机制及液体活检。擅长在Ⅰ–Ⅱ期临床试验及研究者发起研究（IIT）中开展生物标志物研究，完成临床与分子数据挖掘、结果解读和成果发表；能够识别肿瘤精准诊疗中的未满足需求，并通过专家沟通和医学教育推动临床证据传播。",
    },
    evidence: {
      eyebrow: "证据积累与专业能力",
      translation: {
        label: "科研转化",
        publications: {
          value: "9",
          label: "篇临床及转化研究SCI论文",
        },
        impact: {
          value: "140+",
          label: "署名SCI论文累计影响因子",
        },
        centers: {
          value: "14",
          label: "多中心研究最多覆盖研究中心数",
        },
      },
      focus: {
        label: "专业聚焦",
        tags: ["肺癌", "转化医学", "伴随诊断", "生物标志物"],
      },
      strengths: {
        label: "核心能力",
        tags: ["医学策略", "产品证据生成", "专家洞察", "多中心项目管理"],
      },
      note:
        "从未满足需求出发，形成研究设计、临床证据和医学传播。",
    },
    modules: {
      eyebrow: "Portfolio",
      title: "肺癌转化研究与医学事务实践",
      description:
        "围绕生物标志物、临床数据解读、医学策略和成果发表展示代表经历。",
    },
    contact: {
      eyebrow: "Contact",
      title: "期待与医学事务、MSL及临床医学团队进一步沟通",
      copy: "如需进一步了解我的肺癌医学策略、转化研究、生物标志物或专家沟通经验，欢迎通过以下方式联系我。",
    },
    skills: [
      "Translational Medicine",
      "Companion Diagnostics",
      "Biomarker Strategy",
      "Medical Strategy",
      "Clinical Evidence Generation",
      "Multicenter Study Management",
    ],
    navItems: [
      { label: "首页", target: "overview" },
      { label: "工作经历", target: "experience" },
      { label: "核心能力", target: "focus" },
      { label: "代表项目", target: "projects" },
      { label: "转化研究", target: "studies" },
      { label: "论文", target: "papers" },
      { label: "联系我", target: "contact" },
    ],
    educationBlock: {
      eyebrow: "Education",
      title: "教育背景",
      location: "来自浙江绍兴，现居上海",
    },
    contacts: [
      { label: "电话", value: "+86-13116852660", href: "tel:+8613116852660" },
      { label: "邮箱", value: "lixingcycu@sina.com", href: "mailto:lixingcycu@sina.com" },
    ],
    wechatQr: {
      label: "微信",
      value: "扫码添加微信",
      image: "./assets/contact/wechat-qr-clean.png",
    },
    tabs: [
      {
        id: "experience",
        title: "工作经历",
        kicker: "3 段核心经历",
        intro: "从区域MSL到中央医学岗位，工作覆盖肺癌医学策略、转化研究和KOL沟通。",
        type: "timeline",
        items: [
          {
            period: "2023.08 - 至今",
            company: "厦门艾德生物医药有限公司",
            role: "医学科学家 | 汇报对象：CMO",
            bullets: [
              {
                title: "医学策略与研究规划",
                copy: "统筹公司肺癌领域医学事务，制定年度医学策略及转化研究规划，围绕肺癌全病程未满足需求开展诊断和生物标志物研究。",
              },
              {
                title: "KOL管理与专家洞察",
                copy: "建立并维护核心肺癌KOL网络，通过专家拜访、顾问会及研究者会议收集临床需求和证据缺口，并转化为医学策略和研究方向。",
              },
              {
                title: "产品证据生成",
                copy: "基于临床需求及产品证据缺口，主导IIT和真实世界研究设计，支持产品注册前关键临床证据积累及上市后应用场景拓展。",
              },
              {
                title: "学术进展与医学解读",
                copy: "跟踪ELCC、ASCO、WCLC、ESMO等国际会议，以及重要临床和多组学研究进展，输出医学解读、竞争情报及专家沟通材料。",
              },
              {
                title: "多中心研究管理",
                copy: "主导研究方案、CRF和SAP撰写，负责多中心研究及CRO、第三方管理，统筹中心启动、患者入组、样本与随访、数据质量、医学答疑及问题解决。",
              },
            ],
          },
          {
            period: "2021.03 - 2023.08",
            company: "至本医疗（上海）股份有限公司",
            role: "MSL经理 | 汇报对象：高级医学总监",
            bullets: [
              {
                title: "区域医学事务管理",
                copy: "负责上海、江苏、浙江区域肿瘤医学事务及KOL管理，制定区域专家覆盖和医学沟通计划。",
              },
              {
                title: "临床洞察与专家沟通",
                copy: "通过专家拜访、病例讨论及学术会议收集临床需求、检测应用问题和专家反馈，为医学策略及产品优化提供支持。",
              },
              {
                title: "科研合作与项目推进",
                copy: "支持区域科研项目的立项讨论、方案优化、中心沟通和执行跟进，推动研究合作落地。",
              },
              {
                title: "内部医学支持",
                copy: "为销售、产品及市场团队提供疾病领域、检测技术和临床证据培训，提升跨部门医学协作效率。",
              },
            ],
          },
          {
            period: "2020.01 - 2021.03",
            company: "上海睿昂基因科技股份有限公司",
            role: "医学顾问 | 汇报对象：医学总监",
            bullets: [
              {
                title: "区域KOL医学支持",
                copy: "负责浙江、安徽、江西等区域专家维护和医学沟通，建立区域临床合作基础。",
              },
              {
                title: "临床需求与项目设计",
                copy: "收集临床检测需求和科研合作意向，参与科研项目设计、病例与样本信息整理及项目进度跟进。",
              },
              {
                title: "项目协调与问题解决",
                copy: "协调研究者与内部团队推进项目执行，处理检测应用及研究过程中的医学问题。",
              },
              {
                title: "销售培训与科学沟通",
                copy: "定期开展疾病领域、检测技术和临床应用培训，支持销售团队准确传递产品医学信息。",
              },
            ],
          },
        ],
      },
      {
        id: "projects",
        title: "代表项目",
        kicker: "Featured Project Case Study",
        intro: "驱动基因突变NSCLC全国多中心MRD真实世界研究。",
        type: "projects",
      },
      {
        id: "studies",
        title: "精选转化研究",
        kicker: "Selected Translational Studies",
        intro: "三个聚焦肺癌机制与疗效预测的研究案例。",
        type: "studies",
        items: [
          {
            title: "EGFR-TKI耐药与免疫微环境重塑",
            question: "EGFR-TKI耐药后，EGFR突变NSCLC的肿瘤免疫微环境如何变化？",
            responsibility: "参与生物标志物策略、数据分析、医学解读及论文撰写。",
            outcome: "发表于Lung Cancer。",
          },
          {
            title: "ES-SCLC免疫联合治疗生物标志物",
            question: "哪些分子和免疫特征与免疫联合抗血管及化疗疗效相关？",
            responsibility: "深度参与转化研究设计、生物标志物分析、结果解读和论文撰写。",
            outcome: "发表于Signal Transduction and Targeted Therapy。",
          },
          {
            title: "DURABLE研究疗效预测标志物",
            question: "哪些ctDNA、分子亚型及免疫特征可预测ES-SCLC维持治疗获益？",
            responsibility: "参与转化研究设计、生物标志物分析、结果解读及论文撰写。",
            outcome: "发表于Nature Communications。",
          },
        ],
      },
      {
        id: "papers",
        title: "发表文章",
        kicker: "9 篇 SCI 论文",
        intro:
          "以下研究涵盖临床试验、耐药机制、肿瘤微环境和疗效预测标志物，我主要参与研究设计、数据分析、医学解读及论文撰写。",
        type: "papers",
      },
      {
        id: "education",
        title: "教育背景",
        kicker: "Biotech Foundation",
        intro: "生物科技与生物工程背景，为肿瘤转化研究、检测产品和临床证据沟通提供基础。",
        type: "education",
        items: [
          { period: "2017.09 - 2019.08", school: "台湾交通大学", degree: "生物科技 硕士" },
          { period: "2013.09 - 2017.06", school: "台湾中原大学", degree: "生物工程 本科" },
        ],
      },
      {
        id: "focus",
        title: "核心能力",
        kicker: "Translational Medicine & Medical Affairs",
        intro: "聚焦肺癌转化研究、生物标志物和医学策略。",
        type: "focus",
        items: [
          {
            icon: "study",
            title: "Translational Research & Companion Diagnostics｜转化研究与伴随诊断",
            copy: "整合临床与多组学数据，识别优势人群并探索潜在伴随诊断标志物。",
          },
          {
            icon: "strategy",
            title: "Medical Strategy & KOL Insights｜医学策略与专家洞察",
            copy: "结合指南、研究进展和专家反馈，识别未满足需求及关键证据缺口。",
          },
          {
            icon: "evidence",
            title: "Product Evidence Generation & Scientific Translation｜产品证据生成与成果转化",
            copy: "通过IIT及真实世界研究获取产品临床价值证据，支持注册前证据积累、上市后场景拓展和成果传播。",
          },
          {
            icon: "project",
            title: "Multicenter Study & Project Management｜多中心研究与项目管理",
            copy: "统筹中心启动、入组、样本、随访和数据质量，协调CRO及第三方交付。",
          },
        ],
      },
    ],
    papers: [
      {
        authors: "Han X, Guo J, Li L, et al., Li X, et al.",
        title:
          "Sintilimab combined with anlotinib and chemotherapy as second-line or later therapy in extensive-stage small cell lung cancer: a phase II clinical trial.",
        journal: "Signal Transduction and Targeted Therapy",
        year: "2024",
        impact: "52.7",
        summary: "ES-SCLC 二线及后线治疗中免疫联合抗血管与化疗方案的 II 期临床研究。",
        url: sharedPaperLinks.stttSclc,
      },
      {
        authors: "Chen X, Xu H, Chen X, et al., Li X, et al.",
        title:
          "First-line camrelizumab plus apatinib and chemotherapy for advanced gastric cancer (SPACE): a phase 1 study.",
        journal: "Signal Transduction and Targeted Therapy",
        year: "2024",
        impact: "52.7",
        summary: "晚期胃癌一线免疫联合抗血管及化疗方案的 I 期临床研究。",
        url: sharedPaperLinks.stttGastric,
      },
      {
        authors: "Chen Q, Xia L, Wang J, et al., Li X, et al.",
        title:
          "EGFR-mutant NSCLC may remodel TME from non-inflamed to inflamed through acquiring resistance to EGFR-TKI treatment.",
        journal: "Lung Cancer",
        year: "2024",
        impact: "4.4",
        summary: "EGFR-TKI 耐药过程中 NSCLC 肿瘤免疫微环境重塑研究。",
        url: sharedPaperLinks.lungCancer,
      },
      {
        authors: "Feng Z, Zhu C, Zhang X, et al., Li X, et al.",
        title:
          "Comprehensive evaluation of genomic and functional assays for homologous recombination deficiency with high-grade epithelial ovarian cancer.",
        journal: "International Journal of Gynecological Cancer",
        year: "2025",
        impact: "4.7",
        summary: "高级别上皮性卵巢癌中 HRD 基因组与功能检测方法的综合评估。",
        url: sharedPaperLinks.ijgc,
      },
      {
        authors: "Pu X, Qi L, Yan JW, et al., Li X, et al.",
        title:
          "Oncogenic activation revealed by FGFR2 genetic alterations in intrahepatic cholangiocarcinomas.",
        journal: "Cell & Bioscience",
        year: "2023",
        impact: "6.2",
        summary: "肝内胆管癌中 FGFR2 遗传改变及其致癌激活机制研究。",
        url: sharedPaperLinks.cellBiosci,
      },
      {
        authors: "Dai J, Yan H, Chen Y, et al., Li X, et al.",
        title:
          "Tumor immune microenvironment score predicts efficacy of immune checkpoint inhibitors-based regimens in advanced non-small cell lung cancer.",
        journal: "Journal of Translational Medicine",
        year: "2025",
        impact: "7.5",
        summary: "晚期 NSCLC 中肿瘤免疫微环境评分预测免疫治疗疗效的研究。",
        url: sharedPaperLinks.jtm,
      },
      {
        authors: "Li S, Guo J, Huang Y, et al., Li X, et al.",
        title:
          "A 7-gene expression signature predicts immune microenvironment remodeling and neoadjuvant chemo-immunotherapy response in lung squamous cell carcinoma.",
        journal: "Frontiers in Immunology",
        year: "2026",
        impact: "5.9",
        summary: "肺鳞癌中 7 基因表达特征预测免疫微环境重塑和新辅助治疗反应。",
        url: sharedPaperLinks.frontImmunol,
      },
      {
        authors: "Zhang B, Zhong R, Shi C, et al., Li X, et al.",
        title:
          "Durvalumab plus anlotinib versus durvalumab alone as maintenance treatment in extensive-stage small-cell lung cancer (DURABLE): a randomized, open-label, multicenter phase 2 trial.",
        journal: "Nature Communications",
        year: "2026",
        impact: "14.7",
        summary: "ES-SCLC 维持治疗中免疫联合抗血管方案的随机、多中心 II 期研究。",
        url: sharedPaperLinks.natCommun,
      },
      {
        authors: "Deng M, Wang H, Pan W, et al., Li X, et al.",
        title:
          "Mutational landscape of glomus tumor and clinical application of genomic profiling based on next-generation sequencing technology.",
        journal: "Pathology - Research and Practice",
        year: "2025",
        impact: "2.8",
        summary: "球瘤突变图谱及 NGS 基因组分析在临床诊疗中的应用研究。",
        url: sharedPaperLinks.glomus,
      },
    ],
  },
  en: {
    meta: {
      name: "Li Xing",
      roleShort: "Medical Affairs",
      description:
        "Li Xing’s portfolio in oncology Medical Affairs, lung cancer translational medicine, biomarkers, companion diagnostics, and clinical evidence generation.",
    },
    actions: {
      contact: "Contact",
      explore: "View Experience",
      resume: "Download Bilingual CV",
    },
    hero: {
      eyebrow: "Oncology Medical Affairs · Translational Medicine · Clinical Evidence Generation",
      name: "Li Xing",
      location: "Shanghai, China",
      photoNote: "Professional photo coming soon",
      tagline: "Lung Cancer Translational Research / Biomarkers & Companion Diagnostics / KOL Insights & Medical Strategy",
      summary:
        "Oncology Medical Affairs and translational research professional with more than six years of experience, focused on targeted therapy, immunotherapy, resistance mechanisms, and liquid biopsy in lung cancer. Experienced in translational biomarker research embedded in Phase I–II clinical trials and investigator-initiated studies, including clinical and molecular data mining, medical interpretation, and scientific publication. Skilled at identifying unmet needs in precision oncology and translating evidence into KOL engagement and medical education.",
    },
    evidence: {
      eyebrow: "Evidence & Expertise",
      translation: {
        label: "Research Translation",
        publications: {
          value: "9",
          label: "SCI publications in clinical and translational research",
        },
        impact: {
          value: "140+",
          label: "Cumulative journal impact factor",
        },
        centers: {
          value: "14",
          label: "Sites in the largest multicenter study managed",
        },
      },
      focus: {
        label: "Professional Focus",
        tags: ["Lung Cancer", "Translational Medicine", "Companion Diagnostics", "Biomarkers"],
      },
      strengths: {
        label: "Core Capabilities",
        tags: [
          "Medical Strategy",
          "Product Evidence Generation",
          "KOL Insights",
          "Multicenter Study Management",
        ],
      },
      note:
        "From unmet need identification to study design, clinical evidence generation, and medical communication.",
    },
    modules: {
      eyebrow: "Portfolio",
      title: "Lung Cancer Translational Research and Medical Affairs",
      description:
        "Selected experience across biomarkers, clinical data interpretation, medical strategy, and publication.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s Connect on Medical Affairs, MSL, and Clinical Medical Roles",
      copy:
        "For discussions about lung cancer medical strategy, translational research, biomarkers, or KOL engagement, please feel free to get in touch.",
    },
    skills: [
      "Translational Medicine",
      "Companion Diagnostics",
      "Biomarker Strategy",
      "Medical Strategy",
      "Clinical Evidence Generation",
      "Multicenter Study Management",
    ],
    navItems: [
      { label: "Overview", target: "overview" },
      { label: "Experience", target: "experience" },
      { label: "Expertise", target: "focus" },
      { label: "Featured Project", target: "projects" },
      { label: "Translational Studies", target: "studies" },
      { label: "Publications", target: "papers" },
      { label: "Contact", target: "contact" },
    ],
    educationBlock: {
      eyebrow: "Education",
      title: "Education",
      location: "From Shaoxing, Zhejiang; based in Shanghai",
    },
    contacts: [
      { label: "Phone", value: "+86-13116852660", href: "tel:+8613116852660" },
      { label: "Email", value: "lixingcycu@sina.com", href: "mailto:lixingcycu@sina.com" },
    ],
    wechatQr: {
      label: "WeChat",
      value: "Scan to connect",
      image: "./assets/contact/wechat-qr-clean.png",
    },
    tabs: [
      {
        id: "experience",
        title: "Experience",
        kicker: "3 career stages",
        intro: "Experience across regional MSL work, lung cancer medical strategy, translational research, and KOL engagement.",
        type: "timeline",
        items: [
          {
            period: "Aug 2023 - Present",
            company: "Amoy Diagnostics Co., Ltd.",
            role: "Medical Scientist | Reporting to CMO",
            bullets: [
              {
                title: "Medical Strategy & Research Planning",
                copy: "Lead lung cancer Medical Affairs and annual medical strategy planning, and develop translational research programs addressing unmet diagnostic and biomarker needs across the lung cancer care continuum.",
              },
              {
                title: "KOL Engagement & Insights",
                copy: "Build and maintain a national network of leading lung cancer KOLs. Gather clinical needs and evidence gaps through one-to-one engagements, advisory boards, and investigator meetings, and translate insights into medical strategy and research priorities.",
              },
              {
                title: "Product Evidence Generation",
                copy: "Lead the design of IITs and real-world studies based on clinical needs and product evidence gaps, generating pre-registration clinical evidence and expanding post-launch clinical use cases.",
              },
              {
                title: "Scientific Intelligence & Medical Interpretation",
                copy: "Track major congresses including ELCC, ASCO, WCLC, and ESMO, as well as key clinical and multiomics studies, and develop medical reviews, competitive intelligence, and scientific communication materials.",
              },
              {
                title: "Multicenter Study Management",
                copy: "Lead protocol, CRF, and SAP development and manage multicenter studies, CROs, and external vendors, including site initiation, enrollment, sample collection and follow-up, data quality, medical queries, and issue resolution.",
              },
            ],
          },
          {
            period: "Mar 2021 - Aug 2023",
            company: "ChosenMed Technology",
            role: "MSL Manager | Reporting to Senior Medical Director",
            bullets: [
              {
                title: "Regional Medical Affairs Management",
                copy: "Managed oncology Medical Affairs and KOL engagement across Shanghai, Jiangsu, and Zhejiang, including regional expert coverage and scientific engagement planning.",
              },
              {
                title: "Clinical Insights & KOL Engagement",
                copy: "Collected clinical needs, testing-related challenges, and expert feedback through KOL visits, case discussions, and scientific meetings to support medical strategy and product optimization.",
              },
              {
                title: "Research Collaboration & Project Delivery",
                copy: "Supported regional research collaborations from project scoping and protocol refinement to site communication and execution follow-up.",
              },
              {
                title: "Internal Medical Support",
                copy: "Delivered training on disease areas, testing technologies, and clinical evidence to commercial, product, and marketing teams.",
              },
            ],
          },
          {
            period: "Jan 2020 - Mar 2021",
            company: "Rightongene Biotechnology Co., Ltd.",
            role: "Medical Consultant | Reporting to Medical Director",
            bullets: [
              {
                title: "Regional KOL Medical Support",
                copy: "Provided KOL medical support and scientific communication across Zhejiang, Anhui, Jiangxi, and other regions, establishing a foundation for regional clinical collaboration.",
              },
              {
                title: "Clinical Needs & Study Design",
                copy: "Collected clinical testing needs and research collaboration opportunities and contributed to study design, case and sample data organization, and project follow-up.",
              },
              {
                title: "Project Coordination & Issue Resolution",
                copy: "Coordinated investigators and internal teams to advance project execution and resolve medical questions related to testing applications and study conduct.",
              },
              {
                title: "Commercial Training & Scientific Communication",
                copy: "Delivered regular training on disease areas, testing technologies, and clinical applications to support accurate scientific communication by commercial teams.",
              },
            ],
          },
        ],
      },
      {
        id: "projects",
        title: "Featured Project",
        kicker: "Featured Project Case Study",
        intro: "A national multicenter MRD real-world study in driver-mutant NSCLC.",
        type: "projects",
      },
      {
        id: "studies",
        title: "Selected Translational Studies",
        kicker: "Selected Translational Studies",
        intro: "Three lung cancer studies focused on disease mechanisms and predictors of treatment response.",
        type: "studies",
        items: [
          {
            title: "EGFR-TKI Resistance and Immune Microenvironment Remodeling",
            question: "How does the tumor immune microenvironment change in EGFR-mutant NSCLC after acquired resistance to EGFR-TKI?",
            responsibility: "Contributed to biomarker strategy, data analysis, medical interpretation, and manuscript writing.",
            outcome: "Published in Lung Cancer.",
          },
          {
            title: "Biomarkers of Combination Immunotherapy in ES-SCLC",
            question:
              "Which molecular and immune features are associated with response to immunotherapy plus antiangiogenic therapy and chemotherapy?",
            responsibility:
              "Contributed substantially to translational study design, biomarker analysis, result interpretation, and manuscript writing.",
            outcome: "Published in Signal Transduction and Targeted Therapy.",
          },
          {
            title: "Predictive Biomarkers in the DURABLE Study",
            question:
              "Which ctDNA dynamics, molecular subtypes, and immune features predict maintenance treatment benefit in ES-SCLC?",
            responsibility:
              "Contributed to translational study design, biomarker analysis, result interpretation, and manuscript writing.",
            outcome: "Published in Nature Communications.",
          },
        ],
      },
      {
        id: "papers",
        title: "Publications",
        kicker: "9 SCI papers",
        intro:
          "These studies cover clinical trials, resistance mechanisms, tumor microenvironment, and predictive biomarkers. My work included study design, data analysis, medical interpretation, and manuscript writing.",
        type: "papers",
      },
      {
        id: "education",
        title: "Education",
        kicker: "Biotech Foundation",
        intro: "A biotechnology and bioengineering foundation supports communication around translational oncology, testing products and clinical evidence.",
        type: "education",
        items: [
          { period: "Sep 2017 - Aug 2019", school: "National Chiao Tung University", degree: "M.S. in Biotechnology" },
          { period: "Sep 2013 - Jun 2017", school: "Chung Yuan Christian University", degree: "B.S. in Bioengineering" },
        ],
      },
      {
        id: "focus",
        title: "Core Expertise",
        kicker: "Translational Medicine & Medical Affairs",
        intro: "Lung cancer translational research, biomarkers, and medical strategy.",
        type: "focus",
        items: [
          {
            icon: "study",
            title: "Translational Research & Companion Diagnostics",
            copy: "Integrate clinical and multiomics data to identify populations most likely to benefit and explore potential companion diagnostic biomarkers.",
          },
          {
            icon: "strategy",
            title: "Medical Strategy & KOL Insights",
            copy: "Combine guidelines, emerging evidence, and expert feedback to identify unmet needs and critical evidence gaps.",
          },
          {
            icon: "evidence",
            title: "Product Evidence Generation & Scientific Translation",
            copy: "Generate clinical evidence through IITs and real-world studies to support pre-registration evidence development, post-launch use-case expansion, and scientific communication.",
          },
          {
            icon: "project",
            title: "Multicenter Study & Project Management",
            copy: "Manage site initiation, enrollment, samples, follow-up, and data quality while coordinating CRO and external vendor deliverables.",
          },
        ],
      },
    ],
    papers: [
      {
        authors: "Han X, Guo J, Li L, et al., Li X, et al.",
        title:
          "Sintilimab combined with anlotinib and chemotherapy as second-line or later therapy in extensive-stage small cell lung cancer: a phase II clinical trial.",
        journal: "Signal Transduction and Targeted Therapy",
        year: "2024",
        impact: "52.7",
        summary: "A phase II study of immunotherapy plus anti-angiogenic therapy and chemotherapy in second-line or later ES-SCLC.",
        url: sharedPaperLinks.stttSclc,
      },
      {
        authors: "Chen X, Xu H, Chen X, et al., Li X, et al.",
        title:
          "First-line camrelizumab plus apatinib and chemotherapy for advanced gastric cancer (SPACE): a phase 1 study.",
        journal: "Signal Transduction and Targeted Therapy",
        year: "2024",
        impact: "52.7",
        summary: "A phase I study of first-line immunotherapy plus anti-angiogenic therapy and chemotherapy in advanced gastric cancer.",
        url: sharedPaperLinks.stttGastric,
      },
      {
        authors: "Chen Q, Xia L, Wang J, et al., Li X, et al.",
        title:
          "EGFR-mutant NSCLC may remodel TME from non-inflamed to inflamed through acquiring resistance to EGFR-TKI treatment.",
        journal: "Lung Cancer",
        year: "2024",
        impact: "4.4",
        summary: "Research on tumor immune microenvironment remodeling during acquired EGFR-TKI resistance in NSCLC.",
        url: sharedPaperLinks.lungCancer,
      },
      {
        authors: "Feng Z, Zhu C, Zhang X, et al., Li X, et al.",
        title:
          "Comprehensive evaluation of genomic and functional assays for homologous recombination deficiency with high-grade epithelial ovarian cancer.",
        journal: "International Journal of Gynecological Cancer",
        year: "2025",
        impact: "4.7",
        summary: "A comparative evaluation of genomic and functional HRD assays in high-grade epithelial ovarian cancer.",
        url: sharedPaperLinks.ijgc,
      },
      {
        authors: "Pu X, Qi L, Yan JW, et al., Li X, et al.",
        title:
          "Oncogenic activation revealed by FGFR2 genetic alterations in intrahepatic cholangiocarcinomas.",
        journal: "Cell & Bioscience",
        year: "2023",
        impact: "6.2",
        summary: "Research on FGFR2 genetic alterations and oncogenic activation in intrahepatic cholangiocarcinoma.",
        url: sharedPaperLinks.cellBiosci,
      },
      {
        authors: "Dai J, Yan H, Chen Y, et al., Li X, et al.",
        title:
          "Tumor immune microenvironment score predicts efficacy of immune checkpoint inhibitors-based regimens in advanced non-small cell lung cancer.",
        journal: "Journal of Translational Medicine",
        year: "2025",
        impact: "7.5",
        summary: "A study of tumor immune microenvironment scoring for predicting immunotherapy efficacy in advanced NSCLC.",
        url: sharedPaperLinks.jtm,
      },
      {
        authors: "Li S, Guo J, Huang Y, et al., Li X, et al.",
        title:
          "A 7-gene expression signature predicts immune microenvironment remodeling and neoadjuvant chemo-immunotherapy response in lung squamous cell carcinoma.",
        journal: "Frontiers in Immunology",
        year: "2026",
        impact: "5.9",
        summary: "A 7-gene signature study linking immune microenvironment remodeling with neoadjuvant response in lung squamous cell carcinoma.",
        url: sharedPaperLinks.frontImmunol,
      },
      {
        authors: "Zhang B, Zhong R, Shi C, et al., Li X, et al.",
        title:
          "Durvalumab plus anlotinib versus durvalumab alone as maintenance treatment in extensive-stage small-cell lung cancer (DURABLE): a randomized, open-label, multicenter phase 2 trial.",
        journal: "Nature Communications",
        year: "2026",
        impact: "14.7",
        summary: "A randomized multicenter phase II study of immunotherapy plus anti-angiogenic maintenance treatment in ES-SCLC.",
        url: sharedPaperLinks.natCommun,
      },
      {
        authors: "Deng M, Wang H, Pan W, et al., Li X, et al.",
        title:
          "Mutational landscape of glomus tumor and clinical application of genomic profiling based on next-generation sequencing technology.",
        journal: "Pathology - Research and Practice",
        year: "2025",
        impact: "2.8",
        summary: "A genomic profiling study of the mutational landscape of glomus tumor and its clinical application using NGS.",
        url: sharedPaperLinks.glomus,
      },
    ],
  },
};
