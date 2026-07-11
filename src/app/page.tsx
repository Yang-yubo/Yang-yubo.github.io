import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import { siteConfig, blogPosts, projects, skills } from "@/data/site";

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);
  const recentProjects = projects.slice(0, 3);
  const totalViews = blogPosts.reduce((sum, p) => sum + p.views, 0);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
          {/* Avatar with gradient ring */}
          <div className="mx-auto w-32 h-32 rounded-full avatar-ring mb-8 animate-float">
            <img
              src={siteConfig.avatar}
              alt={siteConfig.author}
              className="w-full h-full rounded-full object-cover border-4 border-background"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-gradient">{siteConfig.author}</span>
            <span className="text-foreground"> 的博客</span>
          </h1>

          <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto">
            {siteConfig.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
            <span className="px-3 py-1.5 rounded-full border border-card-border bg-card/80 backdrop-blur-sm">🎓 {siteConfig.school}</span>
            <span className="px-3 py-1.5 rounded-full border border-card-border bg-card/80 backdrop-blur-sm">📚 {siteConfig.major}</span>
            <span className="px-3 py-1.5 rounded-full border border-card-border bg-card/80 backdrop-blur-sm">📅 {siteConfig.year}</span>
          </div>

          {/* Stats */}
          <div className="mt-8 flex items-center justify-center gap-8">
            {[
              { label: "文章", value: blogPosts.length },
              { label: "项目", value: projects.length },
              { label: "阅读", value: totalViews.toLocaleString() },
              { label: "技能", value: skills.length },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/blog" className="btn-glow px-7 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5">
              查看博客
            </Link>
            <Link href="/projects" className="px-7 py-3 rounded-xl border border-card-border bg-card/80 backdrop-blur-sm font-medium hover:bg-card-border/50 transition-all hover:-translate-y-0.5">
              我的项目
            </Link>
            <Link href="/tools" className="px-7 py-3 rounded-xl border border-card-border bg-card/80 backdrop-blur-sm font-medium hover:bg-card-border/50 transition-all hover:-translate-y-0.5">
              工具导航
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold">最新文章</h2>
              <p className="text-sm text-muted mt-1">最近更新的技术文章</p>
            </div>
            <Link href="/blog" className="text-sm text-accent hover:text-accent-hover transition-colors flex items-center gap-1 group">
              查看全部
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <div className="glass-card p-6 rounded-2xl h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium">{post.category}</span>
                    <span className="text-xs text-muted">{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2 flex-1">{post.summary}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted pt-3 border-t border-card-border">
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {post.readTime} 分钟
                    </span>
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      {post.views}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold">项目作品</h2>
              <p className="text-sm text-muted mt-1">我开发的一些开源项目</p>
            </div>
            <Link href="/projects" className="text-sm text-accent hover:text-accent-hover transition-colors flex items-center gap-1 group">
              查看全部
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {recentProjects.map((project) => (
              <div key={project.id} className="glass-card p-6 rounded-2xl group">
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-accent/15 to-purple-500/15 flex items-center justify-center mb-4 group-hover:from-accent/25 group-hover:to-purple-500/25 transition-all">
                  <span className="text-5xl group-hover:scale-110 transition-transform">📁</span>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">{project.name}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-accent/5 border border-accent/10 text-accent font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-card-border flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Skills Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">技术方向</h2>
          <p className="text-muted mb-10 max-w-xl mx-auto">专注于软件开发与网络安全两大方向，持续学习与成长</p>
          <div className="flex flex-wrap justify-center gap-5 stagger-children">
            {[
              { icon: "🐍", name: "Python", desc: "自动化 / 数据分析", color: "from-yellow-500/20 to-green-500/20" },
              { icon: "🌐", name: "Web 开发", desc: "React / Next.js", color: "from-blue-500/20 to-cyan-500/20" },
              { icon: "🔒", name: "网络安全", desc: "渗透测试 / 漏洞挖掘", color: "from-red-500/20 to-orange-500/20" },
              { icon: "🐧", name: "Linux", desc: "系统管理 / 运维", color: "from-purple-500/20 to-pink-500/20" },
              { icon: "📊", name: "数据结构", desc: "算法 / 竞赛", color: "from-green-500/20 to-teal-500/20" },
              { icon: "🔧", name: "C 语言", desc: "底层 / 嵌入式", color: "from-indigo-500/20 to-blue-500/20" },
            ].map((item) => (
              <div key={item.name} className={`glass-card w-44 rounded-2xl p-6 text-center group`}>
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="mt-1 text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
