
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, MessageCircle, Target, Sparkles } from "lucide-react";

export const NotesDashboard = () => {
  const insights = [
    {
      type: "pattern",
      title: "Emotional Pattern Detected",
      content: "You tend to feel more anxious on Sundays, possibly due to upcoming week stress.",
      confidence: 87,
      icon: TrendingUp
    },
    {
      type: "growth",
      title: "Growth Opportunity",
      content: "Your entries show increased self-awareness. Consider exploring boundary-setting techniques.",
      confidence: 92,
      icon: Target
    },
    {
      type: "trigger",
      title: "Trigger Identified", 
      content: "Social media browsing often precedes negative mood entries. Consider mindful usage.",
      confidence: 79,
      icon: MessageCircle
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
          {/* AI Insights */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
                <Sparkles className="w-5 h-5 text-gray-600" />
                <span>AI Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <insight.icon className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900 mb-1 font-crimson">{insight.title}</h5>
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
