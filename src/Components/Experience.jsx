import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div id="experience" className="w-full min-h-screen">
      <section className="py-24 px-4 sm:px-10 md:px-20 w-full max-w-screen box-border min-h-screen">
        <h2 className="text-3xl font-bold text-teal-500 mb-20">Experience</h2>
        <div className="space-y-10 overflow-visible" style={{ minHeight: '220px' }}>
            <motion.div
              className="exp-card rounded-md p-6 border-2 border-teal-500 shadow-[0_0_15px_5px_rgba(20,184,166,0.9)] gap-2 z-10 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Experience Card"
              whileHover={{ scale: 1.15, zIndex: 10 }}
              whileFocus={{ scale: 1.15, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 180, damping: 40 }}
              onKeyDown={e => { if (e.key === 'Enter') e.target.blur(); }}
            >
            <h3 className="text-teal-500 text-lg mb-1 font-bold">Intel-Unnati</h3>
            <p className="text-gray-400 text-sm mb-4">MAY 2024 - JULY 2024</p>
            <ul className="list-disc pl-6 text-white space-y-2">
              <li>Achieved high accuracy in detecting pixelated images using machine learning models and Convolutional Neural Networks (CNNs).</li>
              <li>Led development of a CNN-based system that improved pixelation detection and correction, enhancing image quality by 90% accuracy.</li>
              <li>Developed a machine learning solution that detected pixelated images and corrected them using CNNs and advanced image processing techniques.</li>
              <li>Collaborated with a cross-functional team to optimize image processing workflows and reduce computational time.</li>
              <li>Presented project results to senior engineers, receiving positive feedback for innovation and technical depth.</li>
              <li>Documented the entire process and created user guides for future reference and onboarding.</li>
            </ul>
            </motion.div>
        </div>
        {/* Zoom effect moved to global CSS */}
      </section>
    </div>
  );
}

export default Experience;