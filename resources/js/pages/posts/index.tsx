import AppLayout from "@/layouts/app-layout";
import { Post } from "@/types";
import { Link } from "@inertiajs/react";

interface PostsIndexProps {
  posts: Post[];
}

export default function PostsShow({ posts }: PostsIndexProps) {
  return (
    <AppLayout>
      <div>
        <h1>Posts</h1>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          <div>
            {posts.map(post => (
              <div>
                <h2>
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </h2>
                <p>
                  {post.body.substring(0, 200)}
                  {post.body.length > 200 && "..."}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
