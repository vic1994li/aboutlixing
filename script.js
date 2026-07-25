const state = {
  lang: "zh",
  activeTab: "experience",
  activeProjects: new Set(),
  touchStartX: 0,
  touchStartY: 0,
};

const $ = (selector) => document.querySelector(selector);
const MODULE_TAB_ORDER = ["experience", "focus", "projects", "papers", "education"];

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], SITE_CONTENT[state.lang]);
}

function currentTabs() {
  const tabs = SITE_CONTENT[state.lang].tabs;
  return MODULE_TAB_ORDER.map((id) => tabs.find((tab) => tab.id === id)).filter(Boolean);
}

function setTextContent() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });
  $("#languageToggle").textContent = state.lang === "zh" ? "EN" : "中文";
}

function renderSkills() {
  $("#skillTags").innerHTML = SITE_CONTENT[state.lang].skills
    .map((skill) => `<span class="skill-tag">${skill}</span>`)
    .join("");
}

function renderPillTags(containerId, tags) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = tags.map((tag) => `<span class="pill-tag">${tag}</span>`).join("");
}

function renderEvidencePanel() {
  const evidence = SITE_CONTENT[state.lang].evidence;
  renderPillTags("evidenceFocusTags", evidence.focus.tags);
  renderPillTags("evidenceStrengthTags", evidence.strengths.tags);
}

function renderContacts() {
  const contactCards = SITE_CONTENT[state.lang].contacts
    .map((item) => {
      const content = `<span>${item.label}</span><strong>${item.value}</strong>`;
      return item.href
        ? `<a class="contact-card" href="${item.href}">${content}</a>`
        : `<div class="contact-card muted">${content}</div>`;
    })
    .join("");

  const qr = SITE_CONTENT[state.lang].wechatQr;
  $("#contactGrid").innerHTML = `
    ${contactCards}
    <div class="contact-card qr-card">
      <span>${qr.label}</span>
      <strong>${qr.value}</strong>
      <img src="${qr.image}" alt="${qr.value}" loading="lazy" />
    </div>
  `;
}

function activateTab(tabId, shouldScroll = false) {
  state.activeTab = tabId;
  state.activeProjects.clear();
  renderTopTabs();
  renderModuleContent();

  if (shouldScroll) {
    $("#modules").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function activateRelativeTab(direction) {
  const tabs = currentTabs();
  const index = tabs.findIndex((tab) => tab.id === state.activeTab);
  if (index === -1) return;

  const nextIndex = (index + direction + tabs.length) % tabs.length;
  activateTab(tabs[nextIndex].id, false);
}

function renderTopTabs() {
  const navItems = SITE_CONTENT[state.lang].navItems;
  $("#topModuleNav").innerHTML = navItems
    .map((item) => {
      const isActive = item.target === state.activeTab;
      return `
        <button class="top-module-tab ${isActive ? "active" : ""}" type="button" data-target="${item.target}">
          <strong>${item.label}</strong>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".top-module-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      if (target === "overview" || target === "contact") {
        $(`#${target}`).scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      activateTab(target, true);
    });
  });
}

function renderModuleContent() {
  const tab = currentTabs().find((item) => item.id === state.activeTab);
  if (!tab) return;

  const content = $("#moduleContent");
  content.innerHTML = `
    <div class="content-head">
      <span>${tab.kicker}</span>
      <h3>${tab.title}</h3>
      <p>${tab.intro}</p>
    </div>
    ${renderByType(tab)}
    <div class="swipe-hint">${state.lang === "zh" ? "左右滑动切换模块" : "Swipe horizontally to switch sections"}</div>
  `;

  content.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.project;
      if (state.activeProjects.has(key)) {
        state.activeProjects.delete(key);
      } else {
        state.activeProjects.add(key);
      }
      renderModuleContent();
    });
  });
}

function renderByType(tab) {
  if (tab.type === "timeline") return renderTimeline(tab.items);
  if (tab.type === "projects") return renderFeaturedProject();
  if (tab.type === "papers") return renderPapers();
  if (tab.type === "focus") return renderFocus(tab.items);
  if (tab.type === "education") return renderEducation(tab.items);
  return "";
}

