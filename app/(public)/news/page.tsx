import { NewsHeader } from "../_components/news-header";
import { PostCard } from "../_components/post-card";
import { NewsSidebar } from "../_components/news-sidebar";
import { Footer } from "../_components/footer";

// Mock data for display
const mockPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 16",
    excerpt: "Explore the latest features and improvements in Next.js 16, including improved caching APIs and React Compiler support.",
    author: { name: "Sarah Chen" },
    publishedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Next.js", "Web Development", "React"],
    commentCount: 12,
    isPremium: true,
  },
  {
    id: "2",
    title: "The Art of Technical Writing",
    excerpt: "Learn how to write clear, engaging technical documentation that resonates with your audience.",
    author: { name: "Michael Rodriguez" },
    publishedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Writing", "Documentation"],
    commentCount: 8,
  },
  {
    id: "3",
    title: "Building Scalable Design Systems",
    excerpt: "Discover best practices for creating design systems that scale across your entire organization.",
    author: { name: "Emma Thompson" },
    publishedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Design", "Systems", "Frontend"],
    commentCount: 15,
    isPremium: false,
  },
  {
    id: "4",
    title: "Productivity Hacks for Developers",
    excerpt: "Simple strategies to boost your productivity and maintain work-life balance as a developer.",
    author: { name: "Alex Kim" },
    publishedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Productivity", "Career"],
    commentCount: 6,
  },
  {
    id: "5",
    title: "Understanding Web Performance",
    excerpt: "Deep dive into Web Vitals, Core Web Vitals, and how to optimize your website's performance metrics.",
    author: { name: "David Park" },
    publishedDate: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["Performance", "Web Development"],
    commentCount: 10,
  },
  {
    id: "6",
    title: "CSS Tips and Tricks 2024",
    excerpt: "Explore modern CSS features and techniques to write cleaner, more maintainable stylesheets.",
    author: { name: "Lisa Wang" },
    publishedDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED" as const,
    tags: ["CSS", "Frontend", "Design"],
    commentCount: 20,
    isPremium: true,
  },
];

export default async function NewsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <NewsHeader />

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Posts Grid */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockPosts.map((post) => (
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
            <div className="lg:col-span-1">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
