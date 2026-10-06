

import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";

const Header = ({ onBookAppointment }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Doctors", href: "#doctors" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleBookAppointment = () => {
    onBookAppointment?.();
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">

        <div className="flex h-16 items-center justify-between md:h-20">

          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-xl font-bold text-white">M</span>
            </div>

            <span className="text-xl font-bold text-gray-900 md:text-2xl">
              Medi<span className="text-blue-600">Care</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center space-x-4 lg:flex">
            <a
              href="tel:+15551234567"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
            >
              <Phone size={18} />
              <span className="font-medium">(555) 123-4567</span>
            </a>

            <button
              type="button"
              onClick={handleBookAppointment}
              className="btn-primary flex items-center space-x-2"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="p-2 lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <nav className="flex flex-col space-y-4">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <button
                type="button"
                onClick={handleBookAppointment}
                className="btn-primary mx-4 flex items-center justify-center space-x-2"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
