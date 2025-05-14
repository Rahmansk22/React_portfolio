import React from "react";

function Education() {
  return (
    <div id="education" className="w-full">
      <section className="py-12 px-4 sm:px-10 md:px-20 w-full max-w-screen box-border">
        <h2 className="text-3xl font-bold text-teal-500 mb-20">Education</h2>
        <div className="space-y-10">
          <div className="bg-[#112240] rounded-md p-6 border-2 border-teal-500 shadow-[0_0_15px_5px_rgba(20,184,166,0.9)] gap-2">
            <h3 className="text-teal-500 font-semibold text-lg mb-1">
              B.Tech in Computer Science Engineering (AI&ML)
            </h3>
            <p className="text-white mb-1">Malla Reddy College of Engineering and Technology</p>
            <p className="text-white text-sm">10/1/2022 - 5/1/2025</p>
          </div>
          <div className="bg-[#112240] rounded-md p-6 border-2 border-teal-500 shadow-[0_0_15px_5px_rgba(20,184,166,0.9)] gap-2">
            <h3 className="text-teal-500 font-semibold text-lg mb-1">
              Diploma in Electronics Communication Engineering
            </h3>
            <p className="text-white mb-1">Central Institute of Tool Design</p>
            <p className="text-white text-sm">6/1/2019 - 5/1/2022</p>
          </div>
          <div className="bg-[#112240] rounded-md p-6 border-2 border-teal-500 shadow-[0_0_15px_5px_rgba(20,184,166,0.9)] gap-2">
            <h3 className="text-teal-500 font-semibold text-lg mb-1">
              Secondary High School
            </h3>
            <p className="text-white mb-1">Krishaveni Talent School</p>
            <p className="text-white text-sm">BATCH - 2019</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
