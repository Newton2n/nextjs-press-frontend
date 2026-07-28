'use client';

import { Users, FileText, TrendingUp, AlertCircle, Activity, Eye } from 'lucide-react';
import { StatCard } from '../_components/stat-card';
import { ActivityFeed, ActivityItem } from '../_components/activity-feed';
import { DataTable, TableColumn, TableRow } from '../_components/data-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Demo data - replace with API calls when backend is ready
const demoAdminStats = [
  {
    icon: Users,
    label: 'Total Users',
    value: '1,234',
    change: '+45 this month',
    variant: 'default' as const,
  },
  {
    icon: FileText,
    label: 'Total Posts',
    value: '3,891',
    change: '+234 this month',
    variant: 'success' as const,
  },
  {
    icon: Eye,
    label: 'Total Views',
    value: '125.4K',
    change: '+12.5K this week',
    variant: 'warning' as const,
  },
  {
    icon: AlertCircle,
    label: 'Flagged Content',
    value: '23',
    change: '5 pending review',
    variant: 'danger' as const,
  },
];

const demoSystemActivities: ActivityItem[] = [
  {
    id: '1',
    title: 'New user registration: @john_doe',
    description: 'Premium plan selected',
    timestamp: '1 hour ago',
    type: 'user',
  },
  {
    id: '2',
    title: 'Content flagged for review',
    description: 'Post #4521 - Potential copyright issue',
    timestamp: '2 hours ago',
    type: 'system',
  },
  {
    id: '3',
    title: 'Database backup completed',
    description: 'Daily backup - 45GB',
    timestamp: '3 hours ago',
    type: 'system',
  },
  {
    id: '4',
    title: 'User @jane_smith suspended',
    description: 'Violation of community guidelines',
    timestamp: '5 hours ago',
    type: 'system',
  },
  {
    id: '5',
    title: 'New premium subscriber',
    description: '@mike_chen - Annual plan',
    timestamp: '1 day ago',
    type: 'user',
  },
];

const demoRecentUsers: TableRow[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Author',
    joinDate: 'Mar 15, 2024',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Admin',
    joinDate: 'Feb 10, 2024',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike@example.com',
    role: 'Author',
    joinDate: 'Jan 5, 2024',
    status: 'Inactive',
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    role: 'User',
    joinDate: 'Mar 20, 2024',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Author',
    joinDate: 'Mar 18, 2024',
    status: 'Active',
  },
];

const demoRecentPosts: TableRow[] = [
  {
    id: '1',
    title: 'Getting Started with React Hooks',
    author: 'John Doe',
    status: 'Published',
    views: '1,234',
    date: 'Mar 15, 2024',
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    author: 'Jane Smith',
    status: 'Published',
    views: '892',
    date: 'Mar 14, 2024',
  },
  {
    id: '3',
    title: 'State Management Best Practices',
    author: 'Mike Chen',
    status: 'Flagged',
    views: '456',
    date: 'Mar 13, 2024',
  },
  {
    id: '4',
    title: 'Next.js 14 Deep Dive',
    author: 'Sarah Wilson',
    status: 'Published',
    views: '2,103',
    date: 'Mar 12, 2024',
  },
  {
    id: '5',
    title: 'Testing Strategies for React',
    author: 'Alex Johnson',
    status: 'Draft',
    views: '0',
    date: 'Mar 11, 2024',
  },
];

const userColumns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'joinDate', label: 'Join Date' },
  {
    key: 'status',
    label: 'Status',
    render: (value) => (
      <Badge className={`${
        value === 'Active'
          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
          : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
      }`}>
        {value}
      </Badge>
    ),
  },
];

const postColumns: TableColumn[] = [
  { key: 'title', label: 'Title' },
  { key: 'author', label: 'Author' },
  {
    key: 'status',
    label: 'Status',
    render: (value) => {
      const colors = {
        'Published': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        'Draft': 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300',
        'Flagged': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      };
      return (
        <Badge className={colors[value as keyof typeof colors] || colors['Draft']}>
          {value}
        </Badge>
      );
    },
  },
  { key: 'views', label: 'Views' },
  { key: 'date', label: 'Date' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage users, posts, and monitor platform activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {demoAdminStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Users */}
        <div className="lg:col-span-2">
          <DataTable
            title="Recent Users"
            description="Latest user registrations and activity"
            columns={userColumns}
            rows={demoRecentUsers}
          />
        </div>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              System Health
            </CardTitle>
            <CardDescription>Platform status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Server Status</p>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  Healthy
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Database</p>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  Connected
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">API Response</p>
                <p className="text-sm font-semibold">145ms</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Storage Used</p>
                <p className="text-sm font-semibold">245GB / 500GB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Posts */}
      <DataTable
        title="Recent Posts"
        description="Latest posts across all authors"
        columns={postColumns}
        rows={demoRecentPosts}
      />

      {/* System Activity Feed */}
      <ActivityFeed
        title="System Activity"
        description="Platform-wide activity and events"
        activities={demoSystemActivities}
      />
    </div>
  );
}
