import { PostCard } from "../_components/post-card";
import { Footer } from "../_components/footer";
import { TPost } from "@/types";
import { getPremiumPosts } from "../_action/get-premium-post";
import { Suspense } from "react";
import SearchBox from "../_components/search-box";
import { PageHeader } from "../_components/news-page-header";

// Mock premium posts data

export default async function PremiumPage({
  searchParams,
}: {
  searchParams:Promise< { [key: string]: string | undefined }>;
}) {
  const query = await searchParams;
  console.log(query, "query param in premium page");
  const posts = await getPremiumPosts({query});
  const premiumPosts: TPost[] = posts.data;
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Premium Header Section */}
          <PageHeader
            title="Premium Content"
            description="Exclusive stories and insights for our valued subscribers"
            isPremium={true}
          />

          {/* Search and Filter Section */}
          <SearchBox />

          {/* Content Full Width Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Suspense fallback={<div>Data is loading</div>}>
                {premiumPosts.map((post) => (
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
