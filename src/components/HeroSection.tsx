import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  const handleScrollToReservation = () => {
    const element = document.querySelector("#reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToMenu = () => {
    const element = document.querySelector("#menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant fine dining restaurant interior with warm ambient lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <span className="inline-block text-accent font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6">
          Fine Dining Experience
        </span>
        
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
          Where Every Meal
          <span className="block text-accent">Becomes a Memory</span>
        </h1>
        
        <p className="font-body text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the art of French cuisine in an atmosphere of timeless elegance. 
          Each dish tells a story, crafted with passion and the finest ingredients.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="hero"
            size="xl"
            onClick={handleScrollToReservation}
          >
            Reserve Your Table
          </Button>
          <Button
            variant="heroOutline"
            size="xl"
            onClick={handleScrollToMenu}
          >
            Explore Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
