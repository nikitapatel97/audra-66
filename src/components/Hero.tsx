
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
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 journal-paper">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8">
                <Feather className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-normal text-gray-600">
                  Your emotional intelligence companion
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 journal-title">
                Navigate{" "}
                <span className="italic text-gray-600">
                  modern dating
                </span>
                {" "}with emotional clarity
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl leading-relaxed journal-body">
                Audra is the emotionally intelligent journaling and relationship AI tool built for Millennials and Gen Z. 
                Get clarity on your feelings, understand your patterns, and grow emotionally—even at 2 AM.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <Button className="journal-button-primary px-8 py-4 text-lg border-0">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button className="journal-button px-8 py-4 text-lg">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Daily Tips Sidebar */}
          <div className="lg:col-span-1">
            <div className="daily-tips-card rounded-lg p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-gray-700" />
                <h3 className="font-normal text-gray-900 text-lg journal-title">Today's Wisdom</h3>
              </div>
              
              {/* Do's */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Do
                </h4>
                <ul className="space-y-2">
                  {dailyTips.dos.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  Don't
                </h4>
                <ul className="space-y-2">
                  {dailyTips.donts.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-gray-500 italic text-center pt-3 border-t border-gray-200">
                Personalized based on your recent entries
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-gray-900 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-normal text-gray-900 mb-3 text-lg">Not Therapy, But Smart Support</h3>
            <p className="text-gray-600 text-base leading-relaxed">Bridge the gap between professional therapy and real-time emotional guidance</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-gray-800 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <Feather className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-normal text-gray-900 mb-3 text-lg">AI That Understands You</h3>
            <p className="text-gray-600 text-base leading-relaxed">Advanced emotional intelligence that learns your patterns and grows with you</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-gray-700 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-normal text-gray-900 mb-3 text-lg">Built for Gen Z & Millennials</h3>
            <p className="text-gray-600 text-base leading-relaxed">Designed for the complexity of modern relationships and situationships</p>
          </div>
        </div>
      </div>
    </section>
  );
};
