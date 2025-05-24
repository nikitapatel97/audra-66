
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { JournalingDashboard } from "@/components/JournalingDashboard";
import { NotesDashboard } from "@/components/NotesDashboard";
import { ChatbotDashboard } from "@/components/ChatbotDashboard";
import { PremiumDashboard } from "@/components/PremiumDashboard";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
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
  );
};

export default Index;
