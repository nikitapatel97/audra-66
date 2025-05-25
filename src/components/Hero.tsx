
import { Button } from "@/components/ui/button";
import { ArrowRight, Feather, Heart, CheckCircle, XCircle } from "lucide-react";

export const Hero = () => {
  // Mock daily tips - in real app, these would come from AI analysis of user's journal
  const dailyTips = {
    dos: [
      "Take a 15-minute mindful walk",
      "Write down 3 things you're grateful for",
      "Set one clear boundary today"
    ],
    donts: [
      "Check your ex's social media",
      "Text your situationship back",
      "Compare your journey to others'"
    ]
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-8">
                <Feather className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-normal text-gray-700 font-crimson italic">
                  Your emotional intelligence companion
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 font-playfair">
                Navigate{" "}
                <span className="italic text-gray-600 font-playfair">
                  modern dating
                </span>
                {" "}with emotional clarity
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl leading-relaxed font-crimson italic">
                Audra is the emotionally intelligent journaling and relationship AI tool built for Millennials and Gen Z. 
                Get clarity on your feelings, understand your patterns, and grow emotionally—even at 2 AM.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <Button className="bg-gray-900 hover:bg-gray-800 px-8 py-4 text-lg border-0 font-crimson">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg font-crimson border-gray-300 hover:bg-gray-50">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Daily Tips Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-gray-600" />
                <h3 className="font-normal text-gray-900 text-lg font-playfair">Today's Wisdom</h3>
              </div>
              
              {/* Do's */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-800 mb-3 flex items-center gap-2 font-crimson">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Do
                </h4>
                <ul className="space-y-2">
                  {dailyTips.dos.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start gap-2 font-crimson italic">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-800 mb-3 flex items-center gap-2 font-crimson">
                  <XCircle className="w-4 h-4 text-red-500" />
                  Don't
                </h4>
                <ul className="space-y-2">
                  {dailyTips.donts.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start gap-2 font-crimson italic">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-gray-500 italic text-center pt-3 border-t border-gray-200 font-crimson">
                Personalized based on your recent entries
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="font-normal text-gray-900 mb-3 text-lg font-playfair">Not Therapy, But Smart Support</h3>
            <p className="text-gray-700 text-base leading-relaxed font-crimson italic">Bridge the gap between professional therapy and real-time emotional guidance</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <Feather className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="font-normal text-gray-900 mb-3 text-lg font-playfair">AI That Understands You</h3>
            <p className="text-gray-700 text-base leading-relaxed font-crimson italic">Advanced emotional intelligence that learns your patterns and grows with you</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="font-normal text-gray-900 mb-3 text-lg font-playfair">Built for Gen Z & Millennials</h3>
            <p className="text-gray-700 text-base leading-relaxed font-crimson italic">Designed for the complexity of modern relationships and situationships</p>
          </div>
        </div>

        {/* Minimalist Line Art Section */}
        <div className="mt-24 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Simple Line Art SVG */}
            <svg 
              width="300" 
              height="200" 
              viewBox="0 0 300 200" 
              className="mx-auto mb-8 opacity-20"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Minimalist female silhouette */}
              <path 
                d="M150 20 C160 25, 165 35, 160 50 C155 65, 145 70, 150 85 L150 120 C148 140, 152 160, 150 180" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="text-gray-300"
              />
              {/* Hair/head outline */}
              <path 
                d="M140 25 C135 15, 145 10, 155 15 C165 20, 160 30, 155 35" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="text-gray-300"
              />
              {/* Arms */}
              <path 
                d="M150 85 C135 90, 125 100, 130 110" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="text-gray-300"
              />
              <path 
                d="M150 85 C165 90, 175 100, 170 110" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="text-gray-300"
              />
              {/* Flowing lines */}
              <path 
                d="M120 60 C100 65, 95 75, 110 80 C125 85, 130 75, 125 65" 
                stroke="currentColor" 
                strokeWidth="0.8" 
                className="text-gray-200"
              />
              <path 
                d="M180 60 C200 65, 205 75, 190 80 C175 85, 170 75, 175 65" 
                stroke="currentColor" 
                strokeWidth="0.8" 
                className="text-gray-200"
              />
            </svg>
            
            <p className="text-gray-500 font-crimson italic text-lg">
              "Understanding yourself is the beginning of all wisdom"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
