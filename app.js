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
  supabase: {
    label: "Supabase",
    avatar: "https://github.com/supabase.png?size=96",
    url: "https://officialskills.sh/supabase",
  },
  googleGemini: {
    label: "Google Gemini",
    avatar: "https://github.com/google.png?size=96",
    url: "https://officialskills.sh/google-gemini",
  },
  callstack: {
    label: "CallStack",
    avatar: "https://github.com/callstackincubator.png?size=96",
    url: "https://officialskills.sh/callstackincubator",
  },
  betterAuth: {
    label: "Better Auth",
    avatar: "https://github.com/better-auth.png?size=96",
    url: "https://officialskills.sh/better-auth",
  },
  tinybird: {
    label: "Tinybird",
    avatar: "https://github.com/tinybirdco.png?size=96",
    url: "https://officialskills.sh/tinybirdco",
  },
  hashicorp: {
    label: "HashiCorp",
    avatar: "https://github.com/hashicorp.png?size=96",
    url: "https://officialskills.sh/hashicorp",
  },
  sanity: {
    label: "Sanity",
    avatar: "https://github.com/sanity-io.png?size=96",
    url: "https://officialskills.sh/sanity-io",
  },
  firecrawl: {
    label: "Firecrawl",
    avatar: "https://github.com/firecrawl.png?size=96",
    url: "https://officialskills.sh/firecrawl",
  },
  neon: {
    label: "Neon",
    avatar: "https://github.com/neondatabase.png?size=96",
    url: "https://officialskills.sh/neondatabase",
  },
  clickhouse: {
    label: "ClickHouse",
    avatar: "https://github.com/clickhouse.png?size=96",
    url: "https://officialskills.sh/clickhouse",
  },
  remotion: {
    label: "Remotion",
    avatar: "https://github.com/remotion-dev.png?size=96",
    url: "https://officialskills.sh/remotion-dev",
  },
  replicate: {
    label: "Replicate",
    avatar: "https://github.com/replicate.png?size=96",
    url: "https://officialskills.sh/replicate",
  },
  typefully: {
    label: "Typefully",
    avatar: "https://github.com/typefully.png?size=96",
    url: "https://officialskills.sh/typefully",
  },
  netlify: {
    label: "Netlify",
    avatar: "https://github.com/netlify.png?size=96",
    url: "https://officialskills.sh/netlify",
  },
  huggingface: {
    label: "Hugging Face",
    avatar: "https://github.com/huggingface.png?size=96",
    url: "https://officialskills.sh/huggingface",
  },
  figma: {
    label: "Figma",
    avatar: "https://github.com/figma.png?size=96",
    url: "https://officialskills.sh/figma",
  },
  microsoft: {
    label: "Microsoft",
    avatar: "https://github.com/microsoft.png?size=96",
    url: "https://officialskills.sh/microsoft",
  },
  firebase: {
    label: "Firebase",
    avatar: "https://github.com/firebase.png?size=96",
    url: "https://officialskills.sh/firebase",
  },
  flutter: {
    label: "Flutter",
    avatar: "https://github.com/flutter.png?size=96",
    url: "https://officialskills.sh/flutter",
  },
  mongodb: {
    label: "MongoDB",
    avatar: "https://github.com/mongodb.png?size=96",
    url: "https://officialskills.sh/mongodb",
  },
  redis: {
    label: "Redis",
    avatar: "https://github.com/redis.png?size=96",
    url: "https://officialskills.sh/redis",
  },
  nvidia: {
    label: "NVIDIA",
    avatar: "https://github.com/nvidia.png?size=96",
    url: "https://officialskills.sh/nvidia",
  },
  community: {
    label: "Community",
    avatar: "https://github.com/github.png?size=96",
    url: "https://github.com/topics/ai-agent-skills",
  },
  novelWriting: {
    label: "Novel Writing",
    avatar: "https://github.com/wgwtest.png?size=96",
    url: "https://github.com/wgwtest/novel-writing",
  },
  storySkills: {
    label: "Story Skills",
    avatar: "https://github.com/danjdewhurst.png?size=96",
    url: "https://github.com/danjdewhurst/story-skills",
  },
  creativeWriting: {
    label: "Creative Writing",
    avatar: "https://github.com/haowjy.png?size=96",
    url: "https://github.com/haowjy/creative-writing-skills",
  },
  gateflow: {
    label: "GateFlow RTL",
    avatar: "https://github.com/codejunkie99.png?size=96",
    url: "https://github.com/codejunkie99/Gateflow-Plugin",
  },
  mindrallyHardware: {
    label: "FPGA/SystemVerilog",
    avatar: "https://github.com/Mindrally.png?size=96",
    url: "https://github.com/Mindrally/skills",
  },
  xilinxSuite: {
    label: "Xilinx Suite",
    avatar: "https://github.com/QingquanYao.png?size=96",
    url: "https://github.com/QingquanYao/xilinx-skill",
  },
  chipforge: {
    label: "ChipForge",
    avatar: "https://github.com/Fzhiyu1.png?size=96",
    url: "https://github.com/Fzhiyu1/chipforge-plugin",
  },
};

