import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react'
import { contactInfo } from '../clientdata'

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions? We're here to help. Reach out to us through any of 
            the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-blue-600" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">{contactInfo.address}</p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-green-600" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-1">{contactInfo.phone}</p>
            <p className="text-red-600 text-sm font-semibold flex items-center justify-center gap-1">
              <AlertCircle size={14} />
              Emergency: {contactInfo.emergency}
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-purple-600" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">{contactInfo.email}</p>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-orange-600" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Working Hours</h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Mon-Fri: {contactInfo.hours.weekday}</p>
              <p>Sat: {contactInfo.hours.saturday}</p>
              <p>Sun: {contactInfo.hours.sunday}</p>
              <p className="text-green-600 font-semibold">Emergency: 24/7</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155738182897!2d-73.98784368459395!3d40.75797477932632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645564750983!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MediCare Clinic Location"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact