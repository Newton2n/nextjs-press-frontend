import { getMyPost } from "@/app/(dashboard)/_action/my-post";
import { PostsTable } from "../../_components/posts-table";

export default async function AuthorDashboardPostsPage() {
  const posts = (await getMyPost()) || [];

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Author Dashboard</p>
            <h1 className="text-3xl font-bold">My Posts</h1>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Review all of your posts in one place.
        </p>
      </div>

      <PostsTable
        posts={posts}
        title="My Posts"
        description="Your authored posts and their current status"
      />
    </div>
  );
}
