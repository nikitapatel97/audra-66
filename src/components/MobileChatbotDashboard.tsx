
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
    <div className="px-4 bg-white h-screen flex flex-col">
      <div className="max-w-6xl mx-auto flex-1 flex flex-col min-h-0">
        <div className="text-center py-1">
          <h2 className="text-xl md:text-2xl font-light text-gray-900 font-playfair">
            Chat with{" "}
            <span className="italic text-gray-600 font-playfair">
              Audra
            </span>
          </h2>
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          {/* Chat Container */}
          <Card className="flex-1 flex flex-col overflow-hidden border-gray-200 min-h-0">
            <div className="flex-1 p-2 overflow-y-auto space-y-1 min-h-0">
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

          {/* Input */}
          <div className="flex gap-3 mt-2 pb-1">
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
      </div>
    </div>
  );
};
