'use client';

import { FileText, MessageSquare, TrendingUp, Eye } from 'lucide-react';
import { StatCard } from '../_components/stat-card';
import { ActivityFeed, ActivityItem } from '../_components/activity-feed';
import { DataTable, TableColumn, TableRow } from '../_components/data-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Demo data - replace with API calls when backend is ready
const demoStats = [
  {
    icon: FileText,
    label: 'My Posts',
    value: '12',
    change: '+2 this month',
    variant: 'default' as const,
  },
  {
    icon: Eye,
    label: 'Total Views',
    value: '3,245',
    change: '+125 today',
    variant: 'success' as const,
  },
  {
    icon: MessageSquare,
    label: 'Comments',
    value: '84',
    change: '+12 this week',
    variant: 'warning' as const,
  },
  {
    icon: TrendingUp,
    label: 'Engagement',
    value: '8.5%',
    change: '+0.3% from last week',
    variant: 'default' as const,
  },
];

const demoActivities: ActivityItem[] = [
  {
    id: '1',
    title: 'New comment on "Getting Started with React"',
    description: 'John Doe commented on your post',
    timestamp: '2 hours ago',
    type: 'comment',
  },
  {
    id: '2',
    title: 'Your post reached 500 views',
    description: '"Advanced TypeScript Patterns" milestone',
    timestamp: '1 day ago',
    type: 'post',
  },
  {
    id: '3',
    title: 'New subscriber',
    description: 'Jane Smith subscribed to your updates',
    timestamp: '2 days ago',
    type: 'user',
  },
  {
    id: '4',
    title: 'System maintenance completed',
    description: 'Platform upgraded to latest version',
    timestamp: '3 days ago',
    type: 'system',
  },
];

const demoRecentPosts: TableRow[] = [
  {
    id: '1',
    title: 'Getting Started with React Hooks',
    status: 'Published',
    views: '1,234',
    date: 'Mar 15, 2024',
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    status: 'Published',
    views: '892',
    date: 'Mar 10, 2024',
  },
  {
    id: '3',
    title: 'State Management Best Practices',
    status: 'Draft',
    views: '0',
    date: 'Mar 8, 2024',
  },
];

const postColumns: TableColumn[] = [
  { key: 'title', label: 'Title' },
  {
    key: 'status',
    label: 'Status',
    render: (value) => (
      <span className={`px-2 py-1 rounded text-xs font-medium ${
        value === 'Published'
          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
          : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
      }`}>
        {value}
      </span>
    ),
  },
  { key: 'views', label: 'Views' },
  { key: 'date', label: 'Date' },
];

export default function UserDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here&apos;s what&apos;s happening with your content.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {demoStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Posts */}
        <div className="lg:col-span-2">
          <DataTable
            title="Recent Posts"
            description="Your latest published and draft posts"
            columns={postColumns}
            rows={demoRecentPosts}
          />
        </div>

        {/* Quick Stats Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>This week overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Avg. Views/Post</p>
              <p className="text-2xl font-bold">270</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Top Post</p>
              <p className="text-sm font-semibold">React Hooks Guide</p>
              <p className="text-xs text-muted-foreground">1,234 views</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Avg. Read Time</p>
              <p className="text-2xl font-bold">5m</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed */}
      <ActivityFeed
        title="Recent Activity"
        description="Latest interactions with your content"
        activities={demoActivities}
      />
    </div>
  );
}
