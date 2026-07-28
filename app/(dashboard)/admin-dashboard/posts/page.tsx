import { getMyPost } from "@/app/(dashboard)/_action/my-post";
import { PostsTable } from "../../_components/posts-table";

export default async function AdminDashboardPostsPage() {
  const posts = (await getMyPost()) || [];

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Admin Dashboard</p>
            <h1 className="text-3xl font-bold">Posts</h1>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          View and manage posts across the platform.
        </p>
      </div>

      <PostsTable
        posts={posts}
        showAuthor
        title="Posts"
        description="All posts from authors in the system"
      />
    </div>
  );
}
