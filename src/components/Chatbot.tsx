import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

const faqData = {
  menu: "We serve specialty coffee, non-coffee beverages, and Filipino-inspired food. Check out our Menu section for the full list!",
  hours: "We're open Monday-Friday: 7AM-9PM, Saturday-Sunday: 8AM-10PM. We're open daily!",
  location: "We're located at 123 Countryside Road, Morong, Rizal 1960, Philippines.",
  events: "Yes! We have a mobile coffee cart available for events. Visit the Events section to submit a booking request.",
  cart: "Our coffee cart is perfect for weddings, corporate events, birthdays, and more! Submit a booking request in the Events section.",
  parking: "Yes, we have free parking available for customers.",
  wifi: "We offer free high-speed WiFi for all customers. Perfect for remote work!",
  price: "Our drinks range from ₱85-₱145, and food items from ₱65-₱180. Great value for quality!",
  contact: "Call us at +63 917 123 4567 or email hello@bukidcafe.ph",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your Bukid Café assistant. 👋 Ask me about our menu, hours, location, or events!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const findAnswer = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("menu") || lowerQuery.includes("food") || lowerQuery.includes("drink")) {
      return faqData.menu;
    }
    if (lowerQuery.includes("hour") || lowerQuery.includes("open") || lowerQuery.includes("time") || lowerQuery.includes("close")) {
      return faqData.hours;
    }
    if (lowerQuery.includes("where") || lowerQuery.includes("location") || lowerQuery.includes("address")) {
      return faqData.location;
    }
    if (lowerQuery.includes("event") || lowerQuery.includes("booking") || lowerQuery.includes("cart")) {
      return faqData.events;
    }
    if (lowerQuery.includes("park")) {
      return faqData.parking;
    }
    if (lowerQuery.includes("wifi") || lowerQuery.includes("internet")) {
      return faqData.wifi;
    }
    if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("expensive")) {
      return faqData.price;
    }
    if (lowerQuery.includes("contact") || lowerQuery.includes("phone") || lowerQuery.includes("email")) {
      return faqData.contact;
    }
    
    return "I'm not sure about that, but feel free to call us at +63 917 123 4567 or visit us in person! ☕";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findAnswer(input),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-hover bg-secondary hover:bg-secondary/90 p-0"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-card rounded-2xl shadow-card border border-border flex flex-col animate-scale-in">
          {/* Header */}
          <div className="p-4 bg-primary text-primary-foreground rounded-t-2xl">
            <h3 className="font-display font-semibold text-lg">
              Bukid Café Assistant
            </h3>
            <p className="text-sm opacity-90">
              Here to help! ☕
            </p>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-secondary hover:bg-secondary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
