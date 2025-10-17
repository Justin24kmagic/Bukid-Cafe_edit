import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import SpinWheel from "@/components/SpinWheel";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import QuoteOfDay from "@/components/QuoteOfDay";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <SpinWheel />
      <Events />
      <Gallery />
      <QuoteOfDay />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
