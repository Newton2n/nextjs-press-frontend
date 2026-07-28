# Role-Based Dashboard System

## Overview

The dashboard system is now fully implemented with three role-based dashboards, reusable components, and demo data ready for backend integration.

### Dashboard Routes

- **User Dashboard**: `/dashboard` - For regular users (USER role)
- **Author Dashboard**: `/author-dashboard` - For content creators (AUTHOR role)
- **Admin Dashboard**: `/admin-dashboard` - For system administrators (ADMIN role)

---

## Architecture

### Dashboard Layout

All dashboards share a unified layout defined in `app/(dashboard)/layout.tsx`:

```
DashboardLayout (Server Component)
├── DashboardShell (Client Component)
│   ├── DashboardSidebar (with role-based navigation)
│   ├── DashboardHeader (with user menu & notifications)
│   └── Main Content Area
```

The `DashboardShell` component:
- Takes a `user` object with `name`, `email`, and `role`
- Automatically displays role-based sidebar navigation
- Provides a consistent header with user profile menu

### Reusable Components

Located in `app/(dashboard)/_components/`:

#### 1. **StatCard** (`stat-card.tsx`)
Displays key metrics in a card format.

```tsx
import { StatCard } from '@/(dashboard)/_components/stat-card';
import { FileText } from 'lucide-react';

<StatCard
  icon={FileText}
  label="Total Posts"
  value="24"
  change="+2 this month"
  variant="default" // or 'success', 'warning', 'danger'
/>
```

#### 2. **DataTable** (`data-table.tsx`)
Reusable table component for displaying data rows.

```tsx
import { DataTable, TableColumn, TableRow } from '@/(dashboard)/_components/data-table';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { 
    key: 'status', 
    label: 'Status',
    render: (value) => <Badge>{value}</Badge> // Custom render
  },
];

const rows: TableRow[] = [
  { id: '1', name: 'John', status: 'Active' },
];

<DataTable
  title="Users"
  description="All users"
  columns={columns}
  rows={rows}
/>
```

#### 3. **ActivityFeed** (`activity-feed.tsx`)
Timeline of recent activities with type badges.

```tsx
import { ActivityFeed, ActivityItem } from '@/(dashboard)/_components/activity-feed';

const activities: ActivityItem[] = [
  {
    id: '1',
    title: 'New comment',
    description: 'User commented on your post',
    timestamp: '2 hours ago',
    type: 'comment', // 'post', 'comment', 'user', 'system'
  },
];

<ActivityFeed
  title="Recent Activity"
  description="Latest platform activity"
  activities={activities}
/>
```

---

## Dashboard Implementations

### User Dashboard (`/dashboard`)

**Features:**
- 4 stat cards: Posts, Views, Comments, Engagement
- Recent posts table with status and view counts
- Quick stats card with average metrics
- Activity feed for user interactions

**Demo Data Structure:**
```tsx
- Stats: 12 posts, 3,245 views, 84 comments, 8.5% engagement
- Recent Posts: 3 example posts with different statuses
- Activities: 4 interaction examples
```

**When Backend Ready:**
- Replace `demoStats` with API call to fetch user metrics
- Replace `demoRecentPosts` with user's actual posts
- Replace `demoActivities` with real user interactions

---

### Author Dashboard (`/author-dashboard`)

**Features:**
- 4 stat cards: Published Posts, Total Views, Comments, Engagement
- My Posts table showing performance
- Performance summary card with top posts
- Quick actions button group
- Reader interactions activity feed

**Demo Data Structure:**
```tsx
- Stats: 24 posts, 15.3K views, 342 comments, 6.8% engagement
- Posts: 4 example posts with detailed metrics
- Performance: Top 4 posts with engagement rates
- Activities: 4 reader interaction examples
```

**When Backend Ready:**
- Connect to author's post management API
- Fetch real analytics data
- Integrate reader comments and interactions
- Link quick action buttons to actual workflows

---

### Admin Dashboard (`/admin-dashboard`)

**Features:**
- 4 stat cards: Users, Posts, Views, Flagged Content
- Recent users table with status
- System health card (Server, Database, API Response, Storage)
- Recent posts table across all authors
- System activity feed

**Demo Data Structure:**
```tsx
- Stats: 1,234 users, 3,891 posts, 125.4K views, 23 flagged items
- Users: 5 example users with join dates and statuses
- Posts: 5 example posts with different statuses (Published, Draft, Flagged)
- Activities: 5 system and user events
```

**When Backend Ready:**
- Connect to user management API
- Fetch platform-wide statistics
- Integrate content moderation queue
- Link to system health monitoring APIs
- Add moderation actions (approve/reject flagged content)

---

## Component Integration Guide

### Adding a New Section to a Dashboard

