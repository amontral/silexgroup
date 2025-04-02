import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function App() {
  const [modal, setModal] = useState(null);
  const [particlesInit] = useState(() => loadFull);

  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  const Modal = ({ title, content }) => (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-background border border-gray-700 text-white rounded-lg p-6 max-w-md w-full relative">
        <button className="absolute top-2 right-4 text-gray-400 hover:text-white" onClick={closeModal}>✕</button>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 text-sm whitespace-pre-line">{content}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#0c0c0e] text-white min-h-screen flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: '#0c0c0e' } },
          fpsLimit: 60,
          interactivity: { events: { onClick: { enable: false }, resize: true } },
          particles: {
            color: { value: '#ffffff' },
            links: { enable: false },
            move: { enable: true, speed: 0.3 },
            number: { value: 30 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2 } }
          },
          detectRetina: true
        }}
      />

      {/* Top Nav */}
      <nav className="absolute top-6 flex gap-8 text-sm text-gray-400 z-50">
        <button onClick={() => openModal('about')} className="hover:text-white">About</button>
        <button onClick={() => openModal('services')} className="hover:text-white">Services</button>
        <button onClick={() => openModal('contact')} className="hover:text-white">Contact</button>
      </nav>

      {/* Main Content */}
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}
      >
        Silex
      </motion.h1>
      <motion.h2
        className="text-6xl md:text-8xl font-extrabold text-center z-10 mt-[-10px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}
      >
        Strategic Group
      </motion.h2>

      <motion.p
        className="text-md md:text-lg text-gray-400 mt-6 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Strategic Security. Real-World Results.
      </motion.p>

      <footer className="absolute bottom-6 text-center text-xs text-gray-600 z-10">
        &copy; {new Date().getFullYear()} Silex Strategic Group
      </footer>

      {/* Modals */}
      {modal === 'about' && <Modal title="About" content="Silex Strategic Group empowers businesses through elite physical and information security consulting." />}
      {modal === 'services' && <Modal title="Services" content="• Physical Security\n• InfoSec & Compliance\n• SBSS Certification Prep" />}
      {modal === 'contact' && <Modal title="Contact" content="Email: silexstrategicgroup@gmail.com\nPhone: 501-952-7172" />}
    </div>
  )
}
