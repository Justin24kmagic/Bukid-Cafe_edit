import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Bukid_bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-primary-foreground mb-6">
            Welcome to <span className="text-cream">Bukid Cafe</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
            Where Nature Meets Your Perfect Cup
          </p>
          
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 mb-8">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Morong Rizal, Philippines</span>
          </div>

          <p className="text-lg text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
            Experience the warmth of countryside vibes with specialty coffee, 
            local flavors, and a cozy atmosphere that feels like home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#menu")}
              className="bg-cream text-primary hover:bg-cream/90 shadow-hover group"
            >
              View Menu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-black/80 text-cream hover:bg-black/90 shadow-hover border-2 border-transparent"
            >
              Visit Us
            </Button>
            
            <Button
              size="lg"
              onClick={() => scrollToSection("#events")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-hover"
            >
              Book Coffee Cart
            </Button>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
