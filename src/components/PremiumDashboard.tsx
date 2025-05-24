
import { useState } from "react";
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
  Bot
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-8 h-8 text-amber-600" />
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              Premium Feature
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Your{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Emotional Intelligence
            </span>{" "}
            Reports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized insights into your emotional growth, relationship patterns, and areas for development. 
            Share with therapists, partners, or keep as your personal growth mirror.
          </p>
        </div>

        {/* Upgrade Prompt for Non-Premium Users */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-amber-200">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-amber-600" />
                <h3 className="text-2xl font-bold text-gray-900">Unlock Premium Insights</h3>
              </div>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Upgrade to Premium to access detailed emotional reports, voice-aware AI coaching, 
                and couples' shared insights. Transform your relationship journey with data-driven growth.
              </p>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 text-lg">
                <Crown className="w-5 h-5 mr-2" />
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Premium Features Preview */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedPeriod} onValueChange={(value) => setSelectedPeriod(value as any)} className="mb-8">
            <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm">
              <TabsTrigger value="monthly" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Monthly
              </TabsTrigger>
              <TabsTrigger value="quarterly" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Quarterly
              </TabsTrigger>
              <TabsTrigger value="annual" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Annual
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedPeriod} className="space-y-6">
              {/* Report Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-amber-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <Target className="w-5 h-5" />
                      Biggest Wins
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {currentData.biggestWins.map((win, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          {win}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-red-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-red-700">
                      <Heart className="w-5 h-5" />
                      Emotional Triggers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {currentData.emotionalTriggers.map((trigger, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          {trigger}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <TrendingUp className="w-5 h-5" />
                      Growth Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {currentData.growthAreas.map((area, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-purple-700">
                      <Users className="w-5 h-5" />
                      Relationship Patterns
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {currentData.relationshipPatterns.map((pattern, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          {pattern}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Report Actions */}
              <Card className="bg-white/80 backdrop-blur-sm border-amber-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Share Your {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Report
                      </h3>
                      <p className="text-gray-600">
                        Export and share with therapists, partners, or save for personal reflection
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share with Partner
                      </Button>
                      <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                        <Download className="w-4 h-4 mr-2" />
                        Export Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Premium Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Voice-Aware AI */}
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-amber-600" />
                  Voice-Aware AI Coaching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our AI listens to your tone and checks in when you sound off. Get personalized support 
                  when you need it most.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-amber-800 italic">
                        "You sound a bit stressed today. Do you want to talk about what's bothering you? 
                        I'm here to help you work through it."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Premium Feature</span>
                </div>
              </CardContent>
            </Card>

            {/* Couples' Reports */}
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-600" />
                  Couples' Shared Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Generate combined reports with your partner. Perfect for relationship check-ins 
                  and understanding each other's growth patterns.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-pink-50 border border-pink-200 rounded-lg">
                    <Heart className="w-5 h-5 text-pink-600" />
                    <span className="text-sm text-pink-800">Shared communication patterns</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-blue-800">Relationship growth tracking</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <Target className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-green-800">Goal achievement analysis</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Premium Feature</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
