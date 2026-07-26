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
  sharedPaperLinks.stttSclc,
  sharedPaperLinks.natCommun,
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
      "围绕驱动基因ctDNA在术后复发风险评估中的价值，负责全国多中心MRD研究的整体设计与推进，统筹临床数据、样本检测、统计分析和成果发表。研究已完成ClinicalTrials.gov注册，并获ESMO Asia 2025口头汇报。",
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
        title: "Clinical Question & Biomarker Strategy｜临床问题与标志物策略",
        copy: "围绕驱动基因ctDNA与术后复发风险建立研究假设和生物标志物框架。",
      },
      {
        title: "Study Design & Analysis｜研究设计与分析方案",
        copy: "主导研究方案、CRF和SAP撰写，明确研究人群、终点、临床变量及统计方法。",
      },
      {
        title: "Multicenter Execution｜多中心研究执行",
        copy: "负责中心入组、样本和随访管理，并协调CRO、研究者及内部团队完成项目交付。",
      },
      {
        title: "Data Interpretation｜数据解读",
        copy: "整合临床特征、驱动基因、MRD状态和生存结局，完成统计结果审核及医学解释。",
      },
      {
        title: "Publication & Medical Communication｜成果发表与医学传播",
        copy: "负责摘要、论文和会议材料撰写，并将研究结论用于专家沟通和医学宣讲。",
      },
    ],
    outputs: [
      {
        type: "Registration",
        title: "ClinicalTrials.gov 注册",
        copy: "NCT06443684",
        button: "查看注册",
        urlKey: "registrationUrl",
      },
      {
        type: "Conference",
        title: "ESMO Asia 2025",
        copy: "国际会议口头汇报",
      },
      {
        type: "Collaboration",
        title: "全国多中心研究",
        copy: "研究者与多中心协作",
      },
      {
        type: "Coverage",
        title: "第三方报道",
        copy: "研究成果公开报道",
        button: "阅读报道",
        urlKey: "coverageUrl",
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
    title: "National Multicenter Translational Study of MRD in Driver-mutant NSCLC",
    summary:
      "Lead the design and execution of a national multicenter MRD study evaluating driver-gene ctDNA for postoperative recurrence risk. Coordinate clinical data, sample testing, statistical analysis, and publication. The study is registered on ClinicalTrials.gov and was selected for an oral presentation at ESMO Asia 2025.",
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
        title: "Clinical Question & Biomarker Strategy",
        copy: "Define the research hypothesis and biomarker framework linking driver-gene ctDNA with postoperative recurrence risk.",
      },
      {
        title: "Study Design & Analysis",
        copy: "Lead protocol, CRF, and SAP authoring and define the study population, endpoints, clinical variables, and statistical methods.",
      },
      {
        title: "Multicenter Execution",
        copy: "Manage site enrollment, samples, and follow-up and coordinate the CRO, investigators, and internal teams.",
      },
      {
        title: "Data Interpretation",
        copy: "Integrate clinical features, driver alterations, MRD status, and survival outcomes for statistical review and medical interpretation.",
      },
      {
        title: "Publication & Medical Communication",
        copy: "Author abstracts, manuscripts, and congress materials and present study findings to clinical experts.",
      },
    ],
    outputs: [
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
        copy: "Oral presentation",
      },
      {
        type: "Collaboration",
        title: "National Multicenter Study",
        copy: "Investigator and site collaboration",
      },
      {
        type: "Coverage",
        title: "External Coverage",
        copy: "Public reporting of study results",
        button: "Read Coverage",
        urlKey: "coverageUrl",
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
      description: "肿瘤医学事务、肺癌转化医学、生物标志物研究及临床证据生成个人作品集。",
    },
    actions: {
      contact: "联系我",
      explore: "查看工作经历",
      resume: "下载简历",
    },
    hero: {
      eyebrow: "肿瘤医学事务 · 转化医学 · 精准肿瘤学",
      name: "李行",
      location: "Shanghai, China",
      photoNote: "职业照待补充",
      summary:
        "长期从事肿瘤医学事务与转化研究，主要聚焦肺癌靶向治疗、免疫治疗、耐药机制及液体活检。擅长从临床问题出发设计生物标志物研究，整合临床与分子数据，完成结果解读和成果发表，并将研究证据用于医学策略和专家沟通。具备多中心研究、CRF、SAP及CRO管理经验。",
    },
    evidence: {
      eyebrow: "证据积累与专业能力",
      translation: {
        label: "科研转化",
        publications: {
          value: "9",
          label: "篇临床/转化研究SCI论文",
        },
        impact: {
          value: "140+",
          label: "累计影响因子",
        },
        centers: {
          value: "14",
          label: "家中心的多中心研究管理",
        },
      },
      focus: {
        label: "专业聚焦",
        tags: ["肺癌", "转化医学", "生物标志物", "精准肿瘤学"],
      },
      strengths: {
        label: "核心能力",
        tags: ["转化研究设计", "临床与分子数据解读", "医学策略与KOL合作", "多中心证据生成"],
      },
      note:
        "从临床问题出发，完成研究设计、数据解读和成果发表。",
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
      "Biomarker Strategy",
      "Medical Strategy",
      "Clinical Evidence Generation",
      "KOL Engagement",
      "Scientific Publication",
    ],
    navItems: [
      { label: "首页", target: "overview" },
      { label: "工作经历", target: "experience" },
      { label: "核心能力", target: "focus" },
      { label: "代表项目", target: "projects" },
      { label: "精选研究", target: "studies" },
      { label: "科研产出", target: "papers" },
      { label: "教育背景", target: "education" },
      { label: "联系我", target: "contact" },
    ],
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
              "负责肺癌医学策略与转化研究规划，围绕MRD、靶向治疗耐药、免疫微环境及生物标志物开展研究和KOL合作。",
              "从临床问题出发主导IIT及真实世界研究设计，统筹临床样本、检测技术、生物标志物和统计分析框架。",
              "负责全国多中心研究及CRO、第三方管理，完成研究方案、CRF和SAP撰写，跟进入组、样本、随访及数据质量。",
              "深度参与数据分析、结果解读和论文撰写，并将研究结论用于医学策略、专家沟通及学术传播。",
            ],
          },
          {
            period: "2021.03 - 2023.08",
            company: "至本医疗（上海）股份有限公司",
            role: "MSL 经理 | 汇报对象：医学产品部总监",
            bullets: [
              "负责上海、江苏、浙江区域肿瘤医学事务及KOL管理，通过专家拜访、学术会议和病例讨论收集临床洞察。",
              "为销售和产品团队提供疾病、检测和临床证据培训，并支持区域科研合作项目。",
            ],
          },
          {
            period: "2020.01 - 2021.03",
            company: "上海睿昂基因科技股份有限公司",
            role: "医学顾问 | 汇报对象：医学总监",
            bullets: [
              "负责浙江、安徽、江西等区域KOL沟通及医学支持，参与临床科研项目设计和执行。",
              "为销售团队开展疾病领域、检测技术及临床应用培训。",
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
            question: "EGFR-TKI耐药后，NSCLC肿瘤免疫微环境如何变化？",
            responsibility: "参与生物标志物设计、数据分析、结果解读及论文撰写。",
            outcome: "发表于Lung Cancer。",
          },
          {
            title: "ES-SCLC免疫联合治疗生物标志物",
            question: "哪些分子和免疫特征与免疫联合抗血管及化疗疗效相关？",
            responsibility: "负责或深度参与转化研究设计、生物标志物分析及论文撰写。",
            outcome: "发表于Signal Transduction and Targeted Therapy。",
          },
          {
            title: "DURABLE研究疗效预测标志物",
            question: "哪些ctDNA、分子亚型及免疫特征可预测ES-SCLC维持治疗获益？",
            responsibility: "参与转化研究设计、ctDNA及生物标志物分析、结果解读和论文撰写。",
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
            title: "Translational Research & Biomarkers｜转化研究与生物标志物",
            copy: "从临床问题出发设计生物标志物研究，整合临床、分子检测及肿瘤微环境数据，探索疗效预测和耐药机制。",
          },
          {
            icon: "strategy",
            title: "Medical Strategy & KOL Insights｜医学策略与专家洞察",
            copy: "结合指南、临床研究和专家反馈，识别肺癌诊疗中的证据缺口，形成医学策略和研究方向。",
          },
          {
            icon: "analysis",
            title: "Study Design & Evidence Generation｜研究设计与证据生成",
            copy: "主导IIT及真实世界研究设计，制定研究人群、终点、样本和分析框架，并完成方案、CRF及SAP撰写。",
          },
          {
            icon: "evidence",
            title: "Data Interpretation & Publication｜数据解读与成果发表",
            copy: "负责生物标志物和统计结果的医学解读，推动摘要、论文、研究报告及国际会议材料产出。",
          },
          {
            icon: "engagement",
            title: "KOL Engagement & Communication｜KOL合作与医学传播",
            copy: "通过专家拜访、顾问会、研究合作和医学教育开展科学交流，并持续收集临床洞察。",
          },
          {
            icon: "project",
            title: "Multicenter & CRO Management｜多中心及CRO管理",
            copy: "管理中心入组、样本、随访、数据质量、研究节点及CRO和第三方交付。",
          },
        ],
      },
    ],
    papers: [
      {
        title:
          "Sintilimab combined with anlotinib and chemotherapy as second-line or later therapy in extensive-stage small cell lung cancer: a phase II clinical trial.",
        journal: "Signal Transduction and Targeted Therapy",
        year: "2024",
        impact: "52.7",
        summary: "ES-SCLC 二线及后线治疗中免疫联合抗血管与化疗方案的 II 期临床研究。",
        url: sharedPaperLinks.stttSclc,
      },
      {
        title:
          "First-line camrelizumab plus apatinib and chemotherapy for advanced gastric cancer (SPACE): a phase 1 study.",
        journal: "Signal Transduction and Targeted Therapy",
        year: "2024",
        impact: "52.7",
        summary: "晚期胃癌一线免疫联合抗血管及化疗方案的 I 期临床研究。",
        url: sharedPaperLinks.stttGastric,
      },
      {
        title:
          "EGFR-mutant NSCLC may remodel TME from non-inflamed to inflamed through acquiring resistance to EGFR-TKI treatment.",
        journal: "Lung Cancer",
        year: "2024",
        impact: "4.4",
        summary: "EGFR-TKI 耐药过程中 NSCLC 肿瘤免疫微环境重塑研究。",
        url: sharedPaperLinks.lungCancer,
      },
      {
        title:
          "Comprehensive evaluation of genomic and functional assays for homologous recombination deficiency with high-grade epithelial ovarian cancer.",
        journal: "International Journal of Gynecological Cancer",
        year: "2025",
        impact: "4.7",
        summary: "高级别上皮性卵巢癌中 HRD 基因组与功能检测方法的综合评估。",
        url: sharedPaperLinks.ijgc,
      },
      {
        title:
          "Oncogenic activation revealed by FGFR2 genetic alterations in intrahepatic cholangiocarcinomas.",
        journal: "Cell & Bioscience",
        year: "2023",
        impact: "6.2",
        summary: "肝内胆管癌中 FGFR2 遗传改变及其致癌激活机制研究。",
        url: sharedPaperLinks.cellBiosci,
      },
      {
        title:
          "Tumor immune microenvironment score predicts efficacy of immune checkpoint inhibitors-based regimens in advanced non-small cell lung cancer.",
        journal: "Journal of Translational Medicine",
        year: "2025",
        impact: "7.5",
        summary: "晚期 NSCLC 中肿瘤免疫微环境评分预测免疫治疗疗效的研究。",
        url: sharedPaperLinks.jtm,
      },
      {
        title:
          "A 7-gene expression signature predicts immune microenvironment remodeling and neoadjuvant chemo-immunotherapy response in lung squamous cell carcinoma.",
        journal: "Frontiers in Immunology",
        year: "2026",
        impact: "5.9",
        summary: "肺鳞癌中 7 基因表达特征预测免疫微环境重塑和新辅助治疗反应。",
        url: sharedPaperLinks.frontImmunol,
      },
      {
        title:
          "Durvalumab plus anlotinib versus durvalumab alone as maintenance treatment in extensive-stage small-cell lung cancer (DURABLE): a randomized, open-label, multicenter phase 2 trial.",
        journal: "Nature Communications",
        year: "2026",
        impact: "14.7",
        summary: "ES-SCLC 维持治疗中免疫联合抗血管方案的随机、多中心 II 期研究。",
        url: sharedPaperLinks.natCommun,
      },
      {
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
        "Li Xing’s portfolio in oncology Medical Affairs, translational medicine, biomarker research, and clinical evidence generation.",
    },
    actions: {
      contact: "Contact",
      explore: "View Experience",
      resume: "Download CV",
    },
    hero: {
      eyebrow: "Medical Affairs · Translational Medicine · Precision Oncology",
      name: "Li Xing",
      location: "Shanghai, China",
      photoNote: "Professional photo coming soon",
      summary:
        "I work in oncology medical affairs and translational research, focusing on targeted therapy, immunotherapy, resistance mechanisms, and liquid biopsy in lung cancer. I design biomarker studies around clinical questions, integrate clinical and molecular data, interpret results, and publish findings. I also use study evidence in medical strategy and KOL discussions. My experience includes multicenter studies, CRFs, SAPs, and CRO management.",
    },
    evidence: {
      eyebrow: "Evidence & Expertise",
      translation: {
        label: "Research Translation",
        publications: {
          value: "9",
          label: "Clinical/translational SCI publications",
        },
        impact: {
          value: "140+",
          label: "Cumulative impact factor",
        },
        centers: {
          value: "14",
          label: "Centers in multicenter study management",
        },
      },
      focus: {
        label: "Professional Focus",
        tags: ["Lung Cancer", "Translational Medicine", "Biomarkers", "Precision Oncology"],
      },
      strengths: {
        label: "Core Capabilities",
        tags: [
          "Translational Study Design",
          "Clinical & Molecular Data Interpretation",
          "Medical Strategy & KOL Collaboration",
          "Multicenter Evidence Generation",
        ],
      },
      note:
        "From clinical question to study design, data interpretation, and publication.",
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
      "Biomarker Strategy",
      "Medical Strategy",
      "Clinical Evidence Generation",
      "KOL Engagement",
      "Scientific Publication",
    ],
    navItems: [
      { label: "Overview", target: "overview" },
      { label: "Experience", target: "experience" },
      { label: "Expertise", target: "focus" },
      { label: "Featured Project", target: "projects" },
      { label: "Selected Studies", target: "studies" },
      { label: "Research Outputs", target: "papers" },
      { label: "Education", target: "education" },
      { label: "Contact", target: "contact" },
    ],
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
              "Lead lung cancer medical strategy and translational research planning across MRD, targeted-therapy resistance, immune microenvironment, biomarkers, and KOL collaborations.",
              "Design IITs and real-world studies around clinical questions, integrating clinical samples, testing technologies, biomarkers, and statistical analysis frameworks.",
              "Manage national multicenter studies, CROs, and vendors; author protocols, CRFs, and SAPs and track enrollment, samples, follow-up, and data quality.",
              "Contribute substantially to data analysis, interpretation, and manuscript writing and use study conclusions in medical strategy, KOL discussions, and scientific communications.",
            ],
          },
          {
            period: "Mar 2021 - Aug 2023",
            company: "Genecast Biotechnology Co., Ltd.",
            role: "MSL Manager | Reporting to Medical Product Director",
            bullets: [
              "Managed oncology medical affairs and KOL engagement across Shanghai, Jiangsu, and Zhejiang, gathering clinical insights through visits, scientific meetings, and case discussions.",
              "Delivered disease, testing, and clinical evidence training for sales and product teams and supported regional research collaborations.",
            ],
          },
          {
            period: "Jan 2020 - Mar 2021",
            company: "Rightongene Biotechnology Co., Ltd.",
            role: "Medical Consultant | Reporting to Medical Director",
            bullets: [
              "Managed KOL engagement and medical support across Zhejiang, Anhui, Jiangxi, and other regions, contributing to clinical research design and execution.",
              "Trained sales teams on disease areas, testing technologies, and clinical applications.",
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
            question: "How does the NSCLC tumor immune microenvironment change after EGFR-TKI resistance?",
            responsibility: "Contributed to biomarker design, data analysis, interpretation, and manuscript writing.",
            outcome: "Published in Lung Cancer.",
          },
          {
            title: "Biomarkers of Combination Immunotherapy in ES-SCLC",
            question:
              "Which molecular and immune features are associated with response to immunotherapy plus antiangiogenic therapy and chemotherapy?",
            responsibility:
              "Led or contributed substantially to translational study design, biomarker analysis, and manuscript writing.",
            outcome: "Published in Signal Transduction and Targeted Therapy.",
          },
          {
            title: "Predictive Biomarkers in the DURABLE Study",
            question:
              "Which ctDNA, molecular subtype, and immune features predict benefit from maintenance therapy in ES-SCLC?",
            responsibility:
              "Contributed to translational study design, ctDNA and biomarker analysis, interpretation, and manuscript writing.",
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
            title: "Translational Research & Biomarkers",
            copy: "Design biomarker studies around clinical questions and integrate clinical, molecular, and tumor microenvironment data to explore predictors of response and resistance.",
          },
          {
            icon: "strategy",
            title: "Medical Strategy & KOL Insights",
            copy: "Combine guidelines, clinical studies, and expert feedback to identify evidence gaps in lung cancer and define medical strategy and research priorities.",
          },
          {
            icon: "analysis",
            title: "Study Design & Evidence Generation",
            copy: "Lead IIT and real-world study design, including populations, endpoints, samples, and analysis frameworks, and author protocols, CRFs, and SAPs.",
          },
          {
            icon: "evidence",
            title: "Data Interpretation & Publication",
            copy: "Interpret biomarker and statistical results and develop abstracts, manuscripts, study reports, and international congress materials.",
          },
          {
            icon: "engagement",
            title: "KOL Engagement & Communication",
            copy: "Engage KOLs through visits, advisory boards, research collaborations, and medical education to exchange science and gather clinical insights.",
          },
          {
            icon: "project",
            title: "Multicenter & CRO Management",
            copy: "Manage site enrollment, samples, follow-up, data quality, milestones, and CRO and vendor deliverables.",
          },
        ],
      },
    ],
    papers: [
      {
        title:
          "Sintilimab combined with anlotinib and chemotherapy as second-line or later therapy in extensive-stage small cell lung cancer: a phase II clinical trial.",
        journal: "Signal Transduction and Targeted Therapy",
        year: "2024",
        impact: "52.7",
        summary: "A phase II study of immunotherapy plus anti-angiogenic therapy and chemotherapy in second-line or later ES-SCLC.",
        url: sharedPaperLinks.stttSclc,
      },
      {
        title:
          "First-line camrelizumab plus apatinib and chemotherapy for advanced gastric cancer (SPACE): a phase 1 study.",
        journal: "Signal Transduction and Targeted Therapy",
        year: "2024",
        impact: "52.7",
        summary: "A phase I study of first-line immunotherapy plus anti-angiogenic therapy and chemotherapy in advanced gastric cancer.",
        url: sharedPaperLinks.stttGastric,
      },
      {
        title:
          "EGFR-mutant NSCLC may remodel TME from non-inflamed to inflamed through acquiring resistance to EGFR-TKI treatment.",
        journal: "Lung Cancer",
        year: "2024",
        impact: "4.4",
        summary: "Research on tumor immune microenvironment remodeling during acquired EGFR-TKI resistance in NSCLC.",
        url: sharedPaperLinks.lungCancer,
      },
      {
        title:
          "Comprehensive evaluation of genomic and functional assays for homologous recombination deficiency with high-grade epithelial ovarian cancer.",
        journal: "International Journal of Gynecological Cancer",
        year: "2025",
        impact: "4.7",
        summary: "A comparative evaluation of genomic and functional HRD assays in high-grade epithelial ovarian cancer.",
        url: sharedPaperLinks.ijgc,
      },
      {
        title:
          "Oncogenic activation revealed by FGFR2 genetic alterations in intrahepatic cholangiocarcinomas.",
        journal: "Cell & Bioscience",
        year: "2023",
        impact: "6.2",
        summary: "Research on FGFR2 genetic alterations and oncogenic activation in intrahepatic cholangiocarcinoma.",
        url: sharedPaperLinks.cellBiosci,
      },
      {
        title:
          "Tumor immune microenvironment score predicts efficacy of immune checkpoint inhibitors-based regimens in advanced non-small cell lung cancer.",
        journal: "Journal of Translational Medicine",
        year: "2025",
        impact: "7.5",
        summary: "A study of tumor immune microenvironment scoring for predicting immunotherapy efficacy in advanced NSCLC.",
        url: sharedPaperLinks.jtm,
      },
      {
        title:
          "A 7-gene expression signature predicts immune microenvironment remodeling and neoadjuvant chemo-immunotherapy response in lung squamous cell carcinoma.",
        journal: "Frontiers in Immunology",
        year: "2026",
        impact: "5.9",
        summary: "A 7-gene signature study linking immune microenvironment remodeling with neoadjuvant response in lung squamous cell carcinoma.",
        url: sharedPaperLinks.frontImmunol,
      },
      {
        title:
          "Durvalumab plus anlotinib versus durvalumab alone as maintenance treatment in extensive-stage small-cell lung cancer (DURABLE): a randomized, open-label, multicenter phase 2 trial.",
        journal: "Nature Communications",
        year: "2026",
        impact: "14.7",
        summary: "A randomized multicenter phase II study of immunotherapy plus anti-angiogenic maintenance treatment in ES-SCLC.",
        url: sharedPaperLinks.natCommun,
      },
      {
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
