import { useState } from "react";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryWine from "@/assets/gallery-wine.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSeafood from "@/assets/dish-seafood.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishSalad from "@/assets/dish-salad.jpg";

const galleryImages = [
  {
    src: galleryDining,
    alt: "Private dining room with elegant table setting",
    span: "col-span-2 row-span-2",
  },
  {
    src: dishSteak,
    alt: "Wagyu ribeye steak with herb butter",
    span: "col-span-1 row-span-1",
  },
  {
    src: galleryWine,
    alt: "Sommelier pouring fine wine",
    span: "col-span-1 row-span-1",
  },
  {
    src: dishSeafood,
    alt: "Fresh seafood linguine",
    span: "col-span-1 row-span-1",
  },
  {
    src: dishDessert,
    alt: "Chocolate fondant dessert",
    span: "col-span-1 row-span-1",
  },
  {
    src: dishSalad,
    alt: "Fresh burrata caprese salad",
    span: "col-span-2 row-span-1",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-accent font-body text-sm uppercase tracking-[0.2em] mb-4">
            Visual Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Gallery
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A glimpse into the La Maison experience—from our elegant interiors 
            to the artistry of our cuisine.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-elegant cursor-pointer group animate-scale-in ${image.span}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body text-sm uppercase tracking-widest">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream text-4xl hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery image expanded"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elegant-lg animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
