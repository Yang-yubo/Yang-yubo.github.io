import { blogPosts } from "@/data/site";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
