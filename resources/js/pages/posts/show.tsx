import CommentCard from "@/components/comment-card";
import CommentForm from "@/components/comment-form";
import CommentList from "@/components/comment-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { Comment, Post } from "@/types";
import { Deferred, Link, usePoll } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

interface PostsShowProps {
  post: Post;
  comments?: Comment[]
}

export default function PostsShow({ post, comments }: PostsShowProps) {
  const commentsSectionRef = useRef<HTMLDivElement>(null);
  
  const commentCountRef = useRef(comments?.length ?? 0);
  const iAmWritingComment = useRef(false);

  const scrollToComments = () => 
      commentsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

  usePoll(3_000, {
    only: ["comments"],
  });

useEffect(() => {
  const newCommentCount = comments?.length ?? 0;

  // comment baru dari orang lain
  if (
    newCommentCount > commentCountRef.current &&
    commentCountRef.current > 0 &&
    !iAmWritingComment.current
  ) {
    toast("New comments available", {
      duration: 6_000,
      action: {
        label: "View Comments",
        onClick: scrollToComments,
      },
    });
  }

  // reset flag HANYA jika ini hasil comment kita sendiri
  if (
    iAmWritingComment.current &&
    newCommentCount > commentCountRef.current
  ) {
    iAmWritingComment.current = false;
  }

  commentCountRef.current = newCommentCount;
}, [comments]);


  const handleCommentAdded = () => {
    iAmWritingComment.current = true;
    toast("Comment has added", {
      description: "Your comment is already live and visible"
    })
   
  }


  return (
    <AppLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {post.title}
            </CardTitle>
            <CardDescription>
              By {post.user?.name} on {" "} {new Date(post.created_at).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 whitespace-pre-wrap">{post.body}</p>
          </CardContent>
        </Card>

        <CommentForm 
          postId={post.id} 
          onCommentAdded={handleCommentAdded} 
        />

        <div ref={commentsSectionRef}>
          <Deferred 
            data="comments"
            fallback={<CommentList comments={comments} />}
            >
              <CommentList comments={comments} />
          </Deferred>
        </div>
      </div>
    </AppLayout>
  );
}
