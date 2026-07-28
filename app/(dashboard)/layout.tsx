import { redirect } from "next/navigation";
import getMe from "@/service/get-me";
import { DashboardShell } from "./_components/dashboard-shell";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  if (!user?.success || !user?.data) {
    redirect("/login");
  }

  return <DashboardShell user={user.data}>{children}</DashboardShell>;
};

export default DashboardLayout;
