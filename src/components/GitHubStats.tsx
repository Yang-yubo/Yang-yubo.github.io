"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  created_at: string;
  avatar_url: string;
  name: string;
  bio: string;
}

interface RepoData {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  updated_at: string;
}

// Contribution calendar data (simulated for demo - use GitHub GraphQL API in production)
function generateContributionData() {
  const weeks = 52;
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(Math.random() > 0.5 ? Math.floor(Math.random() * 8) : 0);
    }
    data.push(week);
  }
  return data;
}

const langColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  CSS: "#563d7c",
  HTML: "#e34c26",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
};

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubData | null>(null);
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [contributions] = useState(generateContributionData);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const username = siteConfig.github.split("/").pop() || "yourusername";

    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => r.json()).catch(() => null),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`).then((r) => r.json()).catch(() => []),
    ]).then(([userData, reposData]) => {
      if (userData && !userData.message) setUser(userData);
      if (Array.isArray(reposData)) setRepos(reposData);
      setLoading(false);
    });

    // Calculate total from generated data
    setTotalContributions(contributions.flat().reduce((a, b) => a + b, 0));
  }, [contributions]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "公开仓库", value: user?.public_repos ?? 12, icon: "📦" },
          { label: "总贡献", value: totalContributions, icon: "⚡" },
          { label: "关注者", value: user?.followers ?? 42, icon: "👥" },
          { label: "Gists", value: user?.public_gists ?? 5, icon: "📝" },
        ].map((stat) => (
          <div key={stat.label} className="p-5 rounded-xl border border-card-border bg-card text-center hover:border-accent/50 transition-all">
            <span className="text-2xl">{stat.icon}</span>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
            <p className="text-xs text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Contribution Calendar */}
      <div className="p-6 rounded-xl border border-card-border bg-card">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
          <span>📊</span> 贡献热力图
          <span className="text-xs text-muted font-normal ml-auto">{totalContributions} contributions in the last year</span>
        </h3>
        <div className="overflow-x-auto">
          <div className="flex gap-[3px] min-w-[720px]">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((count, di) => (
                  <div
                    key={di}
                    className="w-[11px] h-[11px] rounded-[2px]"
                    style={{
                      backgroundColor:
                        count === 0
                          ? "var(--card-border)"
                          : count < 2
                          ? "#0e4429"
                          : count < 4
                          ? "#006d32"
                          : count < 6
                          ? "#26a641"
                          : "#39d353",
                    }}
                    title={`${count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 text-xs text-muted">
          <span>Less</span>
          {[0, 2, 4, 6, 8].map((c, i) => (
            <div
              key={i}
              className="w-[11px] h-[11px] rounded-[2px]"
              style={{
                backgroundColor:
                  c === 0
                    ? "var(--card-border)"
                    : c < 2
                    ? "#0e4429"
                    : c < 4
                    ? "#006d32"
                    : c < 6
                    ? "#26a641"
                    : "#39d353",
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>

      {/* Recent Repositories */}
      {repos.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <span>📁</span> 最近更新的仓库
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.slice(0, 6).map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-card-border bg-card hover:border-accent/50 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-sm font-medium group-hover:text-accent transition-colors truncate">
                    {repo.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted shrink-0 ml-2">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-0.5">⭐ {repo.stargazers_count}</span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-0.5">🍴 {repo.forks_count}</span>
                    )}
                  </div>
                </div>
                {repo.description && (
                  <p className="mt-1 text-xs text-muted line-clamp-2">{repo.description}</p>
                )}
                {repo.language && (
                  <div className="mt-2 flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: langColors[repo.language] || "#858585" }}
                    />
                    <span className="text-xs text-muted">{repo.language}</span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Language Stats */}
      <div className="p-6 rounded-xl border border-card-border bg-card">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
          <span>🌐</span> 语言使用分布
        </h3>
        <div className="space-y-3">
          {[
            { lang: "Python", pct: 40 },
            { lang: "JavaScript", pct: 20 },
            { lang: "TypeScript", pct: 15 },
            { lang: "C", pct: 10 },
            { lang: "CSS", pct: 8 },
            { lang: "Shell", pct: 7 },
          ].map((item) => (
            <div key={item.lang} className="flex items-center gap-3">
              <div className="w-20 text-xs text-muted shrink-0">{item.lang}</div>
              <div className="flex-1 h-2 rounded-full bg-card-border overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${item.pct}%`,
                    backgroundColor: langColors[item.lang] || "#858585",
                  }}
                />
              </div>
              <span className="text-xs text-muted w-8 text-right">{item.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
