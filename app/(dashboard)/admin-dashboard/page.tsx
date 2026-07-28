// app/dashboard/admin/page.tsx

import { AdminStats } from "@/components/dashboard/admin/admin-stats";
import { RecentUsers } from "@/components/dashboard/admin/recent-users";
import { RecentPosts } from "@/components/dashboard/admin/recent-posts";

const AdminDashboardPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-muted-foreground">
          Manage users, posts, and platform activity.
        </p>
      </div>

      <AdminStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentUsers />
        <RecentPosts />
      </div>
    </div>
  );
};

export default AdminDashboardPage;