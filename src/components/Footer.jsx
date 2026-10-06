import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "Emergency Care",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-xl font-bold text-white">M</span>
              </div>

              <span className="text-xl font-bold">
                Medi<span className="text-blue-400">Care</span>
              </span>
            </div>

            <p className="text-sm leading-6 text-gray-400">
              Providing exceptional healthcare services with compassion and
              expertise since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Our Services
            </h3>

            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Contact Info
            </h3>

            <ul className="space-y-4">

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 flex-shrink-0 text-blue-400"
                  size={18}
                />

                <span className="text-sm leading-5 text-gray-400">
                  123 Medical Center Drive,
                  <br />
                  Healthcare City, HC 12345
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone
                  className="flex-shrink-0 text-blue-400"
                  size={18}
                />

                <a
                  href="tel:+15551234567"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  (555) 123-4567
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail
                  className="flex-shrink-0 text-blue-400"
                  size={18}
                />

                <a
                  href="mailto:info@medicare-clinic.com"
                  className="break-all text-sm text-gray-400 transition-colors hover:text-white"
                >
                  info@medicare-clinic.com
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-center text-sm text-gray-400 md:text-left">
              © {new Date().getFullYear()} MediCare Clinic.
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
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
