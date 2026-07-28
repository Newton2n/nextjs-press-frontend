// app/dashboard/author/page.tsx

import { AuthorStats } from "@/components/dashboard/author/author-stats";
import { RecentPosts } from "@/components/dashboard/author/recent-posts";
import { PostPerformance } from "@/components/dashboard/author/post-performance";

const AuthorDashboardPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Author Dashboard
        </h1>

        <p className="text-muted-foreground">
          Track your content and post performance.
        </p>
      </div>

      <AuthorStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentPosts />
        <PostPerformance />
      </div>
    </div>
  );
};

export default AuthorDashboardPage;