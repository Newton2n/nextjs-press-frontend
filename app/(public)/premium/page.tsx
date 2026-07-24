import { PostCard } from "../_components/post-card";
import { Footer } from "../_components/footer";
import { PremiumBadge } from "@/components/ui/premium-badge";
import Link from "next/link";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TPost } from "@/types";
import { getPremiumPosts } from "../_action/get-premium-post";
import { Suspense } from "react";

// Mock premium posts data


export default async function PremiumPage() {
  const posts = await getPremiumPosts();
  const premiumPosts: TPost[] = posts.data
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Premium Header Section */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <PremiumBadge size="md" />
              <span className="text-sm font-semibold text-primary">
                Exclusive Content
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-3xl">
              Premium Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Access our curated collection of in-depth technical articles,
              expert insights, and advanced tutorials available only to premium
              members.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/news"
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-semibold text-foreground"
              >
                View Free Articles
              </Link>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search premium posts..."
                // value={searchValue}
                // onChange={(e) => setSearchValue(e.target.value)}
                className="pl-10 h-11"
              />
            </div>
            <Button variant="outline" className="gap-2 h-11 px-5">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          {/* Content Full Width Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Suspense fallback = {<div>Data is loading</div>}>
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
