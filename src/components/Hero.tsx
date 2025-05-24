
import { Button } from "@/components/ui/button";
import { ArrowRight, Feather, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 journal-paper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8">
            <Feather className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-normal text-gray-600">
              Your emotional intelligence companion
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 journal-title">
            Navigate{" "}
            <span className="italic text-gray-700">
              modern dating
            </span>
            {" "}with emotional clarity
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed journal-body">
            Audra is the emotionally intelligent journaling and relationship AI tool built for Millennials and Gen Z. 
            Get clarity on your feelings, understand your patterns, and grow emotionally—even at 2 AM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="journal-button-primary px-8 py-4 text-lg border-0">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="journal-button px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gray-900 rounded-sm mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-normal text-gray-900 mb-3 text-lg">Not Therapy, But Smart Support</h3>
              <p className="text-gray-600 text-base leading-relaxed">Bridge the gap between professional therapy and real-time emotional guidance</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gray-800 rounded-sm mx-auto mb-4 flex items-center justify-center">
                <Feather className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-normal text-gray-900 mb-3 text-lg">AI That Understands You</h3>
              <p className="text-gray-600 text-base leading-relaxed">Advanced emotional intelligence that learns your patterns and grows with you</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gray-700 rounded-sm mx-auto mb-4 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-normal text-gray-900 mb-3 text-lg">Built for Gen Z & Millennials</h3>
              <p className="text-gray-600 text-base leading-relaxed">Designed for the complexity of modern relationships and situationships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
