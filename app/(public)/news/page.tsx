import { PostCard } from "../_components/post-card";
import { Footer } from "../_components/footer";
import { TPost } from "@/types";
import {getNormalPosts} from "../_action/post-action";
import { Suspense } from "react";
import SearchBox from "../_components/search-box";
import { PageHeader } from "../_components/news-page-header";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const query = await searchParams;
  console.log(query, "query param in news page");
  const posts = await getNormalPosts({ query });
  const normalPosts: TPost[] = posts.data;
  console.log("all normal news",normalPosts)

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          <PageHeader
            title="Latest Stories"
            description="Discover stories, insights, and ideas from our community"
          />
          <SearchBox />

          {/* Content Full Width Section */}
          <div className="space-y-6">
            {normalPosts && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Suspense fallback={<div>Data is loading</div>}>
                  {normalPosts.map((post) => (
                    <PostCard key={post.id} {...post} />
                  ))}
                </Suspense>
              </div>
            )}

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
