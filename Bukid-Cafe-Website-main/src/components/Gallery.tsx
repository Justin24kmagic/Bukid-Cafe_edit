import heroImage from "@/assets/hero-cafe.jpg";
import coffee1 from "@/assets/coffee-1.jpg";
import coffeeCart from "@/assets/coffee-cart.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Bukid Café cozy interior with natural lighting" },
    { src: coffee1, alt: "Beautiful latte art coffee" },
    { src: coffeeCart, alt: "Mobile coffee cart at outdoor event" },
    { src: heroImage, alt: "Customers enjoying coffee" },
    { src: coffee1, alt: "Specialty drinks" },
    { src: coffeeCart, alt: "Coffee cart setup" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the Bukid Café experience - nature, coffee, and good vibes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-card text-center animate-fade-in">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-primary mb-4">
            Share Your Moments
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tag us on social media <span className="font-semibold text-secondary">@BukidCafe</span> to be featured in our gallery!
            We love seeing you enjoy our coffee and cozy space. 📸☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
