import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibe App",
  description: "Simple feed with Prisma & Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-gray-800 min-h-screen">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
