import { DashboardHeader } from "./dashboard-header";
import { DashboardSidebar } from "./dashboard-sidebar";

interface DashboardShellProps {
  user: {
    name: string;
    email: string;
    role: "ADMIN" | "AUTHOR" | "USER";
  };
  children: React.ReactNode;
}

export function DashboardShell({
  user,
  children,
}: DashboardShellProps) {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar role={user.role} />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader user={user} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}