"use server";

import { cookies } from "next/headers";

async function getMe() {
  const cookie = await cookies();
  const accessToken = cookie.get("accessToken");
  if (!accessToken) {
    return {
      success: false,
      message: "Sorry user not login",
    };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/users/me`, {
    headers: {
      Cookie: `${accessToken}`,
      authorization: `${accessToken?.value}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["userInfo"],
    },
  });
  const user = await res.json();
  console.log(user, "user");
  console.log("access token", accessToken?.value);
  return user;
}

export default getMe;
