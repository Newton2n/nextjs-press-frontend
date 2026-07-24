"use server";
import { cookies } from "next/headers";

export const getPremiumPosts = async ()=> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "Sorry user not login",
    };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/premium`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      tags: ["premium-post"],
      revalidate: 3,
    },
  });
  const result = await res.json();
  console.log("premium post fetch request", result);
  return result;
};
