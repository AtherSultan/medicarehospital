// import { useState } from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import Services from './components/Services'
// import About from './components/About'
// import Doctors from './components/Doctors'
// import Testimonials from './components/Testimonials'
// import AppointmentModal from './components/AppointmentModal'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const openAppointmentModal = () => setIsModalOpen(true)
//   const closeAppointmentModal = () => setIsModalOpen(false)

//   return (
//     <div className="min-h-screen bg-white">
//       <Header onBookAppointment={openAppointmentModal} />
//       <Hero onBookAppointment={openAppointmentModal} />
//       <Services />
//       <About />
//       <Doctors onBookAppointment={openAppointmentModal} />
//       <Testimonials />
//       <Contact />
//       <Footer />
//       <AppointmentModal isOpen={isModalOpen} onClose={closeAppointmentModal} />
//     </div>
//   )
// }

// export default App


import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import AppointmentModal from "./components/AppointmentModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openAppointmentModal = (doctor = null) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen bg-white">

      <Header
        onBookAppointment={() => openAppointmentModal()}
      />

      <Hero
        onBookAppointment={() => openAppointmentModal()}
      />

      <Services />

      <About />

      <Doctors
        onBookAppointment={openAppointmentModal}
      />

      <Testimonials />

      <Contact />

      <Footer />

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={closeAppointmentModal}
        selectedDoctor={selectedDoctor}
      />

    </div>
  );
}

export default App;