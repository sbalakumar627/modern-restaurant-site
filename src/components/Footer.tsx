import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="section-padding pb-12">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="font-heading text-3xl font-bold text-cream mb-4">La Maison</h3>
              <p className="font-body text-cream/70 leading-relaxed mb-6">
                An exquisite fine dining experience where tradition meets innovation. 
                Every dish tells a story.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-cream mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About", "Menu", "Gallery", "Reservations"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-body text-cream/70 hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-cream mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="font-body text-cream/70">
                    123 Gourmet Avenue<br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a href="tel:+15551234567" className="font-body text-cream/70 hover:text-accent transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href="mailto:info@lamaison.com" className="font-body text-cream/70 hover:text-accent transition-colors">
                    info@lamaison.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-cream mb-6">Hours</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="font-body text-cream/70">
                    <p className="font-semibold text-cream">Dinner</p>
                    <p>Tue - Sun: 6pm - 11pm</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 mt-4">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="font-body text-cream/70">
                    <p className="font-semibold text-cream">Sunday Brunch</p>
                    <p>11am - 3pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-narrow mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-body text-sm text-cream/50">
              © {currentYear} La Maison. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-sm text-cream/50 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-cream/50 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
