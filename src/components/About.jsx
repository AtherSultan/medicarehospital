// import { CheckCircle, Award, Users, Clock, Shield } from 'lucide-react'

// const About = () => {
//   const stats = [
//     { icon: Users, value: '10,000+', label: 'Happy Patients' },
//     { icon: Award, value: '50+', label: 'Expert Doctors' },
//     { icon: Clock, value: '24/7', label: 'Emergency Care' },
//     { icon: Shield, value: '25+', label: 'Years of Service' }
//   ]

//   const values = [
//     'Patient-centered care approach',
//     'Cutting-edge medical technology',
//     'Collaborative team of specialists',
//     'Commitment to continuous improvement',
//     'Community health education programs',
//     'Accessible and affordable healthcare'
//   ]

//   return (
//     <section id="about" className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="relative order-2 md:order-1">
//             <div className="rounded-2xl overflow-hidden shadow-xl">
//               <img
//                 src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=500&fit=crop"
//                 alt="About MediCare"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* Experience Badge */}
//             <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl p-6 shadow-lg">
//               <p className="text-4xl font-bold">25+</p>
//               <p className="text-sm">Years of Excellence</p>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="order-1 md:order-2">
//             <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               About Us
//             </span>
//             <h2 className="section-title">
//               Dedicated to Your Health and Well-being
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Since 1998, MediCare Clinic has been at the forefront of providing 
//               exceptional healthcare services to our community. Our team of 
//               board-certified physicians and specialists work together to deliver 
//               personalized, comprehensive care.
//             </p>
//             <p className="text-gray-600 mb-8">
//               We combine advanced medical technology with a compassionate approach, 
//               ensuring that every patient receives the attention and treatment they deserve.
//             </p>

//             {/* Values List */}
//             <div className="grid sm:grid-cols-2 gap-4 mb-8">
//               {values.map((value, index) => (
//                 <div key={index} className="flex items-start space-x-2">
//                   <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700 text-sm">{value}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
//                   <stat.icon className="mx-auto text-blue-600 mb-2" size={24} />
//                   <p className="text-xl font-bold text-gray-900">{stat.value}</p>
//                   <p className="text-xs text-gray-600">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About

import {
  CheckCircle,
  Award,
  Users,
  Clock,
  Shield,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Patients",
    },
    {
      icon: Award,
      value: "50+",
      label: "Expert Doctors",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Emergency Care",
    },
    {
      icon: Shield,
      value: "25+",
      label: "Years of Service",
    },
  ];

  const values = [
    "Patient-centered care approach",
    "Cutting-edge medical technology",
    "Collaborative team of specialists",
    "Commitment to continuous improvement",
    "Community health education programs",
    "Accessible and affordable healthcare",
  ];

  return (
    <section
      id="about"
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=500&fit=crop"
                alt="About MediCare"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-blue-600 p-6 text-white shadow-lg">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              About Us
            </span>

            <h2 className="section-title">
              Dedicated to Your Health and Well-being
            </h2>

            <p className="mb-6 text-gray-600">
              Since 1998, MediCare Clinic has been at the forefront
              of providing exceptional healthcare services to our
              community. Our team of board-certified physicians and
              specialists work together to deliver personalized,
              comprehensive care.
            </p>

            <p className="mb-8 text-gray-600">
              We combine advanced medical technology with a
              compassionate approach, ensuring that every patient
              receives the attention and treatment they deserve.
            </p>

            {/* Values */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-start space-x-2"
                >
                  <CheckCircle
                    className="mt-1 flex-shrink-0 text-green-500"
                    size={18}
                  />

                  <span className="text-sm text-gray-700">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-gray-50 p-4 text-center"
                  >
                    <Icon
                      className="mx-auto mb-2 text-blue-600"
                      size={24}
                    />

                    <p className="text-xl font-bold text-gray-900">
                      {stat.value}
                    </p>

                    <p className="text-xs text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;