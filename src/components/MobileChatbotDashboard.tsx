
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
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-light text-white cosmic-title">Chat with Audra</h2>
            <p className="text-xs text-white/60 font-light">Your AI companion for emotional support</p>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="glass-card h-96 flex flex-col overflow-hidden">
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
                  <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-sm">
                    A
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[75%] rounded-3xl px-4 py-3 text-sm font-light ${
                  message.type === "user"
                    ? "chat-bubble chat-bubble-user text-white"
                    : "chat-bubble text-white/90"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-sm">
                  A
                </AvatarFallback>
              </Avatar>
              <div className="chat-bubble px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Questions */}
      <div className="space-y-3">
        <p className="text-xs text-white/60 font-light accent-line">Suggested questions:</p>
        <div className="space-y-2">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              className="w-full text-left text-xs py-3 px-4 cosmic-button font-light"
              onClick={() => setInputMessage(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <input
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 text-sm py-3 px-4 cosmic-input font-light"
        />
        <button
          onClick={handleSendMessage}
          className="cosmic-button px-4 py-3 flex items-center justify-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
