import getMe from "@/service/get-me";
import { getNormalPosts } from "./_action/post-action";
import { Footer } from "./_components/footer";
import { HeroSection } from "./_components/hero-section";
import { HomeSections } from "./_components/home-sections";

export default async function Home() {
  const [user, postsResult] = await Promise.all([
    getMe(),
    getNormalPosts({ query: {} }),
  ]);
  const posts =
    postsResult.success && Array.isArray(postsResult.data)
      ? postsResult.data
      : [];
  return (
    <main className="min-h-screen">
      <HeroSection posts={posts} />
      <HomeSections posts={posts} />
      {!user.data && (
        <div className="sr-only">
          Create an account to publish on Prisma Press.
        </div>
      )}
      
    </main>
  );
}
