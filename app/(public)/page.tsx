import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { CTASection } from "./_components/cta-section";
import { Footer } from "./_components/footer";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
