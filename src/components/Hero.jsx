
import { Calendar, Phone, CheckCircle } from "lucide-react";

const Hero = ({ onBookAppointment }) => {
  const features = [
    "Board-certified specialists",
    "State-of-the-art facilities",
    "Same-day appointments",
    "Insurance accepted",
  ];

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-white pt-20 md:pt-24"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Content */}
          <div>
            <span className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Welcome to MediCare Clinic
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Your Health Is Our{" "}
              <span className="text-blue-600">Top Priority</span>
            </h1>

            <p className="mb-8 text-lg text-gray-600">
              Experience compassionate, comprehensive healthcare from our team
              of dedicated medical professionals. We're here for you and your
              family.
            </p>

            <ul className="mb-8 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle
                    className="text-green-500"
                    size={20}
                  />

                  <span className="text-gray-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">

              <button
                type="button"
                onClick={() => onBookAppointment?.()}
                className="btn-primary flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+15559110000"
                className="btn-secondary flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Emergency: (555) 911-0000</span>
              </a>

            </div>
          </div>

          {/* Image */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=700&fit=crop"
                alt="Medical Team"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Doctors */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex items-center space-x-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    50+
                  </p>

                  <p className="text-sm text-gray-600">
                    Expert Doctors
                  </p>
                </div>

              </div>
            </div>

            {/* Patients */}
            <div className="absolute -right-6 -top-6 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex items-center space-x-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl">😊</span>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    10K+
                  </p>

                  <p className="text-sm text-gray-600">
                    Happy Patients
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
