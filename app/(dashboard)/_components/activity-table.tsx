import { Card } from "@/components/ui/card";
import { ArrowUpRight, MessageSquare, Heart } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "comment",
    user: "Sarah Chen",
    action: "commented on",
    post: "Getting Started with React",
    time: "2 hours ago",
    icon: MessageSquare,
  },
  {
    id: 2,
    type: "like",
    user: "Michael Rodriguez",
    action: "liked",
    post: "The Future of Web Design",
    time: "4 hours ago",
    icon: Heart,
  },
  {
    id: 3,
    type: "comment",
    user: "Emma Thompson",
    action: "replied to",
    post: "Productivity Tips for Writers",
    time: "6 hours ago",
    icon: MessageSquare,
  },
  {
    id: 4,
    type: "like",
    user: "Alex Kim",
    action: "liked",
    post: "Understanding Web Performance",
    time: "1 day ago",
    icon: Heart,
  },
  {
    id: 5,
    type: "comment",
    user: "David Park",
    action: "commented on",
    post: "CSS Tips and Tricks 2024",
    time: "2 days ago",
    icon: MessageSquare,
  },
];

export function ActivityTable() {
  return (
    <Card className="border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        <button className="text-sm text-primary hover:underline flex items-center gap-1">
          View all <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="flex items-center gap-4 pb-4 border-b border-border last:pb-0 last:border-b-0 hover:bg-muted/30 -mx-2 px-2 py-2 rounded transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  <span className="font-semibold">{activity.user}</span>
                  {" "}
                  <span className="text-muted-foreground">{activity.action}</span>
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {activity.post}
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
