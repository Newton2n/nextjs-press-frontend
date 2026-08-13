"use client";

import { AlertCircle, Eye, FileText, Users } from "lucide-react";

import { StatCard } from "../_components/stat-card";
import { ActivityFeed } from "../_components/activity-feed";
import { DataTable } from "../_components/data-table";

import type { ActivityItem } from "../_components/activity-feed";
import type { TableColumn, TableRow } from "../_components/data-table";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* Table columns                                                              */

const userColumns: TableColumn[] = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "joinDate",
    label: "Join Date",
  },
  {
    key: "status",
    label: "Status",
    render: (value) => (
      <Badge
        variant="outline"
        className={
          value === "Active"
            ? "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400"
            : "border-muted bg-muted text-muted-foreground"
        }
      >
        {value}
      </Badge>
    ),
  },
];

const postColumns: TableColumn[] = [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "author",
    label: "Author",
  },
  {
    key: "status",
    label: "Status",
    render: (value) => {
      const statusStyles: Record<string, string> = {
        Published:
          "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400",

        Draft: "border-muted bg-muted text-muted-foreground",

        Flagged:
          "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
      };

      return (
        <Badge
          variant="outline"
          className={
            statusStyles[value] ?? "border-muted bg-muted text-muted-foreground"
          }
        >
          {value}
        </Badge>
      );
    },
  },
  {
    key: "views",
    label: "Views",
  },
  {
    key: "date",
    label: "Date",
  },
];

/* Dashboard stats                                                            */

// These values will be replaced with real API data later.
const dashboardStats = [
  {
    icon: Users,
    label: "Total Users",
    value: "—",
    change: "User statistics will appear here",
    variant: "default" as const,
  },
  {
    icon: FileText,
    label: "Total Posts",
    value: "—",
    change: "Post statistics will appear here",
    variant: "success" as const,
  },
  {
    icon: Eye,
    label: "Total Views",
    value: "—",
    change: "View analytics will appear here",
    variant: "warning" as const,
  },
  {
    icon: AlertCircle,
    label: "Flagged Content",
    value: "—",
    change: "Moderation statistics will appear here",
    variant: "danger" as const,
  },
];

/* Empty data                                                                 */

// Keep these empty until the real API is connected.
const recentUsers: TableRow[] = [];

const recentPosts: TableRow[] = [];

const systemActivities: ActivityItem[] = [];

/* Admin Dashboard                                                            */

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Dashboard heading */}

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>

        <p className="max-w-2xl text-muted-foreground">
          Manage users, moderate content, monitor platform activity, and
          maintain Prisma Press from one place.
        </p>
      </div>

      {/* Main platform statistics */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Recent users and admin note */}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recently registered users */}

        <div className="min-w-0 lg:col-span-2">
          <DataTable
            title="Recent Users"
            description="Newly registered users will appear here."
            columns={userColumns}
            rows={recentUsers}
          />
        </div>

        {/* Simple admin note instead of system health */}

        <Card>
          <CardHeader>
            <CardTitle>Admin Note</CardTitle>

            <CardDescription>
              A quick overview of what you can manage from here.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">
              Keep an eye on new users, published content, and reported posts.
              Use the admin sections to review activity and take action when
              necessary.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent posts */}

      <DataTable
        title="Recent Posts"
        description="Published, draft, and moderated posts will appear here."
        columns={postColumns}
        rows={recentPosts}
      />

      {/* Platform activity */}

      <ActivityFeed
        title="System Activity"
        description="Important platform events and administrative actions will appear here."
        activities={systemActivities}
      />
    </div>
  );
}
