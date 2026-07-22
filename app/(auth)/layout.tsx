import { Navbar } from "@/components/shared/navbar";
import getMe from "@/service/get-me";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe()
  return (
    <div className="max-w-7xl">
      <Navbar user ={user} />
      {children}
    </div>
  );
};

export default AuthLayout;
