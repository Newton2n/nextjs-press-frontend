"use server";
import { jwtUtils } from "@/utils/jwt";
import { cookies } from "next/headers";

export const getMyPost = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const verifyAccessToken = await jwtUtils.verifyToken(
    accessToken as string,
    process.env.JWT_ACCESS_SECRET!,
  );
  if (!verifyAccessToken.success) {
    return {
      success: false,
      message: "sorry you are not log in",
    };
  }

  const posts = await fetch(`${process.env.BACKEND_URL}/api/posts/my-posts`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      tags: ["my-post"],
      revalidate: 60 * 60 * 24,
    },
  });
  const result = await posts.json()
  
  return result.data
};
