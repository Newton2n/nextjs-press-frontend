"use server";
import { TPost, TPostMeta } from "@/types";

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
        revalidate: 10,
      },
    },
  );
  const result = await res.json();
  console.log("Normal post fetch request", result);
  return result;
};
