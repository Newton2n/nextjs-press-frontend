"use server";
import { jwtUtils } from "@/utils/jwt";
import { cookies } from "next/headers";

export const getAccessToken = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;
  const verifyAccessToken = refreshToken
    ? await jwtUtils.verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET!)
    : null;
  if (!verifyAccessToken?.success) {
    return {
      success: false,
      message: "Refresh token not found!",
    };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/refresh-token`, {
    method: "POST",
    headers: {
      Cookie: `refreshToken=${refreshToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();
  console.log("refresh token generate request",result)
  return result;
};
