"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostForm() {
  const [content, setContent] = useState("");
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        content,
        authorId: user?.id, 
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      setContent("");
      router.refresh();
    }
  };

  return (
    <form onSubmit={submit} className="space-y-2 mb-4">
      <textarea
        rows={3}
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="What's on your mind?"
      />
      <button
        type="submit"
        className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple600"
      >
        Post
      </button>
    </form>
  );
}
