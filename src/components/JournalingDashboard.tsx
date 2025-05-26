
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Mic, PenTool, BarChart3, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, TrendingUp, Heart, Brain, Users } from "lucide-react";

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

const insightExamples = [
  {
    id: 1,
    type: "Pattern Recognition",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Communication Patterns",
    insight: "You tend to journal about relationship concerns on Sunday evenings, often after social events. This suggests you process social interactions deeply and may benefit from setting boundaries around weekend social commitments.",
    emotions: ["anxious", "reflective"],
    color: "bg-blue-50 border-blue-200 text-blue-800"
  },
  {
    id: 2,
    type: "Emotional Growth",
    icon: <Heart className="w-5 h-5" />,
    title: "Self-Awareness Breakthrough",
    insight: "Your recent entries show increased self-compassion language. You've shifted from 'I always mess up' to 'I'm learning from this experience' - a significant emotional maturity indicator.",
    emotions: ["growth", "compassionate"],
    color: "bg-green-50 border-green-200 text-green-800"
  },
  {
    id: 3,
    type: "Behavioral Insight",
    icon: <Brain className="w-5 h-5" />,
    title: "Response Triggers",
    insight: "You've mentioned feeling overwhelmed 6 times this month, often correlating with mentions of 'too many texts' or 'pressure to respond quickly'. Consider setting communication boundaries.",
    emotions: ["overwhelmed", "stressed"],
    color: "bg-orange-50 border-orange-200 text-orange-800"
  },
  {
    id: 4,
    type: "Relationship Dynamics",
    icon: <Users className="w-5 h-5" />,
    title: "Attachment Style Recognition",
    insight: "Your entries reveal anxious attachment patterns - seeking reassurance through frequent contact and overthinking delayed responses. Recognizing this is the first step toward healthier relationship dynamics.",
    emotions: ["anxious", "seeking"],
    color: "bg-purple-50 border-purple-200 text-purple-800"
  }
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const JournalingDashboard = () => {
  const [currentEntry, setCurrentEntry] = useState("");
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"journal" | "calendar" | "insights">("journal");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarView, setCalendarView] = useState<"month" | "year">("month");

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const navigateYear = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setFullYear(newDate.getFullYear() - 1);
      } else {
        newDate.setFullYear(newDate.getFullYear() + 1);
      }
      return newDate;
    });
  };

  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className="aspect-square p-2 rounded-lg border border-gray-100" />
      );
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEntry = Math.random() > 0.7;
      const entryEmotions = hasEntry ? [emotions[Math.floor(Math.random() * emotions.length)]] : [];
      
      days.push(
        <div 
          key={day} 
          className={`aspect-square p-2 rounded-lg border text-center text-sm cursor-pointer ${
            hasEntry 
              ? "border-gray-400 bg-gray-50 hover:bg-gray-100" 
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="font-medium text-gray-900">{day}</div>
          {hasEntry && entryEmotions.length > 0 && (
            <div className="flex justify-center mt-1">
              <div className={`w-2 h-2 rounded-full ${
                entryEmotions[0] === "happy" ? "bg-green-400" :
                entryEmotions[0] === "sad" ? "bg-blue-400" :
                entryEmotions[0] === "anxious" ? "bg-red-400" :
                entryEmotions[0] === "calm" ? "bg-gray-400" :
                entryEmotions[0] === "excited" ? "bg-yellow-400" :
                "bg-orange-400"
              }`} />
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-2">
        {days}
      </div>
    );
  };

  const renderYearView = () => {
    const year = currentDate.getFullYear();
    const months = [];

    for (let month = 0; month < 12; month++) {
      const hasEntries = Math.random() > 0.3;
      const entryCount = hasEntries ? Math.floor(Math.random() * 15) + 1 : 0;

      months.push(
        <div 
          key={month}
          className={`p-4 rounded-lg border text-center cursor-pointer ${
            hasEntries 
              ? "border-gray-400 bg-gray-50 hover:bg-gray-100" 
              : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => {
            setCurrentDate(new Date(year, month, 1));
            setCalendarView("month");
          }}
        >
          <div className="font-medium text-gray-900 mb-2">{monthNames[month]}</div>
          {hasEntries && (
            <div className="text-xs text-gray-600">
              {entryCount} {entryCount === 1 ? 'entry' : 'entries'}
            </div>
          )}
          {hasEntries && (
            <div className="flex justify-center mt-2 space-x-1">
              {Array.from({ length: Math.min(entryCount, 3) }, (_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              ))}
              {entryCount > 3 && (
                <span className="text-xs text-gray-500">+{entryCount - 3}</span>
              )}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {months}
      </div>
    );
  };

  return (
    <section id="dashboard" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 font-playfair">
            Your{" "}
            <span className="italic text-gray-600 font-playfair">
              emotional dashboard
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-crimson italic">
            Experience the first core dashboard: intelligent journaling that understands your emotions and helps you grow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Dashboard Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Button 
              variant={viewMode === "journal" ? "default" : "outline"}
              onClick={() => setViewMode("journal")}
              className={viewMode === "journal" ? "bg-gray-900 hover:bg-gray-800 font-crimson" : "border-gray-300 hover:bg-gray-50 font-crimson"}
            >
              <PenTool className="w-4 h-4 mr-2" />
              Journal View
            </Button>
            <Button 
              variant={viewMode === "calendar" ? "default" : "outline"}
              onClick={() => setViewMode("calendar")}
              className={viewMode === "calendar" ? "bg-gray-900 hover:bg-gray-800 font-crimson" : "border-gray-300 hover:bg-gray-50 font-crimson"}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Calendar View
            </Button>
            <Button 
              variant={viewMode === "insights" ? "default" : "outline"}
              onClick={() => setViewMode("insights")}
              className={viewMode === "insights" ? "bg-gray-900 hover:bg-gray-800 font-crimson" : "border-gray-300 hover:bg-gray-50 font-crimson"}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Insights
            </Button>
          </div>

          {viewMode === "journal" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* New Entry */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-normal text-gray-900 mb-4 font-playfair">New Entry</h3>
                
                <Textarea
                  placeholder="What's on your mind? Share your thoughts about relationships, dating, or just how you're feeling..."
                  value={currentEntry}
                  onChange={(e) => setCurrentEntry(e.target.value)}
                  className="min-h-32 mb-4 border-gray-200 focus:border-gray-400 font-crimson"
                />
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2 font-crimson">How are you feeling?</p>
                  <div className="flex flex-wrap gap-2">
                    {emotions.map((emotion) => (
                      <Button
                        key={emotion}
                        variant="outline"
                        size="sm"
                        onClick={() => toggleEmotion(emotion)}
                        className={`font-crimson ${
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
                  <Button className="flex-1 bg-gray-900 hover:bg-gray-800 font-crimson">
                    <PenTool className="w-4 h-4 mr-2" />
                    Save Entry
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-200 hover:bg-gray-50">
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Recent Entries */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-normal text-gray-900 mb-4 font-playfair">Recent Entries</h3>
                
                <div className="space-y-4">
                  {mockEntries.map((entry) => (
                    <div key={entry.id} className="border-l-4 border-gray-300 pl-4 py-2">
                      <p className="text-sm text-gray-500 mb-1 font-crimson">{entry.date}</p>
                      <p className="text-gray-800 mb-2 font-crimson italic text-base">{entry.content}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {entry.emotions.map((emotion) => (
                          <Badge 
                            key={emotion} 
                            variant="outline" 
                            className={`font-crimson ${emotionColors[emotion as keyof typeof emotionColors] || "border-gray-200 text-gray-700"}`}
                          >
                            {emotion}
                          </Badge>
                        ))}
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <p className="text-sm text-gray-700 font-medium font-crimson">💡 AI Insight</p>
                        <p className="text-sm text-gray-600 font-crimson italic">{entry.aiInsight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : viewMode === "insights" ? (
            /* Insights View */
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-normal text-gray-900 mb-4 font-playfair">AI Insights Examples</h3>
                <p className="text-gray-600 text-center font-crimson italic">
                  Here are examples of the kind of insights Audra provides based on your journaling patterns
                </p>
              </div>
              
              <div className="space-y-6">
                {insightExamples.map((example) => (
                  <Card key={example.id} className={`border-2 ${example.color}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          {example.icon}
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2 text-xs font-crimson">
                            {example.type}
                          </Badge>
                          <CardTitle className="text-lg font-playfair">{example.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3 leading-relaxed font-crimson italic">
                        {example.insight}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {example.emotions.map((emotion) => (
                          <Badge key={emotion} variant="secondary" className="text-xs font-crimson">
                            {emotion}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-3 font-crimson italic">
                    Your personal insights will be generated based on your unique journaling patterns and emotional journey.
                  </p>
                  <Button className="bg-gray-900 hover:bg-gray-800 font-crimson">
                    Start Journaling to Generate Your Insights
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* Calendar View */
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              {/* Calendar Header with Navigation */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => calendarView === "month" ? navigateMonth("prev") : navigateYear("prev")}
                    className="border-gray-300 hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 font-playfair">
                      {calendarView === "month" 
                        ? `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                        : currentDate.getFullYear()
                      }
                    </h3>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => calendarView === "month" ? navigateMonth("next") : navigateYear("next")}
                    className="border-gray-300 hover:bg-gray-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCalendarView(calendarView === "month" ? "year" : "month")}
                  className="border-gray-300 hover:bg-gray-50 font-crimson"
                >
                  {calendarView === "month" ? (
                    <>
                      <ZoomOut className="w-4 h-4 mr-2" />
                      Year View
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-4 h-4 mr-2" />
                      Month View
                    </>
                  )}
                </Button>
              </div>

              {calendarView === "month" && (
                <>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                      <div key={day} className="text-center text-sm font-medium text-gray-500 p-2 font-crimson">
                        {day}
                      </div>
                    ))}
                  </div>
                  {renderMonthView()}
                </>
              )}

              {calendarView === "year" && renderYearView()}
              
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2 font-playfair">Emotional Overview</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="font-crimson">Happy: 8 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="font-crimson">Sad: 3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="font-crimson">Anxious: 5 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="font-crimson">Calm: 6 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="font-crimson">Excited: 4 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="font-crimson">Frustrated: 2 days</span>
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
