
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-light text-gray-900 font-playfair">
              Audra
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-crimson">
              Features
            </a>
            <a href="#dashboard" className="text-gray-600 hover:text-gray-900 transition-colors font-crimson">
              Dashboard
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-crimson">
              About
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-crimson">
              Signed In
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 border-0 font-crimson">
              Alyssa
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
