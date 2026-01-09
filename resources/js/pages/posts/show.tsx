import AppLayout from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";

interface PostsShowProps {
  post: {
    title: string;
    body: string;
  };
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
