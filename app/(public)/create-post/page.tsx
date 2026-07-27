import { PostForm } from "../_components/post-form";
import { Card } from "@/components/ui/card";
import { PenTool } from "lucide-react";
import Link from "next/link";

export default function CreatePostPage() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:underline text-sm font-medium mb-4 inline-block">
            ← Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <PenTool className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Create New Post</h1>
              <p className="text-muted-foreground mt-1">Share your knowledge and insights with the community</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <Card className="border border-border p-8">
          <PostForm
          />
        </Card>

        {/* Tips Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6 bg-card/50">
            <h3 className="font-bold text-foreground mb-2">✍️ Write Great Content</h3>
            <p className="text-sm text-muted-foreground">
              Focus on clear, engaging writing. Use headings and short paragraphs for better readability.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card/50">
            <h3 className="font-bold text-foreground mb-2">🏷️ Add Relevant Tags</h3>
            <p className="text-sm text-muted-foreground">
              Use tags that accurately describe your content. This helps readers find your post.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card/50">
            <h3 className="font-bold text-foreground mb-2">⭐ Mark as Premium</h3>
            <p className="text-sm text-muted-foreground">
              Premium posts are only visible to subscribers and earn you more engagement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
