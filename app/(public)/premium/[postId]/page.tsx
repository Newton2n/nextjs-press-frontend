import { notFound } from "next/navigation";

import {getPostDetails} from "../../_action/post-action";
import { SinglePost } from "../../_components/single-post";

interface PageProps {
  params: Promise<{
    postId: string;
  }>;
}

export default async function NewsPostPage({
  params,
}: PageProps) {
  const { postId } = await params;

  const response = await getPostDetails(postId);

  if (!response?.success || !response.data) {
    notFound();
  }

  return (
    <SinglePost
      post={response.data}
      backHref="/news"
    />
  );
}