
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Heart, Sparkles, Bot } from "lucide-react";

interface Message {
  id: number;
  type: "ai" | "user";
  content: string;
  timestamp: Date;
}

export const MobileChatbotDashboard = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content: "Hi! I'm Audra, your emotional growth companion. How are you feeling today?",
      timestamp: new Date(Date.now() - 300000),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "How do I handle relationship anxiety?",
    "I'm feeling overwhelmed today",
    "Help me process my emotions",
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        type: "ai",
        content: "I understand you're going through something important. Let's explore this together. Can you tell me more about what's on your mind?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 p-4">
      {/* Chat Container */}
      <Card className="h-96 flex flex-col overflow-hidden border-gray-200">
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.type === "ai" && (
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback className="bg-gray-900 text-white text-sm">
                    A
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[75%] rounded-3xl px-4 py-3 text-sm font-crimson ${
                  message.type === "user"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className="bg-gray-900 text-white text-sm">
                  A
                </AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 rounded-3xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Quick Questions */}
      <div className="space-y-3">
        <p className="text-xs text-gray-600 font-crimson italic">Suggested questions:</p>
        <div className="space-y-2">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              className="w-full text-left text-xs py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 font-crimson"
              onClick={() => setInputMessage(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <Input
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 text-sm border-gray-200 focus:border-gray-400 font-crimson"
        />
        <Button
          onClick={handleSendMessage}
          className="bg-gray-900 hover:bg-gray-800 px-4"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
