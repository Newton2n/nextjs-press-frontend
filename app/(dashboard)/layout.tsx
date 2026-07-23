import { Navbar } from "@/components/shared/navbar";
import getMe from "@/service/get-me";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar user={user} />
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
