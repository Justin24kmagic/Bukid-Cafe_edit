import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, UtensilsCrossed } from "lucide-react";
import { menuItems } from "@/data/menuData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<typeof menuItems[0] | null>(null);
  const [showResult, setShowResult] = useState(false);

  const spinWheel = (category: "coffee" | "non-coffee" | "food") => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);

    // Filter items by category
    const categoryItems = menuItems.filter(item => {
      if (category === "coffee") return item.category === "coffee";
      if (category === "food") return item.category === "food";
      return item.category === "non-coffee";
    });

    // Simulate spinning with timeout
    setTimeout(() => {
      const randomItem = categoryItems[Math.floor(Math.random() * categoryItems.length)];
      setResult(randomItem);
      setIsSpinning(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            🎡 Spin the Wheel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Can't decide what to order? Let fate choose for you! 
            Spin the wheel and discover your next favorite item.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 animate-scale-in">
          <div className="flex flex-col items-center gap-8">
            {/* Wheel Display */}
            <div className={`relative transition-transform duration-2000 ${isSpinning ? 'animate-spin-wheel' : ''}`}>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary via-secondary to-cream shadow-hover flex items-center justify-center relative overflow-hidden">
                {/* Decorative segments */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-1 h-32 origin-bottom"
                        style={{
                          transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                          background: 'rgba(255,255,255,0.2)'
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-2">🎯</div>
                  <p className="text-primary-foreground font-display font-bold text-xl">
                    {isSpinning ? "Spinning..." : "Tap to Spin"}
                  </p>
                </div>
              </div>

              {/* Pointer */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl">
                ▼
              </div>
            </div>

            {/* Spin Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Button
                size="lg"
                onClick={() => spinWheel("coffee")}
                disabled={isSpinning}
                className="flex-1 gap-2 bg-primary hover:bg-primary/90"
              >
                <Coffee className="h-5 w-5" />
                Spin for Drink
              </Button>
              
              <Button
                size="lg"
                onClick={() => spinWheel("food")}
                disabled={isSpinning}
                className="flex-1 gap-2 bg-secondary hover:bg-secondary/90"
              >
                <UtensilsCrossed className="h-5 w-5" />
                Spin for Food
              </Button>
            </div>

            {isSpinning && (
              <p className="text-muted-foreground animate-pulse">
                The wheel is spinning... 🎊
              </p>
            )}
          </div>
        </div>

        {/* Result Dialog */}
        <Dialog open={showResult} onOpenChange={setShowResult}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display text-primary text-center">
                🎉 Your Lucky Pick!
              </DialogTitle>
              <DialogDescription className="text-center">
                The wheel has spoken! Here's what you should try:
              </DialogDescription>
            </DialogHeader>
            
            {result && (
              <div className="space-y-4 py-4">
                <div className="text-center">
                  <h3 className="font-display font-bold text-3xl text-primary mb-2">
                    {result.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {result.description}
                  </p>
                  <p className="text-2xl font-bold text-secondary">
                    ₱{result.price}
                  </p>
                </div>
                
                <Button 
                  onClick={() => setShowResult(false)}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Try This! ☕
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => {
                    setShowResult(false);
                    setTimeout(() => {
                      spinWheel(result.category === "food" ? "food" : "coffee");
                    }, 300);
                  }}
                  className="w-full"
                >
                  Spin Again 🎡
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default SpinWheel;
