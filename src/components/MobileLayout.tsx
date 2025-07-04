
import { useState } from "react";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Navigation } from "@/components/Navigation";
import { JournalingDashboard } from "@/components/JournalingDashboard";
import { NotesDashboard } from "@/components/NotesDashboard";
import { MobileChatbotDashboard } from "@/components/MobileChatbotDashboard";
import { TrackerDashboard } from "@/components/TrackerDashboard";
import { ToolsDashboard } from "@/components/ToolsDashboard";

export const MobileLayout = () => {
  const [activeTab, setActiveTab] = useState("chatbot");

  const handleNavigateToTools = () => {
    setActiveTab("tools");
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "journal":
        return <JournalingDashboard />;
      case "notes":
        return <NotesDashboard />;
      case "tracker":
        return <TrackerDashboard />;
      case "tools":
        return <ToolsDashboard />;
      default:
        return <MobileChatbotDashboard onNavigateToTools={handleNavigateToTools} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <Navigation />
      
      {/* Mobile Content */}
      <div className="pt-16 pb-20">
        {renderActiveTab()}
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};
