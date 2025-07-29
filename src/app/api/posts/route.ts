import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { content, authorId, anonymous } = await req.json();

  if (!content) {
    return NextResponse.json({ error: "Content required" }, { status: 400 });
  }

  const post = await prisma.post.create({
    data: {
      content,
      createdAt: new Date(),
      authorId: anonymous ? undefined : authorId,
    },
  });

  return NextResponse.json(post, { status: 201 });
}

