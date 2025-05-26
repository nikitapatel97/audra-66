
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-normal text-white">
            Early access now available
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-light text-white mb-6 font-playfair">
          Ready to understand your{" "}
          <span className="italic text-gray-300">actual</span> feelings?
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto journal-body italic">
          Join thousands of Millennials and Gen Z users who are finally getting clarity on their emotions, 
          relationships, and dating patterns with Audra.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-sm font-normal">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button className="journal-button border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-sm">
            Book a Demo
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">
            ✨ No credit card required • 7-day free trial • Cancel anytime
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-400 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Available on iOS & Web</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Privacy-first design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
