import { Card } from "@/components/ui/card";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

const trendingTags = [
  "Technology",
  "Design",
  "Productivity",
  "Business",
  "Writing",
  "Web Development",
];

const recentPosts = [
  {
    id: "1",
    title: "Getting Started with React",
    author: "Jane Doe",
  },
  {
    id: "2",
    title: "The Future of Web Design",
    author: "John Smith",
  },
  {
    id: "3",
    title: "Productivity Tips for Writers",
    author: "Alice Johnson",
  },
];

export function NewsSidebar() {
  return (
    <div className="space-y-6">
      {/* Trending */}
      <Card className="p-6 border border-border">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Trending</h3>
        </div>
        <div className="space-y-2">
          {trendingTags.map((tag) => (
            <Link
              key={tag}
              href={`/news?tag=${tag}`}
              className="block px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm text-foreground transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </Card>

      {/* Recent Posts */}
      <Card className="p-6 border border-border">
        <h3 className="font-semibold text-foreground mb-4">Recent Posts</h3>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.id}`}
              className="block group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{post.author}</p>
            </Link>
          ))}
        </div>
      </Card>

      {/* Newsletter */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Subscribe</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get new posts delivered to your inbox weekly.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-3 py-2 rounded-md bg-background/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium">
            Join
          </button>
        </div>
      </Card>
    </div>
  );
}
