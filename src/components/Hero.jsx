import { Calendar, Phone, CheckCircle } from 'lucide-react'

const Hero = ({ onBookAppointment }) => {
  const features = [
    'Board-certified specialists',
    'State-of-the-art facilities',
    'Same-day appointments',
    'Insurance accepted'
  ]

  return (
    <section id="home" className="pt-20 md:pt-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Welcome to MediCare Clinic
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Health Is Our{' '}
              <span className="text-blue-600">Top Priority</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience compassionate, comprehensive healthcare from our team of 
              dedicated medical professionals. We're here for you and your family.
            </p>
            
            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onBookAppointment}
                className="btn-primary flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book Appointment</span>
              </button>
              <a
                href="tel:(555)911-0000"
                className="btn-secondary flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Emergency: (555) 911-0000</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=700&fit=crop"
                alt="Medical Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">Expert Doctors</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😊</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero