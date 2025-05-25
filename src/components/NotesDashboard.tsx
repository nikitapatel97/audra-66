
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit3, Trash2, Search, Heart, Shield, Target, AlertTriangle, Star, User } from "lucide-react";

const noteCategories = [
  {
    id: "values",
    title: "Partner Values",
    description: "What you're looking for in a partner",
    icon: Heart,
    color: "from-gray-600 to-gray-800"
  },
  {
    id: "boundaries", 
    title: "Dating Boundaries",
    description: "Your non-negotiables in relationships",
    icon: Shield,
    color: "from-gray-600 to-gray-800"
  },
  {
    id: "goals",
    title: "Relationship Goals", 
    description: "What you want to achieve in dating/relationships",
    icon: Target,
    color: "from-gray-600 to-gray-800"
  },
  {
    id: "redflags",
    title: "Red Flags",
    description: "Warning signs you've learned to watch for",
    icon: AlertTriangle,
    color: "from-gray-600 to-gray-800"
  },
  {
    id: "trauma",
    title: "Past Experiences",
    description: "Important relationship/dating history for context",
    icon: User,
    color: "from-gray-600 to-gray-800"
  },
  {
    id: "preferences",
    title: "Personal Preferences",
    description: "Your likes, dislikes, and deal-breakers",
    icon: Star,
    color: "from-gray-600 to-gray-800"
  }
];

const mockNotes = {
  values: [
    { id: 1, title: "Emotional Intelligence", content: "Someone who can communicate their feelings and understand mine. They don't shut down during conflict." },
    { id: 2, title: "Growth Mindset", content: "I want someone who is always working on themselves and sees challenges as opportunities to grow together." }
  ],
  boundaries: [
    { id: 1, title: "Communication", content: "I will not tolerate being ignored for days without explanation. I need clear, honest communication." },
    { id: 2, title: "Respect", content: "My time and energy are valuable. I won't chase someone who isn't showing equal effort." }
  ],
  goals: [
    { id: 1, title: "Healthy Partnership", content: "I want a relationship where we both maintain our independence while building something together." }
  ],
  redflags: [
    { id: 1, title: "Love Bombing", content: "When someone is overly intense too quickly - learned this from my last situationship." }
  ],
  trauma: [],
  preferences: []
};

export const NotesDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("values");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const currentCategory = noteCategories.find(cat => cat.id === selectedCategory);
  const currentNotes = mockNotes[selectedCategory as keyof typeof mockNotes] || [];

  const filteredNotes = currentNotes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNote = () => {
    if (newNoteTitle.trim() && newNoteContent.trim()) {
      // In real app, this would save to database
      console.log("Adding note:", { title: newNoteTitle, content: newNoteContent, category: selectedCategory });
      setNewNoteTitle("");
      setNewNoteContent("");
      setIsAddingNote(false);
    }
  };

  return (
    <section className="py-8 md:py-20 px-3 md:px-4 sm:px-6 lg:px-8 bg-gray-50/40 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 journal-title">
            Your{" "}
            <span className="italic text-gray-700">
              personal notes
            </span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto journal-body">
            Store your values, boundaries, and relationship insights in one private place. The more context you provide, the smarter Audra becomes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6 md:mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 md:w-4 md:h-4" />
              <Input
                placeholder="Search your notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 md:pl-10 text-sm border-gray-200 focus:border-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm sticky top-8">
                <h3 className="text-base md:text-lg font-normal text-gray-900 mb-3 md:mb-4 journal-title">Categories</h3>
                <div className="space-y-1 md:space-y-2">
                  {noteCategories.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;
                    const noteCount = mockNotes[category.id as keyof typeof mockNotes]?.length || 0;
                    
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg text-left transition-all ${
                          isActive 
                            ? "bg-gray-900 text-white shadow-sm" 
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <Icon className="w-4 h-4 md:w-5 md:h-5" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-xs md:text-sm truncate">{category.title}</div>
                          <div className={`text-xs ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                            {noteCount} note{noteCount !== 1 ? 's' : ''}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Notes Content */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                    {currentCategory && (
                      <>
                        <div className="p-1.5 md:p-2 rounded-lg bg-gray-900 text-white flex-shrink-0">
                          <currentCategory.icon className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg md:text-xl font-normal text-gray-900 journal-title truncate">{currentCategory.title}</h3>
                          <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{currentCategory.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                  <Button
                    onClick={() => setIsAddingNote(true)}
                    className="bg-gray-900 hover:bg-gray-800 text-xs md:text-sm px-3 md:px-4 py-2 ml-2"
                  >
                    <Plus className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">Add Note</span>
                    <span className="sm:hidden">Add</span>
                  </Button>
                </div>

                {/* Add New Note Form */}
                {isAddingNote && (
                  <Card className="mb-4 md:mb-6 border-gray-200">
                    <CardHeader className="pb-2 md:pb-3">
                      <CardTitle className="text-base md:text-lg journal-title">Add New Note</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 md:space-y-4">
                      <Input
                        placeholder="Note title..."
                        value={newNoteTitle}
                        onChange={(e) => setNewNoteTitle(e.target.value)}
                        className="border-gray-200 focus:border-gray-400 text-sm"
                      />
                      <Textarea
                        placeholder="Write your thoughts, experiences, or insights..."
                        value={newNoteContent}
                        onChange={(e) => setNewNoteContent(e.target.value)}
                        className="min-h-20 md:min-h-24 border-gray-200 focus:border-gray-400 text-sm"
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={handleAddNote}
                          className="bg-gray-900 hover:bg-gray-800 text-xs md:text-sm"
                        >
                          Save Note
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsAddingNote(false);
                            setNewNoteTitle("");
                            setNewNoteContent("");
                          }}
                          className="border-gray-300 hover:bg-gray-50 text-xs md:text-sm"
                        >
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Notes List */}
                <div className="space-y-3 md:space-y-4">
                  {filteredNotes.length === 0 ? (
                    <div className="text-center py-8 md:py-12">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                        {currentCategory && <currentCategory.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />}
                      </div>
                      <h4 className="text-base md:text-lg font-medium text-gray-900 mb-2">No notes yet</h4>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 px-4">
                        Start building your emotional memory bank by adding your first note.
                      </p>
                      <Button
                        onClick={() => setIsAddingNote(true)}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 text-xs md:text-sm"
                      >
                        <Plus className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Add Your First Note
                      </Button>
                    </div>
                  ) : (
                    filteredNotes.map((note) => (
                      <Card key={note.id} className="border-gray-200 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2 md:pb-3">
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-sm md:text-lg text-gray-900 journal-title flex-1 min-w-0 line-clamp-2">{note.title}</CardTitle>
                            <div className="flex gap-1 flex-shrink-0">
                              <Button size="sm" variant="ghost" className="text-gray-500 hover:text-gray-700 p-1 md:p-2">
                                <Edit3 className="w-3 h-3 md:w-4 md:h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-gray-500 hover:text-red-600 p-1 md:p-2">
                                <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs md:text-sm text-gray-700 leading-relaxed journal-body mb-3 line-clamp-3 md:line-clamp-none">{note.content}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-gray-600 border-gray-200 text-xs">
                              {currentCategory?.title}
                            </Badge>
                            <span className="text-xs text-gray-500">Added today</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
