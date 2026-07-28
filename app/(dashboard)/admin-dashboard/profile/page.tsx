import getMe from "@/service/get-me";
import ProfileView from "../../_components/profile-view"
import { getMyPost } from "@/app/(dashboard)/_action/my-post";

export default async function AdminDashboardProfilePage() {
  const user = await getMe();
  const posts = await getMyPost();

  return <ProfileView user={user.data} posts={posts} isOwner={true} />;
}
