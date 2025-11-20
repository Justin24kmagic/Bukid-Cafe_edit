import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import bukidLogo from "@/assets/navbar_logo.png";
import { motion } from "framer-motion";

const coffeeBeanSvg = (
  <svg
    viewBox="0 0 64 64"
    className="w-full h-full"
  >
    <path
      fill="#6F4E37"
      d="M32 4C20 4 12 16 12 32s8 28 20 28 20-12 20-28S44 4 32 4zm0 50c-10 0-18-10-18-22s8-22 18-22 18 10 18 22-8 22-18 22z"
    />
    <line
      x1="20"
      y1="32"
      x2="44"
      y2="32"
      stroke="#3E2723"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fallingLeaves, setFallingLeaves] = useState<any[]>([]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Wheel Of Bukid", href: "#SpinWheel" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const createFallingLeaves = () => {
    const newLeaves = Array.from({ length: 20 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100, // random horizontal pos
      delay: Math.random() * 0.5,
      duration: 3 + Math.random() * 2,
      rotate: Math.random() * 360,
    }));
    setFallingLeaves((prev) => [...prev, ...newLeaves]);

    // Remove after animation ends
    setTimeout(() => {
      setFallingLeaves((prev) =>
        prev.filter((l) => !newLeaves.includes(l))
      );
    }, 5000);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO + SPROUTING LEAVES */}
          <button
            onClick={() => {
              scrollToSection("#home");
              createFallingLeaves();
            }}
            className="relative flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="h-10 md:h-12 flex items-center overflow-visible relative">
              <img
                src={bukidLogo}
                alt="Bukid Cafe"
                className="h-full w-24 md:w-32 object-contain -ml-1"
                style={{ transform: "scaleX(1.12)" }}
              />

              {/* --- Coffee Beans Around Logo --- */}
              <motion.div
                className="absolute -top-2 -left-3 w-4 h-4"
                animate={{ y: [0, -4, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {coffeeBeanSvg}
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-5 w-4 h-4"
                animate={{ y: [0, 3, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                {coffeeBeanSvg}
              </motion.div>

              <motion.div
                className="absolute top-1 right-0 w-4 h-4"
                animate={{ y: [0, -3, 0], rotate: [0, -20, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                {coffeeBeanSvg}
              </motion.div>

            </div>

            <span className="sr-only">Bukid Cafe</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-2 hover:bg-accent rounded-md transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- FALLING LEAVES ACROSS SCREEN --- */}
      {fallingLeaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="fixed top-0 w-5 h-5 z-50 pointer-events-none"
          style={{ left: `${leaf.left}vw` }}
          animate={{
            y: ["-5vh", "110vh"],
            rotate: leaf.rotate,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            ease: "easeInOut",
          }}
        >
          {coffeeBeanSvg}
        </motion.div>
      ))}
    </nav>
  );
};

export default Navbar;
