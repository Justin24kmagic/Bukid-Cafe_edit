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

  // Checkbox states
  const [filters, setFilters] = useState({
    food: true,
    coffee: true,
    "non-coffee": true,
  });

  // Handle checkbox change
  const handleCheckboxChange = (key: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);

    // Build a list of allowed categories
    const allowedCategories = Object.keys(filters).filter(
      (key) => filters[key as keyof typeof filters]
    );

    // Filter menu items based on selected checkboxes
    const categoryItems = menuItems.filter((item) => {
      const categories = item.category
        .split(",")
        .map((c) => c.trim().toLowerCase());
      return categories.some((cat) => allowedCategories.includes(cat));
    });

    // If no valid items
    if (categoryItems.length === 0) {
      alert("Please select at least one category before spinning!");
      setIsSpinning(false);
      return;
    }

    // Simulate spinning
    setTimeout(() => {
      const randomItem =
        categoryItems[Math.floor(Math.random() * categoryItems.length)];
      setResult(randomItem);
      setIsSpinning(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <section id="SpinWheel" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            🛞 Spin the Wheel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Di ka makapili? Pili ka ng category tapos spin ka nalang ka-bukid! 🌿
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 animate-scale-in">
          <div className="flex flex-col items-center gap-8">
          <div className="relative">
            {/* Wheel (spinning element) */}
            <div
              className={`transition-transform duration-2000 ${
                isSpinning ? "animate-spin-wheel" : ""
              }`}
            >
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
                          background: "rgba(255,255,255,0.2)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-2">↻</div>
                  <p className="text-primary-foreground font-display font-bold text-xl">
                    {isSpinning ? "Spinning..." : "Click the Spin Button!"}
                  </p>
                </div>
              </div>
            </div>

            {/* Pointer (fixed element, not spinning) */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl z-20">
              ▼
            </div>
          </div>


            {/* Category Checkboxes */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {Object.keys(filters).map((key) => (
                <label
                  key={key}
                  className="flex items-center gap-2 text-lg font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters[key as keyof typeof filters]}
                    onChange={() => handleCheckboxChange(key)}
                    className="w-5 h-5 accent-primary cursor-pointer"
                  />
                  <span className="capitalize">{key}</span>
                </label>
              ))}
            </div>

            {/* Spin Button */}
            <Button
              size="lg"
              onClick={spinWheel}
              disabled={isSpinning}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              <Coffee className="h-5 w-5" />
              Spin Now 🎡
            </Button>

            {isSpinning && (
              <p className="text-muted-foreground animate-pulse">
                The wheel is spinning... 🔄
              </p>
            )}
          </div>
        </div>

        {/* Result Dialog */}
        <Dialog open={showResult} onOpenChange={setShowResult}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display text-primary text-center">
                ✨ Ka-Bukid, eto ang napili ng kapalaran! ✨
              </DialogTitle>
              <DialogDescription className="text-center">
                Kung hindi ka niya pinili, baka ito talaga ang para sayo 😉
              </DialogDescription>
            </DialogHeader>

            {result && (
              <div className="space-y-4 py-4 text-center">
                {/* Image of the chosen menu item */}
                {result.images && result.images.length > 0 && (
                  <img
                    src={result.images[0]}
                    alt={result.name}
                    className="w-48 h-48 mx-auto object-cover rounded-xl shadow-lg border"
                  />
                )}

                <h3 className="font-display font-bold text-3xl text-primary">
                  {result.name}
                </h3>
                <p className="text-muted-foreground">{result.description}</p>
                <p className="text-2xl font-bold text-secondary">
                  ₱{result.price}
                </p>

                <Button
                  variant="outline"
                  onClick={() => {
                    setShowResult(false);
                    setTimeout(() => {
                      spinWheel();
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
