"use client";

import { PostForm } from "../../_components/post-form";
import { Card } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: {
    name: string;
    id: string;
  };
  publishedDate: string;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";
  tags: string[];
  isPremium: boolean;
  commentCount: number;
}

export default function EditPostPage({
  params,
}: {
  params: { postId: string };
}) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch post from localStorage
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const foundPost = posts.find((p: Post) => p.id === params.postId);
    setPost(foundPost || null);
    setLoading(false);
  }, [params.postId]);

  if (loading) {
    return (
      <main className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">Loading post...</p>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800 rounded-lg p-6 text-center">
            <p className="text-red-600 dark:text-red-400 font-semibold mb-4">
              Post not found
            </p>
            <Link
              href="/profile/user-1"
              className="text-primary hover:underline font-medium"
            >
              ← Back to Profile
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href={`/profile/${post.author.id}`}
            className="text-primary hover:underline text-sm font-medium mb-4 inline-block"
          >
            ← Back to Profile
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Pencil className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Edit Post</h1>
              <p className="text-muted-foreground mt-1">
                Update your post content
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <Card className="border border-border p-8">
          <PostForm
            post={post}
            isEditing={true}
          />
        </Card>
      </div>
    </main>
  );
}
