import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Info } from "lucide-react";

interface Message {
  id: number;
  type: "ai" | "user";
  content: string;
  timestamp: Date;
  hasButton?: boolean;
  buttonText?: string;
  buttonAction?: () => void;
}

interface MobileChatbotDashboardProps {
  onNavigateToTools?: () => void;
}

export const MobileChatbotDashboard = ({ onNavigateToTools }: MobileChatbotDashboardProps) => {
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

  // Demo messages and responses
  const demoMessage1 = "I saw messages from Sarah on Jake's phone. They were flirty. He swore nothing was going on but now he's avoiding me. I feel anxious and angry and I don't know if I'm being paranoid or if something really is wrong.";
  const demoResponse1 = "You're feeling so much uncertainty right now, and that's a really tough place to be. Those feelings of anxiety and anger are completely valid, your gut is trying to protect you, and it's okay to be upset when something doesn't feel right. When everything feels tangled, a little self-care can sometimes help create space to think clearly. I noticed it's been a pattern of stress for you over the last few months, so to alleviate this burden I've cleared your calendar and added a wellness day for you on Thursday. All of your scheduled appointments have been rescheduled, and emails have been sent notifying your contacts of a subtle emergency.";

  const demoMessage2 = "He stayed out all night and just came home this morning like nothing happened. He just made coffee and asked if I wanted some. No apology. I feel invisible.";
  const demoResponse2 = "That sounds so painful — when someone acts like everything is fine while you're still hurting, it can make you feel completely unseen. Your feelings matter, and it's okay to want more acknowledgment from him.\n\nIt seems like you're at a bit of an impasse right now. This might be a good time to consider speaking with a therapist, not because something is wrong with you, but because you deserve space to feel supported, heard, and clear about what you need next.";

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
    const currentInput = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    console.log("User message added, AI typing...");

    // Check if this is demo message 1
    const isDemoMessage1 = currentInput.toLowerCase().includes("sarah") && 
                          currentInput.toLowerCase().includes("jake") && 
                          currentInput.toLowerCase().includes("flirty");

    // Check if this is demo message 2
    const isDemoMessage2 = currentInput.toLowerCase().includes("stayed out all night") && 
                          currentInput.toLowerCase().includes("made coffee") && 
                          currentInput.toLowerCase().includes("feel invisible");

    if (isDemoMessage1) {
      // Demo response 1 with calendar update badge
      setTimeout(() => {
        const aiResponse: Message = {
          id: Date.now() + 1,
          type: "ai",
          content: demoResponse1,
          timestamp: new Date(),
          hasButton: true,
          buttonText: "Calendar Updated",
          buttonAction: undefined, // Non-clickable
        };
        
        console.log("AI demo response 1:", demoResponse1);
        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      }, 3000); // 3 seconds to show the thinking indicator
    } else if (isDemoMessage2) {
      // Demo response 2 with button
      setTimeout(() => {
        const aiResponse: Message = {
          id: Date.now() + 1,
          type: "ai",
          content: demoResponse2,
          timestamp: new Date(),
          hasButton: true,
          buttonText: "Find a Relationship Therapist",
          buttonAction: onNavigateToTools,
        };
        
        console.log("AI demo response 2:", demoResponse2);
        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      }, 3000); // 3 seconds to show the thinking indicator
    } else {
      // Regular responses
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
      }, 1500 + Math.random() * 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col">
      <div className="flex-shrink-0 px-4 pt-4 pb-2">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 font-playfair text-center">
          Chat with{" "}
          <span className="italic text-gray-600 font-playfair">
            Audra
          </span>
        </h2>
      </div>

      <div className="flex-1 flex flex-col min-h-0 px-4">
        {/* Chat Container - Uses available space */}
        <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden flex flex-col mb-4">
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 mb-3 ${
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
                <div className="flex flex-col max-w-[75%]">
                  <div
                    className={`rounded-3xl px-3 py-2 text-sm font-crimson ${
                      message.type === "user"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.hasButton && message.buttonText && (
                    <>
                      {message.buttonAction ? (
                        <Button
                          onClick={message.buttonAction}
                          className="mt-2 bg-gray-900 hover:bg-gray-800 text-white text-xs px-3 py-1 h-auto self-start"
                          size="sm"
                        >
                          {message.buttonText}
                        </Button>
                      ) : (
                        <Badge
                          variant="outline"
                          className="mt-2 bg-blue-50 border-blue-200 text-blue-700 text-xs px-3 py-1 self-start flex items-center gap-1"
                        >
                          <Info className="w-3 h-3" />
                          {message.buttonText}
                        </Badge>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 justify-start mb-3">
                <Avatar className="w-6 h-6 flex-shrink-0">
                  <AvatarFallback className="bg-gray-900 text-white text-xs">
                    A
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-3xl px-3 py-2">
                  <div className="flex items-center space-x-1">
                    <div className="text-xs text-gray-500 mr-2">Audra is thinking...</div>
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

        {/* Input - Fixed at bottom */}
        <div className="flex-shrink-0 pb-4">
          <div className="flex gap-3">
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
