import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Vibe App</h1>
      <div className="space-x-4">
        <Link href="/login" className="px-4 py-2 bg-purple-500 text-white rounded">
          Login
        </Link>
        <Link href="/register" className="px-4 py-2 bg-pink-500 text-white rounded">
          Register
        </Link>
        <Link href="/feed" className="px-4 py-2 border border-gray-300 rounded">
          Go to Feed
        </Link>
      </div>
    </main>
  );
}