function renderTimeline(items) {
  return `
    <div class="timeline">
      ${items
        .map(
          (item) => `
            <section class="timeline-item">
              <div>
                <span class="period">${item.period}</span>
                <h4>${item.company}</h4>
                <p>${item.role}</p>
              </div>
              <ul>
                ${item.bullets
                  .map((bullet) => {
                    if (typeof bullet === "string") return `<li>${bullet}</li>`;
                    return `
                      <li class="experience-dimension">
                        <strong>${bullet.title}</strong>
                        <span>${bullet.copy}</span>
                      </li>
                    `;
                  })
                  .join("")}
              </ul>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function projectData() {
  return featuredProject[state.lang];
}

function projectUrl(key) {
  return featuredProject.links[key] || "";
}

function projectImage(key) {
  return featuredProject.images[key] || "";
}

function renderProjectImage(key, alt, className = "case-image") {
  const src = projectImage(key);
  if (!src) {
    return `<div class="${className} image-empty">${state.lang === "zh" ? "图片待补充" : "Image coming soon"}</div>`;
  }
  return `<img class="${className}" src="${src}" alt="${alt}" loading="lazy" />`;
}

function renderProjectButton(item) {
  if (!item.urlKey) return "";
  const url = projectUrl(item.urlKey);
  if (!url) return "";
  const label = item.button || (state.lang === "zh" ? "查看链接" : "View Link");
  return `<a class="case-link" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function renderFeaturedProject() {
  const project = projectData();
  return `
    <div class="case-study">
      <section class="case-hero">
        <div class="case-hero-copy">
          <span class="case-label">${project.label}</span>
          <h4>${project.title}</h4>
          <p>${project.summary}</p>
          <strong>${project.role}</strong>
          <div class="case-tags">
            ${project.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}
          </div>
        </div>
        <figure class="case-hero-media">
          ${renderProjectImage("heroImage", project.title)}
          <figcaption>${state.lang === "zh" ? "ESMO Asia 2025 口头汇报现场" : "ESMO Asia 2025 oral presentation"}</figcaption>
        </figure>
      </section>

      <section class="case-section">
        <div class="case-section-head">
          <span>${state.lang === "zh" ? "Why This Study Matters" : "Why This Study Matters"}</span>
          <h4>${state.lang === "zh" ? "研究背景与项目价值" : "Clinical Need and Study Innovation"}</h4>
        </div>
        <div class="case-two-col">
          <article class="case-info-card">
            <h5>${state.lang === "zh" ? "Clinical Need｜临床需求" : "Clinical Need"}</h5>
            <p>${project.sections.clinicalNeed}</p>
          </article>
          <article class="case-info-card">
            <h5>${state.lang === "zh" ? "Study Innovation｜研究创新" : "Study Innovation"}</h5>
            <p>${project.sections.innovation}</p>
          </article>
        </div>
      </section>

      <section class="case-section">
        <div class="case-section-head">
          <span>${state.lang === "zh" ? "My Role" : "My Role"}</span>
          <h4>${state.lang === "zh" ? "从研究设计到医学传播的全流程推进" : "Across the Project Lifecycle"}</h4>
        </div>
        <div class="role-grid">
          ${project.roles
            .map(
              (role) => `
                <article class="role-card">
                  <h5>${role.title}</h5>
                  <p>${role.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="case-section">
        <div class="case-section-head">
          <span>${state.lang === "zh" ? "Project Journey" : "Project Journey"}</span>
          <h4>${state.lang === "zh" ? "项目推进时间线" : "Project Timeline"}</h4>
        </div>
        <div class="case-timeline">
          ${project.timeline
            .map(
              (step) => `
                <article class="case-timeline-item">
                  <span>${step.phase}</span>
                  <h5>${step.title}</h5>
                  <p>${step.copy}</p>
                  ${step.imageKey ? renderProjectImage(step.imageKey, step.title, "timeline-image") : ""}
                  ${renderProjectButton(step)}
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="case-section">
        <div class="case-section-head">
          <span>${state.lang === "zh" ? "Evidence Gallery" : "Evidence Gallery"}</span>
          <h4>${state.lang === "zh" ? "项目成果展示" : "Project Outputs"}</h4>
        </div>
        <div class="evidence-grid">
          ${project.evidence
            .map(
              (item) => `
                <article class="evidence-card ${item.imageKey ? "" : "text-only"}">
                  ${item.imageKey ? renderProjectImage(item.imageKey, item.title, "evidence-image") : ""}
                  <div>
                    <span>${item.type}</span>
                    <h5>${item.title}</h5>
                    <p>${item.copy}</p>
                    ${renderProjectButton(item)}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="case-value">
        <span>${state.lang === "zh" ? "Project Value Summary" : "Project Value Summary"}</span>
        <h4>${state.lang === "zh" ? "项目能力总结" : "Capability Summary"}</h4>
        <p>${project.sections.valueSummary}</p>
      </section>
    </div>
  `;
}

function renderPapers() {
  const papers = SITE_CONTENT[state.lang].papers;
  return `
    <div class="paper-list">
      ${papers
        .map(
          (paper, index) => `
            <a class="paper-card" href="${paper.url}" target="_blank" rel="noopener noreferrer">
              <span class="paper-index">${String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>${paper.title}</h4>
                <p>${paper.journal} · ${paper.year} · IF ${paper.impact}</p>
              </div>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFocus(items) {
  const icons = {
    strategy: "◎",
    documents: "▤",
    network: "◇",
    review: "✓",
    engagement: "◉",
    evidence: "↗",
  };

  return `
    <div class="focus-grid">
      ${items
        .map(
          (item) => `
            <article class="focus-card">
              <span class="focus-icon" aria-hidden="true">${icons[item.icon] || "•"}</span>
              <div>
                <h4>${item.title}</h4>
                <p>${item.copy}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderEducation(items) {
  return `
    <div class="education-list">
      ${items
        .map(
          (item) => `
            <section class="education-card">
              <span>${item.period}</span>
              <h4>${item.school}</h4>
              <p>${item.degree}</p>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function bindSwipe() {
  const content = $("#moduleContent");

  content.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      state.touchStartX = touch.clientX;
      state.touchStartY = touch.clientY;
    },
    { passive: true }
  );

  content.addEventListener(
    "touchend",
    (event) => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - state.touchStartX;
      const deltaY = touch.clientY - state.touchStartY;
      if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
      activateRelativeTab(deltaX < 0 ? 1 : -1);
    },
    { passive: true }
  );

  content.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaX) < 45 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
    event.preventDefault();
    activateRelativeTab(event.deltaX > 0 ? 1 : -1);
  });
}

function render() {
  setTextContent();
  renderSkills();
  renderEvidencePanel();
  renderContacts();
  renderTopTabs();
  renderModuleContent();
}

$("#languageToggle").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  state.activeProjects.clear();
  render();
});

$("#exploreExperience").addEventListener("click", (event) => {
  event.preventDefault();
  activateTab("experience", true);
});

bindSwipe();
render();
