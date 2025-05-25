
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, FileText, MessageCircle, Crown, Users } from "lucide-react";

interface MobileNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const MobileNavigation = ({ activeTab, onTabChange }: MobileNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-purple-500/30 z-50 md:hidden">
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
          <FileText className="w-4 h-4" />
          <span className="text-xs">Notes</span>
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
          onClick={() => onTabChange("social")}
          className={`flex flex-col items-center gap-1 px-2 py-2 ${
            activeTab === "social" 
              ? "text-purple-400 bg-purple-500/20" 
              : "text-purple-200"
          }`}
        >
          <Users className="w-4 h-4" />
          <span className="text-xs">Social</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onTabChange("premium")}
          className={`flex flex-col items-center gap-1 px-2 py-2 ${
            activeTab === "premium" 
              ? "text-yellow-400 bg-yellow-500/20" 
              : "text-purple-200"
          }`}
        >
          <Crown className="w-4 h-4" />
          <span className="text-xs">Premium</span>
        </Button>
      </div>
    </nav>
  );
};
