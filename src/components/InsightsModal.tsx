
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, TrendingUp, Heart, Brain, Users } from "lucide-react";

interface InsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InsightsModal = ({ isOpen, onClose }: InsightsModalProps) => {
  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">AI Insights Examples</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-gray-600 text-center mb-6">
            Here are examples of the kind of insights Audra provides based on your journaling patterns
          </p>
          
          {insightExamples.map((example) => (
            <Card key={example.id} className={`border-2 ${example.color}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {example.icon}
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {example.type}
                    </Badge>
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  {example.insight}
                </p>
                <div className="flex flex-wrap gap-2">
                  {example.emotions.map((emotion) => (
                    <Badge key={emotion} variant="secondary" className="text-xs">
                      {emotion}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600 mb-3">
              Your personal insights will be generated based on your unique journaling patterns and emotional journey.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800">
              Start Journaling to Generate Your Insights
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
