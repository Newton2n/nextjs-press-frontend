'use client';

import { FileText, Eye, MessageSquare, TrendingUp, BarChart3 } from 'lucide-react';
import { StatCard } from '../_components/stat-card';
import { ActivityFeed, ActivityItem } from '../_components/activity-feed';
import { DataTable, TableColumn, TableRow } from '../_components/data-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Demo data - replace with API calls when backend is ready
const demoAuthorStats = [
  {
    icon: FileText,
    label: 'Published Posts',
    value: '24',
    change: '+2 this month',
    variant: 'default' as const,
  },
  {
    icon: Eye,
    label: 'Total Views',
    value: '15.3K',
    change: '+2.5K this week',
    variant: 'success' as const,
  },
  {
    icon: MessageSquare,
    label: 'Total Comments',
    value: '342',
    change: '+45 this month',
    variant: 'warning' as const,
  },
  {
    icon: TrendingUp,
    label: 'Avg. Engagement',
    value: '6.8%',
    change: '+0.5% from last month',
    variant: 'default' as const,
  },
];

const demoAuthorActivities: ActivityItem[] = [
  {
    id: '1',
    title: 'New comment on "React Hooks Guide"',
    description: 'User asked about useContext best practices',
    timestamp: '30 minutes ago',
    type: 'comment',
  },
  {
    id: '2',
    title: 'Your post reached 1,000 views',
    description: '"Advanced TypeScript Patterns" milestone',
    timestamp: '2 hours ago',
    type: 'post',
  },
  {
    id: '3',
    title: '5 new subscribers',
    description: 'Following your recent publications',
    timestamp: '1 day ago',
    type: 'user',
  },
  {
    id: '4',
    title: 'Post featured in newsletter',
    description: '"Next.js 14 Guide" featured in weekly digest',
    timestamp: '2 days ago',
    type: 'post',
  },
];

const demoAuthorPosts: TableRow[] = [
  {
    id: '1',
    title: 'Getting Started with React Hooks',
    status: 'Published',
    views: '3,456',
    comments: '87',
    date: 'Mar 15, 2024',
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    status: 'Published',
    views: '2,891',
    comments: '156',
    date: 'Mar 10, 2024',
  },
  {
    id: '3',
    title: 'State Management Best Practices',
    status: 'Draft',
    views: '0',
    comments: '0',
    date: 'Mar 8, 2024',
  },
  {
    id: '4',
    title: 'Next.js 14 Deep Dive',
    status: 'Published',
    views: '4,123',
    comments: '203',
    date: 'Mar 5, 2024',
  },
];

const postColumns: TableColumn[] = [
  { key: 'title', label: 'Title' },
  {
    key: 'status',
    label: 'Status',
    render: (value) => (
      <Badge className={`${
        value === 'Published'
          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
          : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
      }`}>
        {value}
      </Badge>
    ),
  },
  { key: 'views', label: 'Views' },
  { key: 'comments', label: 'Comments' },
  { key: 'date', label: 'Date' },
];

const performanceData = [
  { name: 'React Hooks', views: 3456, engagement: 8.2 },
  { name: 'TypeScript', views: 2891, engagement: 7.1 },
  { name: 'Next.js', views: 4123, engagement: 8.9 },
  { name: 'State Mgmt', views: 1234, engagement: 5.3 },
];

export default function AuthorDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Author Dashboard</h1>
        <p className="text-muted-foreground mt-2">Track your content performance and engage with your readers.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {demoAuthorStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* My Posts */}
        <div className="lg:col-span-2">
          <DataTable
            title="My Posts"
            description="Your recent publications and drafts"
            columns={postColumns}
            rows={demoAuthorPosts}
          />
        </div>

        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Performance
            </CardTitle>
            <CardDescription>Top performing posts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {performanceData.map((post, idx) => (
              <div key={idx} className="space-y-2 pb-4 border-b last:pb-0 last:border-0">
                <p className="text-sm font-medium truncate">{post.name}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{post.views} views</p>
                  <p className="text-xs font-semibold">{post.engagement}% eng.</p>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2"
                    style={{ width: `${(post.engagement / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Reader Interaction */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Activity Feed */}
        <ActivityFeed
          title="Reader Interactions"
          description="Comments and engagement on your posts"
          activities={demoAuthorActivities}
        />

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Write New Post
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors">
              View Analytics
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors">
              Manage Subscribers
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors">
              Draft Editor
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
