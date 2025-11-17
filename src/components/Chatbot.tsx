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
      "We serve the tastiest coffee, frappes, non-coffee drinks, and Filipino-inspired meals. ☕ Maaari mo ring tignan ang buong menu sa Menu page namin!",
  },
  
  {
  id: "greeting",
  keywords: [
    "hi", "hello", "hey", "greetings", "kumusta", "kamusta", "hoy", "oy", "hey",
    "good morning", "good afternoon", "good evening", "magandang araw", "magandang umaga",
    "magandang hapon", "magandang gabi"
  ],
    response: () => {
      const greetings = [
        "Hi, Ka-bukid! Kung kape ka, ikaw ‘yung tipo na hindi ko kayang iwan—strong, warm, at laging comforting. Swipe mo na ang menu, baka ito na ang simula ng brewing love story natin.",
        "Hello, Ka-bukid! Kung iniwan ka ng ex mo, don’t worry—may kape kaming mas strong, mas loyal, at mas masarap. Tara, hanap tayo ng bagong ‘kapeng mahal’ sa menu.",
        "Hey there, Ka-bukid! Our coffee’s like a good relationship—hot, sweet, and never bitter (unless gusto mo ng black). Silipin mo ang menu, baka ma-in love ka sa first sip.",
        "Well hello there, Ka-bukid! ☕ Ready to sip, snack, and smile? 😄 Whether it's a chill frappe, a bold brew, or a hearty Filipino bite, we've got your cravings covered. Tara, usap tayo sa menu!"
      ];
      const index = Math.floor(Math.random() * greetings.length);
      return greetings[index];
    }
  },
  {
  id: "about-bukid",
  keywords: [
    "what is bukid cafe", "bukid cafe", "how did it start", 
    "kwento ng bukid", "origin", "story", "about bukid"
  ],
  response: `
    Bukid Café is an alfresco coffee spot located in Morong, Rizal — cozy, breezy, and perfect for anyone who loves a relaxed probinsya vibe. 🌾  
    Gusto mo malaman kung paano nagsimula ang Bukid?  
    Click here to visit our <a href="#about" class="text-blue-500 underline">About Section</a>.
  `,
  },
  {
  id: "wheel-info",
  keywords: [
    "what is wheel of bukid", "wheel of bukid", "bukid wheel", 
    "spin wheel", "menu wheel", "surprise wheel"
  ],
  response: `
    The Wheel of Bukid is our fun little randomizer! 🎡  
    If you can’t decide what to order, pihitin mo lang — and it will pick a drink or meal for you.  
    Want to try it?  
    Tap here to jump to the <a href="#SpinWheel" class="text-blue-500 underline">Wheel of Bukid Section</a>.
  `,
  },
  {
  id: "reviews",
  keywords: [
    "review", "reviews", "feedback", "comment", "google review", 
    "rate", "rating", "testimonial", "evaluation"
  ],
  response: `
    We’d love to hear from you! ⭐  
    You can leave a review directly on our website — scroll down here:  
    <a href="#reviews" class="text-blue-500 underline">Review Section</a>  
    or leave a Google Review by tapping here:  
    <a href="#contact" class="text-blue-500 underline">Google Reviews Link</a>.
    `,
  },
  {
    id: "hours",
    keywords: ["time", "hour", "open", "close", "opening", "closing", "oras", "bukas", "sarado"],
    response:
      "Our shop is open Monday–Friday 11AM–8PM and Saturday–Sunday 7AM–9PM. ⏰ Bukas kami everyday para sa iyong kape fix!",
  },
  {
    id: "randomizer",
    keywords: [
      "recommend", "suggest", "ano masarap", "anong masarap", "best seller", "order", "pick", "try", "wheel", "gusto", "reco", "recommendation", "ano masarap sa menu", "ano ang masarap", "ano ang pwede", "ano ang dapat tikman"
    ],
    response:
      "Looking for something new to try? 🎯 Spin the Wheel of Bukid for a fun surprise pick from our menu! Or kung gusto mo ng sure win, our bestsellers are always a good choice."
  },
  {
    id: "location",
    keywords: ["where", "location", "address", "near", "map", "saan", "lokasyon", "address"],
    response:
      "You can find us at Bukid Cafe, G. San Antonio Street,Morong, Rizal 1960 Philippines. 🗺️ Halika at bisitahin kami!",
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
      "We accept Cash, GCash, e-wallets. 💳 Madali ang pagbabayad!",
  },
  {
    id: "delivery",
    keywords: ["deliver", "delivery", "grab", "foodpanda", "hatid", "padala"],
    response:
      "We deliver through the GRAB app! 🚚 Hanapin lang kami sa GrabFood para sa iyong convenience.",
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
      "You can reach us at bukidcafe22@gmail.com ✉️",
  },
];

const fallbackResponses = [
  "Medyo di ko nagets yun, Ka-bukid—pwedeng paulit hahaha! 😅 You can try typing things like:\n• 'Anong oras kayo bukas?'\n• 'Saan ang location ninyo?'\n• 'Pet-friendly ba ang café?'\n• 'Ano ang masarap sa menu?'\nTry mo lang mga yan, Ka-bukid! Tatama din yan!",
  "Oops, nalito ako nang konti doon. 😅 Baka makatulong kung itype mo ulit gamit ang simpleng tanong gaya ng:\n• 'May parking ba?'\n• 'Pwede magpa-book ng event?'\n• 'Paano mag-order sa Grab?'\n• 'Anong payment methods ninyo?'\nTry mo lang mga yan, Ka-bukid! Tatama din yan!",
  "Ay sorry, Ka-bukid! Di ko masyadong naintindihan. 😅 Subukan mong i-rephrase gamit ang mga tanong tulad ng:\n• 'May promo ba ngayon?'\n• 'Ano ang Wheel of Bukid?'\n• 'Pwede bang mag-aral sa café?'\n• 'Paano makontak ang Bukid Café?'\nTry mo lang mga yan, Ka-bukid! Tatama din yan!"
];

const findIntent = (query: string): string => {
  const text = query.toLowerCase();
  for (const intent of intents) {
    if (intent.keywords.some((kw) => text.includes(kw))) {
      return typeof intent.response === "function"
        ? intent.response()
        : intent.response;
    }
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
                  <div
                    className={`max-w-[80%] rounded-lg p-3 text-sm ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : msg.sender === "typing"
                        ? "bg-muted text-foreground italic opacity-70"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                    ) : (
                      msg.text
                    )}
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