```tsx
import { StatCard } from '../_components/stat-card';
import { DataTable } from '../_components/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// 1. Define your data structure
const myData = [
  { id: '1', name: 'Item 1', value: 'Data' },
];

// 2. Define table columns if using DataTable
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'value', label: 'Value' },
];

// 3. Use the components
export default function MyDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total" value="100" />
      </div>

      <DataTable
        title="My Data"
        columns={columns}
        rows={myData}
      />
    </div>
  );
}
```

### Styling Patterns

All components use shadcn/ui design tokens:
- **Colors**: `bg-primary`, `text-muted-foreground`, `border-border`
- **Spacing**: Use `gap-4`, `gap-6` for consistent spacing
- **Responsive**: `md:` and `lg:` prefixes for breakpoints
- **Dark Mode**: Automatically supported via CSS variables

---

## Backend Integration Checklist

When your backend is ready:

### For User Dashboard:
- [ ] Create `/api/dashboard/user-stats` endpoint
- [ ] Create `/api/user/posts` endpoint (with pagination)
- [ ] Create `/api/user/activities` endpoint
- [ ] Replace mock data with `fetch()` or SWR calls

### For Author Dashboard:
- [ ] Create `/api/dashboard/author-stats` endpoint
- [ ] Create `/api/author/posts` endpoint with analytics
- [ ] Create `/api/author/performance` endpoint
- [ ] Implement quick action endpoints (create post, etc.)

### For Admin Dashboard:
- [ ] Create `/api/admin/platform-stats` endpoint
- [ ] Create `/api/admin/users` endpoint (with filters)
- [ ] Create `/api/admin/posts` endpoint (with moderation status)
- [ ] Create `/api/admin/system-health` endpoint
- [ ] Create `/api/admin/activities` endpoint

---

## Styling & Customization

### Theme Colors

The dashboard uses the project's design tokens (defined in `globals.css`):
```css
--primary: orange (#primary color)
--background: light/dark background
--foreground: text color
--muted: secondary colors
```

### Customizing StatCard Colors

Variants available: `default`, `success`, `warning`, `danger`

```tsx
<StatCard variant="success" ... /> // Green
<StatCard variant="warning" ... /> // Orange/Amber
<StatCard variant="danger" ... />  // Red
```

### Customizing Table Rendering

Use the `render` function for custom cell formatting:

```tsx
const columns: TableColumn[] = [
  {
    key: 'status',
    label: 'Status',
    render: (value) => (
      <Badge className={value === 'Active' ? 'bg-green-100' : 'bg-gray-100'}>
        {value}
      </Badge>
    ),
  },
];
```

---

## Known Patterns

### Empty States

All components handle empty states gracefully:
- StatCard: Shows placeholder with 0 value
- DataTable: Displays "No data available" message
- ActivityFeed: Shows "No activities yet" message

### Loading States

For future API integration, DataTable supports a `loading` prop:

```tsx
<DataTable loading={isLoading} ... />
```

### Responsive Design

- Mobile (< 768px): Single column grid
- Tablet (≥ 768px): 2-column grid
- Desktop (≥ 1024px): 3-4 column grid

---

## File Structure

```
app/(dashboard)/
├── layout.tsx                          # Main dashboard layout
├── _components/
│   ├── dashboard-shell.tsx             # Layout wrapper
│   ├── dashboard-header.tsx            # Top header with user menu
│   ├── dashboard-sidebar.tsx           # Role-based sidebar
│   ├── dashboard-nav.tsx               # Navigation config
│   ├── stat-card.tsx                   # Metric card component
│   ├── data-table.tsx                  # Reusable table component
│   ├── activity-feed.tsx               # Activity timeline component
│   └── [other components]
├── dashboard/
│   └── page.tsx                        # User dashboard
├── author-dashboard/
│   └── page.tsx                        # Author dashboard
└── admin-dashboard/
    └── page.tsx                        # Admin dashboard
```

---

## Next Steps

1. **Connect Authentication**: Ensure `getMe()` returns correct user role
2. **Create API Endpoints**: Build backend endpoints for each dashboard
3. **Replace Demo Data**: Swap mock data with real API calls
4. **Add Features**: Implement actions (edit, delete, etc.)
5. **Test Role Access**: Verify each role sees correct dashboard

---

## Troubleshooting

### Dashboard Shows Login Page
- Check that user is authenticated
- Verify `getMe()` service returns user data
- Check network tab for auth token

### Components Not Displaying
- Check browser console for import errors
- Verify all UI components are installed via shadcn
- Ensure `'use client'` directive is at top of files using state

### Styling Looks Off
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Check that `globals.css` is imported in layout

---

## Tips & Best Practices

1. **Keep Demo Data**: Leave demo data as fallback for development
2. **Type Everything**: Use TypeScript interfaces for data structures
3. **Reuse Components**: Don't duplicate stat cards or tables
4. **Component Composability**: Stack reusable components in pages
5. **Responsive First**: Test on mobile before desktop
6. **Use SWR**: For client-side data fetching with caching

---

For questions or issues, refer to the individual component files which contain inline documentation.
