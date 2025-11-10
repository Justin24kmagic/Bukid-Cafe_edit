import { MapPin, Clock, Phone, Mail, Facebook, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come experience the warmth of Bukid Cafe. We're always happy to see you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Bukid Cafe, G. San Antonio Street,<br />
                    Morong, Rizal 1960<br />
                    Philippines
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">
                    Opening Hours
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 11:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                    <p className="text-secondary font-medium mt-2">Open Daily!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">
                    Contact
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Email: bukidcafe22@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Facebook className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-xl mb-3">
                    Connect With Us
                  </h3>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => window.open("https://www.facebook.com/bukidcafe", "_blank")}
                    >
                      <Facebook className="h-4 w-4" />
                      Follow on Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => window.open("https://www.google.com/search?sca_esv=3f626f5782a50780&rlz=1C1ONGR_enPH1040PH1040&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1UNKYr2C7PsI_48I_RpAo-hMFi-Glq5SW-SUiEQIJe61NqjHL6M9kii-DZFZxp9NufhYCI55mIAjWopMt2oG9nCeyMD&q=Bukid+Cafe+Reviews&sa=X&ved=2ahUKEwiso7_SxueQAxXKqVYBHcTYFO0Q0bkNegQIIRAD&biw=1707&bih=811&dpr=1.13", "_blank")}
                    >
                      <Star className="h-4 w-4" />
                      Leave a Review on Google
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-scale-in">
            <div className="bg-card rounded-xl overflow-hidden shadow-card h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.5517108479903!2d121.2084318751044!3d14.510405185965327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c1806f9f3f05%3A0x6ee7ae7ae8dfcb36!2sBukid%20Cafe!5e0!3m2!1sen!2sph!4v1762776193990!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bukid Café Location Map"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-coffee-medium text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-card animate-fade-in">
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
            We Can't Wait to Serve You!
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Whether it's your morning coffee, an afternoon break, or an evening hangout - 
            Bukid Cafe is your home away from home.
          </p>
          <p className="text-2xl font-display font-semibold">
            See you soon! ☕🌿
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
