import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "@/lib/posts";
import type { Metadata } from "next";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block"
      >
        &larr; Back
      </Link>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <time className="text-sm text-gray-500 mt-2 block">{post.date}</time>
      <div className="mt-8 prose prose-gray max-w-none whitespace-pre-line">
        {post.content}
      </div>
    </article>
  );
}
