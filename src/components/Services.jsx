import {
  Heart,
  Brain,
  Baby,
  Bone,
  Sparkles,
  Ambulance,
  ArrowRight,
} from "lucide-react";

// Services.jsx
import { services } from "../clientdata/services";

const iconMap = {
  Heart,
  Brain,
  Baby,
  Bone,
  Sparkles,
  Ambulance,
};

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title">Our Medical Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of medical services to meet all
            your healthcare needs under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Heart;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent size={28} />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mb-4 text-gray-600">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium text-blue-600 hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;