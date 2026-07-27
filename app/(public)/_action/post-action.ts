"use server";
import { TPost, TPostMeta } from "@/types";
import { jwtUtils } from "@/utils/jwt";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type TPostDetails = {
  success: boolean;
  message: string;
  data: TPost[];
  meta: TPostMeta;
};
export const getNormalPosts = async ({
  query,
}: {
  query: { [key: string]: string | undefined };
}): Promise<TPostDetails> => {
  const params = new URLSearchParams();
  if (query.search) {
    params.set("search", query.search);
  }
  console.log("URLSearchParams", params.toString());
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/posts?${params.toString()}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: {
        tags: ["normal-post"],
        revalidate: 60 * 60 * 24,
      },
    },
  );
  const result = await res.json();
  console.log("Normal post fetch request", result);
  return result;
};

export const getPremiumPosts = async ({
  query,
}: {
  query: { [key: string]: string | undefined };
}) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "Sorry user not login",
    };
  }
  const params = new URLSearchParams();
  if (query.search) {
    params.set("search", query.search);
  }
  console.log("URLSearchParams", params.toString());

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/premium?${params.toString()}`,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        tags: ["premium-post"],
        revalidate: 60 * 60 * 24,
      },
    },
  );
  const result = await res.json();
  console.log("premium post fetch request", result);
  return result;
};

type StateType = {
  success: boolean;
  message: string;
};
export const getPostDetails = async (postId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "Sorry user not login",
    };
  }
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts/${postId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const result = await res.json();
  console.log("get post details", result);
  return result.data;
};
export const createPostAction = async (
  prevState: StateType,
  formData: FormData,
) => {
  const title = formData.get("title");
  const content = formData.get("content");
  const thumbnail = formData.get("thumbnail");
  const tags = formData.get("tags")
    ? (formData.get("tags") as string).split(",")
    : [];
  const isPremium = formData.get("isPremium") === "on" ? true : false;

  const payload = { title, content, thumbnail, tags, isPremium };
  console.log("payload", payload);
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
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  const result = await res.json();

  if (result.success) {
    if (result.data.isPremium) {
      revalidateTag("premium-post", {
        expire: 0,
      });
    }
    if (result.data.isPremium === false) {
      revalidateTag("normal-post", {
        expire: 0,
      });
    }
    revalidateTag("my-post", {
      expire: 0,
    });

    console.log("post created successfully", result);
    redirect("/dashboard/profile/me");
  }

  return result;
};
export const updatePostAction = async (
  postId: string,
  prevState: StateType,
  formData: FormData,
) => {
  console.log(postId);
  const title = formData.get("title") ?? "";
  const content = formData.get("content") ?? "";
  const thumbnail = formData.get("thumbnail") ?? "";
  const tags = formData.get("tags")
    ? (formData.get("tags") as string).split(",")
    : [];
  const isPremium = formData.get("isPremium") === "on" ? true : false;

  const payload = { title, content, thumbnail, tags, isPremium };
  console.log("payload", payload);
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
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  const result = await res.json();

  if (result.success) {
    if (result.data.isPremium) {
      revalidateTag("premium-post", {
        expire: 0,
      });
    }
    if (result.data.isPremium === false) {
      revalidateTag("normal-post", {
        expire: 0,
      });
    }
    revalidateTag("my-post", {
      expire: 0,
    });

    console.log("post created successfully", result);
    redirect("/dashboard/profile/me");
  }

  return result;
};
