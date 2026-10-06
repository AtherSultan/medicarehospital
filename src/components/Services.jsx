// import { Heart, Brain, Baby, Bone, Sparkles, Ambulance, ArrowRight } from 'lucide-react'
// import { services } from '../data/clientData'

// const iconMap = {
//   Heart: Heart,
//   Brain: Brain,
//   Baby: Baby,
//   Bone: Bone,
//   Sparkles: Sparkles,
//   Ambulance: Ambulance
// }

// const Services = () => {
//   return (
//     <section id="services" className="py-16 md:py-24 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="section-title">Our Medical Services</h2>
//           <p className="section-subtitle">
//             We offer a comprehensive range of medical services to meet all your 
//             healthcare needs under one roof.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => {
//             const IconComponent = iconMap[service.icon]
//             return (
//               <div
//                 key={service.id}
//                 className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group"
//               >
//                 <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
//                   <IconComponent className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <ul className="space-y-2 mb-4">
//                   {service.features.map((feature, index) => (
//                     <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
//                       <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700"
//                 >
//                   <span>Learn More</span>
//                   <ArrowRight size={16} />
//                 </a>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services


import {
  Heart,
  Brain,
  Baby,
  Bone,
  Sparkles,
  Ambulance,
  ArrowRight,
} from "lucide-react";

import { services } from "../clientdata";

const iconMap = {
  Heart: Heart,
  Brain: Brain,
  Baby: Baby,
  Bone: Bone,
  Sparkles: Sparkles,
  Ambulance: Ambulance,
};

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title">
            Our Medical Services
          </h2>

          <p className="section-subtitle">
            We offer a comprehensive range of medical services to meet all
            your healthcare needs under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];

            return (
              <div
                key={service.id}
                className="group rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
                  {IconComponent && (
                    <IconComponent
                      className="text-blue-600 transition-colors duration-300 group-hover:text-white"
                      size={28}
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-gray-600">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mb-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
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