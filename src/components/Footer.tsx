import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-lg font-bold group">
              <span className="text-accent group-hover:text-accent-hover transition-colors">&lt;</span><span className="group-hover:text-accent transition-colors">TechSpace</span><span className="text-accent group-hover:text-accent-hover transition-colors"> /&gt;</span>
            </Link>
            <p className="mt-3 text-sm text-muted max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 mt-4">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-all hover:-translate-y-0.5 inline-block" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-muted hover:text-accent transition-all hover:-translate-y-0.5 inline-block" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">快速链接</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/blog", label: "技术博客" },
                { href: "/tools", label: "工具导航" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-3">联系方式</h3>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">Email</a>
              <Link href="/contact" className="hover:text-accent transition-colors">留言</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-card-border/50 text-center text-xs text-muted">
          <p className="flex items-center justify-center gap-1">&copy; {new Date().getFullYear()} {siteConfig.name}. Built with <span className="text-accent">Next.js</span> & <span className="text-accent">Tailwind CSS</span>.</p>
        </div>
      </div>
      </div>
    </footer>
  );
}
