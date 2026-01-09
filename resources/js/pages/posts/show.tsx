import AppLayout from "@/layouts/app-layout";
import { Post } from "@/types";
import { Link } from "@inertiajs/react";

interface PostsShowProps {
  post: Post;
}

export default function PostsShow({ post }: PostsShowProps) {
  return (
    <AppLayout>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href="/about">Go to About</Link>
      </div>
    </AppLayout>
  );
}
