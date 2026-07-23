import { DashboardHeader } from "../_components/dashboard-header";
import { ActivityTable } from "../_components/activity-table";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <ActivityTable />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium text-left">
                Create New Post
              </button>
              <button className="w-full px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium text-foreground text-left">
                Manage Users
              </button>
              <button className="w-full px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium text-foreground text-left">
                View Reports
              </button>
            </div>
          </Card>

          {/* System Health */}
          <Card className="border border-border p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">System Health</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Server Status</span>
                  <span className="text-green-600 font-medium">Healthy</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-600" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Database</span>
                  <span className="text-green-600 font-medium">Optimal</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-600" style={{ width: "98%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Storage</span>
                  <span className="text-yellow-600 font-medium">65%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-600" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
