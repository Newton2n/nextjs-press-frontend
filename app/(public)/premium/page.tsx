import { NewsHeader } from "../_components/news-header";
import { PostCard } from "../_components/post-card";
import { NewsSidebar } from "../_components/news-sidebar";
import { Footer } from "../_components/footer";
import { PremiumBadge } from "@/components/ui/premium-badge";

// Mock premium posts data
const premiumPosts = [
  {
    id: "p1",
    title: "Advanced Next.js Optimization Techniques",
    excerpt: "Learn advanced optimization techniques to make your Next.js applications blazingly fast with Server Components and streaming.",
    author: { name: "Sarah Chen" },
    publishedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Next.js", "Performance", "Optimization"],
    commentCount: 24,
    isPremium: true,
  },
  {
    id: "p2",
    title: "Building Production-Grade APIs",
    excerpt: "Master the art of building scalable, secure, and maintainable APIs with best practices from industry experts.",
    author: { name: "Michael Rodriguez" },
    publishedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["APIs", "Backend", "Architecture"],
    commentCount: 18,
    isPremium: true,
  },
  {
    id: "p3",
    title: "Enterprise Design Systems at Scale",
    excerpt: "Discover how to build and maintain design systems that serve thousands of engineers across multiple teams.",
    author: { name: "Emma Thompson" },
    publishedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Design", "Systems", "Enterprise"],
    commentCount: 32,
    isPremium: true,
  },
  {
    id: "p4",
    title: "Real-time Data Synchronization",
    excerpt: "Implement real-time data synchronization patterns for collaborative applications with WebSockets and event streaming.",
    author: { name: "Alex Kim" },
    publishedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Real-time", "WebSockets", "Backend"],
    commentCount: 20,
    isPremium: true,
  },
  {
    id: "p5",
    title: "Security Best Practices for Modern Web Apps",
    excerpt: "Comprehensive guide to implementing security best practices including authentication, authorization, and data protection.",
    author: { name: "David Park" },
    publishedDate: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Security", "Authentication", "Best Practices"],
    commentCount: 28,
    isPremium: true,
  },
  {
    id: "p6",
    title: "Advanced Testing Strategies",
    excerpt: "Master unit testing, integration testing, and end-to-end testing strategies for comprehensive test coverage.",
    author: { name: "Lisa Wang" },
    publishedDate: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Testing", "QA", "Best Practices"],
    commentCount: 16,
    isPremium: true,
  },
];

export default async function PremiumPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Premium Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold text-foreground">Premium Content</h1>
              <PremiumBadge size="lg" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Unlock exclusive, in-depth articles written by industry experts. Get access to advanced tutorials, case studies, and best practices you won&apos;t find anywhere else.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Posts Grid */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {premiumPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
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

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <NewsSidebar />
              
              {/* Premium CTA */}
              <div className="border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-lg p-6">
                <div className="text-center space-y-4">
                  <h3 className="font-bold text-lg text-foreground">Become a Premium Member</h3>
                  <p className="text-sm text-muted-foreground">
                    Get unlimited access to all premium content, exclusive tutorials, and industry insights.
                  </p>
                  <a href="/pricing" className="inline-block w-full">
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-semibold rounded-lg hover:shadow-lg transition-shadow">
                      View Plans
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
