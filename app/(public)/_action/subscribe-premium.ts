"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const subscribePremium = async () => {
  
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "Sorry user not login",
    };
  }
   
  const res = await fetch(`${process.env.BACKEND_URL}/api/subscription/checkout`, {
    method :"POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });
  const result = await res.json();
  if (result.success && result.data.checkoutUrl) {
    redirect(result.data.checkoutUrl);
  }
  return result;
};
