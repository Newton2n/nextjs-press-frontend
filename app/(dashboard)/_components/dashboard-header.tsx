import { BarChart3, FileText, MessageSquare, Users } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s what&apos;s happening with your blog.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={FileText}
          label="Total Posts"
          value="24"
          change="+2 this week"
          color="text-blue-600 dark:text-blue-400"
          bgColor="bg-blue-100 dark:bg-blue-900/30"
        />
        <StatCard
          icon={Users}
          label="Active Readers"
          value="1,234"
          change="+12% from last week"
          color="text-green-600 dark:text-green-400"
          bgColor="bg-green-100 dark:bg-green-900/30"
        />
        <StatCard
          icon={MessageSquare}
          label="Total Comments"
          value="342"
          change="+8 today"
          color="text-purple-600 dark:text-purple-400"
          bgColor="bg-purple-100 dark:bg-purple-900/30"
        />
        <StatCard
          icon={BarChart3}
          label="Page Views"
          value="12.5K"
          change="+5% from last month"
          color="text-orange-600 dark:text-orange-400"
          bgColor="bg-orange-100 dark:bg-orange-900/30"
        />
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  change,
  color,
  bgColor,
}: {
  icon: any;
  label: string;
  value: string;
  change: string;
  color: string;
  bgColor: string;
}) {
  return (
    <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className={`${bgColor} p-3 rounded-lg`}>
          <Icon className={`${color} w-6 h-6`} />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-bold text-foreground mb-2">{value}</p>
      <p className="text-xs text-muted-foreground">{change}</p>
    </div>
  );
}
