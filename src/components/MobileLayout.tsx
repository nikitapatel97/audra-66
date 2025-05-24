
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { JournalingDashboard } from "@/components/JournalingDashboard";
import { NotesDashboard } from "@/components/NotesDashboard";
import { MobileChatbotDashboard } from "@/components/MobileChatbotDashboard";
import { MobileSocialDashboard } from "@/components/MobileSocialDashboard";
import { PremiumDashboard } from "@/components/PremiumDashboard";

export const MobileLayout = () => {
  const [activeTab, setActiveTab] = useState("chatbot");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "journal":
        return <JournalingDashboard />;
      case "notes":
        return <NotesDashboard />;
      case "social":
        return <MobileSocialDashboard />;
      case "premium":
        return <PremiumDashboard />;
      default:
        return <MobileChatbotDashboard />;
    }
  };

  return (
    <div className="min-h-screen cosmic-sparkle">
      <Navigation />
      
      {/* Mobile Content */}
      <div className="pt-16 pb-20 px-4">
        {/* Hero Section - Condensed for mobile */}
        <div className="py-6 text-center">
          <h1 className="text-2xl font-bold text-white mb-3">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Audra
            </span>
          </h1>
          <p className="text-sm text-purple-200 mb-6 max-w-sm mx-auto">
            Your AI companion for emotional growth and healthier relationships
          </p>
        </div>

        {/* Active Tab Content */}
        {renderActiveTab()}
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};
