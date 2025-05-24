
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MobileLayout } from "@/components/MobileLayout";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { JournalingDashboard } from "@/components/JournalingDashboard";
import { NotesDashboard } from "@/components/NotesDashboard";
import { ChatbotDashboard } from "@/components/ChatbotDashboard";
import { SocialDashboard } from "@/components/SocialDashboard";
import { PremiumDashboard } from "@/components/PremiumDashboard";

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
        <SocialDashboard />
        <PremiumDashboard />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;
