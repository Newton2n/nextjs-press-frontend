import { PostCard } from "../_components/post-card";
import { Footer } from "../_components/footer";
import { TPost } from "@/types";
import {getNormalPosts} from "../_action/post-action";
import SearchBox from "../_components/search-box";
import { PageHeader } from "../_components/news-page-header";
import { EmptyState } from "@/components/shared/async-state";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const query = await searchParams;
  const posts = await getNormalPosts({ query });
  const normalPosts: TPost[] = posts.data ?? [];

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
            {normalPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {normalPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No stories found"
                description="Try a different search or check back soon for new reporting from the Prisma Press community."
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
