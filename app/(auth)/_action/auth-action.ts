"use server";

import { cookies } from "next/headers";
import { RegisterFormType } from "../types";
import Jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";

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
    
    const cookie = await cookies();
    cookie.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });
    cookie.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });

    
    const userDetails = Jwt.decode(result.data.accessToken) as JwtPayload;
    
    if (userDetails.role === "USER") {
      redirect("/dashboard");
    } else if (userDetails.role === "ADMIN") {
      redirect("/admin-dashboard");
    }
    if (userDetails.role === "AUTHOR") {
      redirect("/author-dashboard");
    }
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


  return result;
};
