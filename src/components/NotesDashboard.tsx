import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, MessageCircle, Target, Sparkles, AlertTriangle, Heart, Brain } from "lucide-react";

export const NotesDashboard = () => {
  // Get journal entries from localStorage or use default entries
  const getStoredEntries = () => {
    try {
      const stored = localStorage.getItem('journalEntries');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.log('No stored entries found');
    }
    return [
      {
        id: 2,
        date: "May 13, 2025",
        time: "8:30 PM",
        mood: "Cautiously hopeful",
        moodScore: 5,
        title: "The long talk we needed to have",
        fullContent: "Jake and I finally sat down and talked about what I found on his phone. He swore it was nothing, that she's just a coworker, but I could see the guilt in his eyes. He admitted that he's been 'friendly' with her but insisted nothing physical happened. I told him how it made me feel - like I couldn't trust him, like I was going crazy questioning everything. He cried and said he never meant to hurt me, that he'll be completely transparent from now on. He promised to be better, to show me his phone whenever I ask, to not hide anything. Part of me wants to believe him because I love him, but another part of me feels like I've heard these promises before. We agreed to work on rebuilding trust, but I told him this is his last chance. I can't keep going through this emotional rollercoaster.",
        tags: ["relationship", "communication", "trust"]
      },
      {
        id: 3,
        date: "May 11, 2025", 
        time: "2:15 PM",
        mood: "Confused and hurt",
        moodScore: 3,
        title: "Found something on his phone",
        fullContent: "I wasn't trying to snoop, I swear. Jake's phone was charging next to me and a text popped up from someone named 'Sarah' with a heart emoji. My stomach dropped. The preview said 'can't wait to see you tomorrow' with a kissy face. I've never heard him mention a Sarah before. When he came back from the kitchen, I asked him about it and he got super defensive, saying it was just a coworker and that I was being paranoid. But why does a coworker have a heart emoji next to her name? Why is she sending kissy faces? He snatched his phone away and said I need to trust him more. But how can I trust him when he's being so secretive? I feel like I'm going crazy. Maybe I am being paranoid, but something in my gut tells me this isn't innocent. I can't shake this feeling that he's hiding something from me.",
        tags: ["relationship", "trust", "infidelity"]
      }
    ];
  };

  const journalEntries = getStoredEntries();

  // Generate dynamic insights based on recent entries
  const generateRecentInsights = (entries) => {
    const recentEntries = entries.slice(0, 3); // Get 3 most recent entries
    const insights = [];

    recentEntries.forEach(entry => {
      const content = entry.fullContent.toLowerCase();
      const title = entry.title.toLowerCase();
      
      // Generate specific insights based on content
      if (content.includes("didn't come home") || content.includes("never came home") || title.includes("never came home")) {
        insights.push({
          type: "concern",
          title: "Reliability Concerns",
          content: "Your recent entry about Jake not coming home shows a pattern of unreliability that's affecting your sense of security in the relationship.",
          confidence: 92,
          icon: AlertTriangle,
          entryDate: entry.date
        });
      }
      
      if (content.includes("trust") && entry.moodScore <= 5) {
        insights.push({
          type: "trust",
          title: "Trust Rebuilding Process", 
          content: "Your entries show you're working through trust issues. Setting clear expectations and boundaries is a healthy approach.",
          confidence: 89,
          icon: Heart,
          entryDate: entry.date
        });
      }

      if (content.includes("talked") || content.includes("conversation")) {
        insights.push({
          type: "communication",
          title: "Communication Growth",
          content: "You're actively engaging in difficult conversations, which shows emotional maturity and commitment to resolving issues.",
          confidence: 91,
          icon: MessageCircle,
          entryDate: entry.date
        });
      }

      if (content.includes("gut") || content.includes("instinct") || content.includes("feeling")) {
        insights.push({
          type: "intuition",
          title: "Trusting Your Intuition",
          content: "Your entries show you're learning to trust your instincts. This self-awareness is a valuable tool for making decisions.",
          confidence: 88,
          icon: Brain,
          entryDate: entry.date
        });
      }

      if (content.includes("last chance") || content.includes("boundaries")) {
        insights.push({
          type: "boundaries",
          title: "Setting Clear Boundaries",
          content: "You're establishing important boundaries and consequences. This shows growth in self-advocacy and relationship management.",
          confidence: 94,
          icon: Target,
          entryDate: entry.date
        });
      }
    });

    // Remove duplicates and limit to 3 most relevant insights
    const uniqueInsights = insights.filter((insight, index, self) => 
      index === self.findIndex(i => i.type === insight.type)
    ).slice(0, 3);

    // If no specific insights found, provide default ones
    if (uniqueInsights.length === 0) {
      return [
        {
          type: "reflection",
          title: "Processing Your Experiences",
          content: "Your recent entries show thoughtful reflection on your relationships and emotions. This self-awareness is a sign of personal growth.",
          confidence: 85,
          icon: Brain,
          entryDate: recentEntries[0]?.date || "Recent"
        }
      ];
    }

    return uniqueInsights;
  };

  const recentInsights = generateRecentInsights(journalEntries);

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
