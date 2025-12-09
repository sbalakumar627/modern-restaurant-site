import chefImage from "@/assets/chef.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden rounded-lg shadow-elegant-lg">
              <img
                src={chefImage}
                alt="Executive Chef preparing gourmet dishes in the kitchen"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <span className="inline-block text-accent font-body text-sm uppercase tracking-[0.2em] mb-4">
              Our Story
            </span>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Passion for
              <span className="text-primary block">Culinary Excellence</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Founded in 2010, La Maison has been at the forefront of French fine dining, 
                blending classic techniques with contemporary innovation. Our philosophy is simple: 
                source the finest ingredients and let their natural flavors shine.
              </p>
              <p>
                Under the guidance of Executive Chef Antoine Dubois, our kitchen team creates 
                dishes that honor tradition while embracing creativity. Each plate is a canvas, 
                each bite a journey through flavors meticulously crafted to delight your senses.
              </p>
              <p>
                We believe dining is not just about food—it's about creating moments that linger 
                long after the last course. Welcome to our table.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div className="text-center">
                <span className="block font-heading text-3xl md:text-4xl font-bold text-primary">15</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Years</span>
              </div>
              <div className="text-center">
                <span className="block font-heading text-3xl md:text-4xl font-bold text-primary">2</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Michelin Stars</span>
              </div>
              <div className="text-center">
                <span className="block font-heading text-3xl md:text-4xl font-bold text-primary">50k+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Happy Guests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
