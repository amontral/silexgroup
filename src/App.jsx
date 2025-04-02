
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [modal, setModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = (type) => {
    setModal(type);
    setMenuOpen(false);
  };
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
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center font-sans relative overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-br from-[#1f1f22] to-[#0e0e10] animate-pulse opacity-10 z-0"></div>

      <button
        className="fixed top-6 right-6 z-50 text-white border border-white p-2 rounded hover:bg-white hover:text-black transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-20 right-6 bg-background border border-gray-700 text-white rounded shadow-lg p-4 space-y-2 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => openModal('about')} className="block w-full text-left hover:text-gray-300">About</button>
            <button onClick={() => openModal('services')} className="block w-full text-left hover:text-gray-300">Services</button>
            <button onClick={() => openModal('contact')} className="block w-full text-left hover:text-gray-300">Contact</button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Silex Strategic Group
      </motion.h1>

      <motion.p
        className="text-md md:text-lg text-gray-400 mt-4 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Strategic Security. Real-World Results.
      </motion.p>

      <footer className="absolute bottom-6 text-center text-xs text-gray-600 z-10">
        &copy; {new Date().getFullYear()} Silex Strategic Group
      </footer>

      {modal === 'about' && <Modal title="About" content="Silex Strategic Group empowers businesses through elite physical and information security consulting." />}
      {modal === 'services' && <Modal title="Services" content="• Physical Security\n• InfoSec & Compliance\n• SBSS Certification Prep" />}
      {modal === 'contact' && <Modal title="Contact" content="Email: info@silexsecurity.com\nPhone: (555) 123-4567" />}
    </div>
  )
}
