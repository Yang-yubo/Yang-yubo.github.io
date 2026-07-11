"use client";

import { useState } from "react";

const categories = [
  { name: "AI 对话", label: "全部 AI 助手" },
  { name: "AI 平台", label: "大模型平台" },
  { name: "学习资源", label: "编程学习" },
];

const tools = [
  {
    name: "豆包",
    desc: "字节跳动 AI 助手",
    url: "https://www.doubao.com",
    favicon: "https://www.google.com/s2/favicons?domain=doubao.com&sz=128",
    category: "AI 对话",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "通义千问",
    desc: "阿里巴巴大模型",
    url: "https://tongyi.aliyun.com",
    favicon: "https://www.google.com/s2/favicons?domain=tongyi.aliyun.com&sz=128",
    category: "AI 对话",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "腾讯混元",
    desc: "腾讯大模型",
    url: "https://hunyuan.tencent.com",
    favicon: "https://www.google.com/s2/favicons?domain=hunyuan.tencent.com&sz=128",
    category: "AI 平台",
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Kimi",
    desc: "Moonshot AI 助手",
    url: "https://kimi.moonshot.cn",
    favicon: "https://www.google.com/s2/favicons?domain=kimi.moonshot.cn&sz=128",
    category: "AI 对话",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "DeepSeek",
    desc: "深度求索 AI",
    url: "https://chat.deepseek.com",
    favicon: "https://www.google.com/s2/favicons?domain=chat.deepseek.com&sz=128",
    category: "AI 对话",
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "元宝",
    desc: "腾讯 AI 助手",
    url: "https://yuanbao.tencent.com",
    favicon: "https://www.google.com/s2/favicons?domain=yuanbao.tencent.com&sz=128",
    category: "AI 对话",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "千问",
    desc: "阿里 Qwen 模型",
    url: "https://chat.qwen.ai",
    favicon: "https://www.google.com/s2/favicons?domain=chat.qwen.ai&sz=128",
    category: "AI 对话",
    color: "from-teal-500 to-green-500",
  },
  {
    name: "ChatGPT",
    desc: "OpenAI 对话模型",
    url: "https://chat.openai.com",
    favicon: "https://www.google.com/s2/favicons?domain=chat.openai.com&sz=128",
    category: "AI 对话",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Claude",
    desc: "Anthropic AI 助手",
    url: "https://claude.ai",
    favicon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
    category: "AI 对话",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Gemini",
    desc: "Google AI 模型",
    url: "https://gemini.google.com",
    favicon: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
    category: "AI 平台",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "菜鸟教程",
    desc: "编程学习资源",
    url: "https://www.runoob.com",
    favicon: "https://www.google.com/s2/favicons?domain=runoob.com&sz=128",
    category: "学习资源",
    color: "from-green-600 to-teal-600",
  },
];

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered = tools.filter((tool) => {
    const matchSearch =
      !search ||
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.desc.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "全部" || tool.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">
          <span className="text-gradient">工具导航</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          常用 AI 工具和学习资源快速入口，一键直达
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索工具..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-card-border bg-card text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(96,165,250,0.1)] transition-all"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {["全部", ...categories.map((c) => c.name)].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "border border-card-border bg-card text-muted hover:text-foreground hover:border-accent/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 stagger-children">
        {filtered.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-card border border-card-border flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform shadow-sm">
              <img
                src={tool.favicon}
                alt={tool.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-muted mt-1">{tool.desc}</p>
            </div>
            <div className="mt-1">
              <span className={`inline-block px-2 py-0.5 text-[10px] rounded-md bg-gradient-to-r ${tool.color} text-white font-medium opacity-80`}>
                {tool.category}
              </span>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-lg font-medium">未找到匹配的工具</p>
          <p className="text-sm mt-1">试试其他关键词吧</p>
        </div>
      )}
    </div>
  );
}
