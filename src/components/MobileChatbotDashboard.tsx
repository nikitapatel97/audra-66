
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    console.log("Sending message:", inputMessage);

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    console.log("User message added, AI typing...");

    // Simulate AI response with more varied responses
    setTimeout(() => {
      const responses = [
        "I understand you're going through something important. Let's explore this together. Can you tell me more about what's on your mind?",
        "Thank you for sharing that with me. How does that make you feel?",
        "That sounds challenging. What support do you feel you need right now?",
        "I hear you. Sometimes talking through our feelings can help us process them better.",
        "That's really insightful. What do you think might help you move forward?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiResponse: Message = {
        id: Date.now() + 1,
        type: "ai",
        content: randomResponse,
        timestamp: new Date(),
      };
      
      console.log("AI response:", randomResponse);
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Variable response time
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="py-2 px-4 bg-white h-screen flex flex-col">
      <div className="max-w-6xl mx-auto flex-1 flex flex-col">
        <div className="text-center mb-2">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 font-playfair">
            Chat with{" "}
            <span className="italic text-gray-600 font-playfair">
              Audra
            </span>
          </h2>
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          {/* Chat Container */}
          <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden flex flex-col">
            <div className="flex-1 p-2 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 mb-2 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.type === "ai" && (
                    <Avatar className="w-6 h-6 flex-shrink-0">
                      <AvatarFallback className="bg-gray-900 text-white text-xs">
                        A
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[75%] rounded-3xl px-3 py-2 text-sm font-crimson ${
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
                <div className="flex gap-2 justify-start mb-2">
                  <Avatar className="w-6 h-6 flex-shrink-0">
                    <AvatarFallback className="bg-gray-900 text-white text-xs">
                      A
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 rounded-3xl px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="flex gap-3 mt-2">
            <Input
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
              className="flex-1 text-sm border-gray-200 focus:border-gray-400 font-crimson"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-gray-900 hover:bg-gray-800 px-4 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
