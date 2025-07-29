import prisma from "@/lib/prisma";
import NewPostForm from "@/components/NewPostForm";

export default async function FeedPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: true },
  });

  return (
    <section className="max-w-xl mx-auto mt-8">
      <NewPostForm />
      {posts.map(post => (
        <div
          key={post.id}
          className="p-4 border rounded bg-purple-100 mb-4"
        >
          <p className="mb-2">{post.content}</p>
          <small className="text-gray-600">
            by {post.author.username}
          </small>
        </div>
      ))}
    </section>
  );
}
