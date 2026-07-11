"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4"><span className="text-gradient">联系我</span></h1>
        <p className="text-muted">有任何问题或合作想法？欢迎联系我</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-6">联系方式</h2>
          <div className="space-y-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl glass-card group"
            >
              <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-muted group-hover:text-foreground transition-colors"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <div>
                <p className="font-medium text-sm">GitHub</p>
                <p className="text-xs text-muted">@yourusername</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-4 rounded-2xl glass-card group"
            >
              <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted group-hover:text-foreground transition-colors"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p className="font-medium text-sm">Email</p>
                <p className="text-xs text-muted">{siteConfig.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
              <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-muted">
                💬
              </div>
              <div>
                <p className="font-medium text-sm">微信</p>
                <p className="text-xs text-muted">扫码添加好友</p>
              </div>
            </div>
          </div>

          {/* WeChat QR placeholder */}
          <div className="mt-6 p-6 rounded-2xl glass-card text-center">
            <img
              src="/wechat-qr.jpg"
              alt="微信二维码"
              className="w-48 h-48 mx-auto rounded-xl object-cover shadow-md"
            />
            <p className="mt-3 text-xs text-muted">扫描二维码添加微信</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold mb-6"><span className="text-gradient">给我留言</span></h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">姓名</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl border border-card-border bg-card text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(96,165,250,0.1)] transition-all"
                placeholder="你的名字"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">邮箱</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl border border-card-border bg-card text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(96,165,250,0.1)] transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">留言</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-card-border bg-card text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(96,165,250,0.1)] transition-all resize-none"
                placeholder="写下你的留言..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              {submitted ? "✓ 发送成功！" : "发送留言"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
