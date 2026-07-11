"use client";

import { useState } from "react";

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
  likes: number;
  liked: boolean;
}

// Demo comments for display
const demoComments: Comment[] = [
  {
    id: "1",
    author: "小明",
    avatar: "M",
    content: "写得很清楚！Python 入门确实应该从基础语法开始学起。期待更多文章！",
    date: "2026-06-15",
    likes: 5,
    liked: false,
  },
  {
    id: "2",
    author: "安全小白",
    avatar: "A",
    content: "SQL 注入的讲解非常实用，配合 CTF 题目练习效果更好。请问有推荐的练习平台吗？",
    date: "2026-06-20",
    likes: 3,
    liked: false,
  },
  {
    id: "3",
    author: "CodeLover",
    avatar: "C",
    content: "数据结构用 C 语言来实现确实能更好地理解底层原理，赞一个 👍",
    date: "2026-07-01",
    likes: 2,
    liked: false,
  },
];

export default function CommentSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>(demoComments);
  const [newComment, setNewComment] = useState({ author: "", content: "" });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.author.trim() || !newComment.content.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: newComment.author.trim(),
      avatar: newComment.author.trim().charAt(0).toUpperCase(),
      content: newComment.content.trim(),
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      liked: false,
    };

    setComments((prev) => [comment, ...prev]);
    setNewComment({ author: "", content: "" });
    setShowForm(false);
  };

  const toggleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 }
          : c
      )
    );
  };

  return (
    <div className="mt-10" id="comments">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          💬 评论
          <span className="text-sm font-normal text-muted">({comments.length})</span>
        </h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 rounded-lg bg-accent text-white text-sm hover:bg-accent-hover transition-all"
        >
          {showForm ? "取消" : "写评论"}
        </button>
      </div>

      {/* Comment Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-8 p-5 rounded-xl border border-card-border bg-card animate-fade-in">
          <div className="mb-3">
            <input
              type="text"
              value={newComment.author}
              onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
              placeholder="你的昵称"
              className="w-full px-3 py-2 rounded-lg border border-card-border bg-background text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="mb-3">
            <textarea
              value={newComment.content}
              onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
              placeholder="写下你的评论..."
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-card-border bg-background text-sm focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-accent text-white text-sm hover:bg-accent-hover transition-all"
            >
              发布评论
            </button>
          </div>
        </form>
      )}

      {/* Comment List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded-xl border border-card-border bg-card hover:border-accent/20 transition-all">
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                {comment.avatar}
              </div>

              <div className="flex-1 min-w-0">
                {/* Author + Date */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold">{comment.author}</span>
                  <span className="text-xs text-muted">{comment.date}</span>
                </div>

                {/* Content */}
                <p className="text-sm leading-relaxed">{comment.content}</p>

                {/* Actions */}
                <div className="mt-2 flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(comment.id)}
                    className={`flex items-center gap-1 text-xs transition-colors ${
                      comment.liked ? "text-accent" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {comment.liked ? "❤️" : "🤍"} {comment.likes}
                  </button>
                  <button className="text-xs text-muted hover:text-foreground transition-colors">
                    回复
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12 text-muted">
          <p className="text-3xl mb-3">💬</p>
          <p className="text-sm">还没有评论，来写第一条吧！</p>
        </div>
      )}
    </div>
  );
}
