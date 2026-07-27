"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { createPostAction, updatePostAction } from "../_action/post-action";

interface PostFormProps {
  post?: Post;
  isEditing?: boolean;
}

interface Post {
  id: string;
  title: string;
  content: string;
  tags: string[];
  isPremium: boolean;
  thumbnail: string;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";
}

type ActionState = {
  success: boolean;
  message: string;
  errors?: {
    title?: string;
    content?: string;
    tags?: string;
  };
};

const initialState: ActionState = {
  success: false,
  message: "",
};

export function PostForm({ post, isEditing = false }: PostFormProps) {
  const router = useRouter();
  const mode = isEditing ? "update" : "create";
  const action = mode === "update" ? updatePostAction.bind(null, post?.id as string) : createPostAction;

  const [state, formAction, isPending] = useActionState(
    action,
    initialState,
  );



  return (
    <form action={formAction} className="space-y-6">
      {/* Post Information */}
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Post" : "Create New Post"}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>

            <Input
              id="title"
              name="title"
              defaultValue={post?.title}
              placeholder="Enter your post title"
            />
          </div>
          {/* thumbnail */}
          <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail (URL-Unsplash)</Label>

            <Input
              id="thumbnail"
              name="thumbnail"
              defaultValue={post?.thumbnail}
              placeholder="Enter thumbnail URL"
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>

            <Textarea
              id="content"
              name="content"
              defaultValue={post?.content}
              placeholder="Write your post..."
              rows={12}
            />
          </div>
          {/* tags */}
          <div className="space-y-2">
            <Label htmlFor="tag">Tags (comma separated)</Label>

            <Input
              id="tags"
              name="tags"
              defaultValue={post?.tags?.join(", ")}
              placeholder="tech, sports"
            />
          </div>
        </CardContent>
      </Card>

      {/* Publishing */}
      <Card>
        <CardHeader>
          <CardTitle>Publishing</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-start gap-3">
            <Checkbox
              id="isPremium"
              name="isPremium"
              defaultChecked={post?.isPremium}
            />

            <div>
              <Label htmlFor="isPremium">Premium Post</Label>

              <p className="text-sm text-muted-foreground">
                Only premium subscribers can read this post.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Server Response */}
      {state.message && (
        <p
          className={
            state.success
              ? "text-sm text-green-600"
              : "text-sm text-destructive"
          }
        >
          {state.message}
        </p>
      )}

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={isPending}
        >
          Cancel
        </Button>

        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Check className="mr-2 h-4 w-4" />
              {isEditing ? "Update Post" : "Create Post"}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
