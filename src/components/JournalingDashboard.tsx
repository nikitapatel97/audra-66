import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Heart, TrendingUp, MessageCircle, Target, Sparkles, ChevronRight, PenTool, Smile, Frown, Meh, X, Clock } from "lucide-react";

export const JournalingDashboard = () => {
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
  const [newEntryTitle, setNewEntryTitle] = useState("");
  const [newEntryContent, setNewEntryContent] = useState("");
  const [newEntryMood, setNewEntryMood] = useState("5");

  const journalEntries = [
    {
      id: 1,
      date: "May 15, 2025",
      time: "11:47 PM",
      mood: "Devastated",
      moodScore: 2,
      title: "He never came home",
      preview: "Jake said he was going out for drinks with Sarah from work after their project meeting. That was at 6 PM. It's almost midnight and he's not answering his phone...",
      fullContent: "Jake said he was going out for drinks with Sarah from work after their project meeting. That was at 6 PM. It's almost midnight and he's not answering his phone. After everything we talked about just two days ago, after all his promises about being better and more honest, he does this. I can't stop thinking about that girl's name I saw on his phone three days ago. Is this Sarah the same person? I feel so stupid for believing him when he said it was nothing. I gave him another chance and this is what I get. I can't do this anymore. I deserve better than wondering where my boyfriend is at midnight, wondering if he's with another woman. This feels like the final straw. I'm done making excuses for him.",
      insights: ["You're recognizing patterns of broken trust", "Your boundaries are becoming clearer", "You're valuing your self-worth"],
      tags: ["relationship", "betrayal", "boundaries"],
      wordCount: 156,
      readTime: "2 min"
    },
    {
      id: 2,
      date: "May 13, 2025",
      time: "8:30 PM",
      mood: "Cautiously hopeful",
      moodScore: 5,
      title: "The long talk we needed to have",
      preview: "Jake and I finally sat down and talked about what I found on his phone. He swore it was nothing, that she's just a coworker, but I could see the guilt in his eyes...",
      fullContent: "Jake and I finally sat down and talked about what I found on his phone. He swore it was nothing, that she's just a coworker, but I could see the guilt in his eyes. He admitted that he's been 'friendly' with her but insisted nothing physical happened. I told him how it made me feel - like I couldn't trust him, like I was going crazy questioning everything. He cried and said he never meant to hurt me, that he'll be completely transparent from now on. He promised to be better, to show me his phone whenever I ask, to not hide anything. Part of me wants to believe him because I love him, but another part of me feels like I've heard these promises before. We agreed to work on rebuilding trust, but I told him this is his last chance. I can't keep going through this emotional rollercoaster.",
      insights: ["You're communicating your needs clearly", "Trust issues need concrete actions to heal", "You're setting boundaries"],
      tags: ["relationship", "communication", "trust"],
      wordCount: 203,
      readTime: "2 min"
    },
    {
      id: 3,
      date: "May 11, 2025",
      time: "2:15 PM",
      mood: "Confused and hurt",
      moodScore: 3,
      title: "Found something on his phone",
      preview: "I wasn't trying to snoop, I swear. Jake's phone was charging next to me and a text popped up from someone named 'Sarah' with a heart emoji...",
      fullContent: "I wasn't trying to snoop, I swear. Jake's phone was charging next to me and a text popped up from someone named 'Sarah' with a heart emoji. My stomach dropped. The preview said 'can't wait to see you tomorrow' with a kissy face. I've never heard him mention a Sarah before. When he came back from the kitchen, I asked him about it and he got super defensive, saying it was just a coworker and that I was being paranoid. But why does a coworker have a heart emoji next to her name? Why is she sending kissy faces? He snatched his phone away and said I need to trust him more. But how can I trust him when he's being so secretive? I feel like I'm going crazy. Maybe I am being paranoid, but something in my gut tells me this isn't innocent. I can't shake this feeling that he's hiding something from me.",
      insights: ["Trust your intuition when something feels off", "Defensive reactions often hide guilt", "You deserve transparency in relationships"],
      tags: ["relationship", "trust", "infidelity"],
      wordCount: 183,
      readTime: "2 min"
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

  const handleSaveEntry = () => {
    // Here you would typically save to a database
    console.log("Saving entry:", { title: newEntryTitle, content: newEntryContent, mood: newEntryMood });
    
    // Reset form and close dialog
    setNewEntryTitle("");
    setNewEntryContent("");
    setNewEntryMood("5");
    setIsNewEntryOpen(false);
  };

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

        {/* Start New Entry CTA */}
        <div className="text-center mb-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <Dialog open={isNewEntryOpen} onOpenChange={setIsNewEntryOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gray-900 hover:bg-gray-800 border-0 font-crimson">
                Start New Entry
                <PenTool className="ml-2 w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl">New Journal Entry</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-crimson">Title</label>
                  <input
                    type="text"
                    value={newEntryTitle}
                    onChange={(e) => setNewEntryTitle(e.target.value)}
                    placeholder="What's on your mind today?"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent font-crimson"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-crimson">How are you feeling? (1-10)</label>
                  <select
                    value={newEntryMood}
                    onChange={(e) => setNewEntryMood(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent font-crimson"
                  >
                    <option value="1">1 - Terrible</option>
                    <option value="2">2 - Very Bad</option>
                    <option value="3">3 - Bad</option>
                    <option value="4">4 - Not Great</option>
                    <option value="5">5 - Okay</option>
                    <option value="6">6 - Good</option>
                    <option value="7">7 - Very Good</option>
                    <option value="8">8 - Great</option>
                    <option value="9">9 - Amazing</option>
                    <option value="10">10 - Perfect</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-crimson">Your thoughts</label>
                  <textarea
                    value={newEntryContent}
                    onChange={(e) => setNewEntryContent(e.target.value)}
                    placeholder="Write about your day, your feelings, your thoughts..."
                    rows={8}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent font-crimson resize-none"
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setIsNewEntryOpen(false)} className="font-crimson">
                    Cancel
                  </Button>
                  <Button onClick={handleSaveEntry} className="bg-gray-900 hover:bg-gray-800 font-crimson">
                    Save Entry
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
      </div>

      {/* Full Entry Modal */}
      {selectedEntry !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getMoodIcon(journalEntries[selectedEntry].moodScore)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodColor(journalEntries[selectedEntry].moodScore)}`}>
                    {journalEntries[selectedEntry].mood}
                  </span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedEntry(null)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="text-right mb-4">
                <p className="text-sm text-gray-600 font-crimson">{journalEntries[selectedEntry].date}</p>
                <p className="text-xs text-gray-500 font-crimson">{journalEntries[selectedEntry].time}</p>
              </div>
              
              <h2 className="text-2xl font-normal text-gray-900 mb-4 font-playfair">{journalEntries[selectedEntry].title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6 font-crimson italic">{journalEntries[selectedEntry].fullContent}</p>
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-normal text-gray-900 mb-3 font-playfair">AI Insights</h3>
                <ul className="space-y-2">
                  {journalEntries[selectedEntry].insights.map((insight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700 font-crimson italic">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {journalEntries[selectedEntry].tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
