import { useState, useEffect } from "react";
import {
  Coffee,
  Leaf,
  UtensilsCrossed,
  Sandwich,
  Pizza,
  Salad,
  Cookie,
  CakeSlice,
  Drumstick,
  Apple,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems, MenuItem } from "@/data/menuData";

const Menu = () => {
  const [filter, setFilter] = useState<
    | "all"
    | "coffee"
    | "non-coffee"
    | "food"
    | "pasta"
    | "pizza"
    | "snacks"
    | "rice-meals"
    | "ala-carte"
    | "dessert"
    | "fruit-coolers"
    | "special"
  >("all");

  const filteredItems =
    filter === "all"
      ? menuItems
      : menuItems.filter((item) => {
          const categories =
            typeof item.category === "string"
              ? item.category.split(",").map((c) => c.trim().toLowerCase())
              : Array.isArray(item.category)
              ? item.category.map((c) => c.toLowerCase())
              : [];

          return categories.includes(filter);
        });

  const PREVIEW_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(PREVIEW_COUNT);
  const displayItems = filteredItems.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(PREVIEW_COUNT);
  }, [filter]);

  const categories = [
    { id: "all", name: "All Items", icon: UtensilsCrossed },
    { id: "coffee", name: "Coffee", icon: Coffee },
    { id: "non-coffee", name: "Non-Coffee", icon: Leaf },
    { id: "food", name: "Food", icon: UtensilsCrossed },
    { id: "pasta", name: "Pasta", icon: Salad },
    { id: "pizza", name: "Pizza", icon: Pizza },
    { id: "snacks", name: "Snacks", icon: Sandwich },
    { id: "rice-meals", name: "Rice Meals", icon: Drumstick },
    { id: "ala-carte", name: "Ala Carte", icon: UtensilsCrossed },
    { id: "dessert", name: "Dessert", icon: CakeSlice },
    { id: "fruit-coolers", name: "Fruit Coolers", icon: Apple },
    { id: "special", name: "Special", icon: Star },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted beverages and delicious treats made with love
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                variant={filter === cat.id ? "default" : "outline"}
                className="gap-2"
              >
                <Icon className="h-4 w-4" />
                {cat.name}
              </Button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-card rounded-xl shadow-card hover:shadow-hover transition-all hover-lift overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-accent to-cream flex items-center justify-center overflow-hidden">
                <img
                  src={
                    item.images && item.images.length > 0
                      ? item.images[0]
                      : "/placeholder.png"
                  }
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-semibold text-xl text-primary">
                    {item.name}
                  </h3>
                  <span className="font-bold text-lg text-secondary">
                    ₱{item.price}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

                {/* Category Capsules */}
                <div className="flex flex-wrap gap-2">
                  {(typeof item.category === "string"
                    ? item.category.split(",")
                    : item.category
                  ).map((cat: string) => (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
                    >
                      {cat
                        .trim()
                        .replace("-", " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more button */}
        {filteredItems.length > visibleCount && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount(filteredItems.length)}
              className="text-muted-foreground/80 hover:text-muted-foreground/100 transition-colors text-sm px-4 py-2 rounded-md"
              aria-expanded={visibleCount >= filteredItems.length}
            >
              Show all items
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
