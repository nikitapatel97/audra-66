
import { Button } from "@/components/ui/button";
import { BookOpen, Lightbulb, MessageCircle, BarChart3, Wrench } from "lucide-react";

interface MobileNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const MobileNavigation = ({ activeTab, onTabChange }: MobileNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-purple-500/30 z-50">
      <div className="flex items-center justify-around py-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onTabChange("journal")}
          className={`flex flex-col items-center gap-1 px-2 py-2 ${
            activeTab === "journal" 
              ? "text-purple-400 bg-purple-500/20" 
              : "text-purple-200"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-xs">Journal</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onTabChange("notes")}
          className={`flex flex-col items-center gap-1 px-2 py-2 ${
            activeTab === "notes" 
              ? "text-purple-400 bg-purple-500/20" 
              : "text-purple-200"
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span className="text-xs">Insights</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onTabChange("chatbot")}
          className={`flex flex-col items-center gap-1 px-2 py-2 ${
            activeTab === "chatbot" 
              ? "text-purple-400 bg-purple-500/20" 
              : "text-purple-200"
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs">AI Chat</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onTabChange("tracker")}
          className={`flex flex-col items-center gap-1 px-2 py-2 ${
            activeTab === "tracker" 
              ? "text-purple-400 bg-purple-500/20" 
              : "text-purple-200"
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span className="text-xs">Tracker</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onTabChange("tools")}
          className={`flex flex-col items-center gap-1 px-2 py-2 ${
            activeTab === "tools" 
              ? "text-purple-400 bg-purple-500/20" 
              : "text-purple-200"
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span className="text-xs">Tools</span>
        </Button>
      </div>
    </nav>
  );
};
