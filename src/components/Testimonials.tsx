import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Regular Customer",
    text: "Bukid Café is my go-to spot for work and relaxation. The coffee is amazing, and the atmosphere feels like a peaceful countryside retreat. Love it!",
    rating: 5,
  },
  {
    id: 2,
    name: "Juan Reyes",
    role: "Event Organizer",
    text: "We booked the mobile coffee cart for our company event, and it was a huge hit! Professional service and delicious drinks. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sofia Martinez",
    role: "Coffee Enthusiast",
    text: "Best coffee in Rizal! The Barako Espresso is incredible, and the staff is so friendly. Plus, the nature vibes make every visit special.",
    rating: 5,
  },
  {
    id: 4,
    name: "Carlos Villanueva",
    role: "Local Resident",
    text: "A hidden gem in Morong! Great food, excellent coffee, and a cozy ambiance. It's the perfect place to unwind after a long day.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy coffee lovers!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
