import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Comment } from "@/types";

interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard({comment}: CommentCardProps) {
  return (
    <Card className="rounded-none border-b-0 last:border-b last:rounded-b-xl first:rounded-t-xl">
      <CardHeader>
        <CardTitle>
          {comment.user?.name}
        </CardTitle>
        <CardDescription>
          {new Date(comment.created_at).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>{comment.body}</CardContent>
    </Card>
  )
}