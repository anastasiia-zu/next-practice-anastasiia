"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostForm() {
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const router = useRouter();

  const user = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        content,
        authorId: user?.id,
        anonymous,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      setContent("");
      router.refresh();
    } else {
      console.error("Failed to post");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6">
      <textarea
        rows={3}
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="What's new?"
        className="w-full p-2 border rounded"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={e => setAnonymous(e.target.checked)}
        />
        <span>Post anonymously</span>
      </label>
      <button
        type="submit"
        className="bg-purple-500 text-white py-2 px-4 rounded"
      >
        Post
      </button>
    </form>
  );
}
