export const dynamic = "force-static";
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ success: true, message: "留言已收到！" });
}

export async function GET() {
  return NextResponse.json([]);
}
