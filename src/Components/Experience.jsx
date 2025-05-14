import React from "react";

function Experience() {
  return (
    <div id="experience" className="w-full">
      <section className="py-20 px-4 sm:px-10 md:px-20 w-full max-w-screen box-border">
        <h2 className="text-3xl font-bold text-teal-500 mb-20">Experience</h2>
        <div className="bg-[#112240] rounded-md p-6 border-2 border-teal-500 shadow-[0_0_15px_5px_rgba(20,184,166,0.9)]">
          <h3 className="text-teal-500 text-lg mb-1 font-bold">Intel-Unnati</h3>
          <p className="text-gray-400 text-sm mb-4">MAY 2024 - JULY 2024</p>
          <p className="text-white leading-relaxed">
            Achieved high accuracy in detecting pixelated images using machine learning models and Convolutional Neural Networks (CNNs). Led development of a CNN-based system that improved pixelation detection and correction, enhancing image quality by 90% accuracy. Developed a machine learning solution that detected pixelated images and corrected them using CNNs and advanced image processing techniques.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Experience;
