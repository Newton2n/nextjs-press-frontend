import type { ReactNode } from "react";

import { DashboardHeader } from "./dashboard-header";
import { DashboardSidebar } from "./dashboard-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

interface DashboardShellProps {
  user: {
    name: string;
    email: string;
    role: "ADMIN" | "AUTHOR" | "USER";
  };
  children: ReactNode;
}

export function DashboardShell({
  user,
  children,
}: DashboardShellProps) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar role={user.role} />

          <div className="flex min-w-0 flex-1 flex-col">
            <DashboardHeader user={user} />

            <main className="min-w-0 flex-1 p-3 sm:p-6 lg:p-8">
              <div className="mx-auto w-full max-w-[1600px]">
                {children}
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}