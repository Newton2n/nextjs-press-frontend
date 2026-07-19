"use server";

import { cookies } from "next/headers";

type FormType = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  previousState: FormType,
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  const payload = {
    email,
    password,
  };
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result: FormType = await res.json();
  if (result.success) {
    console.log("this block is running");
    const cookie = await cookies();
    cookie.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });
    cookie.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });

    console.log(cookie.getAll(), "all cookies");
  }

  return await res.json();
};
