'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface ActivityItem {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  type: 'post' | 'comment' | 'user' | 'system';
}

interface ActivityFeedProps {
  title?: string;
  description?: string;
  activities: ActivityItem[];
}

const typeColors = {
  post: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  comment: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  user: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  system: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300',
};

export function ActivityFeed({
  title = 'Recent Activity',
  description = 'Latest platform activity',
  activities,
}: ActivityFeedProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">No activities yet</p>
          ) : (
            activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:pb-0 last:border-0">
                <Badge className={typeColors[activity.type]}>{activity.type}</Badge>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{activity.title}</p>
                  {activity.description && (
                    <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
