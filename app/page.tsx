import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Posts</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="group block">
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <time className="text-sm text-gray-500 mt-1 block">
                {post.date}
              </time>
              <p className="text-gray-600 mt-2">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