const remoteCatalogs = [
  {
    type: "markdown",
    source: "voltagent",
    url: "https://raw.githubusercontent.com/VoltAgent/awesome-agent-skills/main/README.md",
    homeUrl: "https://github.com/VoltAgent/awesome-agent-skills",
    platforms: ["Claude", "Codex", "Cursor", "Gemini CLI"],
    official: true,
    maintained: "2026-06-12",
  },
  {
    type: "markdown",
    source: "composio",
    url: "https://raw.githubusercontent.com/ComposioHQ/awesome-codex-skills/master/README.md",
    homeUrl: "https://github.com/ComposioHQ/awesome-codex-skills",
    platforms: ["Codex"],
    official: false,
    maintained: "2026-05-15",
  },
  {
    type: "github-tree",
    source: "openai",
    repo: "openai/skills",
    branch: "main",
    root: "skills/",
    namePrefix: "openai",
    platforms: ["Codex"],
    official: true,
    maintained: "2026-05-29",
    installTemplate:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo {repo} --path {path} --name {name}",
  },
  {
    type: "github-tree",
    source: "anthropic",
    repo: "anthropics/skills",
    branch: "main",
    root: "skills/",
    namePrefix: "anthropics",
    platforms: ["Claude", "Codex"],
    official: true,
    maintained: "2026-06-09",
  },
  {
    type: "github-tree",
    source: "angular",
    repo: "angular/skills",
    branch: "main",
    root: "",
    namePrefix: "angular",
    platforms: ["Claude", "Codex", "Cursor"],
    official: true,
    maintained: "2026-06-12",
  },
  {
    type: "github-tree",
    source: "novelWriting",
    repo: "wgwtest/novel-writing",
    branch: "main",
    root: "novel-writing/",
    namePrefix: "novel",
    platforms: ["Codex", "Claude"],
    official: false,
    maintained: "2026-06-15",
    quality: 92,
  },
  {
    type: "github-tree",
    source: "storySkills",
    repo: "danjdewhurst/story-skills",
    branch: "main",
    root: "skills/",
    namePrefix: "story",
    platforms: ["Codex", "Claude"],
    official: false,
    maintained: "2026-06-15",
    quality: 88,
  },
  {
    type: "github-tree",
    source: "creativeWriting",
    repo: "haowjy/creative-writing-skills",
    branch: "main",
    root: "skills/",
    namePrefix: "creative-writing",
    platforms: ["Claude", "Codex"],
    official: false,
    maintained: "2026-06-15",
    quality: 88,
  },
  {
    type: "github-tree",
    source: "gateflow",
    repo: "codejunkie99/Gateflow-Plugin",
    branch: "main",
    root: "plugins/gateflow/skills/",
    namePrefix: "gateflow",
    platforms: ["Claude", "Codex"],
    official: false,
    maintained: "2026-06-15",
    quality: 92,
  },
  {
    type: "github-tree",
    source: "mindrallyHardware",
    repo: "Mindrally/skills",
    branch: "main",
    root: "",
    includePaths: ["fpga/SKILL.md", "systemverilog/SKILL.md"],
    namePrefix: "hardware",
    platforms: ["Claude", "Codex"],
    official: false,
    maintained: "2026-06-15",
    quality: 86,
  },
  {
    type: "github-tree",
    source: "xilinxSuite",
    repo: "QingquanYao/xilinx-skill",
    branch: "main",
    root: "plugins/xilinx-suite/skills/",
    namePrefix: "xilinx",
    platforms: ["Claude", "Codex"],
    official: false,
    maintained: "2026-06-15",
    quality: 86,
  },
  {
    type: "github-tree",
    source: "chipforge",
    repo: "Fzhiyu1/chipforge-plugin",
    branch: "main",
    root: "skills/",
    namePrefix: "chipforge",
    platforms: ["Claude", "Codex"],
    official: false,
    maintained: "2026-06-15",
    quality: 85,
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
  {
    name: "supabase/postgres-best-practices",
    source: "supabase",
    description:
      "Supabase 场景下的 PostgreSQL schema、RLS、索引、迁移和查询实践。",
    categories: ["数据", "开发", "安全", "后端"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/supabase/skills/postgres-best-practices",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 91,
  },
  {
    name: "google-gemini/gemini-api-dev",
    source: "googleGemini",
    description:
      "使用 Gemini API 构建应用的模型选择、流式输出、工具调用和多模态开发实践。",
    categories: ["模型/API", "开发", "集成", "智能体框架"],
    platforms: ["Claude", "Codex", "Cursor", "Gemini CLI"],
    url: "https://officialskills.sh/google-gemini/skills/gemini-api-dev",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 90,
  },
  {
    name: "hashicorp/terraform-style-guide",
    source: "hashicorp",
    description:
      "按照 HashiCorp 官方风格生成 Terraform HCL，并处理模块、provider 和测试结构。",
    categories: ["开发", "部署", "云服务", "架构"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/hashicorp/skills/terraform-style-guide",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 89,
  },
  {
    name: "clickhouse/clickhouse-best-practices",
    source: "clickhouse",
    description:
      "ClickHouse 表设计、查询优化、数据导入、云部署和分析架构最佳实践。",
    categories: ["数据", "分析", "开发", "云服务"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/clickhouse/skills/clickhouse-best-practices",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 88,
  },
  {
    name: "firecrawl/firecrawl-build",
    source: "firecrawl",
    description:
      "把 Firecrawl 的搜索、抓取、抽取和浏览器交互能力接入产品代码。",
    categories: ["集成", "浏览器", "开发", "自动化"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/firecrawl/skills/firecrawl-build",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 88,
  },
  {
    name: "huggingface/hub-and-transformers",
    source: "huggingface",
    description:
      "围绕 Hugging Face Hub、Transformers、模型下载、推理和机器学习工作流的技能入口。",
    categories: ["模型/API", "数据", "开发", "研究"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/huggingface",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 87,
  },
  {
    name: "figma/figma-design-to-code",
    source: "figma",
    description:
      "围绕 Figma 文件、组件、设计系统和设计到代码交付的官方技能集合入口。",
    categories: ["设计", "前端", "Figma", "开发"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/figma",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 87,
  },
  {
    name: "netlify/netlify-deploy",
    source: "netlify",
    description:
      "面向 Netlify 的静态站点、函数、预览环境和部署配置工作流。",
    categories: ["部署", "前端", "云服务", "开发"],
    platforms: ["Claude", "Codex", "Cursor"],
    url: "https://officialskills.sh/netlify",
    install: "",
    official: true,
    maintained: "2026-06-12",
    quality: 86,
  },
  {
    name: "novel/novel-writing",
    source: "novelWriting",
    description:
      "长篇小说规划、章节续写、场景结构、角色引入、文风保持和现实约束审稿。",
    categories: ["小说", "写作", "剧情", "角色", "修订"],
    platforms: ["Codex", "Claude"],
    url: "https://github.com/wgwtest/novel-writing/tree/main/novel-writing",
    install:
      "python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo wgwtest/novel-writing --path novel-writing --name novel-writing",
    official: false,
    maintained: "2026-06-15",
    quality: 98,
  },
  {
    name: "story/chapter-writing",
    source: "storySkills",
    description:
      "按章节目标、场景节奏、冲突推进和情绪转折写作或续写小说章节。",
    categories: ["小说", "写作", "剧情", "章节", "场景"],
    platforms: ["Codex", "Claude"],
    url: "https://github.com/danjdewhurst/story-skills/tree/main/skills/chapter-writing",
    install: "",
    official: false,
    maintained: "2026-06-15",
    quality: 94,
  },
  {
    name: "story/character-management",
    source: "storySkills",
    description:
      "维护角色档案、关系网络、行为一致性和长篇小说中的人物连续性。",
    categories: ["小说", "角色", "世界观", "写作", "连续性"],
    platforms: ["Codex", "Claude"],
    url: "https://github.com/danjdewhurst/story-skills/tree/main/skills/character-management",
    install: "",
    official: false,
    maintained: "2026-06-15",
    quality: 92,
  },
  {
    name: "creative-writing/prose-critique",
    source: "creativeWriting",
    description:
      "从文风、结构、角色、连续性和常见 AI 文风问题角度批改小说段落。",
    categories: ["小说", "修订", "写作", "风格", "审查"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/haowjy/creative-writing-skills/tree/main/skills/prose-critique",
    install: "",
    official: false,
    maintained: "2026-06-15",
    quality: 92,
  },
  {
    name: "gateflow/gf-plan",
    source: "gateflow",
    description:
      "硬件设计规划器：在写 RTL 前明确模块层级、接口、时序、FSM、pipeline 和验证策略。",
    categories: ["RTL", "FPGA", "Verilog", "架构", "验证"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/codejunkie99/Gateflow-Plugin/tree/main/plugins/gateflow/skills/gf-plan",
    install: "",
    official: false,
    maintained: "2026-06-15",
    quality: 98,
  },
  {
    name: "gateflow/gf-sim",
    source: "gateflow",
    description:
      "RTL 仿真工作流，围绕 testbench、波形、失败定位和仿真迭代处理硬件问题。",
    categories: ["RTL", "验证", "仿真", "调试", "Verilog"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/codejunkie99/Gateflow-Plugin/tree/main/plugins/gateflow/skills/gf-sim",
    install: "",
    official: false,
    maintained: "2026-06-15",
    quality: 95,
  },
  {
    name: "gateflow/gf-formal",
    source: "gateflow",
    description:
      "形式验证技能，覆盖 SVA 属性、SymbiYosys 模板、反例分析和硬件不变量。",
    categories: ["RTL", "形式验证", "验证", "安全", "Verilog"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/codejunkie99/Gateflow-Plugin/tree/main/plugins/gateflow/skills/gf-formal",
    install: "",
    official: false,
    maintained: "2026-06-15",
    quality: 94,
  },
  {
    name: "hardware/systemverilog",
    source: "mindrallyHardware",
    description:
      "SystemVerilog 编码、模块接口、testbench、综合友好写法和硬件设计检查。",
    categories: ["RTL", "SystemVerilog", "Verilog", "验证", "开发"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/Mindrally/skills/tree/main/systemverilog",
    install: "",
    official: false,
    maintained: "2026-06-15",
    quality: 90,
  },
  {
    name: "xilinx/xilinx-suite",
    source: "xilinxSuite",
    description:
      "Xilinx Vivado、Vitis、PetaLinux、XDC 约束、MPSoC 和 HLS 工具链工作流。",
    categories: ["FPGA", "Vivado", "综合", "部署", "RTL"],
    platforms: ["Claude", "Codex"],
    url: "https://github.com/QingquanYao/xilinx-skill/tree/main/plugins/xilinx-suite/skills/xilinx-suite",
    install: "",
    official: false,
    maintained: "2026-06-15",
    quality: 89,
  },
];

let skills = [...seedSkills];

const state = {
  query: "",
  categories: new Set(),
  platforms: new Set(),
  sources: new Set(),
  officialOnly: false,
  installableOnly: false,
  sort: "quality",
};

const categoryOrder = [
  "小说",
  "剧情",
  "角色",
  "世界观",
  "章节",
  "场景",
  "修订",
  "风格",
  "连续性",
  "RTL",
  "FPGA",
  "SystemVerilog",
  "Verilog",
  "验证",
  "仿真",
  "综合",
  "形式验证",
  "Vivado",
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

const sourceOrder = [
  "openai",
  "anthropic",
  "voltagent",
  "composio",
  "angular",
  "stripe",
  "supabase",
  "cloudflare",
  "vercel",
  "googleGemini",
  "sentry",
  "trailofbits",
  "novelWriting",
  "storySkills",
  "creativeWriting",
  "gateflow",
  "mindrallyHardware",
  "xilinxSuite",
  "chipforge",
  "huggingface",
  "figma",
  "netlify",
];

const elements = {
  search: document.querySelector("#search-input"),
  categoryFilters: document.querySelector("#category-filters"),
  platformFilters: document.querySelector("#platform-filters"),
  sourceFilters: document.querySelector("#source-filters"),
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
  clearSources: document.querySelector("#clear-sources"),
  resetAll: document.querySelector("#reset-all"),
  syncStatus: document.querySelector("#sync-status"),
  syncMeta: document.querySelector("#sync-meta"),
  syncNow: document.querySelector("#sync-now"),
  focusButtons: document.querySelectorAll("[data-focus]"),
};

const categoryRules = [
  ["小说", /novel|fiction|story|creative writing|prose|narrative|chapter|scene|character|worldbuilding|小说|故事|创作/i],
  ["剧情", /plot|arc|structure|beat|conflict|reveal|promise|question|剧情|情节|主线|伏笔/i],
  ["角色", /character|relationship|persona|dialogue|motivation|人物|角色|对话/i],
  ["世界观", /worldbuilding|setting|location|faction|lore|artifact|世界观|设定|地点|阵营/i],
  ["章节", /chapter|章节/i],
  ["场景", /scene|场景/i],
  ["修订", /revision|critique|rewrite|continuity|review|revise|修订|润色|改写|审稿/i],
  ["风格", /style|voice|prose|tone|文风|风格|语气/i],
  ["连续性", /continuity|timeline|canon|一致性|连续性|时间线/i],
  ["RTL", /rtl|hardware|gateflow|chipforge|register transfer|硬件/i],
  ["FPGA", /fpga|xilinx|vivado|vitis|petalinux|xdc|fusesoc|pnr|board/i],
  ["SystemVerilog", /systemverilog|system verilog|sv\b|sva/i],
  ["Verilog", /verilog|hdl|rtl/i],
  ["验证", /verification|testbench|cocotb|simulate|simulation|assertion|验证|测试平台/i],
  ["仿真", /simulation|simulate|waveform|iverilog|verilator|仿真|波形/i],
  ["综合", /synthesis|synth|pnr|place|route|timing closure|综合|时序/i],
  ["形式验证", /formal|sby|symbiyosys|property|assertion|sva|形式验证/i],
  ["Vivado", /vivado|vitis|petalinux|xilinx|xdc/i],
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
  ["supabase", /supabase/i],
  ["googleGemini", /google[-\s]?gemini|gemini|vertex/i],
  ["cloudflare", /cloudflare/i],
  ["vercel", /vercel/i],
  ["sentry", /sentry/i],
  ["trailofbits", /trail of bits|trailofbits/i],
  ["callstack", /callstack/i],
  ["betterAuth", /better[-\s]?auth/i],
  ["tinybird", /tinybird/i],
  ["hashicorp", /hashicorp|terraform/i],
  ["sanity", /sanity/i],
  ["firecrawl", /firecrawl/i],
  ["neon", /neon|neondatabase/i],
  ["clickhouse", /clickhouse|chdb/i],
  ["remotion", /remotion/i],
  ["replicate", /replicate/i],
  ["typefully", /typefully/i],
  ["netlify", /netlify/i],
  ["huggingface", /hugging\s?face|huggingface/i],
  ["figma", /figma/i],
  ["microsoft", /microsoft/i],
  ["firebase", /firebase/i],
  ["flutter", /flutter/i],
  ["mongodb", /mongodb/i],
  ["redis", /redis/i],
  ["nvidia", /nvidia/i],
  ["novelWriting", /novel-writing|novel writing|wgwtest/i],
  ["storySkills", /story-skills|danjdewhurst|story\//i],
  ["creativeWriting", /creative-writing|haowjy|prose|fiction/i],
  ["gateflow", /gateflow|gf-|codejunkie99/i],
  ["mindrallyHardware", /mindrally|systemverilog|fpga/i],
  ["xilinxSuite", /xilinx|vivado|vitis|petalinux|QingquanYao/i],
  ["chipforge", /chipforge|Fzhiyu1/i],
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

function allSourceIds() {
  const ids = new Set(skills.map((skill) => skill.source).filter((source) => sources[source]));
  return [...ids].sort((a, b) => {
    const aIndex = sourceOrder.indexOf(a);
    const bIndex = sourceOrder.indexOf(b);
    if (aIndex >= 0 || bIndex >= 0) {
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    }
    return sources[a].label.localeCompare(sources[b].label);
  });
}

function buildChips(container, values, selectedSet, onClick) {
  container.innerHTML = "";
  values.forEach((value) => {
    const id = typeof value === "string" ? value : value.id;
    const label = typeof value === "string" ? value : value.label;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${selectedSet.has(id) ? " is-active" : ""}`;
    button.textContent = label;
    button.setAttribute("aria-pressed", String(selectedSet.has(id)));
    button.addEventListener("click", () => onClick(id));
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

function matchesSource(skill) {
  if (state.sources.size === 0) return true;
  return state.sources.has(skill.source);
}

function filteredSkills() {
  const filtered = skills.filter((skill) => {
    if (!matchesQuery(skill)) return false;
    if (!matchesIntersection(skill, state.categories, "categories")) return false;
    if (!matchesIntersection(skill, state.platforms, "platforms")) return false;
    if (!matchesSource(skill)) return false;
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
    ...[...state.sources].map((value) => ({ value: sources[value]?.label ?? value, type: "来源" })),
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
  const baseUrl = catalog.homeUrl ?? "";

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
        maintained: catalog.maintained,
        quality: source === catalog.source ? 72 : 78,
        remote: true,
      };
    })
    .filter(Boolean);
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*/);
  if (!match) return {};

  return match[1].split("\n").reduce((meta, line) => {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) return meta;

    const [, key, rawValue] = field;
    meta[key] = rawValue.trim().replace(/^["']|["']$/g, "");
    return meta;
  }, {});
}

function pathToSkillName(path) {
  const parts = path.split("/").filter(Boolean);
  const skillDir = parts.at(-2) ?? parts.at(0) ?? path;
  return skillDir.replace(/^\.curated\//, "").replace(/^\.system\//, "");
}

function githubTreeUrl(catalog) {
  return `https://api.github.com/repos/${catalog.repo}/git/trees/${catalog.branch}?recursive=1`;
}

function githubRawUrl(catalog, path) {
  return `https://raw.githubusercontent.com/${catalog.repo}/${catalog.branch}/${path}`;
}

function githubHtmlUrl(catalog, path) {
  return `https://github.com/${catalog.repo}/tree/${catalog.branch}/${path.replace(/\/SKILL\.md$/, "")}`;
}

async function parseGitHubTreeCatalog(catalog) {
  const treeResponse = await fetch(githubTreeUrl(catalog));
  if (!treeResponse.ok) throw new Error(`${catalog.source}: ${treeResponse.status}`);

  const payload = await treeResponse.json();
  const paths = (payload.tree ?? [])
    .map((entry) => entry.path)
    .filter((path) => path.endsWith("/SKILL.md"))
    .filter((path) => (catalog.root ? path.startsWith(catalog.root) : true))
    .filter((path) => (catalog.includePaths ? catalog.includePaths.includes(path) : true))
    .slice(0, catalog.limit ?? 80);

  const settled = await Promise.allSettled(
    paths.map(async (path) => {
      const response = await fetch(githubRawUrl(catalog, path));
      if (!response.ok) throw new Error(`${path}: ${response.status}`);
      const markdown = await response.text();
      const meta = parseFrontmatter(markdown);
      const inferredName = pathToSkillName(path);
      const namePrefix = catalog.namePrefix ?? catalog.repo.split("/")[0].toLowerCase();
      const name = meta.name ? `${namePrefix}/${meta.name}` : `${namePrefix}/${inferredName}`;
      const description = meta.description || `Skill instructions from ${sources[catalog.source].label}.`;

      return {
        name,
        source: catalog.source,
        description,
        categories: inferCategories(name, description, path),
        platforms: catalog.platforms,
        url: githubHtmlUrl(catalog, path),
        install: catalog.installTemplate
          ? catalog.installTemplate.replace("{repo}", catalog.repo).replace("{path}", path.replace(/\/SKILL\.md$/, "")).replace("{name}", inferredName)
          : "",
        official: catalog.official,
        maintained: catalog.maintained,
        quality: catalog.quality ?? 86,
        remote: true,
      };
    }),
  );

  return settled.filter((result) => result.status === "fulfilled").map((result) => result.value);
}

function mergeSkills(remoteSkills) {
  const normalizeUrlKey = (skill) =>
    skill.url
      .toLowerCase()
      .replace(/\/blob\//, "/tree/")
      .replace(/\/skill\.md$/, "")
      .replace(/\/$/, "");

  const merged = [...skills];
  const byName = new Set(skills.map((skill) => `${skill.source}:${skill.name.toLowerCase()}`));
  const byUrl = new Set(skills.map((skill) => `${skill.source}:${normalizeUrlKey(skill)}`));

  remoteSkills.forEach((skill) => {
    const nameKey = `${skill.source}:${skill.name.toLowerCase()}`;
    if (byName.has(nameKey)) return;

    const urlKey = `${skill.source}:${normalizeUrlKey(skill)}`;
    if (byUrl.has(urlKey)) return;

    merged.push(skill);
    byName.add(nameKey);
    byUrl.add(urlKey);
  });
  skills = merged;
}

async function syncCatalogs() {
  elements.syncNow.disabled = true;
  elements.syncStatus.textContent = "正在同步公开技能目录";
  elements.syncMeta.textContent = "正在读取 README 目录、GitHub tree 和 SKILL.md 元数据。";

  try {
    const settled = await Promise.allSettled(
      remoteCatalogs.map(async (catalog) => {
        if (catalog.type === "github-tree") return parseGitHubTreeCatalog(catalog);

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

  buildChips(
    elements.sourceFilters,
    allSourceIds().map((source) => ({ id: source, label: sources[source].label })),
    state.sources,
    (value) => {
      state.sources.has(value) ? state.sources.delete(value) : state.sources.add(value);
      render();
    },
  );

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
  state.sources.clear();
  state.officialOnly = false;
  state.installableOnly = false;
  state.sort = "quality";
  elements.search.value = "";
  elements.officialOnly.checked = false;
  elements.installableOnly.checked = false;
  elements.sort.value = "quality";
  render();
}

function focusWorkflow(kind) {
  state.query = "";
  state.categories.clear();
  state.platforms.clear();
  state.sources.clear();
  state.officialOnly = false;
  state.installableOnly = false;
  state.sort = "quality";

  if (kind === "novel") state.categories.add("小说");
  if (kind === "rtl") state.categories.add("RTL");

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

elements.clearSources.addEventListener("click", () => {
  state.sources.clear();
  render();
});

elements.resetAll.addEventListener("click", resetAll);
elements.syncNow.addEventListener("click", syncCatalogs);
elements.focusButtons.forEach((button) => {
  button.addEventListener("click", () => focusWorkflow(button.dataset.focus));
});

render();
syncCatalogs();
