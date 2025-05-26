
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

  const shouldShowHero = activeTab === "chatbot";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Mobile Content */}
      <div className="pt-16 pb-20 px-4">
        {/* Hero Section - Only for AI Chat */}
        {shouldShowHero && (
          <div className="py-8 text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-4 font-playfair">
              Welcome to Audra
            </h1>
            <p className="text-sm text-gray-600 mb-8 max-w-sm mx-auto font-light leading-relaxed font-crimson italic">
              Your AI companion for emotional growth and deeper connections
            </p>
          </div>
        )}

        {/* Active Tab Content */}
        <div className={shouldShowHero ? "" : "pt-4"}>
          {renderActiveTab()}
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};
