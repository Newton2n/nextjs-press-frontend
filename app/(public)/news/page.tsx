import { NewsHeader } from "../_components/news-header";
import { PostCard } from "../_components/post-card";
import { Footer } from "../_components/footer";
import { TPost } from "@/types";
import { getNormalPosts } from "../_action/get-posts";
import { Suspense } from "react";

export default async function NewsPage() {
  const posts = await getNormalPosts();
  const normalPosts: TPost[] = posts.data;

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          <NewsHeader />

          {/* Content Full Width Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Suspense fallback={<div>Data is loading</div>}>
                {normalPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </Suspense>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-8">
              <button className="px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium text-foreground">
                Previous
              </button>
              <button className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                1
              </button>
              <button className="px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium text-foreground">
                2
              </button>
              <button className="px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium text-foreground">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
