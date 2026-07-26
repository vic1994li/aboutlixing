const sharedPaperLinks = {
  stttSclc: "https://www.nature.com/articles/s41392-024-01942-w",
  stttGastric: "https://www.nature.com/articles/s41392-024-01773-9",
  lungCancer: "https://www.sciencedirect.com/science/article/pii/S0169500224000672",
  ijgc: "https://www.sciencedirect.com/science/article/pii/S1048891X24019790",
  cellBiosci: "https://cellandbioscience.biomedcentral.com/articles/10.1186/s13578-023-01157-4",
  jtm: "https://translational-medicine.biomedcentral.com/articles/10.1186/s12967-025-07408-z",
  frontImmunol:
    "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2026.1696792/full",
  natCommun: "https://www.nature.com/articles/s41467-026-73562-7",
  glomus:
    "https://www.sciencedirect.com/science/article/abs/pii/S0344033825004236?via%3Dihub",
};

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
    label: "Featured Project · NSCLC · MRD · Evidence Generation",
    title: "驱动基因突变NSCLC全国多中心临床研究与上市前证据生成",
    summary:
      "负责驱动基因突变NSCLC全国多中心MRD真实世界研究，主导方案、CRF和SAP撰写，并负责入组推进、CRO管理、医学核查、数据分析和成果发表。",
    role: "Project Lead / Medical Affairs & Translational Research",
    highlights: [
      "全国多中心真实世界研究",
      "驱动基因突变 NSCLC 与 MRD",
      "ClinicalTrials.gov 注册",
      "ESMO Asia 2025 口头汇报",
    ],
    sections: {
      clinicalNeed:
        "驱动基因突变肺癌术后仍需更简洁、可及的MRD监测方法。传统tumor-informed方案依赖大panel或WES/WGS，流程和成本较高。",
      innovation:
        "研究以驱动基因为核心监测术后ctDNA，评估driver-informed MRD与复发风险、随访时间点及长期结局的关系。",
    },
    roles: [
      {
        title: "Study Design, CRF & SAP｜研究设计、CRF与SAP",
        copy: "主导方案、CRF和SAP撰写，完成终点、变量及统计分析框架设计。",
      },
      {
        title: "Multicenter & CRO Management｜多中心及CRO管理",
        copy: "负责中心入组、样本、随访、数据质量、项目节点及CRO交付。",
      },
      {
        title: "Medical Review｜医学核查",
        copy: "核查病例、方案执行和数据一致性，处理研究中的医学问题。",
      },
      {
        title: "Data Interpretation｜数据解读",
        copy: "审核统计结果并完成医学解释，形成主要研究结论。",
      },
      {
        title: "Publication & Communication｜发表与传播",
        copy: "负责摘要、论文、研究报告、会议材料及医学宣讲。",
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
    label: "Featured Project · NSCLC · MRD · Evidence Generation",
    title: "National Multicenter Clinical Study and Pre-market Evidence Generation in Driver-mutant NSCLC",
    summary:
      "Lead a national multicenter MRD real-world study in driver-mutant NSCLC, including protocol, CRF, and SAP authoring, enrollment delivery, CRO management, medical review, data analysis, and publication.",
    role: "Project Lead / Medical Affairs & Translational Research",
    highlights: [
      "National multicenter real-world study",
      "Driver-mutant NSCLC and MRD",
      "Registered on ClinicalTrials.gov",
      "Accepted as an oral presentation at ESMO Asia 2025",
    ],
    sections: {
      clinicalNeed:
        "Postoperative MRD monitoring in driver-mutant lung cancer needs a simpler, more accessible approach. Conventional tumor-informed methods often require large panels or WES/WGS, adding cost and complexity.",
      innovation:
        "The study monitors postoperative ctDNA through key driver alterations and assesses associations with recurrence risk, sampling timepoints, and long-term outcomes.",
    },
    roles: [
      {
        title: "Study Design, CRF & SAP",
        copy: "Lead protocol, CRF, and SAP authoring, including endpoints, variables, and the analysis framework.",
      },
      {
        title: "Multicenter & CRO Management",
        copy: "Manage site enrollment, samples, follow-up, data quality, milestones, and CRO deliverables.",
      },
      {
        title: "Medical Review",
        copy: "Review cases, protocol execution, and data consistency and resolve study-related medical questions.",
      },
      {
        title: "Data Interpretation",
        copy: "Review statistical outputs, provide medical interpretation, and define the main conclusions.",
      },
      {
        title: "Publication & Communication",
        copy: "Author abstracts, manuscripts, study reports, congress materials, and scientific presentations.",
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
    },
    actions: {
      contact: "联系我",
      explore: "查看工作经历",
      resume: "下载简历",
    },
    hero: {
      eyebrow: "肿瘤医学事务 · 临床研究管理 · 转化医学",
      name: "李行",
      location: "Shanghai, China",
      photoNote: "职业照待补充",
      summary:
        "我长期从事肿瘤医学事务和临床研究，主要聚焦肺癌。具备医学策略、KOL沟通和多中心研究管理经验，主导过研究方案、CRF及SAP撰写，并负责CRO管理、医学核查、数据分析和论文发表。",
    },
    evidence: {
      eyebrow: "证据积累与专业能力",
      translation: {
        label: "科研转化",
        publications: {
          value: "9",
          label: "项研究成果转化为 SCI 论文发表",
        },
        impact: {
          value: "140+",
          label: "累计影响因子",
        },
      },
      focus: {
        label: "专业聚焦",
        tags: ["精准肿瘤学", "肺癌", "ctDNA / MRD", "转化研究"],
      },
      strengths: {
        label: "核心能力",
        tags: ["研究设计", "CRF / SAP", "CRO 与第三方管理", "医学审阅"],
      },
      note:
        "覆盖研究设计、项目执行、数据解读和成果发表。",
    },
    modules: {
      eyebrow: "Portfolio",
      title: "以临床证据和医学价值为核心的项目经历",
      description:
        "围绕肿瘤精准医学、液体活检和转化研究，展示从研究启动、数据解读、论文发表到医学宣讲的完整项目链路。",
    },
    contact: {
      eyebrow: "Contact",
      title: "期待与医学事务、MSL及临床医学团队进一步沟通",
      copy: "如需进一步了解我的肿瘤医学策略、临床研究管理、专家沟通或证据生成经验，欢迎通过以下方式联系我。",
    },
    skills: [
      "Medical Strategy",
      "Clinical Study Design",
      "Multi-center Project Management",
      "Medical Review",
      "KOL Engagement",
      "Scientific Communication",
    ],
    navItems: [
      { label: "首页", target: "overview" },
      { label: "工作经历", target: "experience" },
      { label: "核心能力", target: "focus" },
      { label: "代表项目", target: "projects" },
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
        intro: "从区域MSL到中央医学岗位，工作覆盖医学策略、研究管理和KOL沟通。",
        type: "timeline",
        items: [
          {
            period: "2023.08 - 至今",
            company: "厦门艾德生物医药有限公司",
            role: "医学科学家 | 汇报对象：CMO",
            bullets: [
              "负责肺癌年度医学策略和核心KOL沟通，跟踪指南、文献及国际会议进展，形成研究方向和内部医学建议。",
              "主导IIT及真实世界研究的方案、CRF和SAP撰写，完成研究终点、访视、变量及统计分析框架设计。",
              "负责全国多中心研究及CRO、第三方管理，跟进入组、样本、随访、数据质量和项目节点。",
              "开展医学核查与答疑，参与数据解读及摘要、论文、研究报告和会议材料撰写。",
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
        id: "papers",
        title: "发表文章",
        kicker: "9 篇 SCI 论文",
        intro:
          "以下研究均深度参与生物标志物设计、数据分析、文章撰写等工作，并以署名作者身份参与发表。",
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
        kicker: "Clinical Research & Medical Affairs Capabilities",
        intro: "聚焦肺癌医学事务和真实世界研究。",
        type: "focus",
        items: [
          {
            icon: "strategy",
            title: "Medical Strategy & KOL",
            copy: "负责肺癌医学策略、核心KOL沟通和临床洞察整理。",
          },
          {
            icon: "study",
            title: "Study Design",
            copy: "设计研究人群、入排标准、终点、访视、随访及采样节点。",
          },
          {
            icon: "analysis",
            title: "CRF & SAP",
            copy: "主导CRF和SAP撰写，明确数据变量、分析集和统计方法。",
          },
          {
            icon: "project",
            title: "Project & CRO Management",
            copy: "管理中心入组、样本、随访、数据质量、项目节点及CRO交付。",
          },
          {
            icon: "review",
            title: "Medical Review",
            copy: "开展病例、方案执行和数据一致性核查，处理研究中的医学问题。",
          },
          {
            icon: "evidence",
            title: "Publication & Communication",
            copy: "负责数据解读及摘要、论文、研究报告和会议材料撰写。",
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
    },
    actions: {
      contact: "Contact",
      explore: "View Experience",
      resume: "Download CV",
    },
    hero: {
      eyebrow: "Medical Affairs · Oncology Clinical Research · Translational Medicine",
      name: "Li Xing",
      location: "Shanghai, China",
      photoNote: "Professional photo coming soon",
      summary:
        "I work in oncology medical affairs and clinical research, with a primary focus on lung cancer. My experience includes medical strategy, KOL engagement, and multicenter study management. I have led protocol, CRF, and SAP authoring and managed CRO delivery, medical review, data analysis, and publications.",
    },
    evidence: {
      eyebrow: "Evidence & Expertise",
      translation: {
        label: "Research Translation",
        publications: {
          value: "9",
          label: "Research outputs translated into SCI publications",
        },
        impact: {
          value: "140+",
          label: "Cumulative impact factor",
        },
      },
      focus: {
        label: "Professional Focus",
        tags: ["Precision Oncology", "Lung Cancer", "ctDNA / MRD", "Translational Research"],
      },
      strengths: {
        label: "Core Capabilities",
        tags: ["Study Design", "CRF / SAP", "CRO & Vendor Management", "Medical Review"],
      },
      note:
        "Study design, project delivery, data interpretation, and publication.",
    },
    modules: {
      eyebrow: "Portfolio",
      title: "Selected Projects Built Around Clinical Evidence and Medical Value",
      description:
        "A curated view of oncology-focused projects, highlighting the full journey from study initiation and data interpretation to publication, scientific communication, and medical strategy execution.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s Connect on Medical Affairs, MSL, and Clinical Medical Roles",
      copy:
        "For discussions about oncology medical strategy, clinical study management, KOL engagement, or evidence generation experience, please feel free to get in touch.",
    },
    skills: [
      "Medical Strategy",
      "Clinical Study Design",
      "Multi-center Project Management",
      "Medical Review",
      "KOL Engagement",
      "Scientific Communication",
    ],
    navItems: [
      { label: "Overview", target: "overview" },
      { label: "Experience", target: "experience" },
      { label: "Expertise", target: "focus" },
      { label: "Featured Project", target: "projects" },
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
        intro: "Experience across regional MSL work, central medical strategy, and clinical study management.",
        type: "timeline",
        items: [
          {
            period: "Aug 2023 - Present",
            company: "Amoy Diagnostics Co., Ltd.",
            role: "Medical Scientist | Reporting to CMO",
            bullets: [
              "Own the annual lung cancer medical strategy and core KOL engagement; review guidelines, literature, and major congress updates to define research priorities and internal medical recommendations.",
              "Lead protocol, CRF, and SAP authoring for IITs and real-world studies, including endpoints, visits, variables, and the statistical analysis framework.",
              "Manage national multicenter studies, CROs, and vendors, tracking enrollment, samples, follow-up, data quality, and milestones.",
              "Conduct medical review and query resolution, and contribute to data interpretation, abstracts, manuscripts, study reports, and congress materials.",
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
        id: "papers",
        title: "Publications",
        kicker: "9 SCI papers",
        intro:
          "For the studies below, I contributed as a named author with substantial involvement in biomarker design, data analysis, and manuscript development.",
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
        kicker: "Clinical Research & Medical Affairs Capabilities",
        intro: "Lung cancer medical affairs and real-world clinical research.",
        type: "focus",
        items: [
          {
            icon: "strategy",
            title: "Medical Strategy & KOL",
            copy: "Own lung cancer medical strategy, core KOL engagement, and clinical insight synthesis.",
          },
          {
            icon: "study",
            title: "Study Design",
            copy: "Define study populations, eligibility criteria, endpoints, visits, follow-up, and sampling timepoints.",
          },
          {
            icon: "analysis",
            title: "CRF & SAP",
            copy: "Lead CRF and SAP authoring, including data variables, analysis sets, and statistical methods.",
          },
          {
            icon: "project",
            title: "Project & CRO Management",
            copy: "Manage site enrollment, samples, follow-up, data quality, milestones, and CRO deliverables.",
          },
          {
            icon: "review",
            title: "Medical Review",
            copy: "Review cases, protocol execution, and data consistency and resolve study-related medical questions.",
          },
          {
            icon: "evidence",
            title: "Publication & Communication",
            copy: "Interpret data and author abstracts, manuscripts, study reports, and congress materials.",
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
