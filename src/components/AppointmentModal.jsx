import { useEffect, useState } from "react";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

// AppointmentModal.jsx
import { doctors } from "../clientdata/doctors";
import { services } from "../clientdata/services";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  service: "",
  doctor: "",
  date: "",
  time: "",
  message: "",
};

const AppointmentModal = ({
  isOpen,
  onClose,
  selectedDoctor = null,
}) => {
  const [formData, setFormData] = useState(() => ({
    ...EMPTY_FORM,
    doctor: selectedDoctor?.name || "",
  }));

  const [isSubmitted, setIsSubmitted] = useState(false);

  // useEffect(() => {
  //   if (isOpen) {
  //     setFormData((previous) => ({
  //       ...previous,
  //       doctor: selectedDoctor?.name || "",
  //     }));

  //     setIsSubmitted(false);
  //   }
  // }, [isOpen, selectedDoctor]);

  useEffect(() => {
    if (!isSubmitted) return;
    const id = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(id);
  }, [isSubmitted, onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Appointment Data:", formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(EMPTY_FORM);
      onClose();
    }, 3000);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-2xl border-b bg-white px-6 py-4">
          <h2
            id="appointment-title"
            className="text-xl font-bold text-gray-900"
          >
            Book an Appointment
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close appointment form"
            className="rounded-full p-2 transition-colors hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-10 w-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Appointment Requested!
              </h3>

              <p className="text-gray-600">
                We'll contact you shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="appointment-name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name *
                </label>

                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />

                  <input
                    id="appointment-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="appointment-email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email *
                  </label>

                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />

                    <input
                      id="appointment-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="appointment-phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone *
                  </label>

                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />

                    <input
                      id="appointment-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Doctor */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="appointment-service"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Service *
                  </label>

                  <select
                    id="appointment-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="appointment-doctor"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Preferred Doctor
                  </label>

                  <select
                    id="appointment-doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Any available doctor</option>

                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.name}>
                        {doctor.name} - {doctor.specialty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="appointment-date"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Preferred Date *
                  </label>

                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />

                    <input
                      id="appointment-date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="appointment-time"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Preferred Time *
                  </label>

                  <div className="relative">
                    <Clock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />

                    <input
                      id="appointment-time"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="appointment-message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Additional Notes
                </label>

                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />

                  <textarea
                    id="appointment-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full resize-none rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your symptoms or reason for visit..."
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full py-4 text-lg"
              >
                Request Appointment
              </button>

              <p className="text-center text-xs text-gray-500">
                By submitting this form, you agree to our terms and privacy
                policy. We'll contact you to confirm your appointment.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
