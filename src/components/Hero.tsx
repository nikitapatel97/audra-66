
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/60 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 mb-8 shadow-lg shadow-purple-500/10">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-purple-200">
              Your emotional intelligence companion
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Navigate{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              modern dating
            </span>
            {" "}with emotional clarity
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Audra is the emotionally intelligent journaling and relationship AI tool built for Millennials and Gen Z. 
            Get clarity on your feelings, understand your patterns, and grow emotionally—even at 2 AM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-xl shadow-purple-500/25">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-purple-400/30 text-purple-200 hover:bg-purple-500/20 hover:text-purple-100 px-8 py-4 text-lg rounded-full">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 shadow-xl shadow-purple-500/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Not Therapy, But Smart Support</h3>
              <p className="text-purple-200 text-sm">Bridge the gap between professional therapy and real-time emotional guidance</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 shadow-xl shadow-purple-500/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">AI That Understands You</h3>
              <p className="text-purple-200 text-sm">Advanced emotional intelligence that learns your patterns and grows with you</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 shadow-xl shadow-purple-500/10">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg shadow-pink-500/30">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Built for Gen Z & Millennials</h3>
              <p className="text-purple-200 text-sm">Designed for the complexity of modern relationships and situationships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
