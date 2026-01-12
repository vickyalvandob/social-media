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
        <h1 className="text-xl font-semibold mb-2">{post.title}</h1>
        <p className="text-sm text-grey-500 mb-2">By {post.user.name}</p>
        <p className="text-gray-600">{post.body}</p>
      </div>
    </AppLayout>
  );
}
