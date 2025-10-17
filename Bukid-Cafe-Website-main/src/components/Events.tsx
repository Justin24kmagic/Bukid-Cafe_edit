import { useState } from "react";
import { Coffee, MapPin, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import coffeeCart from "@/assets/coffee-cart.jpg";

const Events = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    location: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.eventDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Booking Request Sent! ☕",
      description: "We'll contact you soon to confirm your coffee cart booking.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      location: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Mobile Coffee Cart
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bring the Bukid Café experience to your event! 
            Perfect for weddings, corporate events, parties, and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image & Features */}
          <div className="animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-card mb-8">
              <img 
                src={coffeeCart} 
                alt="Bukid Café Mobile Coffee Cart"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-card p-4 rounded-lg shadow-soft">
                <div className="p-2 bg-secondary/10 rounded-full">
                  <Coffee className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">
                    Specialty Coffee Bar
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Full espresso bar with our signature drinks and barista service
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card p-4 rounded-lg shadow-soft">
                <div className="p-2 bg-secondary/10 rounded-full">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">
                    Customizable Packages
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Tailored menu and setup to match your event theme and guest count
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card p-4 rounded-lg shadow-soft">
                <div className="p-2 bg-secondary/10 rounded-full">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">
                    Serving Rizal & Beyond
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Available for events in Morong, Rizal and surrounding areas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="animate-scale-in">
            <div className="bg-card rounded-2xl shadow-card p-8">
              <h3 className="font-display font-bold text-2xl text-primary mb-6">
                Book Our Coffee Cart
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Dela Cruz"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0917 123 4567"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Event Date *
                    </label>
                    <Input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Number of Guests
                    </label>
                    <Input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Event Type
                  </label>
                  <Input
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    placeholder="Wedding, Corporate, Birthday, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Event Location
                  </label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Morong, Rizal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your event..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 gap-2"
                  size="lg"
                >
                  <Send className="h-5 w-5" />
                  Submit Booking Request
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll review your request and get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
