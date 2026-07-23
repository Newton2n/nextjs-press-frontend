import { Navbar } from "@/components/shared/navbar";
import getMe from "@/service/get-me";
import React from "react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar user={user} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default PublicLayout;
