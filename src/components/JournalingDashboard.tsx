import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mic, PenTool, BarChart3 } from "lucide-react";

const emotionColors = {
  happy: "bg-green-50 text-green-700 border-green-200",
  sad: "bg-blue-50 text-blue-700 border-blue-200",
  anxious: "bg-red-50 text-red-700 border-red-200",
  calm: "bg-gray-50 text-gray-700 border-gray-200",
  excited: "bg-yellow-50 text-yellow-700 border-yellow-200",
  frustrated: "bg-orange-50 text-orange-700 border-orange-200"
};

const emotions = ["happy", "sad", "anxious", "calm", "excited", "frustrated"];

const mockEntries = [
  {
    id: 1,
    date: "Today, 2:34 PM",
    content: "Had that conversation with Alex today. I'm still not sure where we stand but I feel more clarity about what I want...",
    emotions: ["anxious", "hopeful"],
    aiInsight: "I notice you're seeking clarity in your relationship patterns. This shows emotional growth."
  },
  {
    id: 2,
    date: "Yesterday, 11:22 PM",
    content: "Why do I always text back so fast? I need to work on this. The whole situationship thing is exhausting...",
    emotions: ["frustrated", "self-aware"],
    aiInsight: "You're recognizing your communication patterns - that's the first step to change."
  }
];

export const JournalingDashboard = () => {
  const [currentEntry, setCurrentEntry] = useState("");
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"journal" | "calendar">("journal");

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 journal-title">
            Your{" "}
            <span className="italic text-gray-700">
              emotional dashboard
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto journal-body">
            Experience the first core dashboard: intelligent journaling that understands your emotions and helps you grow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Dashboard Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Button 
              variant={viewMode === "journal" ? "default" : "outline"}
              onClick={() => setViewMode("journal")}
              className={viewMode === "journal" ? "bg-gray-900 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-50"}
            >
              <PenTool className="w-4 h-4 mr-2" />
              Journal View
            </Button>
            <Button 
              variant={viewMode === "calendar" ? "default" : "outline"}
              onClick={() => setViewMode("calendar")}
              className={viewMode === "calendar" ? "bg-gray-900 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-50"}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Calendar View
            </Button>
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              <BarChart3 className="w-4 h-4 mr-2" />
              Insights
            </Button>
          </div>

          {viewMode === "journal" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* New Entry */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-normal text-gray-900 mb-4 journal-title">New Entry</h3>
                
                <Textarea
                  placeholder="What's on your mind? Share your thoughts about relationships, dating, or just how you're feeling..."
                  value={currentEntry}
                  onChange={(e) => setCurrentEntry(e.target.value)}
                  className="min-h-32 mb-4 border-gray-200 focus:border-gray-400"
                />
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">How are you feeling?</p>
                  <div className="flex flex-wrap gap-2">
                    {emotions.map((emotion) => (
                      <Button
                        key={emotion}
                        variant="outline"
                        size="sm"
                        onClick={() => toggleEmotion(emotion)}
                        className={`${
                          selectedEmotions.includes(emotion) 
                            ? emotionColors[emotion as keyof typeof emotionColors]
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {emotion}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gray-900 hover:bg-gray-800">
                    <PenTool className="w-4 h-4 mr-2" />
                    Save Entry
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-200 hover:bg-gray-50">
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Recent Entries */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-normal text-gray-900 mb-4 journal-title">Recent Entries</h3>
                
                <div className="space-y-4">
                  {mockEntries.map((entry) => (
                    <div key={entry.id} className="border-l-4 border-gray-300 pl-4 py-2">
                      <p className="text-sm text-gray-500 mb-1">{entry.date}</p>
                      <p className="text-gray-800 mb-2 journal-body text-base">{entry.content}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {entry.emotions.map((emotion) => (
                          <Badge 
                            key={emotion} 
                            variant="outline" 
                            className={emotionColors[emotion as keyof typeof emotionColors] || "border-gray-200 text-gray-700"}
                          >
                            {emotion}
                          </Badge>
                        ))}
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <p className="text-sm text-gray-700 font-medium">💡 AI Insight</p>
                        <p className="text-sm text-gray-600">{entry.aiInsight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Calendar View */
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6; // Start from previous month
                  const hasEntry = Math.random() > 0.7;
                  const entryEmotions = hasEntry ? [emotions[Math.floor(Math.random() * emotions.length)]] : [];
                  
                  return (
                    <div 
                      key={i} 
                      className={`aspect-square p-2 rounded-lg border text-center text-sm ${
                        day <= 0 || day > 31 
                          ? "border-gray-100 text-gray-300" 
                          : hasEntry 
                            ? "border-purple-200 bg-purple-50 cursor-pointer hover:bg-purple-100" 
                            : "border-gray-200 hover:border-purple-200 cursor-pointer"
                      }`}
                    >
                      <div className="font-medium">{day > 0 && day <= 31 ? day : ""}</div>
                      {hasEntry && entryEmotions.length > 0 && (
                        <div className="flex justify-center mt-1">
                          <div className={`w-2 h-2 rounded-full ${
                            entryEmotions[0] === "happy" ? "bg-yellow-400" :
                            entryEmotions[0] === "sad" ? "bg-blue-400" :
                            entryEmotions[0] === "anxious" ? "bg-red-400" :
                            entryEmotions[0] === "calm" ? "bg-green-400" :
                            entryEmotions[0] === "excited" ? "bg-purple-400" :
                            "bg-orange-400"
                          }`} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-2">Emotional Overview</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span>Happy: 8 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>Sad: 3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span>Anxious: 5 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Calm: 6 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span>Excited: 4 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span>Frustrated: 2 days</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
