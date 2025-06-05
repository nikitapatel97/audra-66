
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Target, TrendingUp, Calendar, Plus, Smile, Frown, Meh, Heart, Star, Award } from "lucide-react";

export const TrackerDashboard = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const moodOptions = [
    { score: 1, label: "Terrible", icon: Frown, color: "text-red-500" },
    { score: 2, label: "Bad", icon: Frown, color: "text-red-400" },
    { score: 3, label: "Poor", icon: Meh, color: "text-orange-400" },
    { score: 4, label: "Okay", icon: Meh, color: "text-yellow-500" },
    { score: 5, label: "Neutral", icon: Meh, color: "text-yellow-400" },
    { score: 6, label: "Good", icon: Smile, color: "text-green-400" },
    { score: 7, label: "Great", icon: Smile, color: "text-green-500" },
    { score: 8, label: "Amazing", icon: Smile, color: "text-green-600" },
    { score: 9, label: "Fantastic", icon: Star, color: "text-blue-500" },
    { score: 10, label: "Perfect", icon: Award, color: "text-purple-500" }
  ];

  const weeklyData = [
    { day: "Mon", mood: 7, habits: 3, sleep: 8 },
    { day: "Tue", mood: 6, habits: 4, sleep: 7 },
    { day: "Wed", mood: 8, habits: 5, sleep: 9 },
    { day: "Thu", mood: 5, habits: 2, sleep: 6 },
    { day: "Fri", mood: 9, habits: 5, sleep: 8 },
    { day: "Sat", mood: 8, habits: 4, sleep: 9 },
    { day: "Sun", mood: 7, habits: 3, sleep: 7 }
  ];

  const habits = [
    { name: "Meditation", completed: 5, target: 7, streak: 3 },
    { name: "Exercise", completed: 4, target: 5, streak: 2 },
    { name: "Reading", completed: 6, target: 7, streak: 6 },
    { name: "Hydration", completed: 7, target: 8, streak: 12 }
  ];

  return (
    <section className="py-4 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6 font-playfair">
            Daily{" "}
            <span className="italic text-gray-600 font-playfair">
              tracker
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-crimson italic">
            Track your mood, habits, and progress to build a better you
          </p>
        </div>

        {/* Quick Mood Log */}
        <Card className="border-gray-200 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
              <Heart className="w-5 h-5 text-gray-600" />
              <span>How are you feeling today?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {moodOptions.map((mood) => (
                <Button
                  key={mood.score}
                  variant={selectedMood === mood.score ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedMood(mood.score)}
                  className={`flex flex-col items-center gap-1 p-3 h-auto ${
                    selectedMood === mood.score 
                      ? "bg-gray-900 text-white" 
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <mood.icon className={`w-4 h-4 ${selectedMood === mood.score ? "text-white" : mood.color}`} />
                  <span className="text-xs font-crimson">{mood.score}</span>
                </Button>
              ))}
            </div>
            {selectedMood && (
              <p className="text-center text-sm text-gray-600 font-crimson italic">
                {moodOptions.find(m => m.score === selectedMood)?.label}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Weekly Overview */}
        <Card className="border-gray-200 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
              <Calendar className="w-5 h-5 text-gray-600" />
              <span>This Week</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-600 w-10 font-crimson">{day.day}</span>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-crimson">Mood</span>
                      <span className="text-xs text-gray-600 font-crimson">{day.mood}/10</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-gray-600 h-1.5 rounded-full" 
                        style={{ width: `${(day.mood / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-crimson">Habits</span>
                      <span className="text-xs text-gray-600 font-crimson">{day.habits}/5</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-gray-600 h-1.5 rounded-full" 
                        style={{ width: `${(day.habits / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-crimson">Sleep</span>
                      <span className="text-xs text-gray-600 font-crimson">{day.sleep}h</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-gray-600 h-1.5 rounded-full" 
                        style={{ width: `${(day.sleep / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Habit Tracker */}
        <Card className="border-gray-200 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
              <Target className="w-5 h-5 text-gray-600" />
              <span>Habit Tracker</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {habits.map((habit, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900 font-crimson">{habit.name}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full font-crimson">
                        {habit.streak} day streak
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 font-crimson">{habit.completed}/{habit.target}</span>
                  </div>
                  <Progress value={(habit.completed / habit.target) * 100} className="h-2" />
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4 text-gray-600 border-gray-300 hover:bg-gray-50 font-crimson">
              <Plus className="w-4 h-4 mr-2" />
              Add New Habit
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="text-center border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span className="text-2xl font-light text-gray-900">7.2</span>
              </div>
              <p className="text-sm text-gray-600 font-crimson">Avg mood this week</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <BarChart3 className="w-5 h-5 text-gray-600" />
                <span className="text-2xl font-light text-gray-900">76%</span>
              </div>
              <p className="text-sm text-gray-600 font-crimson">Habits completed</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-lg p-6 border border-gray-200">
          <BarChart3 className="w-10 h-10 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-light text-gray-900 mb-3 font-playfair">Track your progress</h3>
          <p className="text-gray-700 mb-4 font-crimson italic">
            Build better habits and understand your patterns
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 border-0 font-crimson">
            Log Today's Data
            <Plus className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
