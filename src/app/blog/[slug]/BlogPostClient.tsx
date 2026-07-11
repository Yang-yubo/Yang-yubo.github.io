"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/site";
import CommentSection from "@/components/CommentSection";

function MarkdownRenderer({ content }: { content: string }) {
  // Simple markdown parser
  const renderMarkdown = (md: string) => {
    const lines = md.split("\n");
    const html: string[] = [];
    let inCodeBlock = false;
    let codeContent = "";
    let codeLang = "";
    let inList = false;
    let listType = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          html.push(
            `<div class="relative group my-4"><pre><code class="language-${codeLang}">${escapeHtml(codeContent.trim())}</code></pre><button onclick="navigator.clipboard.writeText(this.parentElement.querySelector('code').textContent)" class="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20">复制</button></div>`
          );
          codeContent = "";
          codeLang = "";
          inCodeBlock = false;
        } else {
          if (inList) { html.push(listType === "ul" ? "</ul>" : "</ol>"); inList = false; }
          codeLang = line.slice(3).trim();
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent += line + "\n";
        continue;
      }

      // Close list if not a list item
      if (inList && !line.match(/^[\s]*[-*+]\s/) && !line.match(/^[\s]*\d+\.\s/) && line.trim() !== "") {
        html.push(listType === "ul" ? "</ul>" : "</ol>");
        inList = false;
      }

      // Headers
      if (line.startsWith("### ")) {
        html.push(`<h3 id="${slugify(line.slice(4))}">${inlineFormat(line.slice(4))}</h3>`);
      } else if (line.startsWith("## ")) {
        html.push(`<h2 id="${slugify(line.slice(3))}">${inlineFormat(line.slice(3))}</h2>`);
      } else if (line.startsWith("# ")) {
        html.push(`<h1 id="${slugify(line.slice(2))}">${inlineFormat(line.slice(2))}</h1>`);
      }
      // Unordered list
      else if (line.match(/^[\s]*[-*+]\s/)) {
        if (!inList) { html.push("<ul>"); inList = true; listType = "ul"; }
        html.push(`<li>${inlineFormat(line.replace(/^[\s]*[-*+]\s/, ""))}</li>`);
      }
      // Ordered list
      else if (line.match(/^[\s]*\d+\.\s/)) {
        if (!inList) { html.push("<ol>"); inList = true; listType = "ol"; }
        html.push(`<li>${inlineFormat(line.replace(/^[\s]*\d+\.\s/, ""))}</li>`);
      }
      // Blockquote
      else if (line.startsWith("> ")) {
        html.push(`<blockquote><p>${inlineFormat(line.slice(2))}</p></blockquote>`);
      }
      // Table
      else if (line.includes("|") && line.trim().startsWith("|")) {
        // Simple table handling
        const cells = line.split("|").filter((c) => c.trim());
        if (cells.every((c) => c.trim().match(/^[-:]+$/))) continue; // separator
        const tag = !i || !lines[i - 1]?.includes("|") ? "thead" : "tbody";
        const cellTag = tag === "thead" ? "th" : "td";
        html.push(
          `<${tag === "thead" ? "table class='w-full my-4 border-collapse'" : tag}><tr>${cells.map((c) => `<${cellTag} class="border border-card-border px-3 py-2 text-sm text-left">${inlineFormat(c.trim())}</${cellTag}>`).join("")}</tr></${tag === "thead" ? "thead" : "tbody"}>`
        );
      }
      // Horizontal rule
      else if (line.match(/^[-*_]{3,}$/)) {
        html.push("<hr class='my-6 border-card-border'/>");
      }
      // Empty line
      else if (line.trim() === "") {
        // skip
      }
      // Paragraph
      else {
        html.push(`<p>${inlineFormat(line)}</p>`);
      }
    }

    if (inList) html.push(listType === "ul" ? "</ul>" : "</ol>");
    return html.join("\n");
  };

  const escapeHtml = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const slugify = (text: string) =>
    text.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, "-").replace(/^-|-$/g, "");

  const inlineFormat = (text: string): string => {
    let result = text;
    // Bold
    result = result.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic
    result = result.replace(/\*(.*?)\*/g, "<em>$1</em>");
    // Inline code
    result = result.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-card border border-card-border text-sm text-accent">$1</code>');
    // Links
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    return result;
  };

  return <div className="prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />;
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.id === slug);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
        <p className="text-muted mb-8">抱歉，您访问的文章不存在</p>
        <Link href="/blog" className="text-accent hover:text-accent-hover">← 返回博客</Link>
      </div>
    );
  }

  // Extract headings for TOC
  const headings = post.content
    .split("\n")
    .filter((l) => l.startsWith("## ") || l.startsWith("### "))
    .map((l) => ({
      level: l.startsWith("### ") ? 3 : 2,
      text: l.replace(/^#{2,3}\s/, ""),
      id: l.replace(/^#{2,3}\s/, "").toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, "-").replace(/^-|-$/g, ""),
    }));

  return (
    <div className="animate-fade-in">
      {/* Reading Progress */}
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent mb-8 transition-colors group">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform"><polyline points="15 18 9 12 15 6"/></svg>
          返回博客
        </Link>

        <div className="flex gap-8">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium">{post.category}</span>
              <span className="text-sm text-muted">{post.date}</span>
              <span className="text-sm text-muted flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {post.readTime} 分钟
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">{post.title}</h1>
            <MarkdownRenderer content={post.content} />

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-sm rounded-lg bg-accent/5 border border-accent/10 text-muted hover:text-accent hover:border-accent/30 transition-all cursor-default">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Like & Share */}
            <div className="mt-8 pt-6 border-t border-card-border/50 flex items-center gap-4">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all ${
                  liked ? "border-accent bg-accent/10 text-accent shadow-lg shadow-accent/10" : "border-card-border text-muted hover:text-accent hover:border-accent/30"
                }`}
              >
                {liked ? "❤️" : "🤍"} {liked ? "已点赞" : "点赞"}
              </button>
            </div>

            {/* Comments */}
            <CommentSection postId={post.id} />
          </article>

          {/* TOC Sidebar */}
          {headings.length > 0 && (
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24">
                <div className="glass-card rounded-2xl p-5">
                  <button onClick={() => setTocOpen(!tocOpen)} className="text-sm font-semibold mb-3 flex items-center gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    目录导航
                    <span className={`ml-auto transition-transform ${tocOpen ? "rotate-180" : ""}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </button>
                  {tocOpen && (
                    <nav className="space-y-1.5 border-t border-card-border/50 pt-3">
                      {headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className={`block text-sm text-muted hover:text-accent transition-colors py-1 ${
                            h.level === 3 ? "pl-6" : "pl-2"
                          } hover:pl-3`}
                        >
                          {h.text}
                        </a>
                      ))}
                    </nav>
                  )}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
