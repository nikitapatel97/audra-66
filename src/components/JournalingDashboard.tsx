import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Heart, TrendingUp, MessageCircle, BookOpen, Star, Clock, Target, Sparkles, ChevronRight, PenTool, Smile, Frown, Meh } from "lucide-react";

export const JournalingDashboard = () => {
  const [selectedEntry, setSelectedEntry] = useState(0);

  const journalEntries = [
    {
      id: 1,
      date: "Today",
      time: "2:15 PM",
      mood: "Confused but hopeful",
      moodScore: 6,
      title: "Coffee date aftermath",
      preview: "Had coffee with Alex today and I'm honestly not sure what to think. The conversation flowed really well and there were definitely some moments that felt...",
      insights: ["You tend to overthink mixed signals", "Your anxiety peaks after social interactions", "Writing helps you process complex emotions"],
      tags: ["dating", "anxiety", "self-reflection"],
      wordCount: 247,
      readTime: "2 min",
      aiSummary: "You're processing mixed signals from a coffee date with Alex. While the interaction felt positive, you're experiencing post-social anxiety and uncertainty about their intentions."
    },
    {
      id: 2,
      date: "Yesterday",
      time: "11:30 PM",
      mood: "Frustrated",
      moodScore: 4,
      title: "Why is dating so complicated?",
      preview: "Ugh, I'm so tired of trying to decode every text message and wondering if someone actually likes me or if they're just being polite. When did everything become so...",
      insights: ["You value direct communication", "Uncertainty triggers your stress response", "You're seeking authentic connections"],
      tags: ["dating", "communication", "frustration"],
      wordCount: 156,
      readTime: "1 min",
      aiSummary: "You're expressing frustration with modern dating communication patterns and the difficulty of reading people's true intentions."
    },
    {
      id: 3,
      date: "3 days ago",
      time: "7:45 AM",
      mood: "Optimistic",
      moodScore: 8,
      title: "New mindset, new me?",
      preview: "I've been thinking about what my therapist said about focusing on my own growth instead of trying to figure out what other people want from me...",
      insights: ["You're embracing personal growth", "Therapy insights are resonating", "You're shifting from external to internal validation"],
      tags: ["growth", "therapy", "self-love"],
      wordCount: 203,
      readTime: "2 min",
      aiSummary: "You're reflecting on therapeutic insights about self-focus and personal growth, showing a positive shift in mindset."
    }
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

  const getMoodIcon = (score) => {
    if (score >= 7) return <Smile className="w-4 h-4 text-green-500" />;
    if (score >= 5) return <Meh className="w-4 h-4 text-yellow-500" />;
    return <Frown className="w-4 h-4 text-red-500" />;
  };

  const getMoodColor = (score) => {
    if (score >= 7) return "bg-green-100 text-green-800";
    if (score >= 5) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <section id="dashboard" className="py-4 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 font-playfair">
            Your{" "}
            <span className="italic text-gray-600 font-playfair">
              personal
            </span>{" "}
            growth journey
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-crimson italic">
            Track your emotional patterns, celebrate progress, and discover insights about yourself through intelligent journaling.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <PenTool className="w-5 h-5 text-gray-600" />
                <span className="text-2xl font-light text-gray-900">12</span>
              </div>
              <p className="text-sm text-gray-600 font-crimson">Entries this month</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Heart className="w-5 h-5 text-gray-600" />
                <span className="text-2xl font-light text-gray-900">6.2</span>
              </div>
              <p className="text-sm text-gray-600 font-crimson">Avg mood score</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Target className="w-5 h-5 text-gray-600" />
                <span className="text-2xl font-light text-gray-900">3</span>
              </div>
              <p className="text-sm text-gray-600 font-crimson">Insights unlocked</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-2xl font-light text-gray-900">7</span>
              </div>
              <p className="text-sm text-gray-600 font-crimson">Day streak</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Entries */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light text-gray-900 font-playfair">Recent Entries</h3>
              <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50 font-crimson">
                View All
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {journalEntries.map((entry, index) => (
              <Card key={entry.id} className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedEntry(index)}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        {getMoodIcon(entry.moodScore)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodColor(entry.moodScore)}`}>
                          {entry.mood}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 font-crimson">{entry.date}</p>
                      <p className="text-xs text-gray-500 font-crimson">{entry.time}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-normal text-gray-900 mb-3 font-playfair">{entry.title}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed font-crimson italic">{entry.preview}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="font-crimson">{entry.wordCount} words</span>
                      <span className="font-crimson">{entry.readTime} read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
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
            <Card className="border-gray-200">
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

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-2xl font-light text-gray-900 mb-4 font-playfair">Ready to continue writing?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto font-crimson italic">
            Capture today's thoughts, process your emotions, and unlock deeper insights about yourself.
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 border-0 font-crimson">
            Start New Entry
            <PenTool className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
