import { notFound } from "next/navigation";

import {getPostDetails} from "../../_action/post-action";
import { SinglePost } from "../../_components/single-post";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PremiumNewsPostPage({
  params,
}: PageProps) {
  const {id}=await params;

  const response = await getPostDetails(id);

  if (!response?.success || !response.data) {
    notFound();
  }

  return (
    <SinglePost
      post={response.data}
      backHref="/premium"
      hasPremiumAccess ={true}
    />
  );
}