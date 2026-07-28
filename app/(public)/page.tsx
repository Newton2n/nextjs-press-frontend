import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { CTASection } from "./_components/cta-section";
import { Footer } from "./_components/footer";
import getMe from "@/service/get-me";
export default async function Home() {
  const user =await getMe()
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
     {!user.data && <CTASection />}
      <Footer />
    </main>
  );
}
