const sources = {
  voltagent: {
    label: "Awesome Agent Skills",
    avatar: "https://github.com/VoltAgent.png?size=96",
    url: "https://github.com/VoltAgent/awesome-agent-skills",
  },
  openai: {
    label: "OpenAI Skills",
    avatar: "https://github.com/openai.png?size=96",
    url: "https://github.com/openai/skills",
  },
  anthropic: {
    label: "Anthropic Skills",
    avatar: "https://github.com/anthropics.png?size=96",
    url: "https://github.com/anthropics/skills",
  },
  composio: {
    label: "Awesome Codex Skills",
    avatar: "https://github.com/ComposioHQ.png?size=96",
    url: "https://github.com/ComposioHQ/awesome-codex-skills",
  },
  angular: {
    label: "Angular",
    avatar: "https://github.com/angular.png?size=96",
    url: "https://github.com/angular/skills",
  },
  stripe: {
    label: "Stripe",
    avatar: "https://github.com/stripe.png?size=96",
    url: "https://officialskills.sh/stripe",
  },
  cloudflare: {
    label: "Cloudflare",
    avatar: "https://github.com/cloudflare.png?size=96",
    url: "https://officialskills.sh/cloudflare",
  },
  vercel: {
    label: "Vercel",
    avatar: "https://github.com/vercel.png?size=96",
    url: "https://officialskills.sh/vercel",
  },
  sentry: {
    label: "Sentry",
    avatar: "https://github.com/getsentry.png?size=96",
    url: "https://officialskills.sh/sentry",
  },
  trailofbits: {
    label: "Trail of Bits",
    avatar: "https://github.com/trailofbits.png?size=96",
    url: "https://officialskills.sh/trailofbits",
  },
};

const remoteCatalogs = [
  {
    source: "voltagent",
    url: "https://raw.githubusercontent.com/VoltAgent/awesome-agent-skills/main/README.md",
    platforms: ["Claude", "Codex", "Cursor", "Gemini CLI"],
    official: true,
  },
  {
    source: "composio",
    url: "https://raw.githubusercontent.com/ComposioHQ/awesome-codex-skills/master/README.md",
    platforms: ["Codex"],
    official: false,
  },
];

