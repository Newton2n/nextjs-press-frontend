import { Navbar } from "@/components/shared/navbar";
import getMe from "@/service/get-me";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe()
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar user={user} />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
