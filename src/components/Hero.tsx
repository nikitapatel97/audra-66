
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
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Female Face Portrait Background */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5 pointer-events-none">
        <svg 
          width="400" 
          height="500" 
          viewBox="0 0 400 500" 
          className="text-gray-300"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Face outline */}
          <path 
            d="M200 80 C240 80, 270 110, 270 160 C270 200, 260 240, 240 280 C220 320, 200 340, 200 380 C200 340, 180 320, 160 280 C140 240, 130 200, 130 160 C130 110, 160 80, 200 80 Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none"
          />
          {/* Hair */}
          <path 
            d="M150 100 C140 70, 160 60, 200 65 C240 60, 260 70, 250 100 C255 120, 250 140, 240 150" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
          />
          {/* Eyes */}
          <circle cx="180" cy="160" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="220" cy="160" r="3" fill="currentColor" opacity="0.6" />
          {/* Nose */}
          <path 
            d="M200 170 C195 175, 200 180, 205 175" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            fill="none"
          />
          {/* Lips */}
          <path 
            d="M190 200 C195 205, 205 205, 210 200 C205 210, 195 210, 190 200" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            fill="none"
          />
          {/* Neck */}
          <path 
            d="M180 320 C185 360, 195 380, 200 400 C205 380, 215 360, 220 320" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            fill="none"
          />
          {/* Flowing hair details */}
          <path 
            d="M120 120 C100 130, 95 150, 110 160 C125 170, 135 150, 130 130" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            fill="none"
            opacity="0.7"
          />
          <path 
            d="M280 120 C300 130, 305 150, 290 160 C275 170, 265 150, 270 130" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
      </div>
    </section>
  );
};
