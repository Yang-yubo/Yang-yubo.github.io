import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "关于我" };

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-gradient">关于我</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          一个热爱技术的计算机专业学生，正在探索软件开发与网络安全的无限可能
        </p>
      </div>

      {/* Bio Card */}
      <section>
        <div className="glass-card p-8 rounded-2xl">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-accent/10 animate-float">
              <img src={siteConfig.avatar} alt={siteConfig.author} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">{siteConfig.author}</h2>
              <p className="text-accent text-sm font-medium mb-4">{siteConfig.major} · {siteConfig.year}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  { icon: "🎓", label: siteConfig.school },
                  { icon: "📚", label: siteConfig.major },
                  { icon: "📅", label: siteConfig.year },
                  { icon: "🎯", label: siteConfig.direction },
                ].map((item) => (
                  <div key={item.label + item.icon} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-card/50 border border-card-border/50">
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-muted leading-relaxed">
                {siteConfig.bio}
              </p>

              {/* Social Links */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-card-border bg-card text-sm hover:border-accent/50 hover:text-accent transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-card-border bg-card text-sm hover:border-accent/50 hover:text-accent transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
