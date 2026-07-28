import { redirect } from "next/navigation";
import getMe from "@/service/get-me";
import { DashboardShell } from "./_components/dashboard-shell";
import { Navbar } from "@/components/shared/navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  if (!user?.success || !user?.data) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar user={user} />
      <DashboardShell user={user.data}>{children}</DashboardShell>
    </div>
  );
};

export default DashboardLayout;
