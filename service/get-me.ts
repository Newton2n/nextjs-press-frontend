"use server";

import { cookies } from "next/headers";

async function getMe() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken?.value) {
    return {
      success: false,
      message: "Sorry user not login",
    };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/users/me`, {
    headers: {
      Cookie: `accessToken=${accessToken.value}`,
      Authorization: `Bearer ${accessToken.value}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["userInfo"],
    },
  });
  const user = await res.json();
  return user;
}

export default getMe;
