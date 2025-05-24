
import { Calendar, MessageCircle, TrendingUp, Mic } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Audra is{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              different
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for the emotional complexity of modern dating—from situationships to avoidant patterns, 
            we help you understand yourself and your relationships better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Journaling</h3>
              <p className="text-gray-600">
                Write or use voice-to-text to capture your thoughts. Our AI understands tone, mood, and emotional nuance.
              </p>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emotional Calendar</h3>
              <p className="text-gray-600">
                Visualize your emotional journey through time. See patterns, track moods, and understand your cycles.
              </p>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Insights</h3>
              <p className="text-gray-600">
                Track your emotional growth over time. See how many times you cried, your happiest seasons, and more.
              </p>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Voice Recognition</h3>
              <p className="text-gray-600">
                Speak your thoughts naturally. Our AI picks up on vocal cues and emotional undertones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
