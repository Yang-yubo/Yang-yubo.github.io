"use client";

import { useState, useRef, useEffect } from "react";
import { blogPosts } from "@/data/site";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const learningPaths: Record<string, string[]> = {
  "Python": ["Python 基础语法", "面向对象编程", "文件操作", "网络编程", "数据分析(Pandas/NumPy)", "Web框架(Flask/Django)"],
  "Web开发": ["HTML/CSS 基础", "JavaScript", "React 框架", "Next.js 全栈", "TypeScript", "数据库(SQL/NoSQL)"],
  "网络安全": ["网络基础(TCP/IP)", "Linux 系统", "Web 安全基础", "SQL注入/XSS/CSRF", "渗透测试工具", "漏洞挖掘"],
  "Linux": ["基础命令", "文件权限", "Shell 脚本", "进程管理", "网络配置", "服务部署"],
  "数据结构": ["数组与链表", "栈与队列", "树与图", "排序算法", "搜索算法", "动态规划"],
};

function getAIResponse(input: string): string {
  const lower = input.toLowerCase();

  // Learning path recommendations
  for (const [topic, path] of Object.entries(learningPaths)) {
    if (lower.includes(topic.toLowerCase()) || lower.includes("学习" + topic) || lower.includes("路线")) {
      if (lower.includes("路线") || lower.includes("怎么学") || lower.includes("如何学") || lower.includes("学习")) {
        return `📚 **${topic} 学习路线推荐：**\n\n${path.map((step, i) => `${i + 1}. ${step}`).join("\n")}\n\n建议按顺序逐步学习，每个阶段都配合实战项目来巩固知识。`;
      }
    }
  }

  // Article-related questions
  const matchedPosts = blogPosts.filter(
    (p) =>
      lower.includes(p.category.toLowerCase()) ||
      p.tags.some((t) => lower.includes(t.toLowerCase())) ||
      lower.includes(p.title.toLowerCase())
  );

  if (matchedPosts.length > 0 && (lower.includes("文章") || lower.includes("推荐") || lower.includes("有什么") || lower.includes("推荐"))) {
    return `📝 **相关文章推荐：**\n\n${matchedPosts.slice(0, 3).map((p) => `• [${p.title}](/blog/${p.id})\n  ${p.summary.slice(0, 50)}...`).join("\n\n")}`;
  }

  // Keyword-based responses
  if (lower.includes("python")) {
    return "🐍 Python 是一门非常适合入门的编程语言。我博客里有多篇 Python 相关文章，涵盖了从基础语法到自动化脚本的内容。建议从变量、控制流和函数开始学习！";
  }
  if (lower.includes("安全") || lower.includes("渗透") || lower.includes("漏洞")) {
    return "🔒 网络安全是一个广泛的领域。建议先掌握网络基础和 Linux，然后学习常见漏洞类型（SQL注入、XSS、CSRF等）。实战方面可以通过靶场练习来巩固。";
  }
  if (lower.includes("前端") || lower.includes("react") || lower.includes("next")) {
    return "🌐 前端开发推荐学习路线：HTML/CSS → JavaScript → React → Next.js → TypeScript。Next.js 是很好的全栈框架，适合构建个人博客和作品集。";
  }
  if (lower.includes("你好") || lower.includes("hello") || lower.includes("hi")) {
    return "你好！👋 我是 TechSpace 的 AI 助手。你可以问我：\n\n• 学习路线推荐（如「Python 怎么学」）\n• 文章推荐（如「推荐网络安全文章」）\n• 技术问题（如「什么是 TCP/IP」）\n\n有什么可以帮到你的？";
  }
  if (lower.includes("谢谢") || lower.includes("感谢")) {
    return "不客气！😊 如果还有其他问题，随时问我！";
  }

  return "🤔 感谢你的提问！作为博客 AI 助手，我可以帮你：\n\n• **推荐学习路线** — 输入「Python/Web开发/网络安全 学习路线」\n• **推荐文章** — 输入「推荐 XX 相关文章」\n• **解答技术问题** — 输入具体的技术关键词\n\n试试输入你感兴趣的方向吧！";
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "你好！👋 我是 TechSpace 的 AI 助手。你可以问我关于学习路线、技术文章推荐，或者任何技术问题。试试输入你感兴趣的方向吧！",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = getAIResponse(userMsg.content);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setTyping(false);
    }, 600 + Math.random() * 800);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-hover transition-all hover:scale-105 flex items-center justify-center"
        aria-label="AI 助手"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a7 7 0 0 1 7 7v1a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7z"/><path d="M12 17v4"/><path d="M8 21h8"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/></svg>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl border border-card-border bg-background shadow-2xl flex flex-col animate-fade-in-up overflow-hidden" style={{ height: "500px" }}>
          {/* Header */}
          <div className="px-4 py-3 border-b border-card-border bg-card flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <span className="text-sm">🤖</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold">AI 助手</h3>
              <p className="text-xs text-muted">学习路线 · 文章推荐</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-accent text-white rounded-br-sm"
                    : "bg-card border border-card-border rounded-bl-sm"
                }`}>
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-xl bg-card border border-card-border rounded-bl-sm text-sm text-muted">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-3 pb-2 flex gap-1.5 flex-wrap shrink-0">
            {["Python 学习路线", "推荐安全文章", "Web开发入门"].map((q) => (
              <button
                key={q}
                onClick={() => { setInput(q); }}
                className="px-2.5 py-1 text-xs rounded-full border border-card-border text-muted hover:text-foreground hover:border-accent/50 transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-card-border shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="问我任何技术问题..."
                className="flex-1 px-3 py-2 rounded-lg border border-card-border bg-card text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-3 py-2 rounded-lg bg-accent text-white text-sm hover:bg-accent-hover transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                发送
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
