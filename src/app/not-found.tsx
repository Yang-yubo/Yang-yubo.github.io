import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 animate-fade-in-up">
      <div className="text-center">
        <p className="text-8xl font-bold text-accent mb-4">404</p>
        <h1 className="text-2xl font-bold mb-2">页面未找到</h1>
        <p className="text-muted mb-8">你访问的页面不存在或已被移除</p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-all"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
