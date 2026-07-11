export const dynamic = "force-static";
import { NextResponse } from "next/server";
import { blogPosts } from "@/data/site";

export async function GET() {
  return NextResponse.json(blogPosts);
}
