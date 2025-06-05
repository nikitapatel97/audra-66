import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Heart, TrendingUp, MessageCircle, Target, Sparkles, ChevronRight, PenTool, Smile, Frown, Meh, X, Clock, Tag, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const JournalingDashboard = () => {
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
  const [newEntryTitle, setNewEntryTitle] = useState("");
  const [newEntryContent, setNewEntryContent] = useState("");
  const [newEntryMood, setNewEntryMood] = useState("5");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const availableTags = ["relationship", "growth", "redflags", "patterns", "exes"];

  const [journalEntries, setJournalEntries] = useState([
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
  ]);

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

  const filteredEntries = journalEntries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.fullContent.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? entry.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const handleSaveEntry = () => {
    // Create new entry object
    const now = new Date();
    const newEntry = {
      id: Date.now(), // Simple ID generation
      date: now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      time: now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
      mood: getMoodText(parseInt(newEntryMood)),
      moodScore: parseInt(newEntryMood),
      title: newEntryTitle,
      preview: newEntryContent.length > 100 ? newEntryContent.substring(0, 100) + "..." : newEntryContent,
      fullContent: newEntryContent,
      insights: generateInsights(newEntryContent, parseInt(newEntryMood)),
      tags: generateTags(newEntryContent),
      wordCount: newEntryContent.split(' ').length,
      readTime: Math.max(1, Math.ceil(newEntryContent.split(' ').length / 200)) + " min"
    };

    // Add new entry to the beginning of the array (most recent first)
    setJournalEntries(prev => [newEntry, ...prev]);
    
    console.log("Saving entry:", { title: newEntryTitle, content: newEntryContent, mood: newEntryMood });
    
    // Reset form and close dialog
    setNewEntryTitle("");
    setNewEntryContent("");
    setNewEntryMood("5");
    setIsNewEntryOpen(false);
  };

  const getMoodText = (score: number) => {
    if (score === 1) return "Devastated";
    if (score === 2) return "Very sad";
    if (score === 3) return "Confused and hurt";
    if (score === 4) return "Not great";
    if (score === 5) return "Okay";
    if (score === 6) return "Good";
    if (score === 7) return "Very good";
    if (score === 8) return "Great";
    if (score === 9) return "Amazing";
    if (score === 10) return "Perfect";
    return "Okay";
  };

  const generateInsights = (content: string, mood: number) => {
    // Simple insight generation based on content and mood
    const insights = [];
    if (mood <= 3) {
      insights.push("You're processing difficult emotions");
      insights.push("Your feelings are valid and important");
    }
    if (content.toLowerCase().includes("relationship")) {
      insights.push("Relationship dynamics are affecting your wellbeing");
    }
    if (content.toLowerCase().includes("trust")) {
      insights.push("Trust issues need concrete actions to heal");
    }
    return insights.length > 0 ? insights : ["You're taking time to reflect on your experiences"];
  };

  const generateTags = (content: string) => {
    const tags = [];
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes("relationship") || lowerContent.includes("boyfriend") || lowerContent.includes("partner")) {
      tags.push("relationship");
    }
    if (lowerContent.includes("trust") || lowerContent.includes("betrayal") || lowerContent.includes("cheating")) {
      tags.push("trust");
    }
    if (lowerContent.includes("work") || lowerContent.includes("job")) {
      tags.push("work");
    }
    if (lowerContent.includes("family") || lowerContent.includes("parents")) {
      tags.push("family");
    }
    return tags.length > 0 ? tags : ["personal"];
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
        <div className="text-center mb-8 bg-gray-50 rounded-lg p-8 border border-gray-200">
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

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search your entries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-200 focus:border-gray-400 font-crimson"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              onClick={() => setSelectedTag(null)}
              className={selectedTag === null ? "bg-gray-900 hover:bg-gray-800 font-crimson" : "border-gray-200 hover:bg-gray-50 font-crimson"}
            >
              All
            </Button>
            {availableTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={selectedTag === tag ? "bg-gray-900 hover:bg-gray-800 font-crimson" : "border-gray-200 hover:bg-gray-50 font-crimson"}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Recent Entries - Full Width */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-light text-gray-900 font-playfair">Recent Entries</h3>
            <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50 font-crimson">
              View All
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntries.map((entry, index) => (
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
        </div>
      </div>

      {/* Full Entry Modal */}
      {selectedEntry !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getMoodIcon(filteredEntries[selectedEntry].moodScore)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodColor(filteredEntries[selectedEntry].moodScore)}`}>
                    {filteredEntries[selectedEntry].mood}
                  </span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedEntry(null)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="text-right mb-4">
                <p className="text-sm text-gray-600 font-crimson">{filteredEntries[selectedEntry].date}</p>
                <p className="text-xs text-gray-500 font-crimson">{filteredEntries[selectedEntry].time}</p>
              </div>
              
              <h2 className="text-2xl font-normal text-gray-900 mb-4 font-playfair">{filteredEntries[selectedEntry].title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6 font-crimson italic">{filteredEntries[selectedEntry].fullContent}</p>
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-normal text-gray-900 mb-3 font-playfair">AI Insights</h3>
                <ul className="space-y-2">
                  {filteredEntries[selectedEntry].insights.map((insight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700 font-crimson italic">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {filteredEntries[selectedEntry].tags.map((tag) => (
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
