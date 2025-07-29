import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { content, authorId } = await req.json();
  if (!content || !authorId) {
    return NextResponse.json(
      { error: "Missing content or author" },
      { status: 400 }
    );
  }
  const post = await prisma.post.create({
    data: { content, authorId },
  });
  return NextResponse.json(post, { status: 201 });
}
