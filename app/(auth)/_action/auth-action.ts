"use server";

import { cookies } from "next/headers";
import { RegisterFormType } from "../types";

type LoginFormType = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  previousState: LoginFormType,
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

  const result = await res.json();
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

  return result;
};

// register action
export const registerAction = async (
  previousState: RegisterFormType,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const bio = formData.get("bio");

  const payload = {
    name,
    email,
    password,
    bio,
  };
  const res = await fetch(`${process.env.BACKEND_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  console.log(result, "register result ");
  return result;
};