const seedSkills = [
  {
    name: "openai/openai-docs",
    source: "openai",
    description:
      "围绕 OpenAI 产品和 API 的官方文档查询、模型选择、升级与提示迁移工作流。",
    categories: ["文档", "开发", "模型/API", "研究"],
    platforms: ["Codex"],
    url: "https://github.com/openai/skills/tree/main/skills/.curated/openai-docs",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo openai/skills --path skills/.curated/openai-docs --name openai-docs",
    official: true,
    maintained: "2026-05-29",
    quality: 99,
  },
  {
    name: "openai/playwright",
    source: "openai",
    description:
      "浏览器自动化、前端回归、交互验证和截图检查，适合网站与 Web app 验收。",
    categories: ["开发", "测试", "浏览器", "自动化"],
    platforms: ["Codex"],
    url: "https://github.com/openai/skills/tree/main/skills/.curated/playwright",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo openai/skills --path skills/.curated/playwright --name playwright",
    official: true,
    maintained: "2026-05-29",
    quality: 96,
  },
  {
    name: "openai/security-threat-model",
    source: "openai",
    description:
      "为产品、代码变更和系统设计创建威胁模型，覆盖资产、攻击面、风险与缓解措施。",
    categories: ["安全", "架构", "开发", "审查"],
    platforms: ["Codex"],
    url: "https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo openai/skills --path skills/.curated/security-threat-model --name security-threat-model",
    official: true,
    maintained: "2026-05-29",
    quality: 95,
  },
  {
    name: "openai/gh-fix-ci",
    source: "openai",
    description:
      "检查 GitHub Actions 失败、定位日志关键段落，并提出或执行 CI 修复方案。",
    categories: ["开发", "CI/CD", "GitHub", "调试"],
    platforms: ["Codex"],
    url: "https://github.com/openai/skills/tree/main/skills/.curated/gh-fix-ci",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo openai/skills --path skills/.curated/gh-fix-ci --name gh-fix-ci",
    official: true,
    maintained: "2026-05-29",
    quality: 94,
  },
  {
    name: "openai/figma-implement-design",
    source: "openai",
    description:
      "把 Figma 设计落到代码实现，适合设计系统、组件还原和前端交付检查。",
    categories: ["设计", "前端", "开发", "Figma"],
    platforms: ["Codex"],
    url: "https://github.com/openai/skills/tree/main/skills/.curated/figma-implement-design",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo openai/skills --path skills/.curated/figma-implement-design --name figma-implement-design",
    official: true,
    maintained: "2026-05-29",
    quality: 93,
  },
  {
    name: "anthropics/docx",
    source: "anthropic",
    description:
      "创建、编辑和分析 Word 文档，适合报告、合同、论文草稿和格式检查。",
    categories: ["文档", "办公", "写作", "自动化"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/anthropics/skills/tree/main/skills/docx",
    install: "",
    official: true,
    maintained: "2026-06-09",
    quality: 97,
  },
  {
    name: "anthropics/xlsx",
    source: "anthropic",
    description:
      "处理 Excel 工作簿、表格公式、数据分析和电子表格编辑任务。",
    categories: ["数据", "办公", "分析", "自动化"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/anthropics/skills/tree/main/skills/xlsx",
    install: "",
    official: true,
    maintained: "2026-06-09",
    quality: 96,
  },
  {
    name: "anthropics/frontend-design",
    source: "anthropic",
    description:
      "面向前端界面、视觉质量和 UI/UX 细节的设计执行指南。",
    categories: ["设计", "前端", "开发", "审查"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
    install: "",
    official: true,
    maintained: "2026-06-09",
    quality: 94,
  },
  {
    name: "anthropics/mcp-builder",
    source: "anthropic",
    description:
      "创建 MCP server，把外部 API、工具和服务接入智能体工作流。",
    categories: ["开发", "MCP", "集成", "自动化"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/anthropics/skills/tree/main/skills/mcp-builder",
    install: "",
    official: true,
    maintained: "2026-06-09",
    quality: 93,
  },
  {
    name: "anthropics/webapp-testing",
    source: "anthropic",
    description:
      "使用浏览器测试本地 Web 应用，验证交互、布局、截图和基本可用性。",
    categories: ["开发", "测试", "浏览器", "前端"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/anthropics/skills/tree/main/skills/webapp-testing",
    install: "",
    official: true,
    maintained: "2026-06-09",
    quality: 92,
  },
  {
    name: "voltagent/create-voltagent",
    source: "voltagent",
    description:
      "搭建 VoltAgent TypeScript 智能体项目，覆盖 CLI 初始化和手动配置步骤。",
    categories: ["开发", "智能体框架", "TypeScript", "自动化"],
    platforms: ["Claude", "Codex", "Cursor", "Gemini CLI"],
    url: "https://officialskills.sh/voltagent/skills/create-voltagent",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 94,
  },
  {
    name: "voltagent/voltagent-best-practices",
    source: "voltagent",
    description:
      "VoltAgent 架构、工作流、memory、server 和多智能体协调的最佳实践。",
    categories: ["开发", "架构", "智能体框架", "TypeScript"],
    platforms: ["Claude", "Codex", "Cursor", "Gemini CLI"],
    url: "https://officialskills.sh/voltagent/skills/voltagent-best-practices",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 93,
  },
  {
    name: "angular/angular-developer",
    source: "angular",
    description:
      "生成 Angular 代码并提供组件、服务、响应式状态和架构指导。",
    categories: ["开发", "前端", "框架", "TypeScript"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://github.com/angular/skills",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 92,
  },
  {
    name: "stripe/stripe-best-practices",
    source: "stripe",
    description:
      "构建 Stripe 集成的支付、安全、webhook、测试和上线最佳实践。",
    categories: ["开发", "支付", "集成", "安全"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/stripe/skills/stripe-best-practices",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 92,
  },
  {
    name: "cloudflare/cloudflare-workers",
    source: "cloudflare",
    description:
      "面向 Workers、边缘部署、KV、D1、R2 和生产环境约束的 Cloudflare 开发指南。",
    categories: ["开发", "部署", "云服务", "边缘计算"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/cloudflare",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 91,
  },
  {
    name: "vercel/vercel-platform",
    source: "vercel",
    description:
      "围绕 Vercel 平台、前端部署、预览环境和 Next.js 发布的工程技能。",
    categories: ["开发", "部署", "前端", "云服务"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/vercel",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 91,
  },
  {
    name: "trailofbits/security",
    source: "trailofbits",
    description:
      "Trail of Bits 安全技能集合，适合安全审计、漏洞分析、威胁建模和代码评审。",
    categories: ["安全", "审查", "开发", "调试"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/trailofbits",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 90,
  },
  {
    name: "sentry/sentry-triage",
    source: "sentry",
    description:
      "把 Sentry issue、堆栈帧和本地源码关联起来，帮助定位线上异常根因。",
    categories: ["调试", "观测", "开发", "后端"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/sentry",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 90,
  },
  {
    name: "composio/connect",
    source: "composio",
    description:
      "通过 Composio CLI 连接 Slack、GitHub、Notion 等 1000+ 应用，让 Codex 执行动作。",
    categories: ["集成", "自动化", "协作", "生产力"],
    platforms: ["Codex"],
    url: "https://github.com/ComposioHQ/awesome-codex-skills/tree/master/connect",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo ComposioHQ/awesome-codex-skills --path connect --name connect",
    official: true,
    maintained: "2026-05-15",
    quality: 91,
  },
  {
    name: "composio/meeting-notes-and-actions",
    source: "composio",
    description:
      "把会议记录整理成摘要、决策和带负责人的行动项，适合团队协作归档。",
    categories: ["协作", "写作", "生产力", "文档"],
    platforms: ["Codex"],
    url: "https://github.com/ComposioHQ/awesome-codex-skills/tree/master/meeting-notes-and-actions",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo ComposioHQ/awesome-codex-skills --path meeting-notes-and-actions --name meeting-notes-and-actions",
    official: true,
    maintained: "2026-05-15",
    quality: 88,
  },
  {
    name: "composio/codebase-recon",
    source: "composio",
    description:
      "通过 git 历史识别热点文件、缺陷高发区、维护风险和优先阅读路径。",
    categories: ["开发", "代码理解", "分析", "审查"],
    platforms: ["Codex"],
    url: "https://github.com/yujiachen-y/codebase-recon-skill",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo yujiachen-y/codebase-recon-skill --path skills/codebase-recon --name codebase-recon",
    official: false,
    maintained: "2026-05-15",
    quality: 87,
  },
  {
    name: "composio/pr-review-ci-fix",
    source: "composio",
    description:
      "PR 评审与 CI 自动修复循环，适合 GitHub/GitLab 代码审查后的闭环处理。",
    categories: ["开发", "CI/CD", "GitHub", "审查"],
    platforms: ["Codex"],
    url: "https://github.com/ComposioHQ/awesome-codex-skills/tree/master/pr-review-ci-fix",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo ComposioHQ/awesome-codex-skills --path pr-review-ci-fix --name pr-review-ci-fix",
    official: true,
    maintained: "2026-05-15",
    quality: 89,
  },
  {
    name: "composio/paperjsx",
    source: "composio",
    description:
      "从结构化 JSON 生成 PPTX、DOCX、XLSX、PDF 报告和图表，本地运行。",
    categories: ["文档", "办公", "自动化", "数据"],
    platforms: ["Codex"],
    url: "https://github.com/ComposioHQ/awesome-codex-skills/tree/master/paperjsx",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo ComposioHQ/awesome-codex-skills --path paperjsx --name paperjsx",
    official: true,
    maintained: "2026-05-15",
    quality: 86,
  },
];

let skills = [...seedSkills];

const state = {
  query: "",
  categories: new Set(),
  platforms: new Set(),
  officialOnly: false,
  installableOnly: false,
  sort: "quality",
};

const categoryOrder = [
  "开发",
  "前端",
  "测试",
  "安全",
  "文档",
  "办公",
  "数据",
  "分析",
  "部署",
  "集成",
  "协作",
  "自动化",
  "设计",
  "调试",
  "审查",
  "智能体框架",
  "模型/API",
];

const platformOrder = ["Codex", "Claude", "Cursor", "Gemini CLI"];

const elements = {
  search: document.querySelector("#search-input"),
  categoryFilters: document.querySelector("#category-filters"),
  platformFilters: document.querySelector("#platform-filters"),
  officialOnly: document.querySelector("#official-only"),
  installableOnly: document.querySelector("#installable-only"),
  sort: document.querySelector("#sort-select"),
  grid: document.querySelector("#skill-grid"),
  empty: document.querySelector("#empty-state"),
  activeFilters: document.querySelector("#active-filters"),
  skillCount: document.querySelector("#skill-count"),
  sourceCount: document.querySelector("#source-count"),
  categoryCount: document.querySelector("#category-count"),
  officialCount: document.querySelector("#official-count"),
  resultCopy: document.querySelector("#result-copy"),
  clearCategories: document.querySelector("#clear-categories"),
  clearPlatforms: document.querySelector("#clear-platforms"),
  resetAll: document.querySelector("#reset-all"),
  syncStatus: document.querySelector("#sync-status"),
  syncMeta: document.querySelector("#sync-meta"),
  syncNow: document.querySelector("#sync-now"),
};

const categoryRules = [
  ["安全", /security|threat|vulnerab|owasp|audit|auth|secret|权限|安全/i],
  ["测试", /test|testing|playwright|ci|qa|acceptance|验证|测试/i],
  ["前端", /frontend|react|angular|vue|ui|ux|next\.js|web app|design system|前端|界面/i],
  ["设计", /design|figma|theme|canvas|art|brand|gif|visual|设计/i],
  ["文档", /docx|document|pdf|pptx|readme|docs|documentation|report|文档|报告/i],
  ["办公", /xlsx|spreadsheet|excel|presentation|invoice|notion|meeting|office|表格|会议/i],
  ["数据", /data|database|postgres|clickhouse|duckdb|analytics|logs|sql|数据/i],
  ["部署", /deploy|vercel|netlify|cloudflare|render|worker|release|部署/i],
  ["集成", /mcp|api|stripe|slack|github|linear|jira|notion|composio|integration|集成/i],
  ["协作", /collaboration|meeting|issue|ticket|support|linear|jira|team|协作/i],
  ["自动化", /automate|workflow|agent|orchestrator|actions|cli|自动化/i],
  ["调试", /debug|triage|sentry|logs|error|incident|fix|调试/i],
  ["审查", /review|audit|quality|migration|lint|评审|审查/i],
  ["智能体框架", /agent|voltagent|multi-agent|orchestrator|智能体/i],
  ["模型/API", /gemini|openai|claude|vertex|model|api|llm|模型/i],
  ["开发", /code|developer|framework|sdk|typescript|python|terraform|build|开发/i],
];

const sourceRules = [
  ["openai", /openai/i],
  ["anthropic", /anthropic|claude/i],
  ["angular", /angular/i],
  ["stripe", /stripe/i],
  ["cloudflare", /cloudflare/i],
  ["vercel", /vercel/i],
  ["sentry", /sentry/i],
  ["trailofbits", /trail of bits|trailofbits/i],
  ["voltagent", /voltagent/i],
  ["composio", /composio/i],
];

function uniqueSorted(values, preferredOrder = []) {
  const set = new Set(values);
  return [...set].sort((a, b) => {
    const aIndex = preferredOrder.indexOf(a);
    const bIndex = preferredOrder.indexOf(b);
    if (aIndex >= 0 || bIndex >= 0) {
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    }
    return a.localeCompare(b, "zh-CN");
  });
}

function allCategories() {
  return uniqueSorted(skills.flatMap((skill) => skill.categories), categoryOrder);
}

function allPlatforms() {
  return uniqueSorted(skills.flatMap((skill) => skill.platforms), platformOrder);
}

function buildChips(container, values, selectedSet, onClick) {
  container.innerHTML = "";
  values.forEach((value) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${selectedSet.has(value) ? " is-active" : ""}`;
    button.textContent = value;
    button.setAttribute("aria-pressed", String(selectedSet.has(value)));
    button.addEventListener("click", () => onClick(value));
    container.appendChild(button);
  });
}

function matchesQuery(skill) {
  if (!state.query) return true;
  const source = sources[skill.source]?.label ?? "";
  const text = [
    skill.name,
    skill.description,
    source,
    ...skill.categories,
    ...skill.platforms,
  ]
    .join(" ")
    .toLowerCase();
  return text.includes(state.query.toLowerCase().trim());
}

function matchesIntersection(skill, selectedSet, key) {
  if (selectedSet.size === 0) return true;
  return [...selectedSet].every((value) => skill[key].includes(value));
}

function filteredSkills() {
  const filtered = skills.filter((skill) => {
    if (!matchesQuery(skill)) return false;
    if (!matchesIntersection(skill, state.categories, "categories")) return false;
    if (!matchesIntersection(skill, state.platforms, "platforms")) return false;
    if (state.officialOnly && !skill.official) return false;
    if (state.installableOnly && !skill.install) return false;
    return true;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name);
    if (state.sort === "source") {
      return (sources[a.source]?.label ?? "").localeCompare(sources[b.source]?.label ?? "");
    }
    if (state.sort === "recent") return new Date(b.maintained) - new Date(a.maintained);
    return b.quality - a.quality || a.name.localeCompare(b.name);
  });
}

function renderActiveFilters() {
  elements.activeFilters.innerHTML = "";
  const filters = [
    ...[...state.categories].map((value) => ({ value, type: "分类" })),
    ...[...state.platforms].map((value) => ({ value, type: "平台" })),
  ];

  if (state.query) filters.push({ value: state.query, type: "搜索" });
  if (state.officialOnly) filters.push({ value: "官方/团队维护", type: "属性" });
  if (state.installableOnly) filters.push({ value: "有安装路径", type: "属性" });

  if (filters.length === 0) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = "全部技能";
    elements.activeFilters.appendChild(tag);
    return;
  }

  filters.forEach((filter) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = `${filter.type}: ${filter.value}`;
    elements.activeFilters.appendChild(tag);
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderCards(items) {
  elements.grid.innerHTML = "";
  items.forEach((skill) => {
    const source = sources[skill.source];
    const safeName = escapeHtml(skill.name);
    const safeDescription = escapeHtml(skill.description);
    const safeSourceLabel = escapeHtml(source.label);
    const safeUrl = escapeHtml(skill.url);
    const safeInstall = escapeHtml(skill.install);
    const card = document.createElement("article");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="card-top">
        <span class="source-pill">
          <img src="${escapeHtml(source.avatar)}" alt="${safeSourceLabel}" />
          ${safeSourceLabel}
        </span>
        <span class="score">${skill.quality}</span>
      </div>
      <div>
        <h3>${safeName}</h3>
        <p>${safeDescription}</p>
      </div>
      <div class="tag-row">
        ${skill.categories.map((category) => `<span class="tag">${escapeHtml(category)}</span>`).join("")}
        ${skill.official ? '<span class="tag kind-official">官方/团队</span>' : ""}
        ${skill.install ? '<span class="tag kind-install">可安装</span>' : ""}
      </div>
      <div class="card-actions">
        <a class="open-link" href="${safeUrl}" target="_blank" rel="noreferrer">打开来源</a>
        ${
          skill.install
            ? `<a class="install-button" href="${safeUrl}" title="${safeInstall}" target="_blank" rel="noreferrer">安装命令</a>`
            : `<a class="install-button" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">来源集合</a>`
        }
      </div>
    `;
    elements.grid.appendChild(card);
  });
}

function inferCategories(name, description, section = "") {
  const text = `${name} ${description} ${section}`;
  const categories = categoryRules
    .filter(([, pattern]) => pattern.test(text))
    .map(([category]) => category);

  if (categories.length === 0) categories.push("生产力");
  if (!categories.includes("开发") && /skill|agent|codex|claude|cursor/i.test(text)) {
    categories.push("开发");
  }
  return uniqueSorted(categories, categoryOrder).slice(0, 5);
}

function inferSource(name, url, fallback) {
  const text = `${name} ${url}`;
  const match = sourceRules.find(([, pattern]) => pattern.test(text));
  return match?.[0] ?? fallback;
}

function normalizeUrl(url, baseUrl) {
  if (url.startsWith("http")) return url;
  if (url.startsWith("#")) return baseUrl;
  if (baseUrl.includes("ComposioHQ/awesome-codex-skills")) {
    return `https://github.com/ComposioHQ/awesome-codex-skills/tree/master/${url.replace(/^\.\//, "")}`;
  }
  return url;
}

function parseMarkdownCatalog(markdown, catalog) {
  let section = "";
  const baseUrl =
    catalog.source === "composio"
      ? "https://github.com/ComposioHQ/awesome-codex-skills"
      : "https://github.com/VoltAgent/awesome-agent-skills";

  return markdown
    .split("\n")
    .map((line) => {
      const heading = line.match(/^###\s+(.+)/);
      if (heading) {
        section = heading[1].replace(/<[^>]+>/g, "").trim();
        return null;
      }

      const item =
        line.match(/^-\s+\*\*\[([^\]]+)\]\(([^)]+)\)\*\*\s+-\s+(.+)/) ||
        line.match(/^-\s+\[([^\]]+)\]\(([^)]+)\)\s+-\s+(.+)/);

      if (!item) return null;

      const [, rawName, rawUrl, rawDescription] = item;
      const name = rawName.replace(/\/$/, "").trim();
      const description = rawDescription.replace(/\s+Install:\s+`[^`]+`.*$/i, "").trim();
      const install = rawDescription.match(/Install:\s+`([^`]+)`/i)?.[1] ?? "";
      const url = normalizeUrl(rawUrl.trim(), baseUrl);
      const source = inferSource(name, url, catalog.source);

      if (/^what are|^skills$|^using skills|^creating skills|^contributing|^join/i.test(name)) {
        return null;
      }

      return {
        name,
        source,
        description,
        categories: inferCategories(name, description, section),
        platforms: catalog.platforms,
        url,
        install,
        official: catalog.official || source !== "composio",
        maintained: catalog.source === "voltagent" ? "2026-06-12" : "2026-05-15",
        quality: source === catalog.source ? 72 : 78,
        remote: true,
      };
    })
    .filter(Boolean);
}

function mergeSkills(remoteSkills) {
  const byName = new Map(skills.map((skill) => [skill.name.toLowerCase(), skill]));
  remoteSkills.forEach((skill) => {
    const key = skill.name.toLowerCase();
    if (byName.has(key)) return;
    byName.set(key, skill);
  });
  skills = [...byName.values()];
}

async function syncCatalogs() {
  elements.syncNow.disabled = true;
  elements.syncStatus.textContent = "正在同步公开技能目录";
  elements.syncMeta.textContent = "正在读取 GitHub raw README 并合并可解析条目。";

  try {
    const settled = await Promise.allSettled(
      remoteCatalogs.map(async (catalog) => {
        const response = await fetch(catalog.url);
        if (!response.ok) throw new Error(`${catalog.source}: ${response.status}`);
        const markdown = await response.text();
        return parseMarkdownCatalog(markdown, catalog);
      }),
    );

    const remoteSkills = settled
      .filter((result) => result.status === "fulfilled")
      .flatMap((result) => result.value);
    mergeSkills(remoteSkills);

    const failed = settled.filter((result) => result.status === "rejected").length;
    elements.syncStatus.textContent = failed ? "部分目录同步完成" : "公开技能目录已同步";
    elements.syncMeta.textContent = `已合并 ${remoteSkills.length} 条远程技能，去重后共 ${skills.length} 条。${
      failed ? `有 ${failed} 个来源暂时不可用。` : ""
    }`;
    render();
  } catch (error) {
    elements.syncStatus.textContent = "远程同步失败";
    elements.syncMeta.textContent = "当前仍可使用内置精选目录，稍后可重新同步。";
  } finally {
    elements.syncNow.disabled = false;
  }
}

function updateStats(items) {
  const categories = uniqueSorted(items.flatMap((skill) => skill.categories));
  const sourceCount = new Set(items.map((skill) => skill.source)).size;
  const officialCount = items.filter((skill) => skill.official).length;

  elements.skillCount.textContent = items.length;
  elements.sourceCount.textContent = sourceCount;
  elements.categoryCount.textContent = categories.length;
  elements.officialCount.textContent = officialCount;

  const hasIntersection = state.categories.size + state.platforms.size > 1;
  elements.resultCopy.textContent = hasIntersection
    ? "当前结果必须同时命中已选分类和平台。"
    : "选择多个分类时，将展示同时命中的技能。";
}

function render() {
  buildChips(elements.categoryFilters, allCategories(), state.categories, (value) => {
    state.categories.has(value) ? state.categories.delete(value) : state.categories.add(value);
    render();
  });

  buildChips(elements.platformFilters, allPlatforms(), state.platforms, (value) => {
    state.platforms.has(value) ? state.platforms.delete(value) : state.platforms.add(value);
    render();
  });

  const items = filteredSkills();
  renderActiveFilters();
  renderCards(items);
  updateStats(items);
  elements.empty.hidden = items.length !== 0;
}

function resetAll() {
  state.query = "";
  state.categories.clear();
  state.platforms.clear();
  state.officialOnly = false;
  state.installableOnly = false;
  state.sort = "quality";
  elements.search.value = "";
  elements.officialOnly.checked = false;
  elements.installableOnly.checked = false;
  elements.sort.value = "quality";
  render();
}

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

elements.officialOnly.addEventListener("change", (event) => {
  state.officialOnly = event.target.checked;
  render();
});

elements.installableOnly.addEventListener("change", (event) => {
  state.installableOnly = event.target.checked;
  render();
});

elements.sort.addEventListener("change", (event) => {
  state.sort = event.target.value;
  render();
});

elements.clearCategories.addEventListener("click", () => {
  state.categories.clear();
  render();
});

elements.clearPlatforms.addEventListener("click", () => {
  state.platforms.clear();
  render();
});

elements.resetAll.addEventListener("click", resetAll);
elements.syncNow.addEventListener("click", syncCatalogs);

render();
syncCatalogs();
