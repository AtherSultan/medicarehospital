// import { Star, Quote } from 'lucide-react'
// import { testimonials } from '../data/clientData'

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="section-title">What Our Patients Say</h2>
//           <p className="section-subtitle">
//             Don't just take our word for it. Here's what our patients have to say 
//             about their experience with MediCare.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-gray-50 rounded-xl p-6 relative"
//             >
//               {/* Quote Icon */}
//               <div className="absolute top-6 right-6 text-blue-200">
//                 <Quote size={40} />
//               </div>

//               {/* Rating */}
//               <div className="flex space-x-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
//                 ))}
//               </div>

//               {/* Content */}
//               <p className="text-gray-700 mb-6 relative z-10">
//                 "{testimonial.content}"
//               </p>

//               {/* Author */}
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                   <p className="text-sm text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Testimonials

// import { Star, Quote } from "lucide-react";
// import { testimonials } from "../clientdata";

// const Testimonials = () => {
//   return (
//     <section
//       id="testimonials"
//       className="bg-white py-16 md:py-24"
//     >
//       <div className="container mx-auto px-4">

//         {/* Section Header */}
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <h2 className="section-title">
//             What Our Patients Say
//           </h2>

//           <p className="section-subtitle">
//             Don't just take our word for it. Here's what our patients
//             have to say about their experience with MediCare.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid gap-8 md:grid-cols-2">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="relative rounded-xl bg-gray-50 p-6"
//             >
//               {/* Quote Icon */}
//               <div className="absolute right-6 top-6 text-blue-200">
//                 <Quote size={40} />
//               </div>

//               {/* Rating */}
//               <div className="mb-4 flex space-x-1">
//                 {Array.from({
//                   length: testimonial.rating,
//                 }).map((_, index) => (
//                   <Star
//                     key={index}
//                     className="fill-yellow-400 text-yellow-400"
//                     size={18}
//                   />
//                 ))}
//               </div>

//               {/* Content */}
//               <p className="relative z-10 mb-6 text-gray-700">
//                 "{testimonial.content}"
//               </p>

//               {/* Author */}
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="h-12 w-12 rounded-full object-cover"
//                 />

//                 <div>
//                   <p className="font-semibold text-gray-900">
//                     {testimonial.name}
//                   </p>

//                   <p className="text-sm text-gray-600">
//                     {testimonial.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import { Star, Quote } from "lucide-react";

// Testimonials.jsx
import { testimonials } from "../clientdata/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4">

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title">
            What Our Patients Say
          </h2>

          <p className="section-subtitle">
            Don't just take our word for it. Here's what our patients
            have to say about their experience with MediCare.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-xl bg-gray-50 p-6"
            >

              <div className="absolute right-6 top-6 text-blue-200">
                <Quote size={40} />
              </div>

              <div
                className="mb-4 flex space-x-1"
                aria-label={`${testimonial.rating} star rating`}
              >
                {Array.from(
                  { length: testimonial.rating },
                  (_, index) => (
                    <Star
                      key={index}
                      className="fill-yellow-400 text-yellow-400"
                      size={18}
                    />
                  )
                )}
              </div>

              <p className="relative z-10 mb-6 text-gray-700">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />

                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>

                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
