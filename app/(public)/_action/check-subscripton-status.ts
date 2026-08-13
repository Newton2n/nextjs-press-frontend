"use server";

import { cookies } from "next/headers";

export const checkSubscriptionStatus = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "Sorry user not login",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/subscription/subscription-status`,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    },
  );
  const result = await res.json();
  return result?.data;
};
