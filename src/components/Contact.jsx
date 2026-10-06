

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertCircle,
} from "lucide-react";

// Contact.jsx
import { contactInfo } from "../clientdata/contactInfo";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title">Contact Us</h2>

          <p className="section-subtitle">
            Have questions? We're here to help. Reach out to us through any of
            the following channels.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Address */}
          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <MapPin className="text-blue-600" size={28} />
            </div>

            <h3 className="mb-2 text-lg font-bold text-gray-900">
              Visit Us
            </h3>

            <p className="text-sm text-gray-600">
              {contactInfo.address}
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <Phone className="text-green-600" size={28} />
            </div>

            <h3 className="mb-2 text-lg font-bold text-gray-900">
              Call Us
            </h3>

            <p className="mb-1 text-sm text-gray-600">
              {contactInfo.phone}
            </p>

            <p className="flex items-center justify-center gap-1 text-sm font-semibold text-red-600">
              <AlertCircle size={14} />
              Emergency: {contactInfo.emergency}
            </p>
          </div>

          {/* Email */}
          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
              <Mail className="text-purple-600" size={28} />
            </div>

            <h3 className="mb-2 text-lg font-bold text-gray-900">
              Email Us
            </h3>

            <p className="text-sm text-gray-600">
              {contactInfo.email}
            </p>
          </div>

          {/* Hours */}
          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
              <Clock className="text-orange-600" size={28} />
            </div>

            <h3 className="mb-2 text-lg font-bold text-gray-900">
              Working Hours
            </h3>

            <div className="space-y-1 text-sm text-gray-600">
              <p>Mon-Fri: {contactInfo.hours.weekday}</p>
              <p>Sat: {contactInfo.hours.saturday}</p>
              <p>Sun: {contactInfo.hours.sunday}</p>
              <p className="font-semibold text-green-600">
                Emergency: {contactInfo.hours.emergency}
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-xl bg-white shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155738182897!2d-73.98784368459395!3d40.75797477932632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645564750983!5m2!1sen!2sus"
            title="MediCare Clinic Location"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;
