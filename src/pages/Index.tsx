import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MobileLayout } from "@/components/MobileLayout";

const Index = () => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden">
        <MobileLayout />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        <Navigation />
        <Hero />
        <Features />
        <JournalingDashboard />
        <NotesDashboard />
        <ChatbotDashboard />
        <PremiumDashboard />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;
