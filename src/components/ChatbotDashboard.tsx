
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarContent, AvatarFallback } from "@/components/ui/avatar";
import { Send, Heart, User, Bot } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hi! I'm Audra, your personal relationship and dating coach. I'm here to help you navigate your dating life with personalized advice based on your values and experiences. What's on your mind today?",
    sender: "ai",
    timestamp: new Date(Date.now() - 300000) // 5 minutes ago
  }
];

export const ChatbotDashboard = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response (in real app, this would call your OpenAI API)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand you're looking for guidance. Based on your previous entries and the values you've shared with me, I'd love to help you work through this. Can you tell me more about the specific situation you're facing?",
        sender: "ai",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Chat with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Audra
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your personal relationship coach is here to help. Ask anything about dating, relationships, or navigating your love life.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border border-purple-100 shadow-xl h-[600px] flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-purple-100 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Audra</h3>
                <p className="text-white/80 text-sm">Your relationship coach</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarContent className={`${
                    message.sender === "ai" 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                      : "bg-gray-500"
                  }`}>
                    {message.sender === "ai" ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </AvatarContent>
                  <AvatarFallback>
                    {message.sender === "ai" ? "A" : "U"}
                  </AvatarFallback>
                </Avatar>
                
                <div className={`flex flex-col max-w-[80%] ${message.sender === "user" ? "items-end" : ""}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 px-2">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarContent className="bg-gradient-to-r from-purple-500 to-pink-500">
                    <Bot className="w-4 h-4 text-white" />
                  </AvatarContent>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Message Input */}
          <div className="p-4 border-t border-purple-100">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Audra anything about dating and relationships..."
                className="flex-1 border-purple-200 focus:border-purple-400"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Audra remembers your journal entries and personal notes to give you personalized advice.
            </p>
          </div>
        </Card>

        {/* Suggested Questions */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Popular questions to get you started
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "How should I respond to this text from my crush?",
              "What are some red flags I should watch out for?",
              "How do I set better boundaries in dating?",
              "I'm seeing my ex at a party. How should I handle it?"
            ].map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-left h-auto p-4 border-purple-200 hover:bg-purple-50 hover:border-purple-300"
                onClick={() => setInputMessage(question)}
              >
                <span className="text-sm text-gray-700">{question}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
