import { Calendar, GraduationCap } from "lucide-react";
import { doctors } from "../data/clientData";

const Doctors = ({ onBookAppointment }) => {
  return (
    <section id="doctors" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Our Expert Doctors
          </h2>

          <p className="mt-4 text-gray-600">
            Our team of highly qualified and experienced medical professionals
            is dedicated to providing you with the best possible care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Array.isArray(doctors) &&
            doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-64 w-full object-cover"
                  />

                  {doctor.experience && (
                    <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-blue-600 shadow-md">
                      {doctor.experience}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    {doctor.name}
                  </h3>

                  <p className="mb-3 text-sm font-semibold text-blue-600">
                    {doctor.specialty}
                  </p>

                  {/* Education */}
                  {doctor.education && (
                    <div className="mb-3 flex items-start gap-2">
                      <GraduationCap
                        className="mt-0.5 flex-shrink-0 text-gray-400"
                        size={16}
                      />

                      <span className="text-xs text-gray-600">
                        {doctor.education}
                      </span>
                    </div>
                  )}

                  {/* Availability */}
                  {Array.isArray(doctor.availability) &&
                    doctor.availability.length > 0 && (
                      <div className="mb-4 flex items-start gap-2">
                        <Calendar
                          className="mt-1 flex-shrink-0 text-gray-400"
                          size={16}
                        />

                        <div className="flex flex-wrap gap-1">
                          {doctor.availability.map((day, index) => (
                            <span
                              key={`${day}-${index}`}
                              className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-600"
                            >
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Book Button */}
                  <button
                    type="button"
                    onClick={() => onBookAppointment?.(doctor)}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;


