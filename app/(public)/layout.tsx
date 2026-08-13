import { Navbar } from "@/components/shared/navbar";
import getMe from "@/service/get-me";
import React from "react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col bg-background">
      <Navbar user={user} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default PublicLayout;
