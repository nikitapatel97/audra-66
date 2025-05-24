
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Heart, Sparkles } from "lucide-react";

export const MobileChatbotDashboard = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai" as const,
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

    const userMessage = {
      id: Date.now(),
      type: "user" as const,
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: "ai" as const,
        content: "I understand you're going through something important. Let's explore this together. Can you tell me more about what's on your mind?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Chat with Audra</h2>
        <p className="text-sm text-gray-600">Your AI companion for emotional support</p>
      </div>

      {/* Chat Container */}
      <Card className="h-96 flex flex-col">
        <CardContent className="flex-1 p-3 overflow-y-auto space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.type === "ai" && (
                <Avatar className="w-6 h-6 flex-shrink-0">
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                    A
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                  message.type === "user"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-2 justify-start">
              <Avatar className="w-6 h-6 flex-shrink-0">
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                  A
                </AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Questions */}
      <div className="space-y-2">
        <p className="text-xs text-gray-600 font-medium">Suggested questions:</p>
        <div className="space-y-2">
          {suggestedQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="w-full text-left text-xs h-auto py-2 px-3"
              onClick={() => setInputMessage(question)}
            >
              {question}
            </Button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <Input
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 text-sm"
        />
        <Button
          onClick={handleSendMessage}
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
