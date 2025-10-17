import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";

const quotes = [
  "Coffee is a hug in a mug. ☕",
  "Life happens, coffee helps. 💪",
  "Behind every successful person is a substantial amount of coffee. ☕",
  "Espresso yourself! 🎨",
  "May your coffee be strong and your Monday be short. 💼",
  "Coffee: because adulting is hard. 😌",
  "Good ideas start with great coffee. 💡",
  "Coffee first, adulting second. ☕",
  "All you need is love and more coffee. ❤️",
  "Coffee is always a good idea. ✨",
];

const QuoteOfDay = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Get a consistent quote for the day
    const today = new Date().toDateString();
    const hash = today.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % quotes.length;
    setQuote(quotes[index]);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-coffee-medium">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-primary-foreground/10 rounded-full">
            <Coffee className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <p className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wide mb-2">
          Quote of the Day
        </p>
        <h3 className="font-display font-bold text-2xl md:text-4xl text-primary-foreground">
          {quote}
        </h3>
      </div>
    </section>
  );
};

export default QuoteOfDay;
