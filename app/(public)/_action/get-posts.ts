"use server"
import { TPost, TPostMeta } from "@/types";

type TPostDetails = {
  success: boolean;
  message: string;
  data: TPost[];
  meta: TPostMeta;
};
export const getNormalPosts = async (): Promise<TPostDetails> => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
    next: {
      tags: ["normal-post"],
      revalidate: 10,
    },
  });
  const result = await res.json();
  console.log("Normal post fetch request", result);
  return result;
};
