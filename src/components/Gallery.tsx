import Img1 from "@/assets/Scenery_bukid.jpg";
import Img2 from "@/assets/Latte_art.jpg";
import Img3 from "@/assets/Coffee_cart1.jpg";
import Img4 from "@/assets/customer_enjoy.jpg";
import Img5 from "@/assets/Bukid_cafe_emp.jpg";
import Img6 from "@/assets/Bukid_interior.jpg";


const Gallery = () => {
  const images = [
    { src: Img1, alt: "Bukid Cafe's alfresco vibes" },
    { src: Img2, alt: "Beautiful latte art with a side of creamy chocolate cake" },
    { src: Img3, alt: "Mobile coffee cart at outdoor event" },
    { src: Img4, alt: "Customers enjoying coffee" },
    { src: Img5, alt: "Lovely Staff at Bukid Cafe" },
    { src: Img6, alt: "Bukid Cafe cozy interior with natural lighting" },
   
   
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the Bukid Cafe experience - nature, coffee, and good vibes
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
            Tag us{" "}
            <a
              href="https://www.facebook.com/BukidCafe"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-secondary underline"
            >
              @BukidCafe
            </a>{" "}
            to be featured in our social media galleries! We love seeing you enjoy our coffee and cozy space. 📸☕
          </p>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
