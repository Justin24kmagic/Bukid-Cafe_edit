import { useState } from "react";
import { Coffee, Leaf, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems, MenuItem } from "@/data/menuData";
import coffee1 from "@/assets/coffee-1.jpg";

const Menu = () => {
  const [filter, setFilter] = useState<"all" | "coffee" | "non-coffee" | "food">("all");

  const filteredItems = filter === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  const categories = [
    { id: "all", name: "All Items", icon: UtensilsCrossed },
    { id: "coffee", name: "Coffee", icon: Coffee },
    { id: "non-coffee", name: "Non-Coffee", icon: Leaf },
    { id: "food", name: "Food", icon: UtensilsCrossed },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-card rounded-xl shadow-card hover:shadow-hover transition-all hover-lift overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-accent to-cream flex items-center justify-center overflow-hidden">
                <img 
                  src={coffee1} 
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
                
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {item.category === "coffee" ? "Coffee" : 
                     item.category === "non-coffee" ? "Non-Coffee" : "Food"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

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
