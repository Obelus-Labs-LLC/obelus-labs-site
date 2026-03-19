import HeroSection from "@/components/HeroSection";
import ActiveProductsSection from "@/components/ActiveProductsSection";
import FabricOSSection from "@/components/FabricOSSection";
import AboutFooterSection from "@/components/AboutFooterSection";
import PageBackground from "@/components/PageBackground";

export default function Home() {
  return (
    <>
      <PageBackground />
      <main className="relative z-10">
        <HeroSection />
        <ActiveProductsSection />
        <FabricOSSection />
        <AboutFooterSection />
      </main>
    </>
  );
}
