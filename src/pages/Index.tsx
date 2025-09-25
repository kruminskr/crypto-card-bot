import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import ScreenshotSection from "@/components/ScreenshotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ScreenshotSection />
      <Footer />
    </div>
  );
};

export default Index;
