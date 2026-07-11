"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, siteConfig } from "@/data/site";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered = blogPosts.filter((post) => {
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory =
      activeCategory === "全部" || post.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4"><span className="text-gradient">技术博客</span></h1>
        <p className="text-muted">记录学习，分享成长</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="搜索文章..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-card-border bg-card text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(96,165,250,0.1)] transition-all"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {siteConfig.categories.map((cat) => (
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

      {/* Stats */}
      <div className="text-center text-sm text-muted mb-8">
        共 {filtered.length} 篇文章
      </div>

      {/* Post List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {filtered.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group">
            <div className="glass-card p-6 rounded-2xl h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium">{post.category}</span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <h3 className="font-semibold text-lg group-hover:text-accent transition-colors mb-2">{post.title}</h3>
              <p className="text-sm text-muted line-clamp-2 flex-1">{post.summary}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-accent/5 border border-accent/10 text-muted">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted pt-3 border-t border-card-border">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {post.readTime} 分钟
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  {post.views}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">
          <p className="text-4xl mb-4">🔍</p>
          <p>没有找到匹配的文章</p>
        </div>
      )}
    </div>
  );
}
