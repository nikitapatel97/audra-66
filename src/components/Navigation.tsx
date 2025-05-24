
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-purple-500/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Audra
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-purple-200 hover:text-purple-100 transition-colors">
              Features
            </a>
            <a href="#dashboard" className="text-purple-200 hover:text-purple-100 transition-colors">
              Dashboard
            </a>
            <a href="#about" className="text-purple-200 hover:text-purple-100 transition-colors">
              About
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-purple-300 hover:text-purple-100 hover:bg-purple-500/20">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
