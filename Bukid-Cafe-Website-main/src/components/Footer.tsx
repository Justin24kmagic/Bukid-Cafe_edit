import { Coffee, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8" />
              <span className="font-display font-bold text-xl">Bukid Café</span>
            </div>
            <p className="text-sm opacity-90">
              Where nature meets your perfect cup. Experience countryside vibes in the heart of Morong, Rizal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#home" className="hover:text-cream transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cream transition-colors">About</a></li>
              <li><a href="#menu" className="hover:text-cream transition-colors">Menu</a></li>
              <li><a href="#events" className="hover:text-cream transition-colors">Events</a></li>
              <li><a href="#contact" className="hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +63 917 123 4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@bukidcafe.ph
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>123 Countryside Road<br />Morong, Rizal 1960</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Monday - Friday:<br />7:00 AM - 9:00 PM</li>
              <li>Saturday - Sunday:<br />8:00 AM - 10:00 PM</li>
              <li className="text-cream font-medium">Open Daily!</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">
            © {currentYear} Bukid Café. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <span className="text-sm opacity-90">
              Follow us for updates and promotions!
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
