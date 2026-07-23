import { NewsHeader } from "../_components/news-header";
import { PostCard } from "../_components/post-card";
import { NewsSidebar } from "../_components/news-sidebar";
import { Footer } from "../_components/footer";
import { PremiumBadge } from "@/components/ui/premium-badge";
import Link from "next/link";
import { Star, Lock } from "lucide-react";

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
    title: "Mastering TypeScript Advanced Types",
    excerpt: "Deep dive into TypeScript's advanced type system including generics, conditional types, and mapped types for bulletproof code.",
    author: { name: "David Park" },
    publishedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["TypeScript", "Frontend", "Best Practices"],
    commentCount: 15,
    isPremium: true,
  },
  {
    id: "p6",
    title: "Security Best Practices for Modern Web Apps",
    excerpt: "Comprehensive guide to securing your web applications against common vulnerabilities and attacks in 2024.",
    author: { name: "Lisa Wang" },
    publishedDate: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Security", "Backend", "DevOps"],
    commentCount: 28,
    isPremium: true,
  },
];

export default async function PremiumPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Premium Header Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <PremiumBadge size="md" />
              <span className="text-sm font-semibold text-primary">Exclusive Content</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-3xl">
              Premium Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Access our curated collection of in-depth technical articles, expert insights, and advanced tutorials available only to premium members.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/pricing" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Become a Premium Member
              </Link>
              <Link href="/news" className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-semibold text-foreground">
                View Free Articles
              </Link>
            </div>
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

            {/* Premium Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Premium CTA Card */}
              <div className="border border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <h3 className="font-bold text-lg text-foreground">Premium Membership</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Unlock unlimited access to all premium content, exclusive tutorials, and advanced technical insights.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Unlimited premium articles
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Early access to new content
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Ad-free experience
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Download articles as PDF
                  </li>
                </ul>
                <Link href="/pricing" className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold mt-4">
                  Subscribe Now
                </Link>
              </div>

              {/* Premium Features */}
              <div className="border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-foreground mb-4">What&apos;s Included</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-sm text-foreground">Advanced Tutorials</p>
                      <p className="text-xs text-muted-foreground">Deep-dive technical content from industry experts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-sm text-foreground">Code Examples</p>
                      <p className="text-xs text-muted-foreground">Production-ready code snippets and examples</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-sm text-foreground">Priority Support</p>
                      <p className="text-xs text-muted-foreground">Get help directly from our expert team</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Topics */}
              <div className="border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-foreground mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "APIs", "Performance", "Security", "Backend", "Design Systems"].map((tag) => (
                    <button key={tag} className="px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-xs font-medium text-foreground transition-colors">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subscription Info */}
              <div className="bg-muted/50 border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                  <p className="text-xs font-medium text-muted-foreground">MEMBER ONLY</p>
                </div>
                <p className="text-sm text-foreground">
                  Subscribe for <span className="font-bold text-primary">$99/year</span> and get access to all premium content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
