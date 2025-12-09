import dishSteak from "@/assets/dish-steak.jpg";
import dishSeafood from "@/assets/dish-seafood.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishSalad from "@/assets/dish-salad.jpg";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItemProps[] = [
  {
    name: "Burrata Caprese",
    description: "Creamy burrata, heirloom tomatoes, fresh basil, aged balsamic reduction",
    price: "$24",
    image: dishSalad,
    category: "Starters",
  },
  {
    name: "Wagyu Ribeye",
    description: "Premium A5 Wagyu, truffle butter, roasted garlic, seasonal vegetables",
    price: "$89",
    image: dishSteak,
    category: "Main Course",
  },
  {
    name: "Seafood Linguine",
    description: "Fresh clams, mussels, prawns, white wine sauce, house-made pasta",
    price: "$42",
    image: dishSeafood,
    category: "Main Course",
  },
  {
    name: "Chocolate Fondant",
    description: "Valrhona dark chocolate, gold leaf, raspberry coulis, vanilla gelato",
    price: "$18",
    image: dishDessert,
    category: "Desserts",
  },
];

const MenuItem = ({ name, description, price, image, category }: MenuItemProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-elegant card-hover">
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={`${name} - ${description}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground text-xs font-body uppercase tracking-wider px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-heading text-xl font-semibold text-foreground">{name}</h3>
          <span className="font-heading text-xl font-bold text-primary shrink-0">{price}</span>
        </div>
        <p className="font-body text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-accent font-body text-sm uppercase tracking-[0.2em] mb-4">
            Culinary Delights
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Signature Menu
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each dish is crafted with passion, using only the finest seasonal ingredients 
            sourced from local artisans and premium international purveyors.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <MenuItem {...item} />
            </div>
          ))}
        </div>

        {/* View Full Menu Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-primary hover:text-burgundy-light transition-colors group"
          >
            <span className="uppercase tracking-widest text-sm">View Full Menu</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
