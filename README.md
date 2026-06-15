# Skill Atlas

按分类、平台和来源聚合优秀 AI agent skills 的静态目录。

## 数据来源

页面内置一组精选技能，并在浏览器运行时同步公开目录：

- VoltAgent Awesome Agent Skills
- Composio Awesome Codex Skills
- OpenAI `skills` 仓库里的 `SKILL.md`
- Anthropic `skills` 仓库里的 `SKILL.md`
- Angular `skills` 仓库里的 `SKILL.md`

VoltAgent 目录还覆盖 Stripe、Supabase、Cloudflare、Vercel、Google Gemini、Sentry、Trail of Bits、Hugging Face、Figma、Netlify 等更多团队来源。

## 本地运行

```bash
python3 -m http.server 4173
```

然后打开 `http://127.0.0.1:4173/`。

也可以直接打开 `index.html`，但部分浏览器会限制远程同步请求。
