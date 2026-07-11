import { projects } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "项目展示" };

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4"><span className="text-gradient">项目展示</span></h1>
        <p className="text-muted">我的开源项目和技术作品</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
        {projects.map((project) => (
          <div key={project.id} className="glass-card rounded-2xl overflow-hidden group">
            {/* Project Image */}
            <div className="w-full h-48 bg-gradient-to-br from-accent/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
              <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform">📁</span>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">{project.name}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-5 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-card-border text-sm hover:bg-card-border/50 hover:border-accent/30 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white text-sm hover:bg-accent-hover transition-all shadow-lg shadow-accent/20"
                  >
                    在线预览 →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
