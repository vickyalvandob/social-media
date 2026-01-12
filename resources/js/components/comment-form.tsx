import { Form } from "@inertiajs/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { InputError } from "./input-error";
import { Button } from "./ui/button";

interface CommentFormProps {
  postId: number;
}

export default function CommentForm({postId}: CommentFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Add Comment
        </CardTitle>
        <CardDescription>
          Share your thoughts about this post
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form 
        action="/comments" 
        method="post" 
        className="space-y-4"
        resetOnSuccess
        >
        {({errors, processing}) => (
          <>
            <Input 
              type="hidden"
              name="post_id"
              value={postId}
            />
            <div className="space-y-2">
              <Textarea
                id="body"
                name="body"
                placeholder="Write your comment here..."
                aria-invalid={!!errors.body}
              />
              <InputError message={errors.body} />
            </div>
            <Button type="submit" disabled={processing}>
              {processing ? "Adding Comment.." : "Add Comment"}
            </Button>
          </>
        )}

        </Form>
      </CardContent>
    </Card>
  )
}