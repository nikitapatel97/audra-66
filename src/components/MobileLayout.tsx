
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
    <div className="min-h-screen cosmic-sparkle relative">
      {/* Artistic Flow Elements */}
      <div className="flow-shape"></div>
      <div className="flow-shape"></div>
      <div className="flow-shape"></div>
      
      {/* Star Field */}
      <div className="star-field">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <Navigation />
      
      {/* Mobile Content */}
      <div className="pt-16 pb-20 px-4 relative z-10 page-transition">
        {/* Hero Section - Enhanced with artistic design */}
        <div className="py-8 text-center">
          <h1 className="text-3xl font-light cosmic-title mb-4">
            Welcome to{" "}
            <span className="block mt-2">
              Audra
            </span>
          </h1>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-sm text-white/70 mb-8 max-w-sm mx-auto font-light leading-relaxed">
            Your AI companion for emotional growth and deeper connections
          </p>
        </div>

        {/* Active Tab Content in Glass Container */}
        <div className="glass-card p-1">
          {renderActiveTab()}
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};
