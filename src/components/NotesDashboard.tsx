
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, MessageCircle, Target, Sparkles, AlertTriangle, Heart, Brain } from "lucide-react";

export const NotesDashboard = () => {
  // Recent entry-specific insights
  const recentInsights = [
    {
      type: "trust",
      title: "Trust Rebuilding Process",
      content: "Your recent entries show you're setting clear boundaries with Jake while staying open to rebuilding trust. This balance is healthy.",
      confidence: 94,
      icon: Heart,
      entryDate: "May 13, 2025"
    },
    {
      type: "communication",
      title: "Communication Growth",
      content: "You articulated your feelings clearly during your conversation with Jake. This shows significant emotional maturity and self-advocacy.",
      confidence: 91,
      icon: MessageCircle,
      entryDate: "May 13, 2025"
    },
    {
      type: "intuition",
      title: "Trusting Your Gut",
      content: "Your instinct about the phone messages proved valid. Your entries reflect growing confidence in trusting your intuition.",
      confidence: 88,
      icon: Brain,
      entryDate: "May 11, 2025"
    }
  ];

  // General behavioral/emotional trends
  const generalTrends = [
    {
      type: "pattern",
      title: "Emotional Awareness Growth",
      content: "Over the past month, your entries show 40% more emotional vocabulary and self-reflection compared to earlier periods.",
      confidence: 87,
      icon: TrendingUp,
      trend: "increasing"
    },
    {
      type: "boundary",
      title: "Boundary Setting Development",
      content: "You've mentioned boundaries or 'last chances' in 60% of your recent relationship entries, showing growing assertiveness.",
      confidence: 82,
      icon: Target,
      trend: "stable"
    },
    {
      type: "trigger",
      title: "Sunday Anxiety Pattern",
      content: "Your mood drops by an average of 1.5 points on Sundays, likely due to week-ahead stress and relationship processing time.",
      confidence: 79,
      icon: AlertTriangle,
      trend: "consistent"
    }
  ];

  const weeklyGoals = [
    { goal: "Write 5 journal entries", progress: 60, current: 3, target: 5 },
    { goal: "Practice self-compassion", progress: 80, current: 4, target: 5 },
    { goal: "Limit social media to 30min/day", progress: 40, current: 2, target: 5 }
  ];

  const moodData = [
    { day: "Mon", mood: 6, entries: 1 },
    { day: "Tue", mood: 7, entries: 2 },
    { day: "Wed", mood: 4, entries: 1 },
    { day: "Thu", mood: 6, entries: 1 },
    { day: "Fri", mood: 8, entries: 2 },
    { day: "Sat", mood: 5, entries: 1 },
    { day: "Sun", mood: 6, entries: 1 }
  ];

  const getTrendColor = (trend) => {
    if (trend === "increasing") return "text-green-600";
    if (trend === "stable") return "text-blue-600";
    return "text-orange-600";
  };

  return (
    <section className="py-4 px-4 bg-white sm:px-6 lg:px-8 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 font-playfair">
            Personal{" "}
            <span className="italic text-gray-600 font-playfair">
              insights
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Entry Insights */}
          <Card className="border-gray-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
                <Sparkles className="w-5 h-5 text-gray-600" />
                <span>Recent Entry Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentInsights.map((insight, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <insight.icon className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-medium text-gray-900 font-crimson">{insight.title}</h5>
                        <span className="text-xs text-gray-500 font-crimson">From {insight.entryDate}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2 font-crimson italic">{insight.content}</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-gray-600 h-1.5 rounded-full" 
                            style={{ width: `${insight.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 font-crimson">{insight.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* General Trends */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span>General Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {generalTrends.map((trend, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <trend.icon className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-medium text-gray-900 font-crimson">{trend.title}</h5>
                        <span className={`text-xs font-medium font-crimson ${getTrendColor(trend.trend)}`}>
                          {trend.trend}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2 font-crimson italic">{trend.content}</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-gray-600 h-1.5 rounded-full" 
                            style={{ width: `${trend.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 font-crimson">{trend.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Goals */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
                <Target className="w-5 h-5 text-gray-600" />
                <span>Weekly Goals</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {weeklyGoals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 font-crimson">{goal.goal}</span>
                    <span className="text-xs text-gray-500 font-crimson">{goal.current}/{goal.target}</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Mood Chart */}
          <Card className="border-gray-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span>Mood Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {moodData.map((day) => (
                  <div key={day.day} className="flex items-center space-x-3">
                    <span className="text-xs font-medium text-gray-600 w-8 font-crimson">{day.day}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gray-600 h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${(day.mood / 10) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 w-8 font-crimson">{day.mood}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
