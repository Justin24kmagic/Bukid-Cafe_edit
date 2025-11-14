import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot" | "typing";
}

const intents = [
  {
    id: "menu",
    keywords: [
      "menu", "food", "drink", "coffee", "milk", "frappe", "tea", 
      "pagkain", "inom", "inumin", "kape", "tsaa", "milk tea"
    ],
    response:
      "We serve specialty coffee, frappes, non-coffee drinks, and Filipino-inspired meals. ☕ Maaari mo ring tignan ang buong menu sa Menu page namin!",
  },
  {
    id: "hours",
    keywords: ["time", "hour", "open", "close", "opening", "closing", "oras", "bukás", "sarado"],
    response:
      "Our shop is open Monday–Friday 7AM–9PM and Saturday–Sunday 8AM–10PM. ⏰ Bukas kami everyday para sa iyong kape fix!",
  },
  {
    id: "location",
    keywords: ["where", "location", "address", "near", "map", "saan", "lokasyon", "address"],
    response:
      "You can find us at 123 Countryside Road, Morong, Rizal 1960, Philippines. 🗺️ Halika at bisitahin kami!",
  },
  {
    id: "wifi",
    keywords: ["wifi", "internet", "work", "study", "socket", "outlet", "internet", "trabaho", "mag-aral"],
    response:
      "Yes! We have free high-speed WiFi and work-friendly spots. 🖥️ Perfect for studying or remote work!",
  },
  {
    id: "parking",
    keywords: ["parking", "park", "car", "vehicle", "sasakyan", " paradahan"],
    response:
      "We have free customer parking available. 🚗 Walang hassle sa parking!",
  },
  {
    id: "events",
    keywords: ["event", "cart", "booking", "rent", "wedding", "birthday", "party", "okasyon", "kaganapan"],
    response:
      "Yes! We have a mobile coffee cart for events. 🎉 Maaari kang mag-submit ng booking request sa Events section.",
  },
  {
    id: "payments",
    keywords: ["pay", "payment", "gcash", "cash", "card", "credit", "mode", "bayad", "pera", "payment method"],
    response:
      "We accept Cash, GCash, Debit/Credit Cards, and select e-wallets. 💳 Madali ang pagbabayad!",
  },
  {
    id: "delivery",
    keywords: ["deliver", "delivery", "grab", "foodpanda", "hatid", "padala"],
    response:
      "We currently don’t offer delivery 🚫 pero feel free to visit us anytime!",
  },
  {
    id: "beans",
    keywords: ["beans", "coffee bean", "grounds", "grind", "beans", "butil", "kape", "grounds"],
    response:
      "Yes! We sell freshly roasted beans for home brewing. ☕ Pwede ring humingi ng grind sizes sa barista.",
  },
  {
    id: "pet",
    keywords: ["pet", "dog", "cat", "pet friendly", "aso", "pusa", "hayop"],
    response:
      "Yes! We’re pet-friendly 🐾 Bring your fur babies as long as they’re leashed.",
  },
  {
    id: "promo",
    keywords: ["promo", "promos", "discount", "deal", "bundle", "sale", "diskwento", "alok"],
    response:
      "We sometimes run promos and seasonal specials. 🎁 Follow our Facebook page for updates!",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "number", "tawag", "text", "mail"],
    response:
      "You can reach us at +63 917 123 4567 or hello@bukidcafe.ph 📞✉️",
  },
];

const fallbackResponses = [
  "Hmm, pasensya, I didn’t get that. Puwede mo bang i-rephrase? ☕",
  "I might have missed that—try asking in another way! 🤖",
  "Interesting! You can also call us at +63 917 123 4567 for details.",
];

const findIntent = (query: string): string => {
  const text = query.toLowerCase();
  for (const intent of intents) {
    if (intent.keywords.some((kw) => text.includes(kw))) return intent.response;
  }
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hi! I'm your Bukid Café assistant. 👋 Ask me anything about the shop!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    const userQuery = input;
    setInput("");

    // Add typing indicator
    const typingMessage: Message = { id: Date.now().toString() + "-typing", text: "Typing...", sender: "typing" };
    setMessages((prev) => [...prev, typingMessage]);

    // Simulate bot reply after delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev.filter((m) => m.sender !== "typing"),
        { id: Date.now().toString() + "-bot", text: findIntent(userQuery), sender: "bot" },
      ]);
    }, 1000 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-secondary hover:bg-secondary/90 p-0"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-card rounded-2xl shadow-card border border-border flex flex-col animate-scale-in">
          <div className="p-4 bg-primary text-primary-foreground rounded-t-2xl">
            <h3 className="font-semibold text-lg">Bukid Cafe Assistant</h3>
            <p className="text-sm opacity-90">Here to help! ☕</p>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.sender !== "user" && (
                    <img src="/robot.jpg" alt="bot" className="h-6 w-6 rounded-full mr-2" />
                  )}
                  <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : msg.sender === "typing"
                      ? "bg-muted text-foreground italic opacity-70"
                      : "bg-muted text-foreground"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Dummy div to scroll into view */}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
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
