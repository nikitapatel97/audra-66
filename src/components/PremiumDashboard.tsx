
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Crown, 
  TrendingUp, 
  Heart, 
  Target, 
  Users, 
  Mic, 
  Share2, 
  Calendar,
  BarChart3,
  Sparkles,
  Lock,
  Download,
  Bot,
  UserPlus,
  Star
} from "lucide-react";

export const PremiumDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<"monthly" | "quarterly" | "annual">("monthly");

  const mockReportData = {
    monthly: {
      biggestWins: ["Set clearer boundaries in dating", "Improved communication with Alex", "Practiced self-care consistency"],
      emotionalTriggers: ["Text response anxiety", "Fear of vulnerability", "Comparison with others"],
      growthAreas: ["Expressing needs directly", "Managing expectations", "Trust building"],
      relationshipPatterns: ["Tends to overthink early dating stages", "Shows growth in emotional availability"]
    },
    quarterly: {
      biggestWins: ["Successfully navigated first serious relationship conversation", "Established weekly self-reflection routine", "Overcame fear of dating apps"],
      emotionalTriggers: ["Rejection sensitivity", "Past relationship trauma surfacing", "Social media comparison"],
      growthAreas: ["Attachment security", "Communication during conflict", "Emotional regulation"],
      relationshipPatterns: ["Moving from anxious to secure attachment style", "Increased comfort with intimacy"]
    },
    annual: {
      biggestWins: ["Entered first healthy long-term relationship", "Completed 365 days of consistent journaling", "Developed strong emotional intelligence"],
      emotionalTriggers: ["Family dynamics affecting relationships", "Seasonal mood changes", "Work stress spillover"],
      growthAreas: ["Long-term commitment comfort", "Balancing independence and partnership", "Future planning together"],
      relationshipPatterns: ["Evolved from casual dating to committed partnership", "Learned to communicate love languages effectively"]
    }
  };

  const currentData = mockReportData[selectedPeriod];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 via-pink-900 to-black opacity-90"></div>
        
        {/* Flowing Organic Shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Enhanced Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-20 bg-gradient-to-b from-white to-transparent opacity-20 animate-pulse"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                transform: `rotate(${-30 + i * 15}deg)`,
                animationDelay: `${i * 3}s`,
                animationDuration: '6s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
              <Crown className="w-6 h-6 text-black" />
            </div>
            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-sm">
              <span className="text-white text-sm font-light">Premium Feature</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 cosmic-title">
            Your Emotional
            <span className="block mt-2">Intelligence Reports</span>
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-base md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Personalized insights into your emotional growth, relationship patterns, and areas for development. 
            Share with therapists, partners, or keep as your personal growth mirror.
          </p>
        </div>

        {/* Feature Highlights - Artistic Cards */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Emotional Reports */}
            <div className="glass-card p-6 text-center group">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6 text-purple-300 group-hover:scale-110 transition-transform" />
                <h3 className="text-base md:text-lg font-light text-white">Emotional Reports</h3>
              </div>
              <p className="text-sm text-white/70 font-light">
                Monthly, quarterly & annual insights
              </p>
            </div>

            {/* Voice-Aware AI */}
            <div className="glass-card p-6 text-center group">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mic className="w-6 h-6 text-purple-300 group-hover:scale-110 transition-transform" />
                <h3 className="text-base md:text-lg font-light text-white">Voice-Aware AI</h3>
              </div>
              <p className="text-sm text-white/70 font-light">
                AI checks in when you sound off
              </p>
            </div>

            {/* Couples' Insights */}
            <div className="glass-card p-6 text-center group">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-300 group-hover:scale-110 transition-transform" />
                <h3 className="text-base md:text-lg font-light text-white">Couples' Insights</h3>
              </div>
              <p className="text-sm text-white/70 font-light">
                Shared reports with your partner
              </p>
            </div>
          </div>

          {/* Add Someone Feature - Improved */}
          <div className="glass-card p-6 md:p-8 text-center mb-8 border border-purple-500/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <UserPlus className="w-6 h-6 md:w-8 md:h-8 text-purple-300" />
              <h3 className="text-lg md:text-xl font-light text-white cosmic-title">Add Your Partner</h3>
            </div>
            <p className="text-sm md:text-base text-white/80 mb-6 max-w-md mx-auto font-light leading-relaxed">
              Invite your partner to join and get shared relationship insights together
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-sm md:text-base font-medium transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Invite Partner
              </Button>
            </div>
          </div>

          {/* Upgrade Prompt - Enhanced */}
          <div className="glass-card p-8 md:p-12 text-center border border-yellow-400/30 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                <Crown className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-light text-white cosmic-title">Unlock Premium Insights</h3>
            </div>
            <p className="text-sm md:text-base text-white/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Upgrade to Premium to access detailed emotional reports, voice-aware AI coaching, 
              and couples' shared insights. Transform your relationship journey with data-driven growth.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black border-0 px-12 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                size="lg"
              >
                <Crown className="w-5 h-5 mr-3" />
                Upgrade to Premium
              </Button>
            </div>
          </div>
        </div>

        {/* Premium Features Preview */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedPeriod} onValueChange={(value) => setSelectedPeriod(value as any)} className="mb-6 md:mb-8">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-md border-white/20">
              <TabsTrigger 
                value="monthly" 
                className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-white data-[state=active]:bg-white/20 data-[state=active]:text-white font-light"
              >
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                Monthly
              </TabsTrigger>
              <TabsTrigger 
                value="quarterly" 
                className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-white data-[state=active]:bg-white/20 data-[state=active]:text-white font-light"
              >
                <BarChart3 className="w-3 h-3 md:w-4 md:h-4" />
                Quarterly
              </TabsTrigger>
              <TabsTrigger 
                value="annual" 
                className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-white data-[state=active]:bg-white/20 data-[state=active]:text-white font-light"
              >
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                Annual
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedPeriod} className="space-y-4 md:space-y-6">
              {/* Report Overview - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                <Card className="bg-white/10 backdrop-blur-md border-emerald-300/30">
                  <CardHeader className="pb-2 md:pb-3">
                    <CardTitle className="flex items-center gap-1 md:gap-2 text-emerald-300 text-sm md:text-base font-light">
                      <Target className="w-4 h-4 md:w-5 md:h-5" />
                      Biggest Wins
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-1 md:space-y-2">
                      {currentData.biggestWins.map((win, index) => (
                        <li key={index} className="text-xs md:text-sm text-white/90 flex items-start gap-1 md:gap-2 font-light">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                          {win}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-rose-300/30">
                  <CardHeader className="pb-2 md:pb-3">
                    <CardTitle className="flex items-center gap-1 md:gap-2 text-rose-300 text-sm md:text-base font-light">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                      Emotional Triggers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-1 md:space-y-2">
                      {currentData.emotionalTriggers.map((trigger, index) => (
                        <li key={index} className="text-xs md:text-sm text-white/90 flex items-start gap-1 md:gap-2 font-light">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-rose-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                          {trigger}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-blue-300/30">
                  <CardHeader className="pb-2 md:pb-3">
                    <CardTitle className="flex items-center gap-1 md:gap-2 text-blue-300 text-sm md:text-base font-light">
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                      Growth Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-1 md:space-y-2">
                      {currentData.growthAreas.map((area, index) => (
                        <li key={index} className="text-xs md:text-sm text-white/90 flex items-start gap-1 md:gap-2 font-light">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-purple-300/30">
                  <CardHeader className="pb-2 md:pb-3">
                    <CardTitle className="flex items-center gap-1 md:gap-2 text-purple-300 text-sm md:text-base font-light">
                      <Users className="w-4 h-4 md:w-5 md:h-5" />
                      Relationship Patterns
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-1 md:space-y-2">
                      {currentData.relationshipPatterns.map((pattern, index) => (
                        <li key={index} className="text-xs md:text-sm text-white/90 flex items-start gap-1 md:gap-2 font-light">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                          {pattern}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Report Actions */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                    <div className="text-center md:text-left">
                      <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">
                        Share Your {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Report
                      </h3>
                      <p className="text-xs md:text-base text-purple-200 font-light">
                        Export and share with therapists, partners, or save for personal reflection
                      </p>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <Button variant="outline" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm bg-white/10 border-white/30 text-white hover:bg-white/20 font-light">
                        <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                        Share
                      </Button>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xs md:text-sm border-0 font-light">
                        <Download className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Premium Features Detail - Voice & Couples */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Voice-Aware AI */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="pb-2 md:pb-4">
                <CardTitle className="flex items-center gap-1 md:gap-2 text-sm md:text-base text-white font-light">
                  <Mic className="w-4 h-4 md:w-5 md:h-5 text-purple-300" />
                  Voice-Aware AI Coaching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-purple-200 mb-3 md:mb-4 font-light">
                  Our AI listens to your tone and checks in when you sound off. Get personalized support 
                  when you need it most.
                </p>
                <div className="bg-white/10 border border-white/20 rounded-lg p-3 md:p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-white italic font-light">
                        "You sound a bit stressed today. Do you want to talk about what's bothering you? 
                        I'm here to help you work through it."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2 mt-3 md:mt-4">
                  <Lock className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                  <span className="text-xs md:text-sm text-purple-300 font-light">Premium Feature</span>
                </div>
              </CardContent>
            </Card>

            {/* Couples' Reports */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="pb-2 md:pb-4">
                <CardTitle className="flex items-center gap-1 md:gap-2 text-sm md:text-base text-white font-light">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-300" />
                  Couples' Shared Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-purple-200 mb-3 md:mb-4 font-light">
                  Generate combined reports with your partner. Perfect for relationship check-ins 
                  and understanding each other's growth patterns.
                </p>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-pink-500/20 border border-pink-300/30 rounded-lg backdrop-blur-sm">
                    <Heart className="w-3 h-3 md:w-5 md:h-5 text-pink-300" />
                    <span className="text-xs md:text-sm text-white font-light">Shared communication patterns</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-blue-500/20 border border-blue-300/30 rounded-lg backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3 md:w-5 md:h-5 text-blue-300" />
                    <span className="text-xs md:text-sm text-white font-light">Relationship growth tracking</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-green-500/20 border border-green-300/30 rounded-lg backdrop-blur-sm">
                    <Target className="w-3 h-3 md:w-5 md:h-5 text-green-300" />
                    <span className="text-xs md:text-sm text-white font-light">Goal achievement analysis</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2 mt-3 md:mt-4">
                  <Lock className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                  <span className="text-xs md:text-sm text-purple-300 font-light">Premium Feature</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
