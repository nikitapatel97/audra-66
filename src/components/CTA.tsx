
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">
            Early access now available
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to understand your{" "}
          <span className="italic">actual</span> feelings?
        </h2>
        
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of Millennials and Gen Z users who are finally getting clarity on their emotions, 
          relationships, and dating patterns with Audra.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-full font-semibold">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
            Book a Demo
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-purple-100 text-sm mb-4">
            ✨ No credit card required • 7-day free trial • Cancel anytime
          </p>
          <div className="flex justify-center items-center space-x-6 text-purple-100 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Available on iOS & Web</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Privacy-first design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
