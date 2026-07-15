"use client";

const ctfTools = [
  {
    name: "010 Editor v16.0.2 中文破解版",
    desc: "专业十六进制编辑器，支持模板解析，CTF 逆向分析利器",
    file: "/downloads/ctf/010Editor v16.0.2 Chs破解版.zip",
    size: "30.6 MB",
    icon: "🔧",
    tags: ["逆向", "Hex"],
  },
  {
    name: "CTF 破解工具 V7.3",
    desc: "CTF 综合破解工具包，集成多种编解码、哈希计算、进制转换等功能",
    file: "/downloads/ctf/[沐波整理]CTF破解工具 V7.3 20260506.rar",
    size: "87.5 MB",
    icon: "🔓",
    tags: ["综合", "编解码"],
  },
  {
    name: "二维码识别工具 V2.0",
    desc: "二维码生成、识别、解码工具，CTF Misc 题目常用",
    file: "/downloads/ctf/[沐波整理]二维码识别工具V2.0 20250710.rar",
    size: "63.0 MB",
    icon: "📱",
    tags: ["Misc", "二维码"],
  },
  {
    name: "压缩包密码破解工具",
    desc: "ZIP/RAR 等压缩包暴力破解与字典攻击工具",
    file: "/downloads/ctf/压缩包密码破解工具.zip",
    size: "9.2 MB",
    icon: "🔐",
    tags: ["密码", "爆破"],
  },
  {
    name: "隐写术破解工具",
    desc: "图片隐写检测与提取工具，支持 LSB、EXIF 等多种隐写方式",
    file: "/downloads/ctf/隐写术破解工具.zip",
    size: "4.4 MB",
    icon: "🖼️",
    tags: ["Misc", "隐写"],
  },
  {
    name: "二维码扫描工具",
    desc: "快速扫描和识别二维码内容的轻量级工具",
    file: "/downloads/ctf/二维码扫描工具.zip",
    size: "4.3 MB",
    icon: "📷",
    tags: ["Misc", "二维码"],
  },
  {
    name: "WinHex",
    desc: "经典十六进制编辑器，支持磁盘分析、数据恢复、取证分析",
    file: "/downloads/ctf/winhex.zip",
    size: "4.0 MB",
    icon: "💾",
    tags: ["取证", "Hex"],
  },
  {
    name: "PuTTY 0.83 中文版",
    desc: "SSH/Telnet 客户端，CTF 远程连接服务器必备",
    file: "/downloads/ctf/putty-0.83-cn1.zip",
    size: "2.9 MB",
    icon: "🔗",
    tags: ["网络", "SSH"],
  },
  {
    name: "漏洞扫描工具",
    desc: "网络漏洞扫描与检测工具",
    file: "/downloads/ctf/漏洞扫描工具.rar",
    size: "2.4 MB",
    icon: "🛡️",
    tags: ["Web", "扫描"],
  },
  {
    name: "动图帧破解工具",
    desc: "GIF 动图逐帧分析与提取工具，CTF Misc 常用",
    file: "/downloads/ctf/动图帧破解.zip",
    size: "0.6 MB",
    icon: "🎞️",
    tags: ["Misc", "图片"],
  },
];

const categories = ["全部", "逆向", "综合", "Misc", "密码", "取证", "网络", "Web"];

import { useState } from "react";

export default function CTFPage() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered = ctfTools.filter(
    (tool) => activeCategory === "全部" || tool.tags.includes(activeCategory)
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">
          <span className="text-gradient">CTF 工具包</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          CTF 竞赛常用工具合集，涵盖逆向、Misc、密码学、Web 等方向
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 stagger-children">
        {filtered.map((tool) => (
          <div
            key={tool.name}
            className="glass-card p-6 rounded-2xl flex flex-col gap-3 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-card border border-card-border flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                {tool.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold group-hover:text-accent transition-colors truncate">
                  {tool.name}
                </h3>
                <p className="text-xs text-muted mt-1 line-clamp-2">
                  {tool.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded-md bg-accent/10 text-accent font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 text-[10px] rounded-md bg-card border border-card-border text-muted font-medium ml-auto">
                    {tool.size}
                  </span>
                </div>
              </div>
            </div>
            <a
              href={tool.file}
              download
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent/10 text-accent text-sm font-medium hover:bg-accent hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              下载
            </a>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-lg font-medium">该分类暂无工具</p>
          <p className="text-sm mt-1">试试其他分类吧</p>
        </div>
      )}

      {/* Notice */}
      <div className="mt-12 p-5 rounded-2xl border border-card-border bg-card/50 text-sm text-muted">
        <p className="font-medium text-foreground mb-2">📌 说明</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>工具仅供学习研究使用，请勿用于非法用途</li>
          <li>部分工具可能被杀毒软件误报，请自行判断是否安全</li>
          <li>BurpSuite V2026.3（693MB）文件过大未包含，请自行到官网下载</li>
        </ul>
      </div>
    </div>
  );
}
