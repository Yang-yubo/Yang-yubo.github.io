"use client";

import { useState } from "react";
import { blogPosts, projects } from "@/data/site";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("posts");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setLoggedIn(true);
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 animate-fade-in-up">
        <div className="w-full max-w-sm">
          <div className="p-8 rounded-2xl border border-card-border bg-card">
            <div className="text-center mb-6">
              <span className="text-4xl">🔐</span>
              <h1 className="text-xl font-bold mt-3">后台管理</h1>
              <p className="text-sm text-muted mt-1">请输入管理员密码</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-card-border bg-background text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="输入密码..."
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-all"
              >
                登录
              </button>
              <p className="text-xs text-muted text-center">提示：密码是 admin123</p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in-up">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">后台管理</h1>
        <button
          onClick={() => setLoggedIn(false)}
          className="px-4 py-2 rounded-lg border border-card-border text-sm text-muted hover:text-foreground transition-all"
        >
          退出登录
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-card-border pb-2">
        {[
          { key: "posts", label: "文章管理", count: blogPosts.length },
          { key: "projects", label: "项目管理", count: projects.length },
          { key: "comments", label: "评论管理", count: 0 },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
              activeTab === tab.key
                ? "bg-accent text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
            <span className={`px-1.5 py-0.5 text-xs rounded-full ${
              activeTab === tab.key ? "bg-white/20" : "bg-card border border-card-border"
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Posts Management */}
      {activeTab === "posts" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">文章列表</h2>
            <button className="px-4 py-2 rounded-lg bg-accent text-white text-sm hover:bg-accent-hover transition-all">
              + 发布文章
            </button>
          </div>
          <div className="space-y-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 rounded-xl border border-card-border bg-card hover:border-accent/50 transition-all">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm truncate">{post.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-muted">{post.category}</span>
                    <span className="text-xs text-muted">{post.date}</span>
                    <span className="text-xs text-muted">{post.views} 阅读</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button className="px-3 py-1.5 rounded-lg border border-card-border text-xs hover:bg-card-border/50 transition-all">
                    编辑
                  </button>
                  <button className="px-3 py-1.5 rounded-lg border border-red-500/30 text-xs text-red-500 hover:bg-red-500/10 transition-all">
                    删除
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Management */}
      {activeTab === "projects" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">项目列表</h2>
            <button className="px-4 py-2 rounded-lg bg-accent text-white text-sm hover:bg-accent-hover transition-all">
              + 添加项目
            </button>
          </div>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 rounded-xl border border-card-border bg-card hover:border-accent/50 transition-all">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm truncate">{project.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs text-muted">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button className="px-3 py-1.5 rounded-lg border border-card-border text-xs hover:bg-card-border/50 transition-all">
                    编辑
                  </button>
                  <button className="px-3 py-1.5 rounded-lg border border-red-500/30 text-xs text-red-500 hover:bg-red-500/10 transition-all">
                    删除
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comments Management */}
      {activeTab === "comments" && (
        <div className="text-center py-20 text-muted">
          <p className="text-4xl mb-4">💬</p>
          <p>暂无评论</p>
          <p className="text-sm mt-2">评论功能将在接入数据库后启用</p>
        </div>
      )}
    </div>
  );
}
