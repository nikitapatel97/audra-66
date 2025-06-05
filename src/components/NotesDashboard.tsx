
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Search, Calendar, Edit, Trash2 } from "lucide-react";

const mockNotes = [
  {
    id: 1,
    title: "Red Flags I Keep Ignoring",
    content: "He always checks my phone but gets defensive when I ask about his. Also never wants to meet my friends or include me with his.",
    date: "2024-01-15",
    lastEdited: "Today, 2:34 PM"
  },
  {
    id: 2,
    title: "Why I Stay in Bad Relationships",
    content: "I think I'm scared of being alone. Every time someone shows interest, I ignore the red flags because attention feels better than loneliness.",
    date: "2024-01-14",
    lastEdited: "Yesterday, 6:22 PM"
  },
  {
    id: 3,
    title: "Things I Want in My Next Relationship",
    content: "Someone who actually listens when I talk. Who doesn't make me feel crazy for having feelings. Who shows up consistently.",
    date: "2024-01-13",
    lastEdited: "2 days ago"
  }
];

export const NotesDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewNote, setShowNewNote] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const filteredNotes = mockNotes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

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

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search your insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-200 focus:border-gray-400 font-crimson"
            />
          </div>

          <Button 
            onClick={() => setShowNewNote(!showNewNote)}
            className="bg-gray-900 hover:bg-gray-800 font-crimson"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            New Insight
          </Button>
        </div>

        {/* New Note Form */}
        {showNewNote && (
          <Card className="mb-8 border-gray-200">
            <CardHeader>
              <CardTitle className="font-playfair">Create New Insight</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Insight title..."
                value={newNote.title}
                onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                className="border-gray-200 focus:border-gray-400 font-crimson"
              />
              <Textarea
                placeholder="Start writing your insight..."
                value={newNote.content}
                onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                className="min-h-32 border-gray-200 focus:border-gray-400 font-crimson"
              />
              <div className="flex gap-2">
                <Button className="bg-gray-900 hover:bg-gray-800 font-crimson">Save Insight</Button>
                <Button variant="outline" onClick={() => setShowNewNote(false)} className="border-gray-200 hover:bg-gray-50 font-crimson">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map(note => (
            <Card key={note.id} className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-playfair line-clamp-2">{note.title}</CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 line-clamp-3 font-crimson italic">{note.content}</p>
                
                <div className="flex items-center text-xs text-gray-500 font-crimson">
                  <Calendar className="w-3 h-3 mr-1" />
                  {note.lastEdited}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-crimson italic">No insights found. Create your first insight to get started!</p>
          </div>
        )}
      </div>
    </section>
  );
};
