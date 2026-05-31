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
    label: "Featured Project · MRD · NSCLC · Real-world Evidence",
    title: "驱动基因突变肺癌 MRD 产品上市前真实世界研究",
    summary:
      "作为项目负责人，整体推进首个聚焦驱动基因突变肺癌设计的 MRD 产品上市前真实世界研究，覆盖研究设计、患者入组、临床沟通、数据分析、文章发表与医学传播全流程。",
    role: "Project Lead / Medical Affairs & Translational Research",
    highlights: [
      "首个聚焦驱动基因突变肺癌设计的 MRD 产品研究",
      "纳入目前 MRD 研究中最大规模的驱动基因突变肺癌患者",
      "ClinicalTrials.gov 注册",
      "ESMO Asia 2025 口头汇报",
    ],
    sections: {
      clinicalNeed:
        "肺癌驱动基因突变患者在围术期治疗和术后复发风险管理中，仍缺乏兼具临床可及性、成本可控性和分子特异性的 MRD 监测策略。传统 tumor-informed MRD 方法通常依赖大 panel 或 WES/WGS，流程复杂、成本较高，限制了其在真实临床场景中的规模化应用。",
      innovation:
        "本研究围绕驱动基因突变肺癌患者设计 MRD 产品上市前真实世界研究路径，聚焦核心驱动事件在术后 ctDNA 监测中的价值，探索 driver-informed MRD 在复发风险评估、长期随访和临床转化中的应用潜力，为产品上市前证据生成和临床认知建立提供支持。",
      valueSummary:
        "这个项目系统体现了我在 Medical Affairs 和转化研究中的复合能力：能够从临床未满足需求和产品上市前证据需求出发，参与并推动研究设计、患者入组、临床沟通、数据分析和文章发表；同时能够将研究结果进一步转化为会议汇报、专家沟通和医学宣讲内容，支持 driver-informed MRD 产品在驱动基因突变肺癌中的临床认知建立和价值传递。",
    },
    roles: [
      {
        title: "Study Design｜研究设计",
        copy: "参与并推动研究框架设计，明确目标人群、检测节点、随访策略、关键终点和真实世界证据生成路径。",
      },
      {
        title: "Enrollment Control｜患者入组把关",
        copy: "负责入组标准理解、病例筛选逻辑把关，并与临床团队持续沟通入组流程，保障研究队列的规范性和连续性。",
      },
      {
        title: "Clinical Coordination｜临床沟通与项目推进",
        copy: "持续协调研究者、临床团队和内部跨部门资源，推进样本采集、随访信息整理和研究执行中的关键问题解决。",
      },
      {
        title: "Data Analysis｜数据分析与结果解读",
        copy: "参与后续数据分析和结果解读，围绕 MRD 状态、复发风险、检测时间点价值及驱动基因亚组形成医学结论。",
      },
      {
        title: "Publication & Communication｜文章发表与医学传播",
        copy: "推动研究摘要、论文和会议材料输出，并在后续研讨会中代表公司介绍研究设计、核心结果和产品临床转化价值。",
      },
    ],
    timeline: [
      {
        phase: "Phase 1｜Study Initiation",
        title: "研究启动与专家参与",
        copy: "完成项目启动与专家参与，围绕研究方案、目标人群、检测路径和真实世界证据生成目标进行讨论，建立临床研究推进基础。",
      },
      {
        phase: "Phase 2｜Clinical Trial Registration",
        title: "ClinicalTrials.gov 注册",
        copy: "研究完成 ClinicalTrials.gov 注册，提升研究规范性、透明度和国际可追溯性。",
        button: "View Registration on ClinicalTrials.gov",
        urlKey: "registrationUrl",
      },
      {
        phase: "Phase 3｜Enrollment and Study Execution",
        title: "患者入组与研究执行推进",
        copy: "在入组过程中持续参与病例筛选、入组把关、临床沟通、样本采集和随访信息整理，保障真实世界研究数据积累。",
      },
      {
        phase: "Phase 4｜ESMO Asia 2025 Oral Presentation",
        title: "ESMO Asia 2025 口头汇报",
        copy: "研究被 ESMO Asia 2025 接受为口头汇报，体现其在驱动基因突变肺癌 MRD 真实世界研究中的学术价值和外部认可。",
        imageKey: "esmoOralPhoto",
      },
      {
        phase: "Phase 5｜Medical Communication",
        title: "后续医学宣讲与产品价值传递",
        copy: "在研究披露后，围绕研究设计、核心结果和 driver-informed MRD 产品差异化价值，在多个研讨会中代表公司进行医学宣讲。",
        imageKey: "companyTalkPhoto",
      },
    ],
    evidence: [
      {
        type: "Registration",
        title: "ClinicalTrials.gov 研究注册",
        copy: "研究已完成 ClinicalTrials.gov 注册，作为上市前真实世界证据生成的一部分，提升研究透明度和国际可检索性。",
        button: "View Registration",
        urlKey: "registrationUrl",
      },
      {
        type: "Conference",
        title: "ESMO Asia 2025 口头汇报",
        copy: "研究被 ESMO Asia 2025 接受为口头汇报，展示了项目在肺癌 MRD 研究和临床转化方向的学术价值。",
        imageKey: "esmoOralPhoto",
      },
      {
        type: "Expert Engagement",
        title: "与临床专家共同推进研究",
        copy: "项目推进过程中与临床专家保持持续沟通，围绕入组、研究执行和结果解读形成高质量协作。",
        imageKey: "expertPhoto",
      },
      {
        type: "Medical Communication",
        title: "代表公司进行研究宣讲",
        copy: "在后续研讨会中代表公司介绍研究设计、核心结果和 driver-informed MRD 产品的临床转化价值。",
        imageKey: "companyTalkPhoto",
      },
      {
        type: "External Coverage",
        title: "第三方医学公众号报道",
        copy: "研究在 ESMO Asia 披露后获得第三方医学/行业公众号报道，进一步扩大了 driver-informed MRD 在驱动基因突变肺癌中的外部认知度。",
        button: "Read Coverage",
        urlKey: "coverageUrl",
      },
    ],
  },
  en: {
    label: "Featured Project · MRD · NSCLC · Real-world Evidence",
    title: "Pre-market Real-world Study of a Driver-informed MRD Product in Driver-mutant Lung Cancer",
    summary:
      "As the project lead, I drove a pre-market real-world study of the first MRD product specifically designed for driver-mutant lung cancer, covering study design, patient enrollment, clinical coordination, data analysis, publication development, and medical communication.",
    role: "Project Lead / Medical Affairs & Translational Research",
    highlights: [
      "First MRD product study designed for driver-mutant lung cancer",
      "Largest driver-mutant lung cancer cohort in MRD research to date",
      "Registered on ClinicalTrials.gov",
      "Accepted as an oral presentation at ESMO Asia 2025",
    ],
    sections: {
      clinicalNeed:
        "Patients with driver-mutant lung cancer still lack an MRD monitoring strategy that is clinically accessible, cost-conscious, and molecularly specific in the perioperative and postoperative setting. Conventional tumor-informed MRD approaches often rely on large panels or WES/WGS, which may increase workflow complexity and cost, limiting broad adoption in real-world clinical practice.",
      innovation:
        "This study established a pre-market real-world evidence framework for an MRD product specifically designed for driver-mutant lung cancer. By focusing on key driver alterations and postoperative ctDNA monitoring, the study explored the clinical utility of driver-informed MRD for recurrence risk assessment, longitudinal surveillance, and product value translation.",
      valueSummary:
        "This project demonstrates my ability to drive a translational evidence-generation process from clinical unmet need and pre-market product validation to study design, patient enrollment, clinical coordination, data interpretation, publication development, and medical communication. It also reflects my experience in translating study findings into conference presentations, expert engagement, and scientific communication to support clinical awareness and value delivery of a driver-informed MRD product in driver-mutant lung cancer.",
    },
    roles: [
      {
        title: "Study Design",
        copy: "Contributed to and drove the study framework, including target population, sampling timepoints, follow-up strategy, key endpoints, and real-world evidence generation pathway.",
      },
      {
        title: "Enrollment Control",
        copy: "Oversaw enrollment criteria interpretation and patient screening logic, while working closely with clinical teams to ensure cohort quality and continuity.",
      },
      {
        title: "Clinical Coordination",
        copy: "Coordinated investigators, clinical teams, and internal cross-functional resources to support sample collection, follow-up data capture, and issue resolution throughout study execution.",
      },
      {
        title: "Data Analysis",
        copy: "Participated in data analysis and medical interpretation, focusing on MRD status, recurrence risk, timepoint-specific detection value, and driver gene subgroup findings.",
      },
      {
        title: "Publication & Communication",
        copy: "Supported abstract, manuscript, and conference material development, and represented the company in scientific seminars to communicate study design, key findings, and clinical value.",
      },
    ],
    timeline: [
      {
        phase: "Phase 1｜Study Initiation",
        title: "Study Initiation and Expert Engagement",
        copy: "The study was initiated with expert engagement to discuss study design, target population, testing pathway, and real-world evidence generation objectives.",
      },
      {
        phase: "Phase 2｜ClinicalTrials.gov Registration",
        title: "ClinicalTrials.gov Registration",
        copy: "The study was registered on ClinicalTrials.gov, strengthening study transparency, regulatory traceability, and international visibility.",
        button: "View Registration on ClinicalTrials.gov",
        urlKey: "registrationUrl",
      },
      {
        phase: "Phase 3｜Enrollment and Study Execution",
        title: "Enrollment and Study Execution",
        copy: "Throughout enrollment, I supported patient screening, enrollment control, clinical communication, sample collection, and follow-up data organization to ensure real-world cohort development.",
      },
      {
        phase: "Phase 4｜ESMO Asia 2025 Oral Presentation",
        title: "ESMO Asia 2025 Oral Presentation",
        copy: "The study was accepted as an oral presentation at ESMO Asia 2025, demonstrating external recognition of its academic and translational value in driver-mutant lung cancer MRD research.",
        imageKey: "esmoOralPhoto",
      },
      {
        phase: "Phase 5｜Medical Communication",
        title: "Medical Communication and Product Value Delivery",
        copy: "After study disclosure, I represented the company in scientific seminars to communicate the study design, key findings, and differentiated clinical value of driver-informed MRD.",
        imageKey: "companyTalkPhoto",
      },
    ],
    evidence: [
      {
        type: "Registration",
        title: "ClinicalTrials.gov Registration",
        copy: "The study was registered on ClinicalTrials.gov, supporting transparency and international traceability as part of pre-market real-world evidence generation.",
        button: "View Registration",
        urlKey: "registrationUrl",
      },
      {
        type: "Conference",
        title: "ESMO Asia 2025 Oral Presentation",
        copy: "The study was accepted as an oral presentation at ESMO Asia 2025, highlighting its academic and translational relevance in lung cancer MRD research.",
        imageKey: "esmoOralPhoto",
      },
      {
        type: "Expert Engagement",
        title: "Collaboration with Clinical Experts",
        copy: "The project involved continuous collaboration with clinical experts across enrollment, study execution, and interpretation of key findings.",
        imageKey: "expertPhoto",
      },
      {
        type: "Medical Communication",
        title: "Representing the Company in Scientific Seminars",
        copy: "I represented the company in scientific seminars to communicate the study design, key results, and clinical value of the driver-informed MRD product.",
        imageKey: "companyTalkPhoto",
      },
      {
        type: "External Coverage",
        title: "Third-party Medical Media Coverage",
        copy: "Following disclosure at ESMO Asia, the study received third-party medical and industry media coverage, extending external awareness of driver-informed MRD in driver-mutant lung cancer.",
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
      roleShort: "Medical Affairs",
    },
    actions: {
      contact: "联系我",
      explore: "查看代表项目",
      resume: "下载简历",
      resumePending: "简历 PDF 待替换",
    },
    hero: {
      eyebrow: "Medical Affairs · Precision Oncology · ctDNA/MRD",
      name: "李行",
      location: "Shanghai, China",
      photoNote: "职业照待补充",
      summary:
        "聚焦肿瘤精准医学与液体活检转化研究，具备分子诊断、ctDNA/MRD、多组学分析及医学内容策略经验，能够连接临床证据、产品价值与医学沟通场景。",
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
        tags: ["精准肿瘤学", "非小细胞肺癌", "转化研究", "医学策略"],
      },
      strengths: {
        label: "核心能力",
        tags: ["研究设计", "临床沟通", "数据解读", "医学传播"],
      },
      note:
        "持续参与肿瘤精准医学与液体活检相关研究，能够将临床问题、研究设计、数据结果和医学传播串联成完整的证据转化路径。",
    },
    modules: {
      eyebrow: "Portfolio",
      title: "以临床证据和医学价值为核心的项目经历",
      description:
        "围绕肿瘤精准医学、液体活检和转化研究，展示从研究启动、数据解读、论文发表到医学宣讲的完整项目链路。",
    },
    contact: {
      eyebrow: "Contact",
      title: "期待围绕医学事务、肿瘤精准医学与转化研究进一步沟通",
      copy: "如果你希望了解我的项目经历、科研产出或医学策略相关经验，欢迎通过以下方式联系我。",
    },
    skills: [
      "Precision Oncology",
      "NSCLC",
      "Translational Research",
      "Medical Strategy",
    ],
    navItems: [
      { label: "首页", target: "overview" },
      { label: "核心能力", target: "focus" },
      { label: "代表项目", target: "projects" },
      { label: "科研产出", target: "papers" },
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
        title: "工作履历",
        kicker: "3 段核心经历",
        intro: "从区域医学支持到中央医学策略，持续围绕肿瘤精准诊疗与临床转化建立医学影响力。",
        type: "timeline",
        items: [
          {
            period: "2023.08 - 至今",
            company: "厦门艾德生物医药有限公司",
            role: "医学科学家 | 汇报对象：CMO",
            bullets: [
              "制定并推动肺癌方向年度医学策略，覆盖专家洞察、证据解读、学术活动与内部医学支持。",
              "维护国内头部肺癌 KOL 网络，将专家反馈沉淀为产品定位、研究设计和医学沟通要点。",
              "主导或参与中央医学临床研究方案设计、研究推进和数据解读，支撑液体活检及创新治疗方向转化。",
              "跟踪 ELCC、WCLC、ASCO 等国际会议进展，输出面向内部团队和专家沟通的医学材料。",
            ],
          },
          {
            period: "2021.03 - 2023.08",
            company: "至本医疗（上海）股份有限公司",
            role: "MSL 经理 | 汇报对象：医学产品部总监",
            bullets: [
              "负责上海、江苏、浙江区域医学管理，围绕检测产品建立区域专家沟通和学术支持体系。",
              "通过专家会议、KOL 拜访和医学讨论提升临床端对检测产品价值的理解与认可。",
              "支持销售和产品团队理解临床场景、检测价值和专家关注点，提升跨部门协作效率。",
            ],
          },
          {
            period: "2020.01 - 2021.03",
            company: "上海睿昂基因科技股份有限公司",
            role: "医学顾问 | 汇报对象：医学总监",
            bullets: [
              "负责浙江、安徽、江西等区域 KOL 医学维护，建立临床沟通基础。",
              "定期为销售团队开展学术培训，帮助团队准确理解检测产品与临床应用场景。",
              "根据临床需求参与项目设计和进度跟进，积累从医学沟通到项目执行的完整经验。",
            ],
          },
        ],
      },
      {
        id: "projects",
        title: "代表项目",
        kicker: "Featured Project Case Study",
        intro: "通过一个完整项目展示从研究设计、患者入组、临床沟通、数据分析、会议汇报到医学传播的全流程能力。",
        type: "projects",
      },
      {
        id: "papers",
        title: "发表文章",
        kicker: "9 篇 SCI 论文",
        intro:
          "论文列表展示题名、期刊、年份、影响因子与可点击官网链接；影响因子作为可维护字段，正式投递前建议复核。",
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
        kicker: "Therapeutic Focus",
        intro: "围绕肿瘤医学事务工作所需的疾病理解、证据转化、研究设计和专家沟通能力组织。",
        type: "focus",
        items: [
          {
            title: "肺癌治疗格局理解",
            image: "./assets/focus/lung-landscape.jpg",
            copy:
              "熟悉 NSCLC 与 SCLC 主要治疗路径，持续关注靶向治疗、免疫治疗、TKI 耐药和 ADC 等创新方向。",
          },
          {
            title: "转化医学与生物标志物",
            image: "./assets/focus/biomarkers.jpg",
            copy:
              "具备从临床问题出发设计研究、解读数据并形成医学论证的经验，能够连接检测价值、疗效预测和临床决策。",
          },
          {
            title: "KOL 洞察与医学策略",
            image: "./assets/focus/kol-strategy.jpg",
            copy:
              "能够通过专家沟通提炼真实临床需求，将 insights 转化为学术活动设计、研究方向和内部策略建议。",
          },
          {
            title: "临床研究设计",
            image: "./assets/focus/study-design.jpg",
            copy:
              "具备丰富临床真实世界研究参与经历，能够从未满足临床问题出发，结合现有研究进展调研、样本量计算、生物标志物挖掘等方法，设计具有科学价值与临床转化意义的研究方案。",
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
      explore: "View Selected Projects",
      resume: "Download CV",
      resumePending: "CV PDF pending",
    },
    hero: {
      eyebrow: "Medical Affairs · Precision Oncology · ctDNA/MRD",
      name: "Li Xing",
      location: "Shanghai, China",
      photoNote: "Professional photo coming soon",
      summary:
        "A medical affairs and translational oncology professional focused on precision diagnostics, liquid biopsy, and evidence generation. Experienced in bridging clinical data, scientific communication, and product value strategy in oncology.",
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
        tags: ["Precision Oncology", "NSCLC", "Translational Research", "Medical Strategy"],
      },
      strengths: {
        label: "Core Capabilities",
        tags: ["Study Design", "Clinical Communication", "Data Interpretation", "Medical Communication"],
      },
      note:
        "Experienced in translating clinical questions, study design, data interpretation, and scientific communication into evidence-driven medical value.",
    },
    modules: {
      eyebrow: "Portfolio",
      title: "Selected Projects Built Around Clinical Evidence and Medical Value",
      description:
        "A curated view of oncology-focused projects, highlighting the full journey from study initiation and data interpretation to publication, scientific communication, and medical strategy execution.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s Connect on Medical Affairs, Precision Oncology, and Translational Research",
      copy:
        "For discussions related to medical affairs, oncology evidence generation, or translational research experience, please feel free to get in touch.",
    },
    skills: [
      "Precision Oncology",
      "NSCLC",
      "Translational Research",
      "Medical Strategy",
    ],
    navItems: [
      { label: "Overview", target: "overview" },
      { label: "Expertise", target: "focus" },
      { label: "Featured Project", target: "projects" },
      { label: "Publications", target: "papers" },
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
        intro: "A progression from regional medical support to central medical strategy, built around precision oncology and clinical translation.",
        type: "timeline",
        items: [
          {
            period: "Aug 2023 - Present",
            company: "Amoy Diagnostics Co., Ltd.",
            role: "Medical Scientist | Reporting to CMO",
            bullets: [
              "Develop and execute the annual medical strategy for lung cancer, spanning KOL insights, evidence interpretation, academic programs and internal medical support.",
              "Maintain engagement with leading lung cancer KOLs in China and convert expert feedback into product positioning, research design and communication priorities.",
              "Lead or contribute to central medical clinical study design, study execution and data interpretation for liquid biopsy and translational oncology programs.",
              "Track ELCC, WCLC, ASCO and other major congress updates to generate scientific materials for internal alignment and external engagement.",
            ],
          },
          {
            period: "Mar 2021 - Aug 2023",
            company: "Genecast Biotechnology Co., Ltd.",
            role: "MSL Manager | Reporting to Medical Product Director",
            bullets: [
              "Managed regional medical affairs across Shanghai, Jiangsu and Zhejiang with a focus on clinical adoption of oncology testing products.",
              "Improved KOL understanding of product value through expert meetings, academic visits and disease-area discussions.",
              "Supported commercial and product teams with clinical scenario interpretation, evidence messaging and cross-functional medical input.",
            ],
          },
          {
            period: "Jan 2020 - Mar 2021",
            company: "Rightongene Biotechnology Co., Ltd.",
            role: "Medical Consultant | Reporting to Medical Director",
            bullets: [
              "Managed KOL medical engagement across Zhejiang, Anhui, Jiangxi and other regions.",
              "Delivered regular scientific training for sales teams to improve understanding of testing products and clinical use cases.",
              "Contributed to project design and follow-up based on clinical needs, building end-to-end experience from medical communication to execution.",
            ],
          },
        ],
      },
      {
        id: "projects",
        title: "Featured Project",
        kicker: "Featured Project Case Study",
        intro: "A case study showing the full project lifecycle from study design, enrollment, clinical coordination, and data interpretation to conference presentation and medical communication.",
        type: "projects",
      },
      {
        id: "papers",
        title: "Publications",
        kicker: "9 SCI papers",
        intro: "The publication list highlights journal, year, impact factor and official article links. Impact factors are maintained as editable fields and should be verified before formal submission.",
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
        title: "Core Strengths",
        kicker: "Therapeutic Focus",
        intro: "Capabilities are organized around disease understanding, evidence translation, study design and expert engagement required for oncology medical affairs.",
        type: "focus",
        items: [
          {
            title: "Lung cancer treatment landscape",
            image: "./assets/focus/lung-landscape.jpg",
            copy: "Strong understanding of NSCLC and SCLC treatment pathways, with continuous attention to targeted therapy, immunotherapy, TKI resistance and ADC innovation.",
          },
          {
            title: "Translational medicine and biomarkers",
            image: "./assets/focus/biomarkers.jpg",
            copy: "Experienced in designing studies from clinical questions, interpreting data and forming medical arguments that connect testing value, efficacy prediction and clinical decision-making.",
          },
          {
            title: "KOL insights and medical strategy",
            image: "./assets/focus/kol-strategy.jpg",
            copy: "Able to extract real clinical needs from expert engagement and translate insights into academic program design, study direction and internal strategy.",
          },
          {
            title: "Clinical study design",
            image: "./assets/focus/study-design.jpg",
            copy: "Experienced in real-world clinical research design, starting from unmet clinical needs and integrating evidence landscape review, sample size estimation and biomarker exploration to develop scientifically meaningful and clinically translatable study protocols.",
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
